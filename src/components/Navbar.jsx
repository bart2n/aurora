import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection
}) {
  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.19, 0.51, 0.23, 0.99] }}
        className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -180, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-12 h-12 border border-red-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)] overflow-hidden bg-white/5"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.jpg`}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm md:text-xl font-semibold tracking-[0.35em] uppercase">
                DP REAL ESTATE
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-red-500">
                Aurora | JVC
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Overview", "Towers", "Units", "Amenities", "Location"].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[11px] uppercase tracking-[0.3em] font-medium text-white/60 hover:text-red-500 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("inquiry")}
              className="px-6 py-2.5 bg-red-500 text-white text-[11px] uppercase tracking-[0.35em] font-bold rounded-full hover:bg-red-600 transition-all shadow-[0_0_25px_rgba(239,68,68,0.35)]"
            >
              Register Interest
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-black border-l border-white/10 p-6 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-white/50">
                  Menu
                </span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={22} />
                </button>
              </div>
              {["Overview", "Towers", "Units", "Amenities", "Location", "inquiry"].map(
                item => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm text-left uppercase tracking-[0.25em] text-white/70 hover:text-red-500 py-2"
                  >
                    {item === "inquiry" ? "Register Interest" : item}
                  </button>
                )
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
