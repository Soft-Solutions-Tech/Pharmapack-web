import { Eye, Target } from "lucide-react";

export const visionMissionContent = {
  headerLabel: "Our Foundation",
  headline: "Vision & Mission",
  headlineHighlight: "Mission",
  subtitle: "Driving innovation with integrity and excellence",
  bottomStatement:
    "These principles guide every decision we make, ensuring sustainable value creation for our partners and stakeholders.",
  cards: [
    {
      id: 1,
      title: "Our Vision",
      description:
        "To establish a young, energetic company as the global leader in pharmaceutical and cosmetic manufacturing, setting new standards for innovation, quality, and sustainability while delivering transformative health products worldwide.",
      icon: "Eye",
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "To deliver exceptional toll manufacturing and private label services through strategic partnerships, advanced technology, and unwavering commitment to safety, quality, and compliance, while advancing Egypt’s healthcare industry to align with global treatment protocols.",
      icon: "Target",
    },
  ],
};

// Map icon names to components
export const iconMap = {
  Eye,
  Target,
};