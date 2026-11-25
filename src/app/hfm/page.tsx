
export default function HFMPage() {
  const affiliateLink =
    "https://register.hfm.com/ke/en/new-live-account/?refid=30371067&acid=m5yg6nl8td";

  return (
    <main>
      <section
        style={{
          background: "linear-gradient(135deg, #071b46, #123d83)",
          color: "#ffffff",
          padding: "85px 22px",
          textAlign: "center",
        }}
      >
        <span style={{ color: "#8eb8ff", fontWeight: 700, letterSpacing: "2px" }}>
          PIZZO FX OFFICIAL PARTNER
        </span>

        <h1 style={{ fontSize: "clamp(38px, 6vw, 60px)", margin: "22px 0" }}>
          Discover HFM
        </h1>

        <p style={{ maxWidth: "700px", margin: "auto", color: "#dbe7ff", fontSize: "18px", lineHeight: 1.8 }}>
          Explore online trading with HFM, a global financial services
          brand offering access to financial markets through its trading
          platforms and products.
        </p>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          style={{
            display: "inline-block",
            marginTop: "32px",
            padding: "16px 30px",
            borderRadius: "10px",
            background: "#ffffff",
            color: "#071b46",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          OPEN AN HFM ACCOUNT →
        </a>

        <p style={{ fontSize: "12px", color: "#c6d8f5", marginTop: "18px" }}>
          Registration takes place on the official HFM website.
        </p>
      </section>

      <section
        className="section"
        style={{ maxWidth: "1050px", margin: "auto", padding: "65px 22px" }}
      >
        <div className="section-heading" style={{ textAlign: "center" }}>
          <span className="eyebrow">OUR BROKER PARTNERSHIP</span>
          <h2>Why Explore HFM?</h2>
          <p>
            Learn more about the broker and independently assess whether
            its services meet your trading needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "22px",
            marginTop: "35px",
          }}
        >
          {[
            {
              title: "Trading Platforms",
              description:
                "Explore the trading platforms and tools made available by HFM.",
            },
            {
              title: "Multiple Markets",
              description:
                "Visit HFM to review the financial instruments and markets it offers.",
            },
            {
              title: "Account Options",
              description:
                "Compare available account types, conditions and requirements before registering.",
            },
          ].map((item) => (
            <article
              key={item.title}
              style={{
                padding: "27px",
                border: "1px solid #e1e8f2",
                borderRadius: "15px",
                background: "#ffffff",
              }}
            >
              <h3 style={{ color: "#071b46" }}>{item.title}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.8 }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#eaf1ff",
          padding: "65px 22px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "750px", margin: "auto" }}>
          <span className="eyebrow">TAKE THE NEXT STEP</span>
          <h2 style={{ color: "#071b46", fontSize: "32px" }}>
            Explore HFM Registration
          </h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            Interested in learning more? Visit HFM's official registration
            website to review its terms, available services and account
            requirements.
          </p>

          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              display: "inline-block",
              background: "#1769ff",
              color: "#ffffff",
              padding: "16px 30px",
              borderRadius: "10px",
              fontWeight: 800,
              textDecoration: "none",
              marginTop: "18px",
            }}
          >
            REGISTER WITH HFM →
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "45px 22px",
          color: "#64748b",
          fontSize: "13px",
          lineHeight: 1.8,
        }}
      >
        <h3 style={{ color: "#071b46" }}>Important Risk Disclosure</h3>
        <p>
          Trading forex, CFDs and other leveraged financial instruments
          involves significant risk and may result in the loss of your
          invested capital. These products may not be suitable for every
          investor. Understand the risks and review HFM's official terms
          and risk disclosures before opening an account.
        </p>

        <h3 style={{ color: "#071b46" }}>Affiliate Disclosure</h3>
        <p>
          PIZZO FX participates in an affiliate partnership with HFM.
          If you register through links on this page, PIZZO FX may receive
          a commission or other compensation, subject to the applicable
          affiliate agreement. This does not guarantee trading profits
          or change the risks of trading.
        </p>
      </section>
    </main>
  );
}
