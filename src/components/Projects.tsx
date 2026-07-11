import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Kids Coding Competition",
    description: "A polished competition platform for student engagement, registration, and event storytelling.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Website",
    description: "A modern storefront experience focused on conversion, performance, and elegant product presentation.",
    stack: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Hotel Booking System",
    description: "A resilient booking experience with clear flows, rich UI states, and administrative dashboards.",
    stack: ["React", "Express.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects designed to feel premium and perform beautifully"
          description="Each project combines business logic, thoughtful interactions, and a clean visual language tailored to the audience."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-8 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-[1.75rem] border border-slate-800/70 bg-slate-950/70 p-8 shadow-[0_20px_80px_-30px_rgba(34,211,238,0.25)]"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl border border-cyan-400/20 bg-cyan-500/10" />
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
