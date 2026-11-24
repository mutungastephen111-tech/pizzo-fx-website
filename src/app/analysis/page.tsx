
const analysisAreas = [
  {
    number: "01",
    title: "Technical Analysis",
    description:
      "Explore market structure, support and resistance, price action, liquidity and key technical levels.",
  },
  {
    number: "02",
    title: "Order Flow Analysis",
    description:
      "Understand buying and selling activity through footprint charts, volume delta and order-flow behaviour.",
  },
  {
    number: "03",
    title: "Options Market Intelligence",
    description:
      "Explore options chains, implied volatility, Greeks, dealer positioning and important strike levels.",
  },
  {
    number: "04",
    title: "Market Context",
    description:
      "Study trading sessions, market timing, volatility and the relationship between futures and spot prices.",
  },
];

export default function AnalysisPage() {
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
          <a href="/signals">Signals</a>
          <a href="/event">Our Event</a>
        </nav>

        <a href="https://wa.me/254753529501" className="button">
          Contact Us
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PIZZO FX MARKET RESEARCH</p>

          <h1>
            Read the Market.
            <br />
            <span>Understand the Flow.</span>
          </h1>

          <p className="hero-description">
            Explore financial market behaviour through
            technical analysis, order flow, options
            intelligence and structured market research.
          </p>

          <div className="hero-actions">
            <a href="#research" className="button">
              Explore Research Areas
            </a>

            <a href="/event" className="button">
              Storm Market Event
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>MARKET INTELLIGENCE</p>
          <h2>Never trade without a reason.</h2>
          <p>
            Understand the evidence, analyse the conditions
            and respect the risks before making decisions.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section services" id="research">
        <p className="eyebrow">OUR RESEARCH AREAS</p>

        <h2>Explore the dimensions of market analysis.</h2>

        <p>
          PIZZO FX focuses on developing a deeper understanding
          of price behaviour, market participation and
          financial market information.
        </p>

        <div className="service-grid">
          {analysisAreas.map((area) => (
            <article className="service-card" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">STORM MARKET WITH PIZZO</p>

        <h2>Go beyond conventional chart analysis.</h2>

        <p>
          Explore advanced market intelligence concepts
          including Delta, Vega, Gamma, Theta, Implied
          Volatility, IV Skew, Options Chains, Footprint
          Charts and Dealer & Hedger Positioning.
        </p>

        <div className="hero-actions" style={{ marginTop: "25px" }}>
          <a href="/event" className="button">
            Explore the Event
          </a>
        </div>
      </section>

      <section className="section community">
        <p className="eyebrow">CONNECT WITH PIZZO FX</p>

        <h2>Knowledge creates better questions.</h2>

        <p>
          Follow our educational activities and contact
          PIZZO FX for market research and learning enquiries.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/254753529501"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp PIZZO FX
          </a>

          <a
            href="https://whatsapp.com/channel/0029VbDZIxA6hENsCwsti53f"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Join Our Channel
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>

        <p>Learn. Trade. Grow.</p>

        <p className="disclaimer">
          Market analysis is educational and informational.
          It is not a guarantee of future performance or
          financial advice. Trading involves significant risk.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} PIZZO FX. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
