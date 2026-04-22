"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold">
          Ready to Upskill Your Team?
        </h2>

        <p className="mt-4 text-lg opacity-90">
          Join leading companies transforming their workforce with Accredian.
        </p>

        <Link href="/signup">
          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}