"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Cog, CheckCircle } from "lucide-react";
import { processContent } from "@/data/process-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function OurProcess() {
  const handleStepClick = (website) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  // Map icon names to components
  const iconMap = {
    Search,
    Compass,
    Cog,
    CheckCircle,
  };

  return (
    <section className="py-32 px-8 bg-white relative">
      {/* Minimal background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-32"
        >
          <div className="mb-12">
            <div className="inline-block h-px w-24 bg-black/20 mb-8"></div>
            <span className="block text-xs font-medium text-gray-500 tracking-[0.3em] uppercase mb-8">
              {processContent.headerLabel}
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-thin text-black mb-12 tracking-tight leading-[0.85]">
            {processContent.headline}
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 leading-[1.6] font-light">
              {processContent.subheadline}
            </p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Minimal connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-16">
            {processContent.processSteps.map((step) => {
              const IconComponent = iconMap[step.icon];

              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className="group relative text-center cursor-pointer"
                  onClick={() => handleStepClick(step.website)}
                >
                  {/* Icon */}
                  <div className="mb-10">
                    <div className="w-12 h-12 mx-auto flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-black/70 transition-colors duration-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-black tracking-tight leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 leading-[1.7] text-sm max-w-xs mx-auto font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Subtle hover line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-px bg-black/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Minimal closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="text-center mt-32 pt-20 border-t border-gray-100"
        >
          <p className="text-lg text-gray-400 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            {processContent.closingStatement}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
