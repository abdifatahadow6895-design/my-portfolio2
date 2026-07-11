import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-slate-800/70 bg-slate-950/70 p-8 shadow-[0_20px_100px_-30px_rgba(34,211,238,0.35)] backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-12">
        <SectionHeading
          eyebrow="About"
          title="Crafted for clarity, speed, and memorable user journeys"
          description="I am a software developer focused on building polished digital products with strong architecture, elegant interfaces, and measurable impact."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
          className="space-y-4 text-base leading-8 text-slate-300"
        >
          <p>
            From React and TypeScript interfaces to Node.js APIs and thoughtful product strategy, I build experiences that feel effortless to use and reliable to scale.
          </p>
          <p>
            My approach blends product thinking with technical depth so each release is not only functional, but also intuitive, accessible, and ready for growth.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((item) => (
              <span key={item} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
