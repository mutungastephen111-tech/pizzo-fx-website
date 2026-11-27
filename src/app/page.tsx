
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

  const affiliateLink =
    "https://register.hfm.com/ke/en/new-live-account/?refid=30371067&acid=m5yg6nl8td";

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

  const featuredCardStyle = {
    borderRadius: "18px",
    padding: "30px",
    minHeight: "330px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
  };

  const featuredButtonStyle = {
    display: "inline-block",
    padding: "13px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 900,
    textAlign: "center" as const,
    marginTop: "18px",
  };

  return (
    <main>
      {/* HERO */}
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

      {/* THREE FEATURED HOMEPAGE SECTIONS */}
      <section
        style={{
          padding: "65px 22px",
          background: "#f1f5fb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#1769ff",
              fontWeight: 900,
              letterSpacing: "3px",
              fontSize: "13px",
            }}
          >
            DISCOVER PIZZO FX
          </p>

          <h2
            style={{
              color: "#071b46",
              fontSize: "clamp(28px, 4vw, 40px)",
              margin: "12px 0 35px",
              fontWeight: 900,
            }}
          >
            Explore. Learn. Trade. Grow.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
              textAlign: "left",
            }}
          >
            {/* STORM MARKET */}
            <article
              style={{
                ...featuredCardStyle,
                background: "linear-gradient(145deg, #071b46, #123d83)",
                color: "#ffffff",
                borderTop: "6px solid #FF0000",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#ff6666",
                    fontSize: "13px",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    marginBottom: "16px",
                  }}
                >
                  UPCOMING PIZZO FX EVENT
                </p>

                <h2
                  style={{
                    color: "#FF0000",
                    fontSize: "clamp(25px, 3vw, 32px)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: "18px",
                  }}
                >
                  STORM MARKET WITH PIZZO
                </h2>

                <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
                  An advanced market intelligence and trading education
                  experience. Join the PIZZO FX community for a day of
                  learning and market insights.
                </p>

                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: 800,
                    lineHeight: 1.8,
                    marginTop: "16px",
                  }}
                >
                  5 December 2026
                  <br />
                  SARIT CENTRE, LOITA HALL
                  <br />
                  10:30 AM – 5:00 PM EAT
                </p>
              </div>

              <a
                href="/storm-market"
                style={{
                  ...featuredButtonStyle,
                  background: "#FF0000",
                  color: "#ffffff",
                }}
              >
                VIEW EVENT & REGISTER →
              </a>
            </article>

            {/* HFM */}
            <article
              style={{
                ...featuredCardStyle,
                background: "linear-gradient(145deg, #092c67, #1769ff)",
                color: "#ffffff",
                borderTop: "6px solid #ffffff",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "13px",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    marginBottom: "16px",
                  }}
                >
                  PIZZO FX OFFICIAL BROKER PARTNER
                </p>

                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(25px, 3vw, 32px)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: "18px",
                  }}
                >
                  EXPLORE MARKET WITH HFM
                </h2>

                <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
                  Discover HFM's trading platforms, available markets
                  and account options. Explore the broker independently
                  and decide whether its services suit your trading needs.
                </p>

                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: 800,
                    marginTop: "16px",
                  }}
                >
                  PIZZO FX × HFM
                </p>
              </div>

              <div>
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    ...featuredButtonStyle,
                    background: "#ffffff",
                    color: "#071b46",
                    display: "block",
                  }}
                >
                  OPEN HFM ACCOUNT →
                </a>

                <a
                  href="/hfm"
                  style={{
                    ...featuredButtonStyle,
                    border: "1px solid #ffffff",
                    color: "#ffffff",
                    display: "block",
                  }}
                >
                  LEARN MORE ABOUT HFM
                </a>
              </div>
            </article>

            {/* TRADING SIGNALS AND MARKET INSIGHTS */}
            <article
              style={{
                ...featuredCardStyle,
                background: "#ffffff",
                color: "#071b46",
                borderTop: "6px solid #FF0000",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#1769ff",
                    fontSize: "13px",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    marginBottom: "16px",
                  }}
                >
                  MARKET INTELLIGENCE
                </p>

                <h2
                  style={{
                    color: "#FF0000",
                    fontSize: "clamp(25px, 3vw, 32px)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: "18px",
                  }}
                >
                  TRADING SIGNALS AND MARKET INSIGHTS
                </h2>

                <p style={{ color: "#334155", lineHeight: 1.8 }}>
                  Explore trading setups, market analysis and
                  educational insights. Develop a deeper understanding
                  of price action, market structure and trading risk.
                </p>

                <p
                  style={{
                    color: "#071b46",
                    fontWeight: 800,
                    marginTop: "16px",
                  }}
                >
                  Knowledge. Analysis. Discipline.
                </p>
              </div>

              <div>
                <a
                  href="/signals"
                  style={{
                    ...featuredButtonStyle,
                    background: "#FF0000",
                    color: "#ffffff",
                    display: "block",
                  }}
                >
                  EXPLORE TRADING SIGNALS →
                </a>

                <a
                  href="/analysis"
                  style={{
                    ...featuredButtonStyle,
                    background: "#071b46",
                    color: "#ffffff",
                    display: "block",
                  }}
                >
                  VIEW MARKET INSIGHTS →
                </a>
              </div>
            </article>
          </div>

          <p
            style={{
              color: "#64748b",
              fontSize: "12px",
              lineHeight: 1.8,
              marginTop: "25px",
            }}
          >
            Trading involves risk. Educational information and trading
            ideas are not guarantees of profit. PIZZO FX may receive
            compensation when visitors register through its HFM affiliate link.
          </p>
        </div>
      </section>

      {/* SERVICES */}
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

      {/* PREVIOUS EVENT VIDEO */}
      <section className="section">
        <p className="eyebrow">PIZZO FX EXPERIENCES</p>
        <h2>Moments from Our Previous Event</h2>

        <p style={{ maxWidth: "700px", lineHeight: 1.8 }}>
          Experience the energy, community and learning moments from
          a previous PIZZO FX event. We are building a community driven
          by knowledge, market intelligence and growth.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "35px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "340px",
              background: "#071b46",
              padding: "10px",
              borderRadius: "20px",
              boxShadow: "0 15px 40px rgba(7, 27, 70, 0.18)",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Previous PIZZO FX event highlights"
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "9 / 16",
                objectFit: "cover",
                borderRadius: "13px",
                background: "#000000",
              }}
            >
              <source
                src="/videos/pizzo-event.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </div>

          <div style={{ maxWidth: "420px" }}>
            <h3 style={{ fontSize: "27px", marginBottom: "15px" }}>
              The PIZZO FX Movement
            </h3>

            <p style={{ lineHeight: 1.9 }}>
              Every gathering is an opportunity to exchange ideas,
              develop understanding and build stronger traders.
              We believe in continuous learning and responsible
              participation in the financial markets.
            </p>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
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

      {/* COMMUNITY */}
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
    </main>
  );
}
