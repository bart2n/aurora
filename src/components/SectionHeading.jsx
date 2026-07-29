import { motion } from "framer-motion";

export default function SectionHeading({ subtitle, title, light = false }) {
  return (
    <div className="mb-16 text-center">
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.12em", y: 10 }}
        whileInView={{ opacity: 1, letterSpacing: "0.42em", y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className={`text-[10px] uppercase font-light mb-4 ${light ? "text-red-500/80" : "text-red-500"
          }`}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="text-3xl md:text-5xl font-extralight tracking-tight text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
}
