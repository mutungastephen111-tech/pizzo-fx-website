
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Signals", href: "/signals" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Analysis", href: "/analysis" },
  { label: "Videos", href: "/videos" },
  { label: "Our Event", href: "/event" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-navbar">
        <Link href="/" className="site-brand">
          PIZZO <span>FX</span>
        </Link>

        <div className="site-nav-links">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
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
