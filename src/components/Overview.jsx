import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Overview() {
  return (
    <section id="overview" className="py-32 px-6 max-w-7xl mx-auto space-y-16">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="right">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-[0_0_60px_rgba(0,0,0,0.9)] border border-red-500/15 bg-gradient-to-br from-red-500/5 to-black">
            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-transparent transition-colors duration-700" />
            <motion.img
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.12 }}
              transition={{
                duration: 1.2,
                ease: [0.19, 0.51, 0.23, 0.99]
              }}
              src={`${import.meta.env.BASE_URL}hero.png`}
              alt="Aurora Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
        <div>
          <FadeIn delay={0.2}>
            <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 mb-6 font-medium">
              Luxury Flows Effortlessly Here
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight mb-8 leading-tight">
              Affordable <br />
              <span className="text-red-500/40 italic">Luxury Living.</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                Binghatti Aurora is a boutique low-rise residence nestled
                within the vibrant community of JVC. At its heart is a
                philosophy of community-focused, accessible luxury.
              </p>
              <p>
                Ultra-modern architecture meets high-end interiors and prime
                finishes, creating the perfect retreat from the skyscrapers —
                a more intimate living experience you won't find anywhere else.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
