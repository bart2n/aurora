import { Clock } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Location() {
  return (
    <section id="location" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/[0.03] -skew-x-12 translate-x-1/2 blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.4em] text-orange-500 mb-6 font-medium">
                Majan Community
              </p>
              <h2 className="text-4xl md:text-5xl font-extralight mb-8 leading-tight">
                At the Heart of <br />
                <span className="text-orange-500/40">Nature and Skyline</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Strategically located in Majan, Skyflame offers a grounded sanctuary.
                The community is designed for those who seek a balance between the
                serenity of Al Barari and the vibrant energy of Dubai.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    time: "5 Minutes",
                    place: "Global Village"
                  },
                  {
                    time: "15 Minutes",
                    place: "Dubai Intl Airport"
                  },
                  { time: "10 Minutes", place: "Business Bay" },
                  { time: "20 Minutes", place: "Downtown Dubai" }
                ].map((loc, idx) => (
                  <div
                    key={idx}
                    className="space-y-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-orange-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-orange-500/60">
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
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,87,34,0.05)]">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14451.35444096678!2d55.38!3d25.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67b9e2599107%3A0x4a9e775524bcf3ec!2sMajan%2C%20Dubai!5e0!3m2!1sen!2sae!4v1767957272068!5m2!1sen!2sae"
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
