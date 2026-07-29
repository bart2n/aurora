import { motion } from "framer-motion";
import { Maximize2, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Towers({ collections, setSelectedCollection, scrollToSection }) {
  return (
    <section
      id="towers"
      className="py-32 relative overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}bg8.jpg`}
          alt="Aurora Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Architectural Mastery"
          title="The Boutique Residence"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-12">
          {collections.map((col, idx) => (
            <FadeIn key={col.id} delay={idx * 0.08} fullHeight={true}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="group relative h-full bg-black/40 backdrop-blur-sm border border-red-500/12 rounded-[40px] overflow-hidden transition-all duration-700 hover:border-red-500/40 hover:shadow-[0_0_70px_rgba(239,68,68,0.14)]"
              >
                <div className="absolute inset-0 z-0">
                  <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.1 }}


                    className="w-full h-full object-cover opacity-35 group-hover:opacity-55 grayscale-[0.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/20" />
                </div>

                <div className="relative z-10 p-8 md:p-9 flex flex-col h-full min-h-[480px]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-red-500/50 mb-1">
                        {col.tower}
                      </p>
                      <h3 className="text-2xl md:text-[26px] font-light tracking-tight leading-snug">
                        {col.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedCollection(col)}
                      className="p-3 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md hover:bg-red-500/10 transition-colors group/btn"
                    >
                      <Maximize2
                        size={18}
                        className="text-white/50 group-hover/btn:text-red-500 transition-colors"
                      />
                    </button>
                  </div>

                  <p className="inline-flex items-center gap-2 text-[11px] text-red-500 font-medium tracking-[0.22em] mb-8 border border-red-500/20 rounded-full px-4 py-2 bg-red-500/5 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    {col.highlight}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-white/40">
                        Total Units
                      </p>
                      <p className="text-xl md:text-2xl font-semibold text-white">
                        {col.units}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-white/40">
                        Residential Floors
                      </p>
                      <p className="text-sm md:text-base font-medium text-white/90">
                        {col.floors}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-white/40">
                        Location
                      </p>
                      <p className="text-sm md:text-base font-medium text-white/90">
                        {col.area}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/45 mb-4">
                      Unit Mix
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {Object.entries(col.facts.units).map(([key, val]) => {
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
                            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-3 py-2.5"
                          >
                            <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                              {label}
                            </span>
                            <span className="text-sm font-semibold text-white">
                              {val}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedCollection(col)}
                        className="flex-1 py-3 rounded-full bg-red-500 text-white text-[10px] uppercase tracking-[0.26em] font-bold hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => scrollToSection("inquiry")}
                        className="px-4 py-3 rounded-full bg-white/5 border border-white/20 text-[10px] uppercase tracking-[0.26em] font-medium text-white/80 hover:bg-white/10 transition-all flex items-center gap-2"
                      >
                        Inquire
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
