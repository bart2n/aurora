import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LegalModal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, ease: [0.17, 0.67, 0.3, 0.99] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       z-[101] w-[96%] max-w-3xl max-h-[90vh] overflow-y-auto
                       bg-black border border-white/12 rounded-[32px] p-8 md:p-10
                       shadow-[0_0_120px_rgba(0,0,0,0.95)] custom-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <X size={22} className="text-white/60" />
            </button>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/50 mb-2">
                  Legal Information
                </p>
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                  {title}
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-white/80">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
