import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Product Engineering",
    description: "End-to-end web applications built around performance, reliability, and a premium UI.",
  },
  {
    title: "UI/UX Design",
    description: "Thoughtful customer journeys, polished interfaces, and delight-driven interactions.",
  },
  {
    title: "Modernization",
    description: "Refactoring legacy platforms into scalable, faster, and easier-to-maintain systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="High-impact solutions for ambitious teams"
          description="Whether you need a launch-ready product or a strategic app upgrade, I bring both engineering depth and product attention."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-cyan-500/10 text-cyan-500" />
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
