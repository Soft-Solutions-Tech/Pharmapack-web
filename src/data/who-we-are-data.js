import { Award, Shield, Users, Globe } from "lucide-react";

export const whoWeAreContent = {
  headerLabel: "About Us",
  headline: "Who We Are",
  headlineHighlight: "We Are",
  descriptionTitle: "Transforming Ideas into Market Success",
  descriptionTitleHighlight: "Market Success",
  descriptionParagraphs: [
    "For over <strong>25 years</strong>, Pharmapack has been a trusted leader in toll manufacturing and private label solutions, specializing in pharmaceutical-grade product development.",
    "We partner with companies worldwide, transforming innovative concepts into successful market-ready products through our expertise in R&D, formulation, manufacturing, and packaging.",
    "Our commitment to excellence and regulatory compliance has made us the preferred manufacturing partner for businesses bringing high-quality products to global markets.",
  ],
  stats: [
    {
      number: "25+",
      label: "Years",
    },
    {
      number: "60+",
      label: "Markets",
    },
    {
      number: "5M+",
      label: "Products",
    },
  ],
  coreValues: [
    {
      id: 1,
      title: "Innovation",
      description:
        "Pioneering solutions that transform ideas into market-leading products",
      icon: "Award",
      website: "https://example.com/innovation",
    },
    {
      id: 2,
      title: "Quality",
      description:
        "Pharmaceutical-grade excellence in every product we manufacture",
      icon: "Shield",
      website: "https://example.com/quality",
    },
    {
      id: 3,
      title: "Partnership",
      description:
        "Building lasting relationships through trust and collaboration",
      icon: "Users",
      website: "https://example.com/partnership",
    },
    {
      id: 4,
      title: "Global Reach",
      description:
        "Delivering world-class solutions across international markets",
      icon: "Globe",
      website: "https://example.com/global-reach",
    },
  ],
};

// Map icon names to components
export const iconMap = {
  Award,
  Shield,
  Users,
  Globe,
};
