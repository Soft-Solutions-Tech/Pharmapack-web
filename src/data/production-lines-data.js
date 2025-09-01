import { Droplets, Package, Heart, User, TestTube, Waves } from "lucide-react";
import { Zap, Shield, Clock } from "lucide-react";

// All text content
export const content = {
  badge: "Premium Pharmaceutical Manufacturing",
  titlePart1: "Production",
  titlePart2: "Excellence",
  subtitle:
    "State-of-the-art manufacturing facilities delivering pharmaceutical-grade products with uncompromising quality, precision, and innovation across six specialized production lines.",
  stats: [
    {
      number: "6",
      label: "Specialized Production Lines",
      icon: Zap,
      suffix: "",
    },
    {
      number: "99.9",
      label: "Quality Assurance Rate",
      icon: Shield,
      suffix: "%",
    },
    {
      number: "24",
      label: "Continuous Manufacturing",
      icon: Clock,
      suffix: "/7",
    },
  ],
  cta: "Contact Us",
  ctaSubtitle: "Discuss custom toll manufacturing and private label solutions",
  productionLines: [
    {
      id: 1,
      title: "Purified Water Production Line",
      description:
        "Pharmaceutical-grade purified water used for antibiotic dissolution and baby formulations.",
      icon: Droplets,
      features: ["Pharmaceutical Grade", "Baby Safe", "99.9% Pure"],
    },
    {
      id: 2,
      title: "Wet Wipes Production Line",
      description:
        "Wide range of wipes in multiple sizes (single to 160 wipes) and specialized formulations, such as: Makeup remover, Anti-acne, Anti-aging, Mosquito repellent, Nail polish remover, Alcohol wipes, and more.",
      icon: Package,
      features: ["160+ Wipes", "Multi-Purpose", "Specialized Formula"],
    },
    {
      id: 3,
      title: "Hydrogel Patches Production Line",
      description:
        "Specialized healthcare and skincare patches: Baby fever cooling patches, Pain-relieving patches (cold & hot), Period pain-relieving patches, Under-eye patches with targeted skin benefits.",
      icon: Heart,
      features: ["Healthcare Grade", "Pain Relief", "Targeted Care"],
    },
    {
      id: 4,
      title: "Face Sheet Mask Production Line",
      description:
        "High-quality sheet masks infused with various formulations for: Hydration, Brightening, Anti-aging, Soothing & calming care, Customized solutions for skincare brands.",
      icon: User,
      features: ["Anti-Aging", "Custom Solutions", "Premium Quality"],
    },
    {
      id: 5,
      title: "Lubricant Gel Production Line",
      description:
        "Multi-purpose gels for: Medical use – ultrasound examination lubrication, Personal care – intimate lubrication.",
      icon: TestTube,
      features: ["Medical Grade", "Multi-Purpose", "Safe Formula"],
    },
    {
      id: 6,
      title: "Sea Salt Water Production Line",
      description:
        "Natural sea salt water designed for medical and cosmetic applications.",
      icon: Waves,
      features: ["Natural Source", "Medical Use", "Cosmetic Grade"],
    },
  ],
};
