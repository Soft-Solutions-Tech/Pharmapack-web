"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { productionContent, iconMap } from "@/data/production-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProductionLines = () => {
  const handleCardClick = (website) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  const handleCtaClick = () => {
    if (productionContent.ctaWebsite) {
      window.open(
        productionContent.ctaWebsite,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section id="production-lines" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-10"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-brand-gray"></div>
            <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
              {productionContent.badge}
            </span>
            <div className="h-px w-12 bg-brand-gray"></div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-black mb-6 tracking-tight"
            variants={cardVariants}
            dangerouslySetInnerHTML={{
              __html: `${productionContent.titlePart1} <span className="font-normal text-brand-gray">${productionContent.titlePart2}</span>`,
            }}
          />

          <motion.div variants={cardVariants} className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-light">
              {productionContent.subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* Production Lines Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productionContent.productionLines.map((line, index) => {
            const IconComponent = iconMap[line.icon];

            return (
              <motion.div
                key={line.id}
                variants={cardVariants}
                onClick={() => handleCardClick(line.website)}
                className="group bg-white  shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-brand-gray/20 flex flex-col"
              >
                {/* Card Header */}
                <div className="p-8 pb-6 flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/80 rounded-xl group-hover:bg-brand-red transition-colors duration-300">
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
                <div className="h-1 bg-brand-gray/20 group-hover:bg-brand-red transition-colors duration-300 mt-auto "></div>

                {/* Hover indicator */}
              </motion.div>
            );
          })}
        </motion.div>
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
