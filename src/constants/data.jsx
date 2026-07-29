import {
  Waves,
  Dumbbell,
  Baby,
  ShieldCheck,
  Sparkles,
  MapPin
} from "lucide-react";

export const contactInfo = {
  phone: "+34 625 76 60 08",
  whatsapp: "34625766008",
  email: "info@dprealestate.org",
  websites: ["www.dprealestate.org", "www.dprealestate.net"]
};

export const amenities = [
  { icon: <Waves size={20} />, label: "Infinity Pool" },
  { icon: <Dumbbell size={20} />, label: "State-of-the-Art Gym" },
  { icon: <Baby size={20} />, label: "Kids' Play Area" },
  { icon: <ShieldCheck size={20} />, label: "24/7 Security" },
  { icon: <Sparkles size={20} />, label: "Premium Finishes" },
  { icon: <MapPin size={20} />, label: "Prime JVC Connectivity" }
];

export const heroImages = [
  `${import.meta.env.BASE_URL}bg1.png`,
  `${import.meta.env.BASE_URL}bg2.png`,
  `${import.meta.env.BASE_URL}bg3.jpg`,
  `${import.meta.env.BASE_URL}bg4.jpg`,
  `${import.meta.env.BASE_URL}bg5.jpg`,
];

export const mergedGallery = heroImages;

export const collections = [
  {
    id: "aurora",
    name: "Binghatti Aurora",
    tower: "Boutique Residence",
    units: "275",
    floors: "5 Residential",
    area: "District 12, JVC",
    image: `${import.meta.env.BASE_URL}bg1.jpg`,
    highlight: "Luxury Flows Effortlessly Here",
    facts: {
      type: "Residential",
      plot: "District 12, Jumeirah Village Circle, Dubai",
      levels: "Ground Floor + 5 Residential Floors + Roof",
      units: {
        studio: 92,
        bed1: 163,
        bed2: 20
      }
    },
    gallery: mergedGallery
  }
];

export const unitTypes = [
  {
    category: "Studio",
    items: [
      { type: "Type 01", image: `${import.meta.env.BASE_URL}studio1.png` },
    ]
  },
  {
    category: "1 Bedroom",
    items: [
      { type: "Type 01", image: `${import.meta.env.BASE_URL}1bedroom1.png` },
    ]
  },
  {
    category: "2 Bedroom",
    items: [
      { type: "Type 01", image: `${import.meta.env.BASE_URL}2bedroom1.png` },
    ]
  }
];
