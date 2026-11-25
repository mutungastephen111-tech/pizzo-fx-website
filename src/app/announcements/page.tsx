
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Announcement = {
  id: string;
  title: string;
  content: string;
  announcement_type: string | null;
  created_at: string;
};

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAnnouncements() {
      const { data, error: fetchError } = await supabase
        .from("announcements")
        .select("id, title, content, announcement_type, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError("Announcements are temporarily unavailable.");
      } else {
        setAnnouncements((data || []) as Announcement[]);
      }

      setLoading(false);
    }

    loadAnnouncements();
  }, []);

  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <a href="/analysis">Analysis</a>
          <a href="/videos">Videos</a>
        </nav>

        <a href="https://wa.me/254753529501" className="button">
          Contact Us
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PIZZO FX NEWS & UPDATES</p>

          <h1>
            Stay Informed.
            <br />
            <span>Stay Ahead.</span>
          </h1>

          <p className="hero-description">
            Follow important announcements, educational updates,
            upcoming events and developments from the PIZZO FX community.
          </p>

          <div className="hero-actions">
            <a href="#announcements" className="button">
              Latest Updates
            </a>

            <a href="/event" className="button">
              Upcoming Event
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>OFFICIAL UPDATES</p>
          <h2>Stay connected to the PIZZO FX ecosystem.</h2>
          <p>
            Important information, opportunities and community
            announcements in one place.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section" id="announcements">
        <p className="eyebrow">OFFICIAL COMMUNICATIONS</p>
        <h2>Latest Announcements</h2>

        <p>
          Updates published by the PIZZO FX administration team.
        </p>

        {loading ? (
          <p style={{ marginTop: "30px" }}>Loading announcements...</p>
        ) : error ? (
          <p style={{ marginTop: "30px" }}>{error}</p>
        ) : announcements.length === 0 ? (
          <div
            style={{
              marginTop: "30px",
              padding: "30px",
              borderRadius: "14px",
              background: "#EAF1FF",
              color: "#071B46",
            }}
          >
            <h3>No announcements yet.</h3>
            <p>
              Official PIZZO FX announcements will appear here
              when published.
            </p>
          </div>
        ) : (
          <div className="service-grid" style={{ marginTop: "30px" }}>
            {announcements.map((item) => (
              <article
                className="service-card"
                key={item.id}
                style={{ textAlign: "left" }}
              >
                <p
                  style={{
                    color: "#1769FF",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  {(item.announcement_type || "GENERAL UPDATE").toUpperCase()}
                </p>

                <h3>{item.title}</h3>

                <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.8 }}>
                  {item.content}
                </p>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    marginTop: "18px",
                  }}
                >
                  {new Date(item.created_at).toLocaleDateString("en-KE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <p className="eyebrow">JOIN THE COMMUNITY</p>
        <h2>Stay connected with PIZZO FX.</h2>

        <p>
          Follow our official WhatsApp channel for educational
          updates and community information.
        </p>

        <div className="hero-actions">
          <a
            href="https://whatsapp.com/channel/0029VbDZIxA6hENsCwsti53f"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Join WhatsApp Channel
          </a>

          <a href="/contact" className="button">
            Contact PIZZO FX
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>

        <p>Learn. Trade. Grow.</p>

        <p className="copyright">
          © {new Date().getFullYear()} PIZZO FX. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
