import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Faststack & Product Teams",
    date: "2025 — Present",
    points: [
      "Built modern React and Node.js applications with polished UI and solid backend architecture.",
      "Delivered multi-page SaaS, e-commerce, and booking experiences with responsive design.",
      "Collaborated with clients to turn business needs into reliable digital products.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Fasttack ",
    date: "2025 — 2026",
    points: [
      "Designed reusable interfaces and animation-led experiences with strong UX principles.",
      "Developed accessible design systems and component libraries for rapid product iteration.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of building thoughtful digital products"
          description="From rapid prototypes to production-grade applications, I focus on clean architecture, performance, and user delight."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 space-y-6"
        >
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-30px_rgba(34,211,238,0.35)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-cyan-600 dark:text-cyan-400">{item.company}</p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-300">
                  {item.date}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
