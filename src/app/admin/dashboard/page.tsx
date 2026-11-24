
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

const sections = [
  {
    title: "Event Registrations",
    description: "View and manage event expressions of interest.",
    href: "/admin/registrations",
    icon: "📋",
  },
  {
    title: "Video Library",
    description: "Manage educational videos and publications.",
    href: "/admin/videos",
    icon: "🎬",
  },
  {
    title: "Market Analysis",
    description: "Publish and manage market insights.",
    href: "/admin/analysis",
    icon: "📈",
  },
  {
    title: "Announcements",
    description: "Manage website announcements.",
    href: "/admin/announcements",
    icon: "📢",
  },
  {
    title: "Student Feedback",
    description: "Review and approve student feedback.",
    href: "/admin/feedback",
    icon: "⭐",
  },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkAdmin() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      const { data: admin, error: adminError } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (adminError || !admin) {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      setEmail(user.email ?? "");
      setLoading(false);
    }

    checkAdmin();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (loading) {
    return (
      <main style={styles.center}>
        <p>Verifying administrator access...</p>
      </main>
    );
  }

  if (error) {
    return <main style={styles.center}>{error}</main>;
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>PIZZO <span>FX</span></h1>
          <p style={styles.subtitle}>ADMINISTRATION CONTROL CENTRE</p>
        </div>

        <button onClick={handleLogout} style={styles.logout}>
          Sign Out
        </button>
      </header>

      <section style={styles.welcome}>
        <p style={styles.label}>ADMINISTRATOR</p>
        <h2>Welcome to your dashboard</h2>
        <p>Signed in as {email}</p>
      </section>

      <section style={styles.grid}>
        {sections.map((section) => (
          <article key={section.title} style={styles.card}>
            <div style={styles.icon}>{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <button
              style={styles.action}
              onClick={() => router.push(section.href)}
            >
              Manage Section →
            </button>
          </article>
        ))}
      </section>

      <footer style={styles.footer}>
        PIZZO FX Administration · Secure Management Area
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "80vh",
    padding: "40px 6%",
    background: "#f4f7fc",
    color: "#071b46",
  },
  center: {
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#071b46",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    borderBottom: "1px solid #dce4f2",
    paddingBottom: "25px",
  },
  logo: {
    fontSize: "28px",
    fontWeight: 900,
    margin: 0,
  },
  subtitle: {
    fontSize: "11px",
    letterSpacing: "2px",
    color: "#64748b",
  },
  logout: {
    padding: "12px 22px",
    background: "#071b46",
    color: "white",
    border: 0,
    borderRadius: "8px",
    cursor: "pointer",
  },
  welcome: {
    padding: "45px 0 30px",
  },
  label: {
    color: "#1769ff",
    fontWeight: 800,
    letterSpacing: "2px",
    fontSize: "12px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "22px",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    border: "1px solid #e1e8f5",
    boxShadow: "0 5px 20px rgba(7,27,70,0.05)",
  },
  icon: {
    fontSize: "30px",
  },
  action: {
    marginTop: "12px",
    padding: "10px 14px",
    background: "#1769ff",
    color: "white",
    border: 0,
    borderRadius: "7px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "55px",
    paddingTop: "20px",
    borderTop: "1px solid #dce4f2",
    color: "#64748b",
    fontSize: "13px",
  },
};
