import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Copy } from "lucide-react";

export default function PhoneModal({ isOpen, onClose, phone }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.17, 0.67, 0.3, 0.99] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md bg-black border border-red-500/10 rounded-[40px] p-10 shadow-[0_0_120px_rgba(239,68,68,0.1)]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-red-500/5 transition-colors"
            >
              <X size={24} className="text-white/40" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-red-500/5 flex items-center justify-center mb-8 border border-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.08)]">
                <Phone size={32} className="text-red-500" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-red-500/40 mb-2">
                Direct Contact
              </p>
              <h3 className="text-3xl font-light text-white mb-8 tracking-tight">
                {phone}
              </h3>
              <div className="grid grid-cols-2 gap-4 w-full">
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-3 py-4 bg-red-500 text-white rounded-2xl text-xs uppercase tracking-[0.3em] font-bold hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                >
                  <Phone size={16} /> Call
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(phone);
                    alert("Copied!");
                  }}
                  className="flex items-center justify-center gap-3 py-4 bg-white/5 text-white border border-white/10 rounded-2xl text-xs uppercase tracking-[0.3em] font-bold hover:bg-white/10 transition-all"
                >
                  <Copy size={16} /> Copy
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
