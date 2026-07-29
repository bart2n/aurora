import { motion } from "framer-motion";
import { Home } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Units({ unitTypes, setSelectedCategory }) {
  return (
    <section id="units" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="The Units"
          title="Premium Collection"
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {unitTypes.map((category, idx) => (
            <FadeIn key={category.category} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCategory(category)}
                className="group relative bg-white/[0.02] border border-white/10 rounded-[40px] p-10 text-center cursor-pointer hover:border-red-500/40 hover:bg-red-500/[0.02] transition-all duration-500"
              >
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-500/5 border border-red-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition-all duration-500">
                    <Home size={32} className="text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-white tracking-[0.25em] uppercase mb-8">
                  {category.category}
                </h3>
                <div className="flex flex-col items-center gap-4">
                  <div className="h-px w-12 bg-red-500/30 group-hover:w-20 transition-all duration-500" />
                  <button className="px-8 py-3.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] uppercase tracking-[0.3em] font-bold text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                    Explore Plans
                  </button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
