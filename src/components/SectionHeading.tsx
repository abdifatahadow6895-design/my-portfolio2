import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, viewportOnce } from "../lib/animations";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={defaultTransition}
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
}
