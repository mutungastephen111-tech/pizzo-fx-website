
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        throw loginError;
      }

      const { data: admin, error: adminError } =
        await supabase
          .from("admin_users")
          .select("user_id")
          .eq("user_id", data.user.id)
          .maybeSingle();

      if (adminError || !admin) {
        await supabase.auth.signOut();
        throw new Error("You are not authorised as a PIZZO FX administrator.");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span>PIZZO</span> FX
        </div>

        <p className="admin-login-label">SECURE ADMINISTRATION</p>

        <h1>Welcome Back</h1>

        <p className="admin-login-description">
          Sign in to manage your PIZZO FX platform.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Administrator Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && (
            <p className="admin-login-error">{error}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="admin-login-footer">
          PIZZO FX · Authorised Personnel Only
        </p>
      </div>
    </main>
  );
}
