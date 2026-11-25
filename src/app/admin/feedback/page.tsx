
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

type Feedback = {
  id: string;
  full_name: string;
  email: string | null;
  service: string | null;
  rating: number;
  message: string;
  is_published: boolean;
  created_at: string;
};

export default function AdminFeedbackPage() {
  const router = useRouter();

  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFeedback() {
      const { data: authData } = await supabase.auth.getUser();

      if (!authData.user) {
        router.replace("/admin/login");
        return;
      }

      const { data: admin } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", authData.user.id)
        .maybeSingle();

      if (!admin) {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      await fetchFeedback();
    }

    loadFeedback();
  }, [router]);

  async function fetchFeedback() {
    setLoading(true);
    setError("");

    const { data, error: fetchError } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
    } else {
      setFeedback((data || []) as Feedback[]);
    }

    setLoading(false);
  }

  async function togglePublished(item: Feedback) {
    const { error: updateError } = await supabase
      .from("feedback")
      .update({ is_published: !item.is_published })
      .eq("id", item.id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    await fetchFeedback();
  }

  async function deleteFeedback(id: string) {
    if (!window.confirm("Are you sure you want to delete this feedback?")) {
      return;
    }

    const { error: deleteError } = await supabase
      .from("feedback")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    await fetchFeedback();
  }

  return (
    <main className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-eyebrow">PIZZO FX ADMINISTRATION</p>
          <h1>Student Feedback</h1>
          <p>Review, publish and manage feedback from the community.</p>
        </div>

        <button
          className="admin-secondary-button"
          onClick={() => router.push("/admin/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span>Total Feedback</span>
          <strong>{feedback.length}</strong>
        </div>

        <div className="admin-stat-card">
          <span>Published</span>
          <strong>
            {feedback.filter((item) => item.is_published).length}
          </strong>
        </div>

        <div className="admin-stat-card">
          <span>Awaiting Review</span>
          <strong>
            {feedback.filter((item) => !item.is_published).length}
          </strong>
        </div>
      </div>

      {error && <p className="admin-error">{error}</p>}

      <section className="admin-content-card">
        <div className="admin-section-heading">
          <div>
            <h2>Community Reviews</h2>
            <p>Only published feedback is visible on the public website.</p>
          </div>

          <button
            className="admin-secondary-button"
            onClick={fetchFeedback}
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <p className="admin-empty-state">Loading feedback...</p>
        ) : feedback.length === 0 ? (
          <p className="admin-empty-state">
            No feedback has been submitted yet.
          </p>
        ) : (
          <div className="admin-record-list">
            {feedback.map((item) => (
              <article className="admin-record-card" key={item.id}>
                <div className="admin-record-top">
                  <div>
                    <h3>{item.full_name}</h3>
                    <p>{item.email || "No email provided"}</p>
                  </div>

                  <span
                    className={
                      item.is_published
                        ? "admin-status admin-status-confirmed"
                        : "admin-status admin-status-pending"
                    }
                  >
                    {item.is_published ? "Published" : "Awaiting Review"}
                  </span>
                </div>

                <div className="admin-record-meta">
                  <span>Service: {item.service || "Not specified"}</span>
                  <span>Rating: {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</span>
                  <span>
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>

                <p className="admin-record-description">{item.message}</p>

                <div className="admin-record-actions">
                  <button
                    className="admin-primary-button"
                    onClick={() => togglePublished(item)}
                  >
                    {item.is_published ? "Unpublish" : "Publish Feedback"}
                  </button>

                  <button
                    className="admin-danger-button"
                    onClick={() => deleteFeedback(item.id)}
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
