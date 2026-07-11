import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  isLoading: boolean;
};

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-cyan-400/30 border-t-cyan-400"
            />
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
              Loading portfolio
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
