import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Express.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "UI Systems", level: "Advanced" },
  { name: "Performance", level: "Advanced" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A modern toolkit built for shipping fast and scaling cleanly"
          description="I focus on the stack that makes products feel polished, reliable, and ready for growth."
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-[0_20px_80px_-30px_rgba(34,211,238,0.25)]"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">{skill.level}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
