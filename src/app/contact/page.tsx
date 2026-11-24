
const contacts = [
  {
    title: "WhatsApp Support 1",
    value: "+254 753 529501",
    link: "https://wa.me/254753529501",
    description: "Contact our team for enquiries and assistance.",
  },
  {
    title: "WhatsApp Support 2",
    value: "+254 737 116103",
    link: "https://wa.me/254737116103",
    description: "Connect with PIZZO FX directly.",
  },
  {
    title: "WhatsApp Channel",
    value: "Join our community",
    link: "https://whatsapp.com/channel/0029VbDZIxA6hENsCwsti53f",
    description: "Follow announcements, updates and educational content.",
  },
  {
    title: "TikTok",
    value: "@pizzo-fx",
    link: "https://www.tiktok.com/@pizzo-fx",
    description: "Follow PIZZO FX for educational content and updates.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">WE ARE HERE TO HELP</span>
          <h1>Contact PIZZO FX</h1>
          <p className="hero-description">
            Have a question about our education programmes, market analysis,
            premium signals, mentorship or upcoming events? Get in touch
            with our team.
          </p>
        </div>

        <div className="service-grid">
          {contacts.map((contact) => (
            <article className="service-card" key={contact.title}>
              <h2>{contact.title}</h2>
              <p>{contact.description}</p>
              <p><strong>{contact.value}</strong></p>
              <a
                className="button"
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect Now
              </a>
            </article>
          ))}
        </div>

        <div className="event-section" style={{ marginTop: "50px" }}>
          <div className="event-content">
            <span className="eyebrow">JOIN THE PIZZO FX COMMUNITY</span>
            <h2>Take Your Market Education Further</h2>
            <p>
              Explore professional Forex education, develop your market
              understanding and build a disciplined approach to trading.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href="/courses"
              >
                Explore Education
              </a>
              <a
                className="button"
                href="/event"
              >
                View Upcoming Event
              </a>
            </div>
          </div>
        </div>

        <p className="disclaimer" style={{ marginTop: "35px" }}>
          PIZZO FX provides trading education and market information.
          Trading Forex and other financial instruments involves risk.
          Educational content and market analysis are not guaranteed
          profit or investment advice.
        </p>
      </section>
    </main>
  );
}
