
"use client";

import { useEffect, useState } from "react";

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

export default function EventPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [eventStatus, setEventStatus] = useState("loading");

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const start = new Date("2026-12-05T10:30:00+03:00").getTime();
      const end = new Date("2026-12-05T17:00:00+03:00").getTime();

      if (now < start) {
        const difference = start - now;

        setEventStatus("upcoming");
        setTimeLeft({
          days: Math.floor(difference / 86400000),
          hours: Math.floor((difference % 86400000) / 3600000),
          minutes: Math.floor((difference % 3600000) / 60000),
          seconds: Math.floor((difference % 60000) / 1000),
        });
      } else if (now <= end) {
        setEventStatus("live");
      } else {
        setEventStatus("ended");
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a href="/" className="button">Back Home</a>
      </header>

      <section className="event-section" style={{ gridTemplateColumns: "1fr" }}>
        <div className="event-content">
          <p className="eyebrow">PIZZO FX PRESENTS</p>
          <h2>STORM MARKET WITH PIZZO</h2>
          <p className="event-description">
            An advanced market intelligence and trading education
            experience. Explore options analytics, order flow,
            dealer positioning and market timing.
          </p>

          <div className="event-details">
            <div>
              <strong>5 DECEMBER 2026</strong>
              <span>Saturday</span>
            </div>
            <div>
              <strong>10:30 AM – 5:00 PM EAT</strong>
              <span>Event programme time</span>
            </div>
            <div>
              <strong>SARIT CENTRE, LOITA HALL</strong>
              <span>Kenya</span>
            </div>
          </div>

          <div className="curriculum">
            <h3>
              {eventStatus === "upcoming"
                ? "EVENT COUNTDOWN"
                : eventStatus === "live"
                ? "THE EVENT IS LIVE"
                : eventStatus === "ended"
                ? "EVENT ENDED"
                : "CHECKING EVENT STATUS"}
            </h3>

            {eventStatus === "upcoming" && (
              <div className="topic-grid">
                {Object.entries(timeLeft).map(([label, value]) => (
                  <div className="topic" key={label}>
                    <strong style={{ display: "block", fontSize: "28px" }}>
                      {String(value).padStart(2, "0")}
                    </strong>
                    {label.toUpperCase()}
                  </div>
                ))}
              </div>
            )}

            {eventStatus === "live" && (
              <p>The Storm Market with Pizzo event is in progress.</p>
            )}

            {eventStatus === "ended" && (
              <p>Thank you for your interest in PIZZO FX.</p>
            )}
          </div>

          <div style={{ marginTop: "35px" }}>
            <h3 style={{ marginBottom: "15px" }}>WHO CAN ATTEND?</h3>
            <p className="event-description">
              Everyone interested in financial markets and trading
              education is welcome, regardless of experience level.
            </p>

            <h3 style={{ marginBottom: "15px" }}>MAXIMUM CAPACITY</h3>
            <p className="event-description">3,500 people.</p>
          </div>
        </div>

        <div className="curriculum">
          <h3>EVENT LEARNING PROGRAMME</h3>
          <p className="event-description">
            Explore the concepts featured in this market intelligence
            experience.
          </p>

          <div className="topic-grid">
            {topics.map((topic, index) => (
              <div className="topic" key={topic}>
                <strong>{String(index + 1).padStart(2, "0")}.</strong>{" "}
                {topic}
              </div>
            ))}
          </div>
        </div>

        <div className="curriculum">
          <h3>REGISTRATION INFORMATION</h3>
          <p className="event-description">
            Registration is an expression of interest only. Submitting
            your details does not reserve or guarantee a seat.
            PIZZO FX will follow up with you through WhatsApp.
          </p>
          <p className="event-description">
            No certificates of participation will be issued.
          </p>
          <a
            className="button"
            href="https://wa.me/254753529501?text=Hello%20PIZZO%20FX%2C%20I%20am%20interested%20in%20STORM%20MARKET%20WITH%20PIZZO."
            target="_blank"
            rel="noreferrer"
          >
            Enquire Through WhatsApp
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
