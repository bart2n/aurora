import {
  Zap,
  Award,
  Activity,
  Waves,
  ShieldCheck,
  Car
} from "lucide-react";

export const contactInfo = {
  phone: "+34 625 76 60 08",
  whatsapp: "34625766008",
  email: "info@dprealestate.org",
  websites: ["www.dprealestate.org", "www.dprealestate.net"]
};

export const amenities = [
  { icon: <Zap size={20} />, label: "Solar Photovoltaic" },
  { icon: <Award size={20} />, label: "LEED Certification" },
  { icon: <Activity size={20} />, label: "Skyline Jogging Path" },
  { icon: <Waves size={20} />, label: "Sky Infinity Pool" },
  { icon: <ShieldCheck size={20} />, label: "Smart System" },
  { icon: <Car size={20} />, label: "Valet Service" }
];

export const heroImages = [
  `${import.meta.env.BASE_URL}bg1.jpg`,
  `${import.meta.env.BASE_URL}bg2.jpg`,
  `${import.meta.env.BASE_URL}bg3.jpg`,
  `${import.meta.env.BASE_URL}bg4.jpg`,
  `${import.meta.env.BASE_URL}bg5.jpg`,
  `${import.meta.env.BASE_URL}bg6.jpg`,
  `${import.meta.env.BASE_URL}bg7.jpg`,
  `${import.meta.env.BASE_URL}bg8.jpg`,
  `${import.meta.env.BASE_URL}bg9.jpg`,
  `${import.meta.env.BASE_URL}bg10.jpg`
];

export const mergedGallery = heroImages;

export const collections = [
  {
    id: "tower-1",
    name: "Skyflame Tower 1",
    tower: "Signature Residence",
    units: "1,378",
    floors: "27 Residential",
    area: "16,460.26 SQM",
    image: `${import.meta.env.BASE_URL}bg1.jpg`,
    highlight: "The Shape of Mastery",
    facts: {
      type: "Residential & Retails",
      plot: "16,460.26 SQM / 177,176.76 SQFT",
      levels:
        "Ground Floor + 5 Parking Floors + 27 Residential Floors + Mechanical Floors + Roof",
      units: {
        studio: 584,
        bed1: 741,
        bed2: 52,
        bed4: 1,
        shops: 29
      }
    },
    gallery: mergedGallery
  },
  {
    id: "tower-2",
    name: "Skyflame Tower 2",
    tower: "Premium Residence",
    units: "782",
    floors: "22 Residential",
    area: "9,251.95 SQM",
    image: `${import.meta.env.BASE_URL}bg2.jpg`,
    highlight: "Dual-Tower Excellence",
    facts: {
      type: "Residential & Retails",
      plot: "9,251.95 SQM / 99,587.16 SQFT",
      levels:
        "Ground Floor + 5 Parking Floors + 22 Residential Floors + Mechanical Floors + Roof",
      units: {
        studio: 406,
        bed1: 332,
        bed2: 44,
        shops: 19
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
      { type: "Type 02", image: `${import.meta.env.BASE_URL}studio2.png` },
      { type: "Type 03", image: `${import.meta.env.BASE_URL}studio3.png` },
    ]
  },
  {
    category: "1 Bedroom",
    items: [
      { type: "Type 01", image: `${import.meta.env.BASE_URL}1bedroom1.png` },
      { type: "Type 02", image: `${import.meta.env.BASE_URL}1bedroom2.png` },
      { type: "Type 03", image: `${import.meta.env.BASE_URL}1bedroom3.png` },
      { type: "Type 04", image: `${import.meta.env.BASE_URL}1bedroom4.png` },
      { type: "Type 05", image: `${import.meta.env.BASE_URL}1bedroom5.png` },
    ]
  },
  {
    category: "2 Bedroom",
    items: [
      { type: "Type 01", image: `${import.meta.env.BASE_URL}2bedroom1.png` },
      { type: "Type 02", image: `${import.meta.env.BASE_URL}2bedroom2.png` },
      { type: "Type 03", image: `${import.meta.env.BASE_URL}2bedroom3.png` },
      { type: "Type 04", image: `${import.meta.env.BASE_URL}2bedroom4.png` },
    ]
  }
];
