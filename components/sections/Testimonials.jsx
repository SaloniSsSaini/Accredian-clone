"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const testimonials = [
  {
    text: "Accredian helped our team scale their skills quickly.",
    name: "HR Manager",
  },
  {
    text: "Excellent platform with real-world learning outcomes.",
    name: "Tech Lead",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                "{t.text}"
              </p>

              <p className="mt-5 font-semibold text-blue-600">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}