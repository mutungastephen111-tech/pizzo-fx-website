
import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Signals", href: "/signals" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Analysis", href: "/analysis" },
  { label: "Our Event", href: "/event" },
  { label: "HFM Broker", href: "/hfm" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-navbar">
        <Link href="/" className="site-brand" aria-label="PIZZO FX Home">
          <Image
            src="/images/pizzo-logo.png"
            alt="PIZZO FX Logo"
            width={65}
            height={65}
            priority
            style={{
              width: "65px",
              height: "65px",
              objectFit: "contain",
            }}
          />
        </Link>

        <div className="site-nav-links">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={
                link.href === "/hfm"
                  ? { color: "#1769ff", fontWeight: 800 }
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/event" className="site-nav-cta">
          Join Our Event
        </Link>
      </nav>
    </header>
  );
}
