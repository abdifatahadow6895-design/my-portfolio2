import { motion } from "framer-motion";
import { defaultTransition, fadeInDown } from "../lib/animations";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      transition={defaultTransition}
      className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.03 }}
          className="text-xl font-semibold tracking-[0.24em] text-cyan-400"
        >
          ABDIFATAH HUSSEIN
        </motion.a>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2, color: "#22d3ee" }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/Abdifatah_Hussein_Bashir_CV.pdf"
            download
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-[0_20px_80px_-50px_rgba(34,211,238,0.4)] backdrop-blur transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
              ⬇
            </span>
            Download CV
          </motion.a>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
