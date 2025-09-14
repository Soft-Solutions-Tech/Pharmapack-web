import {
  Award,
  Shield,
  Users,
  Globe,
  Truck,
  Store,
  MapPin,
  Building2,
  TrendingUp,
  Target,
  FileCheck,
  Award as AwardCert,
  ShieldCheck,
} from "lucide-react";

export const whoWeAreContent = {
  headerLabel: "About Us",
  headline: "Who Are We",
  headlineHighlight: "We Are",
  descriptionTitle: "Transforming Ideas into Market Success",
  descriptionTitleHighlight: "Market Success",
  descriptionParagraphs: [
    "Established in 2003 in the 1st Industrial Zone, 6th of October City, Giza, Egypt, Pharmapack Pharmaceutical Industries has been a trusted leader in toll manufacturing and private label solutions for over 22 years, specializing in pharmaceutical, cosmeceutical, and healthcare product development.",
    "We partner with over <strong>100 leading brands</strong> across the Middle East, Africa, and beyond, transforming innovative concepts into market-ready products through our expertise in R&D, formulation, manufacturing, and packaging. Our products are distributed through key partners like Multi Pharma, UCP, and local stores in Delta, Alexandria, and Upper Egypt.",
    "Our <strong>100% GMP-compliant production lines</strong> and certifications (ISO 9001:2015, ISO 14001:2015, ISO 13485:2016, GMP, CE) ensure we deliver safe, effective, and high-quality products to global markets. With a 10,800 m² factory and 7 production lines, we aim to expand to over 10 lines by 2027.",
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

  // Distribution Channels Section Data
  distributionChannels: [
    {
      name: "Multi Pharma",
      description:
        "Leading pharmaceutical distribution network serving major markets across Egypt and the MENA region with comprehensive logistics solutions.",
      icon: Truck,
      regions: ["Egypt", "MENA", "North Africa"],
    },
    {
      name: "UCP Distribution",
      description:
        "Specialized healthcare product distribution focusing on pharmaceutical and cosmeceutical products with nationwide coverage.",
      icon: Building2,
      regions: ["Nationwide", "Urban Centers", "Healthcare Facilities"],
    },
    {
      name: "Local Store Networks",
      description:
        "Extensive retail presence through local pharmacies and stores across Delta, Alexandria, and Upper Egypt regions.",
      icon: Store,
      regions: ["Delta", "Alexandria", "Upper Egypt", "Local Markets"],
    },
  ],

  // Young Giant Section Data
  youngGiant: {
    paragraphs: [
      "Though Pharmapack Pharmaceutical Industries is recently formed in its current structure, it stands as a testament to rapid growth and strategic vision in the pharmaceutical sector.",
      "Our company is strategically affiliated with established industry leaders, leveraging decades of collective experience and market expertise to accelerate our development and establish professional excellence in pharmaceutical manufacturing.",
      "This unique positioning allows us to combine the agility of a modern enterprise with the wisdom and stability of seasoned industry partnerships, creating a powerful foundation for sustainable growth and innovation.",
    ],
  },

  // Certificates Section Data
  certificates: {
    description:
      "Our commitment to excellence is validated through internationally recognized quality certifications, positioning us as a leading pharmaceutical manufacturer in the region.",
    certifications: [
      {
        name: "ISO 9001:2015",
        description:
          "International standard for Quality Management Systems, ensuring consistent product quality and customer satisfaction through systematic approach to quality control.",
        icon: FileCheck,
        year: "2015",
        file: "/PHARMAPACK PHARMACEUTICAL INDUSTRIES_9001.pdf",
      },
      {
        name: "ISO 14001:2015",
        description:
          "Environmental Management Systems certification, emphasizing our responsibility to minimize environmental impact and promote sustainability throughout our manufacturing processes.",
        icon: ShieldCheck,
        year: "2015",
        file: "/PHARMAPACK PHARMACEUTICAL INDUSTRIES_14001.pdf",
      },
      {
        name: "ISO 13485:2016",
        description:
          "Specifies requirements for a quality management system for medical devices and related services, ensuring safety, regulatory compliance, and performance reliability.",
        icon: FileCheck,
        year: "2016",
        file: "/ISO 13485 24.pdf",
      },
      {
        name: "GMP Certification",
        description:
          "Good Manufacturing Practice certification ensuring pharmaceutical products are consistently produced and controlled according to quality standards.",
        icon: AwardCert,
        year: "Current",
        file: "/PHARMAPACK PHARMACEUTICAL INDUSTRIES_GMP.pdf",
      },
      {
        name: "CE Marking",
        description:
          "Demonstrates compliance with EU safety, health, and environmental protection standards, allowing our products to be marketed in the European Economic Area.",
        icon: AwardCert,
        year: "2024",
        file: "/CE 24.pdf",
      },
    ],
  },
};

// Map icon names to components
export const iconMap = {
  Award,
  Shield,
  Users,
  Globe,
  Truck,
  Store,
  MapPin,
  Building2,
  TrendingUp,
  Target,
  FileCheck,
  AwardCert,
  ShieldCheck,
};
