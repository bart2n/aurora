import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Notification({ type, message, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className={`fixed bottom-32 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 rounded-2xl border backdrop-blur-2xl flex items-center gap-4 shadow-[0_0_40px_rgba(0,0,0,0.6)] min-w-[320px]
        ${type === "success"
          ? "bg-black/80 border-emerald-400/30 text-emerald-100"
          : "bg-black/80 border-red-500/40 text-red-200"
        }`}
    >
      {type === "success" ? (
        <CheckCircle2 className="text-emerald-300" size={24} />
      ) : (
        <AlertCircle className="text-red-400" size={24} />
      )}
      <p className="text-sm font-light tracking-wide">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto hover:opacity-60 transition-opacity"
      >
        <X size={18} />
      </button>
    </motion.div>
  );
}
