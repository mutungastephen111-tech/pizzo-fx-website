
const signalFeatures = [
  {
    number: "01",
    title: "Market Direction",
    description:
      "Understand the market bias and the reasoning behind a potential trading opportunity.",
  },
  {
    number: "02",
    title: "Entry Analysis",
    description:
      "Explore the technical reasoning behind proposed entry areas and market conditions.",
  },
  {
    number: "03",
    title: "Risk Management",
    description:
      "Understand stop-loss placement, position sizing and the importance of controlling risk.",
  },
  {
    number: "04",
    title: "Trade Review",
    description:
      "Review trading ideas and their outcomes as part of a continuous learning process.",
  },
];

export default function SignalsPage() {
  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Education</a>
          <a href="/event">Our Event</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="https://wa.me/254753529501" className="button">
          Enquire Now
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PIZZO FX MARKET INSIGHTS</p>

          <h1>
            Market Ideas.
            <br />
            <span>Structured Analysis.</span>
          </h1>

          <p className="hero-description">
            Explore trading ideas supported by market analysis,
            technical reasoning and risk-awareness principles.
          </p>

          <div className="hero-actions">
            <a href="#approach" className="button">
              Our Approach
            </a>

            <a
              href="https://wa.me/254753529501?text=Hello%20PIZZO%20FX%2C%20I%20would%20like%20to%20enquire%20about%20your%20premium%20signals."
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Enquire Through WhatsApp
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>THE CAPTAIN ENTRY APPROACH</p>
          <h2>Never trade without a reason.</h2>
          <p>
            Every trading decision deserves analysis,
            discipline and an understanding of risk.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section services" id="approach">
        <p className="eyebrow">OUR ANALYTICAL APPROACH</p>

        <h2>What matters behind a trading idea?</h2>

        <p>
          A trading idea should be understood, not blindly followed.
          Our educational approach emphasises the reasoning,
          conditions and risk considerations behind market analysis.
        </p>

        <div className="service-grid">
          {signalFeatures.map((feature) => (
            <article className="service-card" key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">IMPORTANT INFORMATION</p>

        <h2>Understand the risks before participating.</h2>

        <p>
          Forex and other financial markets involve significant
          financial risk. Trading ideas are not guarantees of
          performance. Past results do not guarantee future results.
          Always assess your financial circumstances and risk
          tolerance before making trading decisions.
        </p>
      </section>

      <section className="section community">
        <p className="eyebrow">PREMIUM SERVICE ENQUIRIES</p>

        <h2>Interested in PIZZO FX signals?</h2>

        <p>
          Contact our team through WhatsApp to enquire about
          service availability, subscription details and terms.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/254753529501?text=Hello%20PIZZO%20FX%2C%20I%20am%20interested%20in%20your%20signals%20service."
            className="button"
            target="_blank"
            rel="noreferrer"
          >
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
