"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const features = [
  {
    title: "Expert Mentors",
    desc: "Learn from top industry professionals",
  },
  {
    title: "Flexible Learning",
    desc: "Access content anytime, anywhere",
  },
  {
    title: "Certifications",
    desc: "Earn globally recognized credentials",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}