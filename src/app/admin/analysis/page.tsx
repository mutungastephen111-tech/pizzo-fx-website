
"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Analysis = {
  id: string;
  title: string;
  instrument: string;
  timeframe: string | null;
  market_bias: string | null;
  summary: string | null;
  analysis_content: string;
  is_published: boolean;
  created_at: string;
};

export default function AdminAnalysisPage() {
  const [items, setItems] = useState<Analysis[]>([]);
  const [title, setTitle] = useState("");
  const [instrument, setInstrument] = useState("XAUUSD");
  const [timeframe, setTimeframe] = useState("4H");
  const [bias, setBias] = useState("Bullish");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadAnalysis = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("market_analysis")
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
    loadAnalysis();
  }, [loadAnalysis]);

  async function addAnalysis(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("market_analysis").insert({
      title,
      instrument,
      timeframe,
      market_bias: bias,
      summary,
      analysis_content: content,
      is_published: false,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setTitle("");
      setSummary("");
      setContent("");
      setMessage("Analysis saved successfully as an unpublished draft.");
      await loadAnalysis();
    }

    setSaving(false);
  }

  async function togglePublish(item: Analysis) {
    const { error } = await supabase
      .from("market_analysis")
      .update({ is_published: !item.is_published })
      .eq("id", item.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Publication status updated.");
      await loadAnalysis();
    }
  }

  async function deleteAnalysis(id: string) {
    if (!window.confirm("Delete this market analysis permanently?")) {
      return;
    }

    const { error } = await supabase
      .from("market_analysis")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Analysis deleted successfully.");
      await loadAnalysis();
    }
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.label}>PIZZO FX ADMINISTRATION</p>
          <h1>Market Analysis Centre</h1>
          <p>Prepare and publish professional market insights.</p>
        </div>

        <button style={styles.button} onClick={loadAnalysis}>
          Refresh
        </button>
      </header>

      <section style={styles.formCard}>
        <h2>Publish New Analysis</h2>

        <form onSubmit={addAnalysis}>
          <label>Analysis Title</label>
          <input
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Gold Market Outlook"
            required
          />

          <label>Trading Instrument</label>
          <select
            style={styles.input}
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          >
            <option value="XAUUSD">XAUUSD - Gold</option>
            <option value="GBPUSD">GBPUSD</option>
            <option value="EURUSD">EURUSD</option>
            <option value="USDJPY">USDJPY</option>
            <option value="US30">US30</option>
            <option value="NAS100">NAS100</option>
            <option value="OTHER">Other</option>
          </select>

          <label>Timeframe</label>
          <select
            style={styles.input}
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option>5M</option>
            <option>15M</option>
            <option>30M</option>
            <option>1H</option>
            <option>4H</option>
            <option>1D</option>
            <option>1W</option>
          </select>

          <label>Market Bias</label>
          <select
            style={styles.input}
            value={bias}
            onChange={(e) => setBias(e.target.value)}
          >
            <option>Bullish</option>
            <option>Bearish</option>
            <option>Neutral</option>
          </select>

          <label>Short Summary</label>
          <textarea
            style={styles.input}
            rows={3}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Briefly explain the market outlook..."
          />

          <label>Full Market Analysis</label>
          <textarea
            style={styles.input}
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your detailed market analysis..."
            required
          />

          <button style={styles.button} disabled={saving}>
            {saving ? "Saving..." : "Save Analysis as Draft"}
          </button>
        </form>
      </section>

      {message && <p style={styles.message}>{message}</p>}

      <section>
        <h2>Published and Draft Analysis ({items.length})</h2>

        {loading ? (
          <p>Loading analysis...</p>
        ) : items.length === 0 ? (
          <p>No market analysis has been added yet.</p>
        ) : (
          <div style={styles.grid}>
            {items.map((item) => (
              <article key={item.id} style={styles.card}>
                <h3>{item.title}</h3>
                <p><strong>Instrument:</strong> {item.instrument}</p>
                <p><strong>Timeframe:</strong> {item.timeframe}</p>
                <p><strong>Bias:</strong> {item.market_bias}</p>
                <p>{item.summary}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  {item.is_published ? "Published" : "Draft"}
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
                    onClick={() => deleteAnalysis(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <p style={styles.note}>
        Market analysis is educational information, not a guarantee of
        trading results.
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
  },
  note: {
    marginTop: "30px",
    color: "#64748b",
    fontSize: "13px",
  },
};
