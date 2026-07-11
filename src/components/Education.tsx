import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const education = [
  {
    title: "Software Engineering Studies",
    school: " Online Learning",
    date: "2025 — 2026",
    details: "Focused on computer science fundamentals, product design, and modern web engineering practices.",
  },
  {
    title: "Frontend Developer ",
    school: "Independent Learning & Bootcamps",
    date: "2025 — Present",
    details: "Built practical projects across frontend, backend, and deployment workflows.",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Building a strong foundation for modern engineering"
          description="I combine academic grounding with hands-on shipping experience to approach products with rigor and creativity."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">{item.date}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-cyan-600 dark:text-cyan-400">{item.school}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.details}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
