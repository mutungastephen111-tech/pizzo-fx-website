
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Video = {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  category: string | null;
  created_at: string;
};

function getEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return id
          ? `https://www.youtube-nocookie.com/embed/${id}`
          : null;
      }

      const match = parsed.pathname.match(/^\/(embed|shorts)\/([^/]+)/);

      return match
        ? `https://www.youtube-nocookie.com/embed/${match[2]}`
        : null;
    }

    if (host === "vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id && /^\d+$/.test(id)
        ? `https://player.vimeo.com/video/${id}`
        : null;
    }

    return null;
  } catch {
    return null;
  }
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadVideos() {
      const { data, error: fetchError } = await supabase
        .from("videos")
        .select(
          "id, title, description, video_url, thumbnail_url, category, created_at"
        )
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError("The video library is temporarily unavailable.");
      } else {
        setVideos((data || []) as Video[]);
      }

      setLoading(false);
    }

    loadVideos();
  }, []);

  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Education</a>
          <a href="/analysis">Analysis</a>
          <a href="/event">Our Event</a>
        </nav>

        <a href="https://wa.me/254753529501" className="button">
          Contact Us
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PIZZO FX LEARNING CENTRE</p>

          <h1>
            Learn. Understand.
            <br />
            <span>Develop Your Edge.</span>
          </h1>

          <p className="hero-description">
            Access trading education, market breakdowns and practical
            learning resources designed to develop your understanding
            of financial markets.
          </p>

          <div className="hero-actions">
            <a href="#video-library" className="button">
              Explore Videos
            </a>

            <a href="/courses" className="button">
              Explore Courses
            </a>
          </div>
        </div>

        <div className="visual-card">
          <p>THE PIZZO FX PHILOSOPHY</p>
          <h2>Master the process before chasing the outcome.</h2>
          <p>
            Build knowledge, understand risk and approach the market
            with discipline.
          </p>
          <div className="chart-symbol">PIZZO FX</div>
        </div>
      </section>

      <section className="section" id="video-library">
        <p className="eyebrow">VIDEO EDUCATION</p>
        <h2>Our Video Library</h2>

        <p>
          Watch educational videos and market lessons published by
          the PIZZO FX team.
        </p>

        {loading ? (
          <p style={{ marginTop: "30px" }}>Loading videos...</p>
        ) : error ? (
          <p style={{ marginTop: "30px" }}>{error}</p>
        ) : videos.length === 0 ? (
          <div
            style={{
              marginTop: "30px",
              padding: "30px",
              background: "#EAF1FF",
              borderRadius: "14px",
              color: "#071B46",
            }}
          >
            <h3>Our video library is being prepared.</h3>
            <p>
              New educational videos will appear here once published
              by the PIZZO FX team.
            </p>
          </div>
        ) : (
          <div className="service-grid" style={{ marginTop: "30px" }}>
            {videos.map((video) => {
              const embedUrl = getEmbedUrl(video.video_url);

              return (
                <article
                  className="service-card"
                  key={video.id}
                  style={{ textAlign: "left" }}
                >
                  {embedUrl ? (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 9",
                        marginBottom: "18px",
                        overflow: "hidden",
                        borderRadius: "10px",
                        background: "#071B46",
                      }}
                    >
                      <iframe
                        src={embedUrl}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: 0,
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: "16 / 9",
                        marginBottom: "18px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        background: "#071B46",
                      }}
                    >
                      {video.thumbnail_url ? (
                        <img
                          src={video.thumbnail_url}
                          alt={video.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            display: "grid",
                            placeItems: "center",
                            height: "100%",
                            color: "white",
                            fontWeight: 700,
                          }}
                        >
                          PIZZO FX
                        </div>
                      )}
                    </div>
                  )}

                  {video.category && (
                    <p
                      style={{
                        color: "#1769FF",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                      }}
                    >
                      {video.category.toUpperCase()}
                    </p>
                  )}

                  <h3>{video.title}</h3>

                  {video.description && <p>{video.description}</p>}

                  {!embedUrl && (
                    <a
                      href={video.video_url}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Watch Video
                    </a>
                  )}

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginTop: "15px",
                    }}
                  >
                    Published:{" "}
                    {new Date(video.created_at).toLocaleDateString("en-KE")}
                  </p>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="section">
        <p className="eyebrow">KEEP LEARNING</p>
        <h2>Build your market knowledge.</h2>

        <p>
          Explore our structured courses and market research to
          strengthen your understanding of trading.
        </p>

        <div className="hero-actions">
          <a href="/courses" className="button">
            Explore Courses
          </a>

          <a href="/analysis" className="button">
            Market Analysis
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="/" className="brand">
          PIZZO <span>FX</span>
        </a>

        <p>Learn. Trade. Grow.</p>

        <p className="copyright">
          © {new Date().getFullYear()} PIZZO FX. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
