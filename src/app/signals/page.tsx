
import Link from "next/link";

export default function SignalsPage() {
  return (
    <main>
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #071B46, #0B2558)",
          color: "#ffffff",
        }}
      >
        <p style={{ color: "#7FAAFF", fontWeight: 700, letterSpacing: 3 }}>
          PIZZO FX MARKET INTELLIGENCE
        </p>

        <h1 style={{ fontSize: "clamp(38px, 6vw, 64px)", margin: "20px 0" }}>
          Trading Signals & Market Insights
        </h1>

        <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
          Trade with a reason, not with emotions. Follow our market
          observations, technical insights and trading education.
        </p>

        <Link
          href="https://whatsapp.com/channel/0029VbDZIxA6hENsCwsti53f"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 28px",
            borderRadius: "8px",
            background: "#1769FF",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Follow Our WhatsApp Channel
        </Link>
      </section>

      <section style={{ maxWidth: "1100px", margin: "auto", padding: "70px 20px" }}>
        <h2 style={{ fontSize: "32px", color: "#1769FF", textAlign: "center" }}>
          Our Market Approach
        </h2>

        <p style={{ textAlign: "center", lineHeight: 1.8, maxWidth: "750px", margin: "20px auto 45px" }}>
          We focus on patience, precision and understanding market behaviour
          before considering a trading opportunity.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              title: "Market Structure",
              description: "Understand trends, reversals, support and resistance."
            },
            {
              title: "Liquidity Analysis",
              description: "Study liquidity sweeps, inducement and price reactions."
            },
            {
              title: "Institutional Concepts",
              description: "Explore order blocks, fair value gaps and change of character."
            },
            {
              title: "Risk Management",
              description: "Prioritise position sizing, discipline and capital protection."
            },
          ].map((item) => (
            <article
              key={item.title}
              style={{
                padding: "28px",
                border: "1px solid #dce5f5",
                borderRadius: "14px",
                background: "#ffffff",
                boxShadow: "0 8px 25px rgba(7,27,70,0.06)",
              }}
            >
              <h3 style={{ color: "#0B2558", marginBottom: "12px" }}>
                {item.title}
              </h3>
              <p style={{ lineHeight: 1.7, color: "#53627a" }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "55px 20px",
          background: "#EAF1FF",
        }}
      >
        <h2 style={{ color: "#071B46", fontSize: "30px" }}>
          Learn. Trade. Grow.
        </h2>
        <p style={{ margin: "15px auto 25px", maxWidth: "650px", lineHeight: 1.8 }}>
          Join the PIZZO FX community and continue developing your understanding
          of the financial markets.
        </p>
        <Link
          href="/courses"
          style={{
            display: "inline-block",
            padding: "13px 25px",
            background: "#1769FF",
            color: "#ffffff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Explore Our Education
        </Link>
      </section>

      <p style={{ textAlign: "center", padding: "20px", color: "#718096", fontSize: "13px" }}>
        Forex trading involves substantial risk. Market insights are educational
        and are not guaranteed trading recommendations or financial advice.
      </p>
    </main>
  );
}
