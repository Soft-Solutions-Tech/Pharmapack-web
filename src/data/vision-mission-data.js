import { Eye, Target } from "lucide-react";

export const visionMissionContent = {
  headerLabel: "Our Foundation",
  headline: "Vision & Mission",
  headlineHighlight: "Mission",
  subtitle: "Driving innovation with integrity and excellence",
  bottomStatement:
    "These principles guide every decision we make and every relationship we build, ensuring sustainable value creation for all stakeholders.",
  cards: [
    {
      id: 1,
      title: "Our Vision",
      description:
        "To be the global leader in pharmaceutical manufacturing excellence, setting new standards for innovation, quality, and sustainability while transforming healthcare outcomes worldwide through our cutting-edge solutions.",
      icon: "Eye",
      website: "https://example.com/vision",
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "We deliver exceptional pharmaceutical manufacturing services through strategic partnerships, advanced technology, and unwavering commitment to safety and quality, empowering our clients to bring life-changing products to market with confidence and speed.",
      icon: "Target",
      website: "https://example.com/mission",
    },
  ],
};

// Map icon names to components
export const iconMap = {
  Eye,
  Target,
};
