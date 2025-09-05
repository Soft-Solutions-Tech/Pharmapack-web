"use client";
import React from 'react';
import { Droplets, Package, Heart, User, TestTube, Waves, ArrowRight } from "lucide-react";

// Production lines data
const productionLines = [
  {
    id: 1,
    title: "Purified Water Production Line",
    description: "Pharmaceutical-grade purified water used for antibiotic dissolution and baby formulations.",
    icon: Droplets,
    features: ["Pharmaceutical Grade", "Baby Safe", "99.9% Pure"],
    href: "/production/purified-water"
  },
  {
    id: 2,
    title: "Wet Wipes Production Line",
    description: "Wide range of wipes in multiple sizes (single to 160 wipes) and specialized formulations, such as: Makeup remover, Anti-acne, Anti-aging, Mosquito repellent, Nail polish remover, Alcohol wipes, and more.",
    icon: Package,
    features: ["160+ Wipes", "Multi-Purpose", "Specialized Formula"],
    href: "/production/wet-wipes"
  },
  {
    id: 3,
    title: "Hydrogel Patches Production Line",
    description: "Specialized healthcare and skincare patches: Baby fever cooling patches, Pain-relieving patches (cold & hot), Period pain-relieving patches, Under-eye patches with targeted skin benefits.",
    icon: Heart,
    features: ["Healthcare Grade", "Pain Relief", "Targeted Care"],
    href: "/production/hydrogel-patches"
  },
  {
    id: 4,
    title: "Face Sheet Mask Production Line",
    description: "High-quality sheet masks infused with various formulations for: Hydration, Brightening, Anti-aging, Soothing & calming care, Customized solutions for skincare brands.",
    icon: User,
    features: ["Anti-Aging", "Custom Solutions", "Premium Quality"],
    href: "/production/face-masks"
  },
  {
    id: 5,
    title: "Lubricant Gel Production Line",
    description: "Multi-purpose gels for: Medical use – ultrasound examination lubrication, Personal care – intimate lubrication.",
    icon: TestTube,
    features: ["Medical Grade", "Multi-Purpose", "Safe Formula"],
    href: "/production/lubricant-gel"
  },
  {
    id: 6,
    title: "Sea Salt Water Production Line",
    description: "Natural sea salt water designed for medical and cosmetic applications.",
    icon: Waves,
    features: ["Natural Source", "Medical Use", "Cosmetic Grade"],
    href: "/production/sea-salt-water"
  },
];

const ProductionLines = () => {
  const handleCardClick = (href) => {
    alert(`Navigating to: ${href}`);
  };

  return (
    <section className="py-10 px-4 bg-white ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-brand-black mb-6">
            Production <span className="font-normal">Excellence</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto leading-relaxed">
            State-of-the-art manufacturing facilities delivering pharmaceutical-grade products with uncompromising quality, precision, and innovation across six specialized production lines.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productionLines.map((line) => {
            const IconComponent = line.icon;
            return (
              <div
                key={line.id}
                onClick={() => handleCardClick(line.href)}
                className="group relative bg-brand-white border border-brand-gray/20 rounded-2xl p-8 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center group-hover:bg-brand-red/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-brand-red" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-brand-black mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {line.title}
                </h3>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {line.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs text-brand-gray bg-brand-white/50 px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-end">
                  <ArrowRight className="w-5 h-5 text-brand-gray group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductionLines;