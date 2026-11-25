
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import FeedbackForm from "@/components/FeedbackForm";

type Feedback = {
  id: string;
  full_name: string;
  service: string;
  rating: number;
  message: string;
  created_at: string;
};

export default function FeedbackPage() {
  const [reviews, setReviews] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFeedback() {
      const { data, error: fetchError } = await supabase
        .from("feedback")
        .select("id, full_name, service, rating, message, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError("We could not load feedback at the moment.");
      } else {
        setReviews(data || []);
      }

      setLoading(false);
    }

    loadFeedback();
  }, []);

  return (
    <main>
      <section
        style={{
          background: "linear-gradient(135deg, #071b46, #123d83)",
          color: "#ffffff",
          padding: "75px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "850px", margin: "auto" }}>
          <span
            style={{
              color: "#8eb8ff",
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "13px",
            }}
          >
            THE PIZZO FX COMMUNITY
          </span>

          <h1 style={{ fontSize: "clamp(34px, 6vw, 54px)", margin: "18px 0" }}>
            Real Experiences. Honest Feedback.
          </h1>

          <p
            style={{
              color: "#dbe7ff",
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "680px",
              margin: "auto",
            }}
          >
            Discover what members and learners share about their
            experiences with PIZZO FX. Your voice helps us keep growing.
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ maxWidth: "1150px", margin: "auto", padding: "65px 20px" }}
      >
        <div className="section-heading" style={{ textAlign: "center" }}>
          <span className="eyebrow">COMMUNITY VOICES</span>
          <h2>What People Are Saying</h2>
          <p>
            Feedback shared by people who have experienced our community
            and services.
          </p>
        </div>

        {loading ? (
          <p style={{ textAlign: "center", padding: "35px" }}>
            Loading feedback...
          </p>
        ) : error ? (
          <p style={{ textAlign: "center", color: "#c62828", padding: "35px" }}>
            {error}
          </p>
        ) : reviews.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              background: "#f4f7fc",
              borderRadius: "16px",
              marginTop: "30px",
            }}
          >
            <h3>Be among the first to share your experience.</h3>
            <p style={{ color: "#64748b" }}>
              Approved community feedback will appear here.
            </p>
          </div>
        ) : (
          <>
            <p
              style={{
                textAlign: "center",
                color: "#64748b",
                margin: "25px 0",
              }}
            >
              {reviews.length} published {reviews.length === 1 ? "review" : "reviews"}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "22px",
                marginTop: "25px",
              }}
            >
              {reviews.map((review) => (
                <article
                  key={review.id}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e1e8f2",
                    borderRadius: "16px",
                    padding: "25px",
                    boxShadow: "0 8px 25px rgba(7, 27, 70, 0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#f4a900",
                      fontSize: "20px",
                      letterSpacing: "3px",
                    }}
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {"★".repeat(review.rating)}
                    <span style={{ color: "#d7deea" }}>
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>

                  <p
                    style={{
                      color: "#334155",
                      lineHeight: 1.8,
                      margin: "18px 0",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    “{review.message}”
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid #edf1f7",
                      paddingTop: "15px",
                    }}
                  >
                    <strong style={{ color: "#071b46" }}>
                      {review.full_name}
                    </strong>

                    <p style={{ color: "#64748b", fontSize: "13px", margin: "5px 0" }}>
                      {review.service}
                    </p>

                    <small style={{ color: "#94a3b8" }}>
                      {new Date(review.created_at).toLocaleDateString()}
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>

      <FeedbackForm />
    </main>
  );
}
