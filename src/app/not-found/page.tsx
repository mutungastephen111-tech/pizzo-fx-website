
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div
        style={{
          maxWidth: "700px",
          margin: "80px auto",
          textAlign: "center",
        }}
      >
        <span className="eyebrow">PIZZO FX</span>

        <h1 style={{ fontSize: "clamp(64px, 12vw, 110px)" }}>
          404
        </h1>

        <h2>Page Not Found</h2>

        <p className="hero-description">
          The page you are looking for may have moved, been removed,
          or may not exist.
        </p>

        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="button">
            Return Home
          </Link>

          <Link href="/contact" className="button">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
