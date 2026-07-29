import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Amenities({ amenities }) {
  return (
    <section id="amenities" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Resort-Style Living"
          title="Engineered for Mastery"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-4 p-8 rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.05)] transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform group-hover:text-red-500">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 leading-tight">
                  {item.label}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
