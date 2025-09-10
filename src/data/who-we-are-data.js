import { Award, Shield, Users, Globe } from "lucide-react";

export const whoWeAreContent = {
  headerLabel: "About Us",
  headline: "Who We Are",
  headlineHighlight: "We Are",
  descriptionTitle: "Transforming Ideas into Market Success",
  descriptionTitleHighlight: "Market Success",
  descriptionParagraphs: [
    "Established in 2003 in the 1st Industrial Zone, 6th of October City, Giza, Egypt, Pharmapack Pharmaceutical Industries has been a trusted leader in toll manufacturing and private label solutions for over 22 years, specializing in pharmaceutical, cosmeceutical, and healthcare product development.",
    "We partner with over <strong>100 leading brands</strong> across the Middle East, Africa, and beyond, transforming innovative concepts into market-ready products through our expertise in R&D, formulation, manufacturing, and packaging. Our products are distributed through key partners like Multi Pharma, UCP, and local stores in Delta, Alexandria, and Upper Egypt.",
    "Our <strong>100% GMP-compliant production lines</strong> and certifications (ISO 9001:2015, ISO 45001:2018, GMP, CE) ensure we deliver safe, effective, and high-quality products to global markets. With a 10,800 m² factory and 7 production lines, we aim to expand to over 10 lines by 2027.",
  ],
  stats: [
    {
      number: "22+",
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
    {
      number: "20M+",
      label: "Wipes Produced Annually",
    },
    {
      number: "5M+",
      label: "Hydrogel Patches Annually",
    },
    {
      number: "5M+",
      label: "Liters of Purified Water Annually",
    },
  ],
  coreValues: [
    {
      id: 1,
      title: "Innovation",
      description:
        "Pioneering over 3,000 unique formulations to create market-leading products",
      icon: "Award",
    },
    {
      id: 2,
      title: "Quality",
      description:
        "Ensuring pharmaceutical-grade excellence with 100% GMP-compliant production",
      icon: "Shield",
    },
    {
      id: 3,
      title: "Partnership",
      description:
        "Building trusted relationships with over 100 brands through collaboration",
      icon: "Users",
    },
    {
      id: 4,
      title: "Global Reach",
      description:
        "Supplying high-quality products to more than 10 countries worldwide",
      icon: "Globe",
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