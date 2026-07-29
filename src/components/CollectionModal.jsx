import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CollectionModal({ isOpen, onClose, collection }) {
  if (!collection) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: [0.17, 0.67, 0.3, 0.99] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       z-[101] w-[96%] max-w-2xl max-h-[92vh] overflow-y-auto
                       bg-black border border-white/12 rounded-[40px] p-8 md:p-10
                       shadow-[0_0_160px_rgba(0,0,0,1)] custom-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute top-7 right-7 p-2 rounded-full hover:bg-white/5 transition-colors z-50"
            >
              <X size={26} className="text-white/50" />
            </button>

            <div className="flex flex-col">
              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.4em] text-red-500/50 mb-2">
                  {collection.tower}
                </p>
                <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight mb-2">
                  {collection.name}
                </h3>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/5 border border-red-500/20 text-[11px] uppercase tracking-[0.26em] text-red-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {collection.highlight}
                </span>
              </div>

              <p className="text-[11px] uppercase tracking-[0.4em] text-red-500/50 mb-4">
                Project Facts
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="rounded-2xl bg-white/4 border border-white/15 p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 mb-1.5">
                    Property Type
                  </p>
                  <p className="text-sm md:text-base font-light text-white/95">
                    {collection.facts.type}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/4 border border-white/15 p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 mb-1.5">
                    Location
                  </p>
                  <p className="text-sm md:text-base font-light text-white/95">
                    {collection.facts.plot}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/4 border border-red-500/30 p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-red-500/60 mb-1.5">
                    Total Units
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    {collection.units}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/4 border border-white/15 p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 mb-1.5">
                    Residential Floors
                  </p>
                  <p className="text-sm md:text-base font-medium text-white/95">
                    {collection.floors}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-2">
                  Architectural Composition
                </p>
                <p className="text-sm md:text-[15px] font-light text-white/80 leading-relaxed">
                  {collection.facts.levels}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-red-500/50 mb-3">
                  Unit Distribution
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(collection.facts.units).map(
                    ([key, val]) => {
                      const label = key
                        .replace("studio", "Studio")
                        .replace("bed1", "1 Bedroom")
                        .replace("bed2", "2 Bedroom")
                        .replace("bed3", "3 Bedroom")
                        .replace("bed4", "4 Bedroom")
                        .replace("bed5", "5 Bedroom")
                        .replace("shops", "Retail Shops");

                      return (
                        <div
                          key={key}
                          className="rounded-2xl bg-red-500/5 border border-red-500/16 px-3.5 py-3 flex flex-col gap-1"
                        >
                          <span className="text-[10px] uppercase tracking-[0.24em] text-red-500/60">
                            {label}
                          </span>
                          <span className="text-xl font-semibold text-white">
                            {val}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById("inquiry");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 py-4 bg-red-500 text-white rounded-2xl text-[11px] uppercase
                             tracking-[0.32em] font-bold hover:bg-red-600 transition-all
                             shadow-[0_0_30px_rgba(239,68,68,0.25)]"
                >
                  Register Interest
                </button>
                <button
                  onClick={onClose}
                  className="px-8 py-4 bg-white/5 border border-white/18 text-white rounded-2xl
                             text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-white/10
                             transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
