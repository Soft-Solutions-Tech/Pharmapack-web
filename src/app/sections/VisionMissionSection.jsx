"use client";

import React from "react";
import { motion } from "framer-motion";
import { visionMissionContent, iconMap } from "@/data/vision-mission-data";

// Animation variants
const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  card: {
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
  },
  accentLine: {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },
};

// Header Section Component
function HeaderSection() {
  return (
    <motion.div
      variants={animations.fadeUp}
      initial="hidden"
      animate="visible"
      className="text-center mb-20 sm:mb-24 lg:mb-32"
    >
      <HeaderLabel />
      <HeaderTitle />
      <HeaderSubtitle />
    </motion.div>
  );
}

// Header Label Component
function HeaderLabel() {
  return (
    <div className="inline-flex items-center gap-4 mb-6 sm:mb-8">
      <motion.div
        className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-brand-gray to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 0.8 }}
      />
      <span className="text-xs sm:text-sm font-medium text-brand-gray tracking-[0.2em] uppercase">
        {visionMissionContent.headerLabel}
      </span>
      <motion.div
        className="h-px w-8 sm:w-12 bg-gradient-to-r from-brand-gray via-transparent to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

// Header Title Component
function HeaderTitle() {
  return (
    <motion.h2
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-brand-black tracking-tight leading-[1.1] mb-8 lg:mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Vision &{" "}
      <span className="font-normal text-brand-red relative">
        {visionMissionContent.headlineHighlight}
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </span>
    </motion.h2>
  );
}

// Header Subtitle Component
function HeaderSubtitle() {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-lg sm:text-xl lg:text-2xl text-brand-gray leading-relaxed font-light">
        {visionMissionContent.subtitle}
      </p>
    </motion.div>
  );
}

export default function VisionMissionSection() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <HeaderSection />

        {/* Vision & Mission Cards */}
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
        >
          {visionMissionContent.cards.map((card) => {
            const IconComponent = iconMap[card.icon];

            return (
              <motion.div
                key={card.id}
                variants={animations.card}
                whileHover="hover"
                className="group relative"
              >
                <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm md:shadow-md border border-gray-100 hover:border-brand-red/20 h-full flex flex-col relative overflow-hidden">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-brand-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6 md:mb-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-brand-red/10 transition-all duration-300">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-brand-gray group-hover:text-brand-red transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl md:text-3xl font-light text-brand-black mb-4 md:mb-6 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-base md:text-lg text-brand-gray leading-[1.8] font-light">
                      {card.description}
                    </p>
                  </div>

                  {/* Accent line */}
                  <motion.div
                    variants={animations.accentLine}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red/60 via-brand-red to-brand-red/60"
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
          className="text-center mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-100"
        >
          <p className="text-base md:text-lg text-brand-gray font-light max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            {visionMissionContent.bottomStatement}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
