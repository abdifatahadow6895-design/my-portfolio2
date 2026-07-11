import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950/90 text-cyan-300 shadow-lg shadow-cyan-500/20 backdrop-blur"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
