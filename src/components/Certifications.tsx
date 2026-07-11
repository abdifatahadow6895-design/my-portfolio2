import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const certifications = [
  { name: "React & TypeScript Mastery", issuer: "Modern Web Academy" },
  { name: "Node.js Backend Development", issuer: "Developer Institute" },
  { name: "Product Design Fundamentals", issuer: "UX Lab" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Recognized learning, applied in real-world products"
          description="Continuous learning keeps my work current, effective, and aligned with modern engineering practices."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {certifications.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">{item.issuer}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.name}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
