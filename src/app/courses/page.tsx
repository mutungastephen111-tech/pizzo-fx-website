
const courses = [
  {
    number: "01",
    title: "Forex Fundamentals",
    level: "BEGINNER",
    description:
      "Understand currency pairs, pips, spreads, trading sessions, leverage and how the Forex market operates.",
    topics: [
      "Introduction to Forex",
      "Currency pairs and pips",
      "Trading sessions",
      "Spread and leverage",
      "Risk management basics",
    ],
  },
  {
    number: "02",
    title: "Technical Market Analysis",
    level: "INTERMEDIATE",
    description:
      "Develop a structured understanding of price action, market structure and technical analysis.",
    topics: [
      "Support and resistance",
      "Market structure",
      "Supply and demand",
      "Liquidity concepts",
      "Candlestick analysis",
    ],
  },
  {
    number: "03",
    title: "Advanced Market Intelligence",
    level: "ADVANCED",
    description:
      "Explore advanced analytical tools used to understand market positioning, order flow and options activity.",
    topics: [
      "Footprint charts",
      "Delta and volume analysis",
      "Options chains",
      "Implied volatility",
      "Dealer positioning",
    ],
  },
  {
    number: "04",
    title: "Trading Psychology and Discipline",
    level: "ALL LEVELS",
    description:
      "Understand the behavioural side of trading and develop a more disciplined decision-making process.",
    topics: [
      "Trading psychology",
      "Emotional discipline",
      "Patience and consistency",
      "Trading journals",
      "Risk awareness",
    ],
  },
];

export default function CoursesPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PIZZO FX EDUCATION</p>

          <h1>
            Build Knowledge.
            <br />
            <span>Develop Your Edge.</span>
          </h1>

          <p className="hero-description">
            Explore structured trading education designed to
            develop market understanding, analytical skills
            and responsible trading habits.
          </p>

          <div className="hero-actions">
            <a href="#programmes" className="button">
              Explore Programmes
            </a>
            <a href="/event" className="button">
              Explore Our Event
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>THE LEARNING PHILOSOPHY</p>
          <h2>Learn first. Understand deeply. Execute responsibly.</h2>
          <p>
            Trading education begins with knowledge,
            practice, risk awareness and discipline.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section services" id="programmes">
        <p className="eyebrow">OUR LEARNING AREAS</p>
        <h2>Explore our educational programmes</h2>

        <p>
          Start with the fundamentals, strengthen your
          analytical understanding and explore advanced
          market intelligence concepts.
        </p>

        <div className="service-grid">
          {courses.map((course) => (
            <article className="service-card" key={course.number}>
              <span>
                {course.number} · {course.level}
              </span>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div style={{ marginTop: "20px" }}>
                <strong>Topics covered</strong>

                <ul
                  style={{
                    paddingLeft: "20px",
                    marginTop: "12px",
                    color: "#65738b",
                    fontSize: "14px",
                  }}
                >
                  {course.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">OUR EDUCATIONAL COMMITMENT</p>
        <h2>Education without unrealistic promises.</h2>

        <p>
          PIZZO FX promotes learning, research, risk
          awareness and responsible participation in
          financial markets. Trading involves significant
          risk. Education does not guarantee profits or
          eliminate the possibility of losses.
        </p>
      </section>

      <section className="section community">
        <p className="eyebrow">TAKE THE NEXT STEP</p>
        <h2>Your learning journey starts here.</h2>

        <p>
          Contact PIZZO FX to enquire about available
          educational opportunities and learning support.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/254753529501"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Enquire Through WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
