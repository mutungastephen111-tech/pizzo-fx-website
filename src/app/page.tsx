
const services = [
  {
    number: "01",
    title: "Forex Education",
    description:
      "Build your understanding of the financial markets through structured trading education.",
  },
  {
    number: "02",
    title: "Market Analysis",
    description:
      "Explore market structure, liquidity, institutional positioning and trading opportunities.",
  },
  {
    number: "03",
    title: "Trading Mentorship",
    description:
      "Develop discipline, improve your trading process and learn through guided mentorship.",
  },
  {
    number: "04",
    title: "Premium Signals",
    description:
      "Access trading ideas with clear market reasoning and risk awareness.",
  },
];

const eventTopics = [
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

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#event">Our Event</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://wa.me/254753529501"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          Get in Touch
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO PIZZO FX</p>

          <h1>
            Understand the
            <br />
            Markets. Trade with
            <br />
            <span>Purpose.</span>
          </h1>

          <p className="hero-description">
            A professional trading education platform focused on
            market intelligence, structured learning and disciplined
            decision-making.
          </p>

          <div className="hero-actions">
            <a href="#services" className="button">
              Explore Our Platform
            </a>

            <a href="#event" className="button">
              Discover Our Event
            </a>
          </div>

          <p className="hero-note">
            Learn. Analyse. Understand. Grow.
          </p>
        </div>

        <div className="visual-card">
          <p>THE PIZZO FX APPROACH</p>
          <h2>Knowledge before execution.</h2>
          <p>
            Develop a structured understanding of the financial
            markets through education and market research.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">WHO WE ARE</p>
        <h2>More than trading. A commitment to understanding.</h2>
        <p>
          PIZZO FX is a Forex education and market intelligence
          platform committed to helping traders develop knowledge,
          discipline and a structured approach to financial markets.
          Our focus is on education, analysis and continuous growth.
        </p>
      </section>

      <section className="section services" id="services">
        <p className="eyebrow">WHAT WE OFFER</p>
        <h2>Explore the PIZZO FX ecosystem</h2>
        <p>
          Educational resources and services designed to support
          traders at different stages of their journey.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="event-section" id="event">
        <div className="event-content">
          <p className="eyebrow">THE NEXT MARKET EXPERIENCE</p>
          <h2>STORM MARKET WITH PIZZO</h2>

          <p className="event-description">
            An advanced market intelligence and trading education
            experience exploring options analytics, order flow,
            dealer positioning and market timing.
          </p>

          <div className="event-details">
            <div>
              <strong>05 DECEMBER 2026</strong>
              <span>Saturday</span>
            </div>

            <div>
              <strong>10:30 AM – 5:00 PM</strong>
              <span>East Africa Time (EAT)</span>
            </div>

            <div>
              <strong>SARIT CENTRE</strong>
              <span>Loita Hall, Kenya</span>
            </div>
          </div>

          <p className="capacity">
            Maximum event capacity: 3,500 people
          </p>

          <p className="registration-note">
            Registration expresses interest only. It does not
            guarantee a confirmed seat. Our team will follow up
            through WhatsApp. No certificates will be issued.
          </p>

          <a href="/event" className="button">
            Explore Event & Registration
          </a>
        </div>

        <div className="curriculum">
          <h3>What You Will Explore</h3>
          <div className="topic-grid">
            {eventTopics.map((topic) => (
              <div className="topic" key={topic}>
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section community">
        <p className="eyebrow">JOIN THE COMMUNITY</p>
        <h2>Be part of the PIZZO FX community.</h2>
        <p>
          Connect with our community for educational updates,
          market insights and upcoming activities.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/254753529501"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>

          <a
            href="https://whatsapp.com/channel/0029VbDZIxA6hENsCwsti53f"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Join WhatsApp Channel
          </a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-brand">
          <a href="/" className="brand">
            PIZZO <span>FX</span>
          </a>
          <p>Learn. Trade. Grow.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact PIZZO FX</h3>
          <p>WhatsApp: +254 753 529501</p>
          <p>WhatsApp: +254 737 116103</p>
          <p>TikTok: @pizzo-fx</p>

          <a
            href="https://register.hfm.com/ke/en/new-live-account/?refid=30371067&acid=m5yg6nl8td"
            target="_blank"
            rel="noreferrer"
          >
            HFM Account Registration
          </a>
        </div>

        <p className="disclaimer">
          Trading foreign exchange and other financial instruments
          involves significant risk. Educational content does not
          constitute financial advice or guarantee trading results.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} PIZZO FX. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
