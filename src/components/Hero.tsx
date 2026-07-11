import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "../lib/animations";

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            Software developer • React • TypeScript • Node.js
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={defaultTransition}
            className="mb-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Building premium digital products with calm precision and modern engineering.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="mb-8 max-w-2xl text-lg leading-8 text-slate-300"
          >
            I transform ideas into polished, scalable web experiences for startups, founders, and teams that want their products to feel exceptional.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="/Abdifatah_Hussein_Bashir_CV.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-200 shadow-[0_25px_80px_-40px_rgba(34,211,238,0.3)] backdrop-blur transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                ⬇
              </span>
              Download CV
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition-colors hover:border-cyan-300 hover:text-cyan-200"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
            <img
              loading="eager"
              decoding="async"
              src="/profile.jpg"
              alt="Abdifatah Hussein Bashir"
              className="relative h-72 w-72 rounded-full border-4 border-cyan-400/80 object-cover shadow-[0_30px_120px_-30px_rgba(34,211,238,0.55)] sm:h-80 sm:w-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
