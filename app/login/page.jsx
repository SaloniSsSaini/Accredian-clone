"use client";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Login successful 🚀");
        window.location.href = "/dashboard";
      } else {
        alert("Invalid credentials ❌");
      }
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-3 border rounded dark:bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-3 border rounded dark:bg-gray-700"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}