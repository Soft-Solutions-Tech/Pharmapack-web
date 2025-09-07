"use client";
import React from "react";
import {
  Droplets,
  Package,
  Heart,
  User,
  TestTube,
  Waves,
  ArrowUpRight,
} from "lucide-react";

// Production lines data
const productionLines = [
  {
    id: 1,
    title: "Purified Water Production Line",
    description:
      "Pharmaceutical-grade purified water used for antibiotic dissolution and baby formulations.",
    icon: Droplets,
    features: ["Pharmaceutical Grade", "Baby Safe", "99.9% Pure"],
    href: "/production/purified-water",
  },
  {
    id: 2,
    title: "Wet Wipes Production Line",
    description:
      "Wide range of wipes in multiple sizes (single to 160 wipes) and specialized formulations, such as: Makeup remover, Anti-acne, Anti-aging, Mosquito repellent, Nail polish remover, Alcohol wipes, and more.",
    icon: Package,
    features: ["160+ Wipes", "Multi-Purpose", "Specialized Formula"],
    href: "/production/wet-wipes",
  },
  {
    id: 3,
    title: "Hydrogel Patches Production Line",
    description:
      "Specialized healthcare and skincare patches: Baby fever cooling patches, Pain-relieving patches (cold & hot), Period pain-relieving patches, Under-eye patches with targeted skin benefits.",
    icon: Heart,
    features: ["Healthcare Grade", "Pain Relief", "Targeted Care"],
    href: "/production/hydrogel-patches",
  },
  {
    id: 4,
    title: "Face Sheet Mask Production Line",
    description:
      "High-quality sheet masks infused with various formulations for: Hydration, Brightening, Anti-aging, Soothing & calming care, Customized solutions for skincare brands.",
    icon: User,
    features: ["Anti-Aging", "Custom Solutions", "Premium Quality"],
    href: "/production/face-masks",
  },
  {
    id: 5,
    title: "Lubricant Gel Production Line",
    description:
      "Multi-purpose gels for: Medical use – ultrasound examination lubrication, Personal care – intimate lubrication.",
    icon: TestTube,
    features: ["Medical Grade", "Multi-Purpose", "Safe Formula"],
    href: "/production/lubricant-gel",
  },
  {
    id: 6,
    title: "Sea Salt Water Production Line",
    description:
      "Natural sea salt water designed for medical and cosmetic applications.",
    icon: Waves,
    features: ["Natural Source", "Medical Use", "Cosmetic Grade"],
    href: "/production/sea-salt-water",
  },
];

const ProductionLines = () => {
  const handleCardClick = (href) => {
    // In a real Next.js app, this would use router.push(href) or Link component
    console.log(`Navigating to: ${href}`);
  };

  return (
    <section className="py-20 px-6 bg-brand-white relative overflow-hidden">
      {/* Subtle background pattern */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-brand-gray"></div>
            <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
              Manufacturing Excellence
            </span>
            <div className="h-px w-12 bg-brand-gray"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-black mb-6 tracking-tight">
            Production{" "}
            <span className="font-normal text-brand-gray">Capabilities</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-light">
              Six specialized production lines delivering pharmaceutical-grade
              solutions with precision engineering and uncompromising quality
              standards.
            </p>
          </div>
        </div>

        {/* Production Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productionLines.map((line, index) => {
            const IconComponent = line.icon;

            return (
              <div
                key={line.id}
                onClick={() => handleCardClick(line.href)}
                className="group bg-brand-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-brand-gray/20 flex flex-col"
                style={{
                  transform: "translateY(0)",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Card Header */}
                <div className="p-8 pb-6 flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-brand-white/80 rounded-xl group-hover:bg-brand-red transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-brand-gray group-hover:text-brand-white transition-colors duration-300" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-brand-gray group-hover:text-brand-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-medium text-brand-black mb-3 leading-snug group-hover:text-brand-red">
                    {line.title}
                  </h3>

                  <p className="text-brand-gray text-sm leading-relaxed line-clamp-3 mb-6">
                    {line.description}
                  </p>
                </div>

                {/* Features Tags */}
                <div className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2">
                    {line.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1 bg-brand-gray/10 text-brand-gray text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="h-1 bg-brand-gray/20 group-hover:bg-brand-red transition-colors duration-300 mt-auto"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-brand-gray hover:text-brand-black transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium tracking-wide">
              Explore All Capabilities
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProductionLines;
