
"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Video = {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  category: string | null;
  is_published: boolean;
  created_at: string;
};

export default function AdminVideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [category, setCategory] = useState("Forex Education");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadVideos = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage(error.message);
    } else {
      setVideos(data ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  async function addVideo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("videos").insert({
      title,
      description,
      video_url: videoUrl,
      thumbnail_url: thumbnailUrl || null,
      category,
      is_published: false,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setTitle("");
      setDescription("");
      setVideoUrl("");
      setThumbnailUrl("");
      setCategory("Forex Education");
      setMessage("Video added successfully. It is currently unpublished.");
      await loadVideos();
    }

    setSaving(false);
  }

  async function togglePublish(video: Video) {
    const { error } = await supabase
      .from("videos")
      .update({ is_published: !video.is_published })
      .eq("id", video.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Video publication status updated.");
      await loadVideos();
    }
  }

  async function deleteVideo(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("videos")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Video deleted successfully.");
      await loadVideos();
    }
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.label}>PIZZO FX ADMINISTRATION</p>
          <h1>Video Management</h1>
          <p>Add and manage educational videos for your students.</p>
        </div>
        <button style={styles.button} onClick={loadVideos}>
          Refresh
        </button>
      </header>

      <section style={styles.formCard}>
        <h2>Add New Video</h2>

        <form onSubmit={addVideo}>
          <label>Video Title</label>
          <input
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
            required
          />

          <label>Description</label>
          <textarea
            style={styles.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe this lesson"
            rows={3}
          />

          <label>Video URL</label>
          <input
            style={styles.input}
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste YouTube or video URL"
            required
          />

          <label>Thumbnail URL (optional)</label>
          <input
            style={styles.input}
            type="url"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            placeholder="Paste thumbnail image URL"
          />

          <label>Category</label>
          <select
            style={styles.input}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Forex Education</option>
            <option>Gold Trading</option>
            <option>Market Analysis</option>
            <option>Trading Psychology</option>
            <option>Options & Order Flow</option>
            <option>Other</option>
          </select>

          <button style={styles.button} disabled={saving}>
            {saving ? "Saving..." : "Add Video"}
          </button>
        </form>
      </section>

      {message && <p style={styles.message}>{message}</p>}

      <section>
        <h2>Video Library ({videos.length})</h2>

        {loading ? (
          <p>Loading videos...</p>
        ) : videos.length === 0 ? (
          <p>No videos added yet.</p>
        ) : (
          <div style={styles.grid}>
            {videos.map((video) => (
              <article key={video.id} style={styles.card}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <p><strong>Category:</strong> {video.category}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  {video.is_published ? "Published" : "Unpublished"}
                </p>
                <a
                  href={video.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview Video
                </a>

                <div style={styles.actions}>
                  <button
                    style={styles.button}
                    onClick={() => togglePublish(video)}
                  >
                    {video.is_published ? "Unpublish" : "Publish"}
                  </button>

                  <button
                    style={styles.deleteButton}
                    onClick={() => deleteVideo(video.id)}
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
    maxWidth: "700px",
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
  message: {
    padding: "12px",
    background: "#eaf1ff",
    borderRadius: "8px",
    marginBottom: "20px",
  },
};
