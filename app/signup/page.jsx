"use client";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Account created 🎉");
        window.location.href = "/login";
      } else {
        alert("Signup failed ❌");
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
        <h1 className="text-2xl font-bold text-center">Signup</h1>

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
          {loading ? "Creating..." : "Signup"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}