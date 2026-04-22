import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import LeadForm from "../components/sections/LeadForm";
import Footer from "../components/layout/Footer";
import Logos from "../components/sections/Logos";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      <main className="flex flex-col gap-24">
        <Hero />
        <Logos />
        <Features />
        <Testimonials />
        <CTA />
        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}