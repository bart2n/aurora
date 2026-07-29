import { Clock } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Location() {
  return (
    <section id="location" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/[0.03] -skew-x-12 translate-x-1/2 blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 mb-6 font-medium">
                JVC Community
              </p>
              <h2 className="text-4xl md:text-5xl font-extralight mb-8 leading-tight">
                Nestled in the <br />
                <span className="text-red-500/40">Heart of JVC</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Located in District 12, Jumeirah Village Circle, Aurora offers
                connectivity to everything you need. The community is designed
                as a retreat from the skyscrapers, balancing the vibrant
                energy of Dubai with a more intimate, community-focused pace.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    time: "10 Minutes",
                    place: "Mall of the Emirates"
                  },
                  {
                    time: "15 Minutes",
                    place: "Dubai Marina"
                  },
                  { time: "20 Minutes", place: "Downtown Dubai" },
                  { time: "25 Minutes", place: "Dubai Intl Airport" }
                ].map((loc, idx) => (
                  <div
                    key={idx}
                    className="space-y-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-red-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-red-500/60">
                      <Clock size={14} />{" "}
                      <span className="text-[10px] uppercase tracking-[0.28em]">
                        {loc.time}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{loc.place}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(239,68,68,0.05)]">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3298056554904!2d55.2186236!3d25.056808500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d00719636f1%3A0x5234377b0452c601!2sBinghatti%20Aurora!5e0!3m2!1sen!2ses!4v1785315045421!5m2!1sen!2ses"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full border-0 grayscale invert opacity-80"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
