
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FeedbackForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("General feedback");
  const [rating, setRating] = useState("5");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setNotice("");
    setError("");

    const { error: submissionError } = await supabase
      .from("feedback")
      .insert([
        {
          full_name: fullName.trim(),
          email: email.trim() || null,
          service,
          rating: Number(rating),
          message: message.trim(),
          is_published: false,
        },
      ]);

    setLoading(false);

    if (submissionError) {
      setError("We could not submit your feedback. Please try again.");
      return;
    }

    setNotice(
      "Thank you! Your feedback has been submitted for review."
    );

    setFullName("");
    setEmail("");
    setService("General feedback");
    setRating("5");
    setMessage("");
  }

  return (
    <section className="section" id="submit-feedback">
      <div className="section-heading">
        <span className="eyebrow">YOUR EXPERIENCE MATTERS</span>
        <h2>Share Your Feedback</h2>
        <p>
          Tell us about your experience with PIZZO FX. Your feedback
          helps us improve our education, community and services.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "650px",
          margin: "35px auto 0",
          padding: "28px",
          border: "1px solid #dce5f5",
          borderRadius: "18px",
          background: "#ffffff",
          boxShadow: "0 12px 35px rgba(7, 27, 70, 0.06)",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="feedback-name">Full name</label>
          <input
            id="feedback-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Enter your full name"
            required
            minLength={2}
            maxLength={100}
            style={fieldStyle}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="feedback-email">Email address (optional)</label>
          <input
            id="feedback-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            style={fieldStyle}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="feedback-service">What is your feedback about?</label>
          <select
            id="feedback-service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            style={fieldStyle}
          >
            <option>General feedback</option>
            <option>Forex education</option>
            <option>Market analysis</option>
            <option>Trading signals</option>
            <option>Mentorship</option>
            <option>Community</option>
            <option>STORM MARKET WITH PIZZO</option>
          </select>
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="feedback-rating">Your rating</label>
          <select
            id="feedback-rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            style={fieldStyle}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Needs improvement</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="feedback-message">Your feedback</label>
          <textarea
            id="feedback-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Share your honest experience..."
            required
            minLength={5}
            maxLength={2000}
            rows={5}
            style={{
              ...fieldStyle,
              resize: "vertical",
              minHeight: "120px",
            }}
          />
        </div>

        {error && (
          <p style={{ color: "#c62828", marginBottom: "15px" }}>
            {error}
          </p>
        )}

        {notice && (
          <p style={{ color: "#16803c", marginBottom: "15px" }}>
            {notice}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: loading ? "#7895c9" : "#1769ff",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "15px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>

        <p
          style={{
            fontSize: "12px",
            color: "#64748b",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          Your feedback will be reviewed before it is displayed publicly.
        </p>
      </form>
    </section>
  );
}

const fieldStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "13px 14px",
  marginTop: "8px",
  border: "1px solid #d5deed",
  borderRadius: "9px",
  background: "#ffffff",
  color: "#071b46",
  fontSize: "14px",
  outline: "none",
};
