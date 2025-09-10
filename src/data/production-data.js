import {
  Droplets,
  Package,
  Heart,
  User,
  TestTube,
  Waves,
  Zap,
  Shield,
  Clock,
  Hand,
  Droplet
} from "lucide-react";

export const productionContent = {
  badge: "Premium Pharmaceutical Manufacturing",
  titlePart1: "Production",
  titlePart2: "Excellence",
  subtitle:
    "State-of-the-art manufacturing facilities delivering pharmaceutical-grade products with uncompromising quality, precision, and innovation across six specialized production lines.",
  stats: [
    {
      number: "6",
      label: "Specialized Production Lines",
      icon: "Zap",
      suffix: "",
    },
    {
      number: "99.9",
      label: "Quality Assurance Rate",
      icon: "Shield",
      suffix: "%",
    },
    {
      number: "24",
      label: "Continuous Manufacturing",
      icon: "Clock",
      suffix: "/7",
    },
  ],
  productionLines: [
    {
      id: 1,
      title: "Purified Water Production Line",
      description:
        "Pharmaceutical-grade purified water used for antibiotic dissolution and baby formulations.",
      icon: "Droplets",
      features: ["Pharmaceutical Grade", "Baby Safe", "99.9% Pure"],
      website: "https://example.com/purified-water",
    },
    {
      id: 2,
      title: "Wet Wipes Production Line",
      description:
        "Wide range of wipes in multiple sizes (single to 160 wipes) and specialized formulations, such as: Makeup remover, Anti-acne, Anti-aging, Mosquito repellent, Nail polish remover, Alcohol wipes, and more.",
      icon: "Package",
      features: ["160+ Wipes", "Multi-Purpose", "Specialized Formula"],
      website: "https://example.com/wet-wipes",
    },
    {
      id: 3,
      title: "Hydrogel Patches Production Line",
      description:
        "Specialized healthcare and skincare patches: Baby fever cooling patches, Pain-relieving patches (cold & hot), Period pain-relieving patches, Under-eye patches with targeted skin benefits.",
      icon: "Heart",
      features: ["Healthcare Grade", "Pain Relief", "Targeted Care"],
      website: "https://example.com/hydrogel-patches",
    },
    {
      id: 4,
      title: "Face Sheet Mask Production Line",
      description:
        "High-quality sheet masks infused with various formulations for: Hydration, Brightening, Anti-aging, Soothing & calming care, Customized solutions for skincare brands.",
      icon: "User",
      features: ["Anti-Aging", "Custom Solutions", "Premium Quality"],
      website: "https://example.com/face-sheet-masks",
    },
    {
      id: 5,
      title: "Semi Solid Production Line",
      description:
        "Advanced production of semi-solid formulations, including: Lubricant gels (medical & personal care uses) Creams and ointments (cosmetic & healthcare applications)",
      icon: "TestTube",
      features: ["Precision Blending", "Uniform Mixing", "Safe Formula"],
      website: "https://example.com/lubricant-gel",
    },
    {
      id: 6,
      title: "Sea Water Production Line",
      description:
        "Natural sea salt water designed for medical and cosmetic applications.",
      icon: "Waves",
      features: ["Natural Source", "Medical Use", "Cosmetic Grade"],
      website: "https://example.com/sea-salt-water",
    },
    {
      id: 7,
      title: "Paraffin Gauze Dressing Production Line",
      description:
        "Sterile paraffin gauze dressings designed for: Wound care and burn treatment Maintaining a moist healing environment Easy removal with minimal pain or tissue damage",
      icon: "Hand",
      features: ["Moist Healing", "Pain-Free Removal", "Burn & Wound Care"],
      website: "https://example.com/paraffin-gauze-dressing",
    },
  ],
};

// Map icon names to components
export const iconMap = {
  Droplets,
  Package,
  Heart,
  User,
  TestTube,
  Waves,
  Zap,
  Shield,
  Clock,
  Hand,
  Droplet
};
