"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
      
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent)]"></div>

      <Container className="py-32 text-center relative z-10">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Transform Your Workforce 🚀
        </motion.h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Empower your team with industry-ready programs.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">
            Book Demo
          </button>
        </div>
      </Container>
    </section>
  );
}