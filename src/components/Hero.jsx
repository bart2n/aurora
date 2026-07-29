import { motion } from "framer-motion";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero({ heroScale, heroOpacity, heroImages, scrollToSection }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="absolute inset-0 z-0"
      >
        <HeroSlideshow images={heroImages} />
      </motion.div>
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs md:text-sm uppercase tracking-[0.5em] text-red-400 mb-6 drop-shadow-[0_0_16px_rgba(239,68,68,0.35)]"
        >
          Luxury Flows Effortlessly Here
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-5xl md:text-8xl font-extralight tracking-tight mb-8"
        >
          BINGHATTI <span className="text-red-500 italic">AURORA</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("overview")}
            className="px-10 py-4 bg-red-500 text-white text-xs uppercase tracking-[0.35em] font-bold rounded-full shadow-[0_0_30px_rgba(239,68,68,0.35)]"
          >
            Experience Now
          </motion.button>
          <div className="flex items-center gap-4 text-white/60">
            <div className="h-px w-12 bg-red-500/30" />
            <span className="text-[10px] uppercase tracking-[0.35em]">
              JVC | Dubai
            </span>
            <div className="h-px w-12 bg-red-500/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
