import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-4 w-4 rounded-full border border-cyan-400/80 bg-cyan-400/20 md:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.7 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[75] hidden h-10 w-10 rounded-full border border-cyan-300/30 bg-cyan-300/10 md:block"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.16 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
      />
    </>
  );
}
