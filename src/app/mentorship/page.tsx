
const mentorshipAreas = [
  {
    number: "01",
    title: "Market Structure",
    description:
      "Develop a better understanding of trends, market phases, price action and structural changes.",
  },
  {
    number: "02",
    title: "Technical Analysis",
    description:
      "Explore support and resistance, liquidity, order blocks, fair value gaps and market behaviour.",
  },
  {
    number: "03",
    title: "Trading Psychology",
    description:
      "Understand patience, emotional discipline, consistency and decision-making.",
  },
  {
    number: "04",
    title: "Risk Management",
    description:
      "Learn about position sizing, risk-to-reward, capital preservation and responsible execution.",
  },
];

export default function MentorshipPage() {
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

        <a href="/#contact" className="button">
          Contact Us
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PIZZO FX MENTORSHIP</p>

          <h1>
            Fix the Trader.
            <br />
            <span>Strengthen the Process.</span>
          </h1>

          <p className="hero-description">
            Trading development goes beyond identifying entries.
            Build your understanding of market structure,
            discipline, risk management and decision-making.
          </p>

          <div className="hero-actions">
            <a href="#approach" className="button">
              Explore Mentorship
            </a>

            <a
              href="https://wa.me/254753529501?text=Hello%20PIZZO%20FX%2C%20I%20am%20interested%20in%20one-on-one%20mentorship."
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Request Information
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>THE CAPTAIN ENTRY PHILOSOPHY</p>
          <h2>Market rewards patience, not reactions.</h2>
          <p>
            Develop a disciplined process instead of chasing
            every movement in the market.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section services" id="approach">
        <p className="eyebrow">MENTORSHIP FOCUS AREAS</p>

        <h2>What can you develop?</h2>

        <p>
          Our mentorship approach focuses on developing
          knowledge and practical trading skills through
          structured learning.
        </p>

        <div className="service-grid">
          {mentorshipAreas.map((area) => (
            <article className="service-card" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">A STRUCTURED APPROACH</p>

        <h2>Build a process you can understand.</h2>

        <p>
          Mentorship enquiries begin with a conversation about
          your experience, learning objectives and areas you
          would like to improve. Available arrangements,
          schedules and pricing will be discussed directly.
        </p>
      </section>

      <section className="section community">
        <p className="eyebrow">START THE CONVERSATION</p>

        <h2>Ready to develop your trading process?</h2>

        <p>
          Contact PIZZO FX through WhatsApp to enquire about
          one-on-one mentorship availability and arrangements.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/254753529501?text=Hello%20PIZZO%20FX%2C%20I%20would%20like%20to%20discuss%20mentorship%20opportunities."
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Enquire About Mentorship
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
