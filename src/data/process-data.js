import { Search, Compass, FileText, Cog, CheckCircle } from "lucide-react";

export const processContent = {
  headerLabel: "Methodology",
  headline: "Our Process",
  subheadline:
    "A disciplined methodology that transforms ideas into market-ready products through systematic excellence.",
  closingStatement:
    "Every project follows this refined methodology, ensuring consistent quality and successful market entry.",
  processSteps: [
    {
      id: 1,
      title: "Discovery",
      description:
        "Comprehensive analysis of client needs, market trends, and strategic objectives to establish a solid project foundation.",
      icon: "Search",
      number: "01",
      website: "https://pharmapack.com/discovery",
    },
    {
      id: 2,
      title: "Strategy",
      description:
        "Development of tailored roadmaps, formulations, and implementation plans aligned with your brand’s vision.",
      icon: "Compass",
      number: "02",
      website: "https://pharmapack.com/strategy",
    },
    {
      id: 3,
      title: "Product Registration",
      description:
        "Preparing required documentation and supporting clients in registering products with relevant authorities for smooth market approval.",
      icon: "FileText",
      number: "03",
      website: "https://pharmapack.com/product-registration",
    },
    {
      id: 4,
      title: "Manufacturing",
      description:
        "Precision production using advanced machinery across 7 GMP-compliant production lines, with rigorous quality assurance.",
      icon: "Cog",
      number: "04",
      website: "https://pharmapack.com/manufacturing",
    },
    {
      id: 5,
      title: "Excellence",
      description:
        "Seamless delivery with custom packaging, compliance support, and ongoing optimization to ensure market success.",
      icon: "CheckCircle",
      number: "05",
      website: "https://pharmapack.com/excellence",
    },
  ],
};

// Map icon names to components
export const iconMap = {
  Search,
  Compass,
  FileText,
  Cog,
  CheckCircle,
};
