
"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Registration = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  experience_level: string | null;
  message: string | null;
  status: "pending" | "contacted" | "confirmed" | "cancelled";
  created_at: string;
};

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadRegistrations = useCallback(async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("event_registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setRegistrations(data ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadRegistrations();
  }, [loadRegistrations]);

  async function updateStatus(
    id: string,
    status: Registration["status"]
  ) {
    const { error } = await supabase
      .from("event_registrations")
      .update({ status })
      .eq("id", id);

    if (error) {
      setError(error.message);
      return;
    }

    loadRegistrations();
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.label}>PIZZO FX ADMINISTRATION</p>
          <h1>Event Registrations</h1>
          <p>Manage expressions of interest for STORM MARKET WITH PIZZO.</p>
        </div>

        <button style={styles.button} onClick={loadRegistrations}>
          Refresh
        </button>
      </header>

      <div style={styles.summary}>
        <strong>{registrations.length}</strong>
        <span>Total registrations loaded</span>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {loading ? (
        <p>Loading registrations...</p>
      ) : registrations.length === 0 ? (
        <p>No registrations have been submitted yet.</p>
      ) : (
        <div style={styles.list}>
          {registrations.map((item) => (
            <article key={item.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <h2>{item.full_name}</h2>
                <span style={styles.status}>{item.status}</span>
              </div>

              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
              <p>
                <strong>Experience:</strong>{" "}
                {item.experience_level || "Not specified"}
              </p>
              {item.message && (
                <p><strong>Message:</strong> {item.message}</p>
              )}

              <p style={styles.date}>
                Submitted: {new Date(item.created_at).toLocaleString()}
              </p>

              <label htmlFor={`status-${item.id}`}>
                Update follow-up status
              </label>

              <select
                id={`status-${item.id}`}
                value={item.status}
                onChange={(event) =>
                  updateStatus(
                    item.id,
                    event.target.value as Registration["status"]
                  )
                }
                style={styles.select}
              >
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </article>
          ))}
        </div>
      )}

      <p style={styles.note}>
        Registration expresses interest only. It does not guarantee an event seat.
      </p>
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
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "30px",
  },
  label: {
    color: "#1769ff",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "2px",
  },
  button: {
    padding: "12px 22px",
    background: "#1769ff",
    color: "white",
    border: 0,
    borderRadius: "8px",
    cursor: "pointer",
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "25px",
  },
  card: {
    background: "white",
    padding: "22px",
    borderRadius: "12px",
    border: "1px solid #e1e8f5",
    marginBottom: "18px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
  },
  status: {
    color: "#1769ff",
    fontWeight: 700,
    textTransform: "capitalize",
  },
  date: {
    color: "#64748b",
    fontSize: "13px",
  },
  select: {
    display: "block",
    width: "100%",
    maxWidth: "300px",
    padding: "12px",
    marginTop: "10px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },
  error: {
    color: "#b91c1c",
    background: "#fee2e2",
    padding: "12px",
    borderRadius: "8px",
  },
  note: {
    marginTop: "30px",
    color: "#64748b",
    fontSize: "13px",
  },
};
