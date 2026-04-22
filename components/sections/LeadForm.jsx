"use client";
import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Submitted!");
  };

  return (
    <form onSubmit={submit} className="p-10 max-w-md mx-auto space-y-4">
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
        className="w-full p-3 border rounded"
      />

      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
        className="w-full p-3 border rounded"
      />

      <button className="bg-blue-600 text-white px-6 py-3 rounded">
        Submit
      </button>
    </form>
  );
}