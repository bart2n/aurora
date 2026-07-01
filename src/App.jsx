import { useState, useEffect } from "react";
import { useScroll, useTransform, AnimatePresence } from "framer-motion";

// Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Towers from "./components/Towers";
import Units from "./components/Units";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";

// Modals & UI helpers
import PhoneModal from "./components/PhoneModal";
import CollectionModal from "./components/CollectionModal";
import CategoryPlansModal from "./components/CategoryPlansModal";
import LegalModal from "./components/LegalModal";
import Notification from "./components/Notification";

// Constants & Data
import { TERMS_OF_SERVICE, PRIVACY_POLICY } from "./constants/legalTexts";
import {
  contactInfo,
  amenities,
  heroImages,
  collections,
  unitTypes
} from "./constants/data";

import "./App.css";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.85]);
  const heroScale = useTransform(scrollYProgress, [0, 0.05], [1, 1.05]);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      <AnimatePresence>
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      <PhoneModal
        isOpen={phoneModalOpen}
        onClose={() => setPhoneModalOpen(false)}
        phone={contactInfo.phone}
      />

      <CollectionModal
        isOpen={!!selectedCollection}
        onClose={() => setSelectedCollection(null)}
        collection={selectedCollection}
      />

      <CategoryPlansModal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        categoryData={selectedCategory}
      />

      {/* Legal modals */}
      <LegalModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        {TERMS_OF_SERVICE}
      </LegalModal>

      <LegalModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        {PRIVACY_POLICY}
      </LegalModal>

      {/* Navigation & Header */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero
        heroScale={heroScale}
        heroOpacity={heroOpacity}
        heroImages={heroImages}
        scrollToSection={scrollToSection}
      />

      {/* Overview Section */}
      <Overview />

      {/* Towers Section */}
      <Towers
        collections={collections}
        setSelectedCollection={setSelectedCollection}
        scrollToSection={scrollToSection}
      />

      {/* Units Section */}
      <Units
        unitTypes={unitTypes}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Amenities Section */}
      <Amenities amenities={amenities} />

      {/* Location Section */}
      <Location />

      {/* Inquiry Form Section */}
      <InquiryForm
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        setNotification={setNotification}
        contactInfo={contactInfo}
      />

      {/* Footer Section */}
      <Footer
        contactInfo={contactInfo}
        scrollToSection={scrollToSection}
        setPhoneModalOpen={setPhoneModalOpen}
        setShowPrivacy={setShowPrivacy}
        setShowTerms={setShowTerms}
      />

      {/* Fixed floating contact icons */}
      <ContactButtons
        contactInfo={contactInfo}
        setPhoneModalOpen={setPhoneModalOpen}
      />
    </div>
  );
}
