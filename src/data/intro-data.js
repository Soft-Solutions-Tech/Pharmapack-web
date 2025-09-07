import { Globe, Award, Users } from "lucide-react";

export const introContent = {
  headerLabel: "Global Excellence",
  headline: "Pharmaceutical",
  headlineHighlight: "Leadership",
  subtitle: "Delivering world-class manufacturing solutions",
  description:
    "Pharmapack is a trusted partner in toll manufacturing and private label solutions, transforming innovative ideas into market-ready pharmaceutical products with precision and expertise.",
  ctaPrimary: {
    text: "Partner With Us",
    website: "https://example.com/partner",
  },
  ctaSecondary: {
    text: "Explore Services",
    website: "https://example.com/services",
  },
  metrics: [
    { value: 25, label: "Years in Industry" },
    { value: 60, label: "Global Markets" },
    { value: 5000000, label: "Products Delivered" },
    { value: 99.9, label: "Quality Assurance" },
  ],
  achievements: [
    {
      title: "Global Leader",
      subtitle: "Recognized for manufacturing excellence",
      icon: "Award",
    },
    {
      title: "Trusted Partner",
      subtitle: "Serving top-tier brands worldwide",
      icon: "Users",
    },
  ],
};

// Map icon names to components
export const iconMap = {
  Globe,
  Award,
  Users,
};
