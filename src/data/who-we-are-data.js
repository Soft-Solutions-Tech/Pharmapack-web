import { Award, Shield, Users, Globe } from "lucide-react";

export const whoWeAreContent = {
  headerLabel: "About Us",
  headline: "Who We Are",
  headlineHighlight: "We Are",
  descriptionTitle: "Transforming Ideas into Market Success",
  descriptionTitleHighlight: "Market Success",
  descriptionParagraphs: [
    "For over <strong>20 years</strong>, Pharmapack has been a trusted leader in toll manufacturing and private label solutions, specializing in pharmaceutical and cosmetic product development.",
    "We partner with over <strong>100 leading brands</strong> across the Middle East, Africa, and beyond, transforming innovative concepts into market-ready products through our expertise in R&D, formulation, manufacturing, and packaging.",
    "Our <strong>100% GMP-compliant production lines</strong> and commitment to ISO, GMP, and CE certifications ensure we deliver safe, effective, and high-quality products to global markets.",
  ],
  stats: [
    {
      number: "20+",
      label: "Years of Experience",
    },
    {
      number: "10+",
      label: "Countries Served",
    },
    {
      number: "100+",
      label: "Trusted Brands",
    },
  ],
  coreValues: [
    {
      id: 1,
      title: "Innovation",
      description:
        "Pioneering over 3,000 unique formulations to create market-leading products",
      icon: "Award",
      website: "https://pharmapack.com/innovation",
    },
    {
      id: 2,
      title: "Quality",
      description:
        "Ensuring pharmaceutical-grade excellence with 100% GMP-compliant production",
      icon: "Shield",
      website: "https://pharmapack.com/quality",
    },
    {
      id: 3,
      title: "Partnership",
      description:
        "Building trusted relationships with over 100 brands through collaboration",
      icon: "Users",
      website: "https://pharmapack.com/partnership",
    },
    {
      id: 4,
      title: "Global Reach",
      description:
        "Supplying high-quality products to more than 10 countries worldwide",
      icon: "Globe",
      website: "https://pharmapack.com/global-reach",
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
