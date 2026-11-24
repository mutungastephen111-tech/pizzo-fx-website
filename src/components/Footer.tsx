
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link href="/" aria-label="PIZZO FX Home">
          <Image
            src="/images/pizzo-logo.png"
            alt="PIZZO FX Logo"
            width={180}
            height={180}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
        </Link>

        <p>
          Professional Forex education, market intelligence and
          disciplined trading development.
        </p>

        <p><strong>Learn. Trade. Grow.</strong></p>
      </div>

      <div className="footer-contact">
        <h3>Explore</h3>
        <p><Link href="/about">About Us</Link></p>
        <p><Link href="/courses">Education</Link></p>
        <p><Link href="/analysis">Market Analysis</Link></p>
        <p><Link href="/videos">Video Learning Centre</Link></p>
        <p><Link href="/event">Our Event</Link></p>
        <p><Link href="/contact">Contact</Link></p>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>

        <p>
          <a href="https://wa.me/254753529501">
            +254 753 529501
          </a>
        </p>

        <p>
          <a href="https://wa.me/254737116103">
            +254 737 116103
          </a>
        </p>

        <p>
          <a
            href="https://whatsapp.com/channel/0029VbDZIxA6hENsCwsti53f"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Channel
          </a>
        </p>

        <p>
          <a
            href="https://www.tiktok.com/@pizzo-fx"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </p>
      </div>

      <div className="copyright">
        <p>
          © {new Date().getFullYear()} PIZZO FX. All rights reserved.
        </p>
        <p>
          Trading involves risk. Educational content does not
          guarantee trading profits.
        </p>
      </div>
    </footer>
  );
}
