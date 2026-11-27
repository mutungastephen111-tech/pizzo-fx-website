
"use client";

import { useEffect, useState } from "react";
import EventRegistrationForm from "../../components/EventRegistrationForm";

const eventStart = new Date("2026-12-05T10:30:00+03:00").getTime();
const eventEnd = new Date("2026-12-05T17:00:00+03:00").getTime();

const topics = [
  "Delta",
  "Vega",
  "Gamma",
  "Theta",
  "Beta",
  "Implied Volatility (IV)",
  "IV Skew",
  "Options Chains",
  "Footprint Charts",
  "Dealer & Hedger Positioning",
  "Order Book / Depth of Market",
  "Trader Protection",
  "Futures-to-Spot Discrepancy",
  "Market Timing",
];

export default function StormMarketPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [eventStatus, setEventStatus] = useState<
    "upcoming" | "live" | "ended"
  >("upcoming");

  useEffect(() => {
    function updateCountdown() {
      const now = Date.now();

      if (now >= eventEnd) {
        setEventStatus("ended");
        return;
      }

      if (now >= eventStart) {
        setEventStatus("live");
        return;
      }

      setEventStatus("upcoming");

      const difference = eventStart - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <main style={{ background: "#f5f8ff", color: "#071b46" }}>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #061535 0%, #0b2860 60%, #1769ff 100%)",
          color: "#ffffff",
          padding: "90px 22px 75px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1050px", margin: "auto" }}>
          <p
            style={{
              color: "#9fc3ff",
              fontWeight: 800,
              letterSpacing: "4px",
              fontSize: "13px",
            }}
          >
            THE PIZZO FX EXPERIENCE
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 7vw, 76px)",
              lineHeight: 1.08,
              fontWeight: 900,
              margin: "20px 0",
            }}
          >
            STORM MARKET
            <br />
            <span style={{ color: "#83b5ff" }}>WITH PIZZO</span>
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#dce8ff",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            An advanced market intelligence and trading education
            experience. Discover the forces behind market movement,
            positioning, volatility and execution.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
              marginTop: "35px",
            }}
          >
            <a
              href="#register"
              style={{
                background: "#ffffff",
                color: "#071b46",
                padding: "16px 27px",
                borderRadius: "9px",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              REGISTER INTEREST
            </a>

            <a
              href="#event-details"
              style={{
                border: "1px solid #ffffff",
                color: "#ffffff",
                padding: "16px 27px",
                borderRadius: "9px",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              EXPLORE THE EVENT
            </a>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section style={{ padding: "55px 18px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            background: "#ffffff",
            borderRadius: "20px",
            padding: "35px 20px",
            textAlign: "center",
            boxShadow: "0 15px 45px rgba(7,27,70,0.09)",
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
            THE COUNTDOWN
          </p>

          <h2 style={{ fontSize: "27px", margin: "12px 0 25px" }}>
            {eventStatus === "upcoming"
              ? "The Market Intelligence Experience Begins In"
              : eventStatus === "live"
                ? "STORM MARKET WITH PIZZO IS LIVE!"
                : "Thank You for Being Part of the PIZZO FX Movement"}
          </h2>

          {eventStatus === "upcoming" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "10px",
              }}
            >
              {countdownItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#071b46",
                    color: "#ffffff",
                    padding: "22px 5px",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(27px, 5vw, 43px)",
                      fontWeight: 900,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      color: "#9fc3ff",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "1px",
                      marginTop: "8px",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p style={{ color: "#64748b", marginTop: "22px" }}>
            5 December 2026 · 10:30 AM EAT
          </p>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section
        id="event-details"
        style={{ maxWidth: "1100px", margin: "auto", padding: "30px 22px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <p
            style={{
              color: "#1769ff",
              fontWeight: 900,
              letterSpacing: "3px",
            }}
          >
            EVENT INFORMATION
          </p>

          <h2 style={{ fontSize: "clamp(29px, 5vw, 42px)" }}>
            One Experience. Deeper Market Understanding.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            ["DATE", "5 December 2026"],
            ["TIME", "10:30 AM – 5:00 PM EAT"],
            ["VENUE", "SARIT CENTRE, LOITA HALL"],
            ["CAPACITY", "Maximum 3,500 participants"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "#ffffff",
                padding: "25px",
                borderRadius: "14px",
                border: "1px solid #e2eaff",
              }}
            >
              <p
                style={{
                  color: "#1769ff",
                  fontWeight: 900,
                  fontSize: "12px",
                  letterSpacing: "2px",
                }}
              >
                {label}
              </p>
              <h3 style={{ fontSize: "20px", marginTop: "12px" }}>
                {value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM */}
      <section
        style={{
          background: "#ffffff",
          padding: "70px 22px",
          marginTop: "55px",
        }}
      >
        <div style={{ maxWidth: "1050px", margin: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: "35px" }}>
            <p
              style={{
                color: "#1769ff",
                fontWeight: 900,
                letterSpacing: "3px",
              }}
            >
              WHAT YOU WILL EXPLORE
            </p>

            <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)" }}>
              The Market Intelligence Curriculum
            </h2>

            <p style={{ color: "#64748b", lineHeight: 1.8 }}>
              Explore advanced concepts used to understand market
              positioning, volatility, order flow and timing.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "13px",
            }}
          >
            {topics.map((topic, index) => (
              <div
                key={topic}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                  padding: "17px",
                  background: "#f5f8ff",
                  borderRadius: "10px",
                  border: "1px solid #e2eaff",
                }}
              >
                <span
                  style={{
                    background: "#071b46",
                    color: "#ffffff",
                    minWidth: "34px",
                    height: "34px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "8px",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong style={{ fontSize: "14px" }}>{topic}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="register"
        style={{ padding: "75px 20px", background: "#eaf1ff" }}
      >
        <div style={{ maxWidth: "850px", margin: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <p
              style={{
                color: "#1769ff",
                fontWeight: 900,
                letterSpacing: "3px",
              }}
            >
              BE PART OF THE EXPERIENCE
            </p>

            <h2 style={{ fontSize: "clamp(29px, 5vw, 42px)" }}>
              Register Your Interest
            </h2>

            <p style={{ color: "#52627d", lineHeight: 1.8 }}>
              Submit your details below to express interest in
              attending STORM MARKET WITH PIZZO.
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "clamp(18px, 4vw, 35px)",
              borderRadius: "18px",
              boxShadow: "0 12px 35px rgba(7,27,70,0.08)",
            }}
          >
            <EventRegistrationForm />
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "13px",
              lineHeight: 1.8,
              marginTop: "20px",
            }}
          >
            Registration is an expression of interest, not a
            confirmed seat booking. Our team will follow up
            through WhatsApp regarding confirmation and event
            arrangements. No certificates will be issued.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#071b46",
          color: "#ffffff",
          textAlign: "center",
          padding: "65px 20px",
        }}
      >
        <p
          style={{
            color: "#9fc3ff",
            fontWeight: 900,
            letterSpacing: "3px",
          }}
        >
          NEED MORE INFORMATION?
        </p>

        <h2 style={{ fontSize: "clamp(27px, 5vw, 40px)" }}>
          Connect With PIZZO FX
        </h2>

        <p style={{ color: "#dce8ff", lineHeight: 1.8 }}>
          Speak to our team about the upcoming event.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginTop: "25px",
          }}
        >
          <a
            href="https://wa.me/254753529501"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#ffffff",
              color: "#071b46",
              padding: "15px 22px",
              borderRadius: "9px",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            WhatsApp: 0753 529501
          </a>

          <a
            href="https://wa.me/254737116103"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #ffffff",
              color: "#ffffff",
              padding: "15px 22px",
              borderRadius: "9px",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            WhatsApp: 0737 116103
          </a>
        </div>
      </section>
    </main>
  );
}
