
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Announcement = {
  id: string;
  title: string;
  content: string;
  announcement_type: string | null;
  created_at: string;
};

export default function HomePage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(true);

  useEffect(() => {
    async function loadAnnouncements() {
      const { data } = await supabase
        .from("announcements")
        .select("id, title, content, announcement_type, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(3);

      setAnnouncements((data || []) as Announcement[]);
      setLoadingAnnouncements(false);
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
          <a href="/signals">Signals</a>
          <a href="/analysis">Analysis</a>
          <a href="/videos">Videos</a>
          <a href="/announcements">Updates</a>
          <a href="/event">Event</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="https://wa.me/254753529501" className="button">
          Get Started
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO PIZZO FX</p>

          <h1>
            Master the Market.
            <br />
            <span>Master Your Edge.</span>
          </h1>

          <p className="hero-description">
            A professional Forex education and market intelligence
            platform built around knowledge, discipline, risk management
            and structured trading development.
          </p>

          <div className="hero-actions">
            <a href="/courses" className="button">
              Explore Education
            </a>

            <a href="/about" className="button">
              Discover PIZZO FX
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>THE PIZZO FX PHILOSOPHY</p>
          <h2>Market rewards patience, not reactions.</h2>
          <p>
            Build knowledge. Understand the market. Develop discipline.
            Never trade without a reason.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHAT WE OFFER</p>
        <h2>Develop your trading knowledge.</h2>

        <div className="service-grid">
          <a href="/courses" className="service-card">
            <span>01</span>
            <h3>Forex Education</h3>
            <p>
              Structured learning designed to develop trading knowledge
              and market understanding.
            </p>
          </a>

          <a href="/signals" className="service-card">
            <span>02</span>
            <h3>Trading Signals</h3>
            <p>
              Explore market setups, trading ideas and structured
              risk-awareness information.
            </p>
          </a>

          <a href="/mentorship" className="service-card">
            <span>03</span>
            <h3>Trading Mentorship</h3>
            <p>
              Develop discipline, strategy and a more structured
              approach to trading.
            </p>
          </a>

          <a href="/analysis" className="service-card">
            <span>04</span>
            <h3>Market Analysis</h3>
            <p>
              Explore technical analysis, order flow and options
              market intelligence.
            </p>
          </a>

          <a href="/videos" className="service-card">
            <span>05</span>
            <h3>Learning Centre</h3>
            <p>
              Access educational videos and practical market lessons.
            </p>
          </a>

          <a href="/announcements" className="service-card">
            <span>06</span>
            <h3>Official Updates</h3>
            <p>
              Stay informed about PIZZO FX activities and announcements.
            </p>
          </a>
        </div>
      </section>

      <section className="section" id="latest-updates">
        <p className="eyebrow">LATEST FROM PIZZO FX</p>
        <h2>Announcements & Updates</h2>

        {loadingAnnouncements ? (
          <p>Loading the latest updates...</p>
        ) : announcements.length === 0 ? (
          <p>
            Our latest updates will appear here when published.
          </p>
        ) : (
          <div className="service-grid">
            {announcements.map((item) => (
              <article className="service-card" key={item.id}>
                <span>
                  {(item.announcement_type || "UPDATE").toUpperCase()}
                </span>

                <h3>{item.title}</h3>

                <p>{item.content}</p>

                <small>
                  {new Date(item.created_at).toLocaleDateString("en-KE")}
                </small>
              </article>
            ))}
          </div>
        )}

        <div className="hero-actions" style={{ marginTop: "25px" }}>
          <a href="/announcements" className="button">
            View All Announcements
          </a>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">FEATURED EVENT</p>
        <h2>STORM MARKET WITH PIZZO</h2>

        <p>
          Join us on 5 December 2026 at SARIT CENTRE, LOITA HALL,
          for an advanced market intelligence and trading education
          experience.
        </p>

        <div className="hero-actions">
          <a href="/event" className="button">
            Explore Event & Register
          </a>
        </div>
      </section>

      <section className="section community">
        <p className="eyebrow">JOIN THE PIZZO FX COMMUNITY</p>
        <h2>Learn. Trade. Grow.</h2>

        <p>
          Connect with our community and take your market education
          journey further.
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
            Contact Us
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
