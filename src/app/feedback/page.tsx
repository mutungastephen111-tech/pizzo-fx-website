
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Feedback = {
  id: string;
  full_name: string;
  service: string | null;
  rating: number;
  message: string;
  created_at: string;
};

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFeedback() {
      const { data, error: fetchError } = await supabase
        .from("feedback")
        .select("id, full_name, service, rating, message, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError("Reviews are temporarily unavailable.");
      } else {
        setFeedback((data || []) as Feedback[]);
      }

      setLoading(false);
    }

    loadFeedback();
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
          <a href="/contact">Contact</a>
        </nav>

        <a href="https://wa.me/254753529501" className="button">
          Contact Us
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE PIZZO FX COMMUNITY</p>

          <h1>
            Real Learning.
            <br />
            <span>Shared Experiences.</span>
          </h1>

          <p className="hero-description">
            Explore feedback and experiences shared by members
            of the PIZZO FX learning community.
          </p>

          <div className="hero-actions">
            <a href="#reviews" className="button">
              Explore Reviews
            </a>

            <a href="/contact" className="button">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>OUR EDUCATION PHILOSOPHY</p>
          <h2>Progress begins with knowledge and discipline.</h2>
          <p>
            We believe in continuous learning, responsible trading
            and the development of independent market understanding.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section" id="reviews">
        <p className="eyebrow">COMMUNITY FEEDBACK</p>
        <h2>Student & Community Reviews</h2>

        <p>
          Feedback approved for publication by the PIZZO FX team.
        </p>

        {loading ? (
          <p style={{ marginTop: "30px" }}>Loading reviews...</p>
        ) : error ? (
          <p style={{ marginTop: "30px" }}>{error}</p>
        ) : feedback.length === 0 ? (
          <div
            style={{
              marginTop: "30px",
              padding: "30px",
              background: "#EAF1FF",
              borderRadius: "14px",
              color: "#071B46",
            }}
          >
            <h3>Community reviews are being prepared.</h3>
            <p>
              Approved feedback will appear here as it becomes available.
            </p>
          </div>
        ) : (
          <div className="service-grid" style={{ marginTop: "30px" }}>
            {feedback.map((item) => (
              <article className="service-card" key={item.id}>
                <p
                  style={{
                    color: "#1769FF",
                    fontSize: "22px",
                    letterSpacing: "3px",
                  }}
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </p>

                <p
                  style={{
                    lineHeight: 1.8,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  "{item.message}"
                </p>

                <h3>{item.full_name}</h3>

                <p>{item.service || "PIZZO FX Community"}</p>

                <small>
                  {new Date(item.created_at).toLocaleDateString("en-KE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </small>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <p className="eyebrow">SHARE YOUR EXPERIENCE</p>
        <h2>Your feedback matters.</h2>

        <p>
          Have you interacted with PIZZO FX? Share your experience
          with our team through WhatsApp.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/254753529501?text=Hello%20PIZZO%20FX%2C%20I%20would%20like%20to%20share%20my%20feedback."
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Share Feedback
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
