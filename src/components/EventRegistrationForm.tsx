
"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";

export default function EventRegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("Beginner");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const { error: submissionError } = await supabase
      .from("event_registrations")
      .insert([
        {
          full_name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          experience_level: experience,
          message: message.trim(),
          status: "pending",
        },
      ]);

    if (submissionError) {
      setError(
        "We could not submit your details. Please check your information and try again."
      );
      setLoading(false);
      return;
    }

    setSuccess(
      "Your expression of interest has been received! PIZZO FX will follow up with you through WhatsApp."
    );

    setFullName("");
    setEmail("");
    setPhone("");
    setExperience("Beginner");
    setMessage("");
    setLoading(false);
  }

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "8px",
    marginBottom: "18px",
    border: "1px solid #d5dbea",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box" as const,
    background: "#ffffff",
    color: "#071b46",
  };

  const labelStyle = {
    display: "block",
    fontWeight: 600,
    color: "#071b46",
    fontSize: "14px",
  };

  return (
    <section
      id="event-registration"
      style={{
        maxWidth: "720px",
        margin: "50px auto",
        padding: "32px",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 10px 35px rgba(7, 27, 70, 0.09)",
      }}
    >
      <p
        style={{
          color: "#1769ff",
          fontWeight: 700,
          letterSpacing: "2px",
          fontSize: "12px",
        }}
      >
        STORM MARKET WITH PIZZO
      </p>

      <h2 style={{ color: "#071b46", fontSize: "30px", marginBottom: "10px" }}>
        Express Your Interest
      </h2>

      <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: "25px" }}>
        Submit your details to express interest in attending the event on
        5 December 2026 at Sarit Centre, Loita Hall.
      </p>

      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="event-full-name">
          Full Name
        </label>
        <input
          id="event-full-name"
          style={inputStyle}
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          minLength={2}
          maxLength={100}
          required
        />

        <label style={labelStyle} htmlFor="event-email">
          Email Address
        </label>
        <input
          id="event-email"
          style={inputStyle}
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label style={labelStyle} htmlFor="event-phone">
          WhatsApp Phone Number
        </label>
        <input
          id="event-phone"
          style={inputStyle}
          type="tel"
          placeholder="e.g. 07XXXXXXXX"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />

        <label style={labelStyle} htmlFor="event-experience">
          Trading Experience
        </label>
        <select
          id="event-experience"
          style={inputStyle}
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Professional">Professional</option>
        </select>

        <label style={labelStyle} htmlFor="event-message">
          What would you like to learn? (Optional)
        </label>
        <textarea
          id="event-message"
          style={{ ...inputStyle, minHeight: "110px", resize: "vertical" }}
          placeholder="Tell us what you hope to gain from the event..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={1000}
        />

        {error && (
          <p style={{ color: "#dc2626", marginBottom: "15px" }}>{error}</p>
        )}

        {success && (
          <p style={{ color: "#15803d", marginBottom: "15px", lineHeight: 1.6 }}>
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "8px",
            background: loading ? "#64748b" : "#1769ff",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Expression of Interest"}
        </button>
      </form>

      <p
        style={{
          color: "#64748b",
          fontSize: "12px",
          lineHeight: 1.7,
          marginTop: "20px",
        }}
      >
        Important: This form records an expression of interest only. It does
        not guarantee a confirmed seat. PIZZO FX will contact you through
        WhatsApp regarding follow-up and confirmation. No certificates of
        participation will be issued.
      </p>
    </section>
  );
}
