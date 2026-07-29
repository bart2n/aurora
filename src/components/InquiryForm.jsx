import axios from "axios";
import SectionHeading from "./SectionHeading";

export default function InquiryForm({
  isSubmitting,
  setIsSubmitting,
  setNotification,
  contactInfo
}) {
  return (
    <section id="inquiry" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20 grayscale"
          src={`${import.meta.env.BASE_URL}bg9.jpg`}
          alt="Aurora Interior"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-4xl mx-auto bg-white/5 border border-red-500/10 rounded-[40px] p-8 md:p-16 relative z-10 overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.03)] backdrop-blur-sm">
        <div className="relative z-10">
          <SectionHeading
            subtitle="Secure Your Place"
            title="Inquire for Mastery"
            light
          />
          <form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={async e => {
              e.preventDefault();
              setIsSubmitting(true);

              const payload = Object.fromEntries(new FormData(e.target));

              try {
                const response = await axios.post(
                  `${import.meta.env.BASE_URL}api/lead.php`,
                  payload,
                  {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }
                );

                setNotification({
                  type: "success",
                  message:
                    response.data?.message || "Registered successfully."
                });

                e.target.reset();
              } catch (err) {
                console.error(err);

                setNotification({
                  type: "error",
                  message:
                    err.response?.data?.message ||
                    "Server error. Please try again."
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-red-500/40 ml-1">
                Full Name
              </label>
              <input
                required
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500/40 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-red-500/40 ml-1">
                Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500/40 transition-colors"
                placeholder={contactInfo.email}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-red-500/40 ml-1">
                Phone
              </label>
              <input
                name="phone"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500/40 transition-colors"
                placeholder={contactInfo.phone}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-red-500/40 ml-1">
                Preferred Unit
              </label>
              <select
                name="unit"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500/40 appearance-none"
              >
                <option className="bg-black">Studio</option>
                <option className="bg-black">1 Bedroom</option>
                <option className="bg-black">2 Bedroom</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-red-500/40 ml-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:border-red-500/40 resize-none"
                placeholder="How can we assist you?"
              />
            </div>
            <button
              disabled={isSubmitting}
              className="md:col-span-2 mt-4 py-5 bg-red-500 text-white text-xs uppercase tracking-[0.4em] font-bold rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(239,68,68,0.15)] disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Submit Interest"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
