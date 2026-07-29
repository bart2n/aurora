import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

export default function CategoryPlansModal({ isOpen, onClose, categoryData }) {
  const [activeUnit, setActiveUnit] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (categoryData?.items?.length > 0) {
      setActiveUnit(categoryData.items[0]);
      setZoom(1);
    }
  }, [categoryData]);

  useEffect(() => {
    setZoom(1);
  }, [activeUnit]);

  if (!categoryData) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setZoom(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ duration: 0.4, ease: [0.17, 0.67, 0.3, 0.99] }}
            className="fixed inset-4 md:inset-10 z-[101] bg-black border border-white/10 rounded-[40px] shadow-[0_0_200px_rgba(0,0,0,1)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-red-500/50 mb-1">
                  Floor Plan Explorer
                </p>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                  {categoryData.category} <span className="text-white/20 ml-2">Collection</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full hover:bg-white/5 transition-colors"
              >
                <X size={24} className="text-white/40" />
              </button>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              {/* Sidebar: Plan Selection */}
              <div className="w-full lg:w-80 border-r border-white/5 flex flex-col bg-white/[0.01]">
                <div className="p-6 overflow-y-auto custom-scrollbar flex lg:flex-col gap-4">
                  {categoryData.items.map((unit, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveUnit(unit)}
                      className={`flex-1 lg:flex-none p-4 rounded-2xl border transition-all text-left flex flex-col gap-2 group
                        ${activeUnit === unit 
                          ? "bg-red-500/10 border-red-500/40" 
                          : "bg-white/2 border-white/5 hover:border-white/20"}`}
                    >
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold
                        ${activeUnit === unit ? "text-red-500" : "text-white/40 group-hover:text-white/60"}`}>
                        Type {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <div className="aspect-[4/3] rounded-lg bg-white/5 overflow-hidden p-2">
                        <img src={unit.image} alt="Thumbnail" className="w-full h-full object-contain" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main: Active Plan View */}
              <div className="flex-1 flex flex-col overflow-hidden bg-black relative">
                {activeUnit && (
                  <>
                    {/* Zoom Controls Overlay */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5">
                      <button onClick={handleZoomOut} className="p-2 hover:text-red-500 transition-colors">
                        <ZoomOut size={18} />
                      </button>
                      <span className="text-[10px] uppercase tracking-[0.1em] text-white/40 w-10 text-center font-mono">
                        {Math.round(zoom * 100)}%
                      </span>
                      <button onClick={handleZoomIn} className="p-2 hover:text-red-500 transition-colors">
                        <ZoomIn size={18} />
                      </button>
                      <div className="w-px h-3 bg-white/10" />
                      <button onClick={handleReset} className="p-2 hover:text-red-500 transition-colors">
                        <RotateCcw size={16} />
                      </button>
                    </div>

                    <div className="flex-1 overflow-auto custom-scrollbar flex items-center justify-center p-8 md:p-20">
                      <div 
                        className="transition-transform duration-300 ease-out origin-center"
                        style={{ transform: `scale(${zoom})` }}
                      >
                        <img
                          src={activeUnit.image}
                          alt="Detailed Plan"
                          className="max-w-full h-auto object-contain pointer-events-none drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        />
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="p-8 border-t border-white/5 flex items-center justify-center bg-white/[0.01]">
                       <button
                        onClick={() => {
                          onClose();
                          const el = document.getElementById("inquiry");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-12 py-4 bg-red-500 text-white rounded-2xl text-[11px] uppercase
                                   tracking-[0.32em] font-bold hover:bg-red-600 transition-all
                                   shadow-[0_0_30px_rgba(239,68,68,0.25)]"
                      >
                        Register Interest
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
