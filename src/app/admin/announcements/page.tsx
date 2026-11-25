
"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Announcement = {
  id: string;
  title: string;
  content: string;
  announcement_type: string;
  is_published: boolean;
  created_at: string;
};

export default function AdminAnnouncementsPage() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("general");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadAnnouncements = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("announcements")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage(error.message);
    } else {
      setItems(data ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadAnnouncements();
  }, [loadAnnouncements]);

  async function addAnnouncement(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("announcements").insert({
      title,
      content,
      announcement_type: type,
      is_published: false,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setTitle("");
      setContent("");
      setType("general");
      setMessage("Announcement saved as an unpublished draft.");
      await loadAnnouncements();
    }

    setSaving(false);
  }

  async function togglePublish(item: Announcement) {
    const { error } = await supabase
      .from("announcements")
      .update({ is_published: !item.is_published })
      .eq("id", item.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Announcement status updated.");
      await loadAnnouncements();
    }
  }

  async function deleteAnnouncement(id: string) {
    if (!window.confirm("Delete this announcement permanently?")) {
      return;
    }

    const { error } = await supabase
      .from("announcements")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Announcement deleted.");
      await loadAnnouncements();
    }
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.label}>PIZZO FX ADMINISTRATION</p>
          <h1>Announcements Centre</h1>
          <p>Create and manage important website updates.</p>
        </div>

        <button style={styles.button} onClick={loadAnnouncements}>
          Refresh
        </button>
      </header>

      <section style={styles.formCard}>
        <h2>Create Announcement</h2>

        <form onSubmit={addAnnouncement}>
          <label>Announcement Title</label>
          <input
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter announcement title"
            required
          />

          <label>Announcement Category</label>
          <select
            style={styles.input}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="general">General Update</option>
            <option value="event">Event Announcement</option>
            <option value="education">Forex Education</option>
            <option value="trading">Trading Notice</option>
            <option value="community">Community Update</option>
            <option value="important">Important Notice</option>
          </select>

          <label>Announcement Content</label>
          <textarea
            style={styles.input}
            rows={7}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your announcement..."
            required
          />

          <button style={styles.button} disabled={saving}>
            {saving ? "Saving..." : "Save Announcement"}
          </button>
        </form>
      </section>

      {message && <p style={styles.message}>{message}</p>}

      <section>
        <h2>All Announcements ({items.length})</h2>

        {loading ? (
          <p>Loading announcements...</p>
        ) : items.length === 0 ? (
          <p>No announcements created yet.</p>
        ) : (
          <div style={styles.grid}>
            {items.map((item) => (
              <article key={item.id} style={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>

                <p>
                  <strong>Category:</strong>{" "}
                  {item.announcement_type}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {item.is_published ? "Published" : "Draft"}
                </p>

                <p style={styles.date}>
                  {new Date(item.created_at).toLocaleString()}
                </p>

                <div style={styles.actions}>
                  <button
                    style={styles.button}
                    onClick={() => togglePublish(item)}
                  >
                    {item.is_published ? "Unpublish" : "Publish"}
                  </button>

                  <button
                    style={styles.deleteButton}
                    onClick={() => deleteAnnouncement(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
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
  formCard: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    marginBottom: "35px",
    maxWidth: "750px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "13px",
    margin: "8px 0 18px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    boxSizing: "border-box",
    font: "inherit",
  },
  button: {
    padding: "11px 18px",
    background: "#1769ff",
    color: "white",
    border: 0,
    borderRadius: "8px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "11px 18px",
    background: "#b91c1c",
    color: "white",
    border: 0,
    borderRadius: "8px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "22px",
    borderRadius: "12px",
    border: "1px solid #e1e8f5",
    overflowWrap: "anywhere",
  },
  actions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  date: {
    color: "#64748b",
    fontSize: "12px",
  },
  message: {
    padding: "12px",
    background: "#eaf1ff",
    borderRadius: "8px",
  },
};
