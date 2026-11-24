
const videos = [
  {
    title: "Introduction to Forex Trading",
    category: "Forex Fundamentals",
    description:
      "Understand the foreign exchange market, currency pairs, pips and how trading works.",
  },
  {
    title: "Understanding Market Structure",
    category: "Technical Analysis",
    description:
      "Learn how to identify trends, market swings and structural changes.",
  },
  {
    title: "Introduction to Order Flow",
    category: "Market Intelligence",
    description:
      "Explore buying and selling pressure, volume and footprint chart concepts.",
  },
];

export default function VideosPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">PIZZO FX EDUCATION</span>
          <h1>Video Learning Centre</h1>
          <p className="hero-description">
            Develop your trading knowledge through structured educational
            videos, practical lessons and professional market education.
          </p>

          <div className="service-grid">
            {videos.map((video, index) => (
              <article className="service-card" key={index}>
                <div
                  style={{
                    background: "#EAF1FF",
                    borderRadius: "12px",
                    padding: "35px 20px",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "42px" }}>▶</span>
                  <p style={{ color: "#1769FF", fontWeight: 700 }}>
                    VIDEO LESSON
                  </p>
                </div>

                <span className="eyebrow">{video.category}</span>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                <p style={{ color: "#1769FF", fontWeight: 600 }}>
                  Video coming soon
                </p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "45px" }}>
            <h2>Learn. Practice. Grow.</h2>
            <p>
              Our learning centre will provide structured lessons covering
              Forex fundamentals, technical analysis, trading psychology,
              order flow and advanced market intelligence.
            </p>
            <p>
              Educational videos will be published by the PIZZO FX
              administration team. Visitors will be able to watch lessons
              without uploading or managing content.
            </p>
          </div>

          <div className="hero-actions" style={{ marginTop: "30px" }}>
            <a className="button" href="/courses">
              Explore Courses
            </a>
            <a className="button" href="/contact">
              Contact PIZZO FX
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
