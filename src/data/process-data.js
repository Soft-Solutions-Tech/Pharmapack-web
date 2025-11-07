import { Search, Compass, FileText, Cog, CheckCircle } from "lucide-react";

export const processContent = {
  headerLabel: "Methodology",
  headline: "Process",
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
    },
    {
      id: 2,
      title: "Strategy",
      description:
        "Development of tailored roadmaps, formulations, and implementation plans aligned with your brand’s vision.",
      icon: "Compass",
      number: "02",
    },
    {
      id: 3,
      title: "Product Registration",
      description:
        "Preparing all required documentation, supporting clients in registering products with relevant authorities, ensuring smooth regulatory approval for market launch.",
      icon: "FileText",
      number: "03",
    },
    {
      id: 4,
      title: "Manufacturing",
      description:
        "Precision production using advanced machinery across 7 GMP-compliant production lines, including purified water, wet wipes, hydrogel patches, face sheet masks, semi-solid formulations, sea water, and paraffin gauze dressings, with rigorous quality assurance.",
      icon: "Cog",
      number: "04",
    },
    {
      id: 5,
      title: "Excellence",
      description:
        "Seamless delivery with custom packaging, compliance support, and ongoing optimization to ensure market success.",
      icon: "CheckCircle",
      number: "05",
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
