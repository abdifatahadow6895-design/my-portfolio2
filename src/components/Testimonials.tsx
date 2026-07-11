import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote: "The product felt polished from day one and the engineering quality was exceptional.",
    name: "A. Mohamed",
    role: "Founder, Studio North",
  },
  {
    quote: "Clear communication, strong execution, and a genuinely premium final experience.",
    name: "S. Mursal",
    role: "Product Lead, Bright Labs",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by founders and product teams"
          description="I care deeply about communication, reliability, and leaving clients with a product they’re proud to ship."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">“{item.quote}”</p>
              <footer className="mt-6">
                <p className="font-semibold text-slate-950 dark:text-white">{item.name}</p>
                <p className="text-sm text-cyan-600 dark:text-cyan-400">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
