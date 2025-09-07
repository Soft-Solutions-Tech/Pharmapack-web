"use client";

import React from "react";
import { motion } from "framer-motion";
import { visionMissionContent, iconMap } from "@/data/vision-mission-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const accentLineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function VisionMissionSection() {
  const handleCardClick = (website) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-32 px-6 bg-brand-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-20 bg-brand-gray/30"></div>
            <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
              {visionMissionContent.headerLabel}
            </span>
            <div className="h-px w-20 bg-brand-gray/30"></div>
          </div>

          <h2
            className="text-5xl md:text-6xl font-light text-brand-black mb-8 tracking-tight"
            dangerouslySetInnerHTML={{
              __html: `Vision & <span className="font-light text-brand-gray">${visionMissionContent.headlineHighlight}</span>`,
            }}
          />

          <p className="text-xl md:text-2xl text-brand-gray font-light max-w-3xl mx-auto leading-relaxed">
            {visionMissionContent.subtitle}
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {visionMissionContent.cards.map((card) => {
            const IconComponent = iconMap[card.icon];

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => handleCardClick(card.website)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl p-12 shadow-md border border-brand-gray/10 h-full flex flex-col relative overflow-hidden">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-brand-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 bg-brand-white rounded-2xl flex items-center justify-center group-hover:bg-brand-gray/10 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-brand-red group-hover:text-brand-gray transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-3xl font-light text-brand-black mb-6 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-brand-gray leading-[1.8] text-lg font-light">
                      {card.description}
                    </p>
                  </div>

                  {/* Accent line */}
                  <motion.div
                    variants={accentLineVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-0 left-0 w-full h-1 bg-brand-red"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20 pt-16 border-t border-brand-gray/10"
        >
          <p className="text-lg text-brand-gray font-light max-w-2xl mx-auto leading-relaxed">
            {visionMissionContent.bottomStatement}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
