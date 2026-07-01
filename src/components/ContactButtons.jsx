import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactButtons({ contactInfo, setPhoneModalOpen }) {
  return (
    <div className="fixed bottom-10 right-10 z-40 flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setPhoneModalOpen(true)}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl"
      >
        <Phone size={24} />
      </motion.button>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
