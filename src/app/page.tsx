
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

      {/* HFM PARTNERSHIP */}
      <section
        style={{
          background: "linear-gradient(135deg, #071b46, #123d83)",
          color: "#ffffff",
          padding: "65px 22px",
          margin: "35px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <div>
            <span
              style={{
                color: "#8eb8ff",
                fontWeight: 800,
                letterSpacing: "2px",
                fontSize: "13px",
              }}
            >
              PIZZO FX OFFICIAL BROKER PARTNER
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 46px)",
                margin: "18px 0",
              }}
            >
              Explore Trading with HFM
            </h2>

            <p style={{ color: "#dbe7ff", lineHeight: 1.9 }}>
              Discover HFM's trading platforms, available markets and
              account options. Explore the broker independently and
              decide whether its services suit your trading needs.
            </p>

            <div className="hero-actions" style={{ marginTop: "25px" }}>
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="button"
                style={{
                  background: "#ffffff",
                  color: "#071b46",
                  fontWeight: 800,
                }}
              >
                OPEN HFM ACCOUNT →
              </a>

              <a
                href="/hfm"
                className="button"
                style={{
                  border: "1px solid #ffffff",
                  color: "#ffffff",
                }}
              >
                Learn More About HFM
              </a>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              color: "#071b46",
              padding: "35px",
              borderRadius: "18px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#1769ff",
                fontWeight: 800,
                letterSpacing: "3px",
                fontSize: "14px",
              }}
            >
              PIZZO FX × HFM
            </p>

            <h3 style={{ fontSize: "29px", margin: "18px 0" }}>
              Your Trading Journey.
            </h3>

            <p style={{ color: "#64748b", lineHeight: 1.8 }}>
              Education. Preparation. Risk awareness. Independent
              trading decisions.
            </p>

            <a
              href="/hfm"
              style={{
                display: "inline-block",
                marginTop: "15px",
                color: "#1769ff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Explore Our Partnership →
            </a>
          </div>
        </div>

        <p
          style={{
            maxWidth: "1050px",
            margin: "35px auto 0",
            fontSize: "12px",
            color: "#c6d8f5",
            lineHeight: 1.8,
          }}
        >
          Affiliate disclosure: PIZZO FX may receive compensation when
          visitors register through its HFM affiliate link. Trading
          leveraged financial instruments involves significant risk
          and may result in the loss of your capital. Review the broker's
          official terms and risk disclosures before registering.
        </p>
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

      {/* FEATURED STORM MARKET EVENT */}
      <section
        style={{
          background: "linear-gradient(135deg, #071b46, #1769ff)",
          color: "#ffffff",
          padding: "65px 25px",
          margin: "45px 0",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#a9caff",
            fontWeight: 900,
            letterSpacing: "3px",
          }}
        >
          UPCOMING PIZZO FX EVENT
        </p>

        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            margin: "18px 0",
          }}
        >
          STORM MARKET WITH PIZZO
        </h2>

        <p style={{ lineHeight: 1.9, color: "#e4edff" }}>
          An advanced market intelligence and trading education
          experience. Join us on 5 December 2026 at SARIT CENTRE,
          LOITA HALL, from 10:30 AM to 5:00 PM EAT.
        </p>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 800,
            margin: "20px 0",
          }}
        >
          Maximum capacity: 3,500 participants
        </p>

        <a
          href="/storm-market"
          style={{
            display: "inline-block",
            background: "#ffffff",
            color: "#071b46",
            padding: "16px 30px",
            borderRadius: "9px",
            textDecoration: "none",
            fontWeight: 900,
            marginTop: "12px",
          }}
        >
          VIEW EVENT & REGISTER →
        </a>
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
