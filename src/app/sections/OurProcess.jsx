"use client";

import React from "react";
import { motion } from "framer-motion";
import { processContent, iconMap } from "@/data/process-data";

// Animation variants
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  step: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
};

export default function OurProcess() {
  return (
    <section className="relative pt-32 pb-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <ProcessHeader />
        <ProcessSteps />
      </div>
    </section>
  );
}

// Process Header Component
function ProcessHeader() {
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
        {processContent.headerLabel}
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
      Our{" "}
      <span className="font-normal text-brand-red relative">
        {processContent.headline}
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
        {processContent.subheadline}
      </p>
    </motion.div>
  );
}

// Process Steps Component
function ProcessSteps() {
  return (
    <motion.div
      variants={animations.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative mb-20 sm:mb-24 lg:mb-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 justify-items-center">
        {processContent.processSteps.map((step, index) => (
          <ProcessStep key={step.id} step={step} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

// Individual Process Step Component
function ProcessStep({ step, index }) {
  const IconComponent = iconMap[step.icon];

  return (
    <motion.div
      variants={animations.step}
      className="group relative w-full max-w-md cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <StepNumber number={index + 1} />
      <StepCard step={step} index={index} IconComponent={IconComponent} />
    </motion.div>
  );
}

// Step Number Component
function StepNumber({ number }) {
  return (
    <motion.div
      className="absolute -top-6 left-8 w-12 h-12 bg-white border-2 border-gray-200 group-hover:border-brand-red rounded-full flex items-center justify-center text-sm font-medium text-brand-gray group-hover:text-brand-red transition-all duration-200 shadow-sm z-10"
      whileHover={{ scale: 1.1 }}
    >
      {number}
    </motion.div>
  );
}

// Step Card Component
function StepCard({ step, index, IconComponent }) {
  return (
    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20 p-10 sm:p-12 relative overflow-hidden w-full h-full flex flex-col">
      <CardBackground />
      <CardContent step={step} index={index} IconComponent={IconComponent} />
      <CardAccent index={index} />
      <CardOverlay />
    </div>
  );
}

// Card Background Component
function CardBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 group-hover:to-brand-red/5 transition-all duration-300" />
  );
}

// Card Content Component
function CardContent({ step, index, IconComponent }) {
  return (
    <div className="relative space-y-8 flex flex-col flex-grow">
      <motion.div
        className="w-20 h-20 bg-gray-50 group-hover:bg-brand-red/10 rounded-2xl flex items-center justify-center transition-all duration-200 mx-auto"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 },
        }}
      >
        <IconComponent className="w-10 h-10 text-brand-gray group-hover:text-brand-red transition-colors duration-200" />
      </motion.div>
      <h3 className="text-2xl sm:text-3xl font-medium text-brand-black group-hover:text-brand-red transition-colors duration-200 leading-tight text-center">
        {step.title}
      </h3>
      <div className="flex-grow flex items-center">
        <p className="text-brand-gray text-base sm:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-200 text-center">
          {step.description}
        </p>
      </div>
      <motion.div
        className="w-16 h-1 bg-gray-200 group-hover:bg-brand-red mx-auto transition-colors duration-200 rounded-full mt-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      />
    </div>
  );
}

// Card Accent Component
function CardAccent({ index }) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200/40 via-gray-300/60 to-gray-200/40 group-hover:from-brand-red/60 group-hover:via-brand-red group-hover:to-brand-red/60 transition-all duration-300 rounded-b-2xl lg:rounded-b-3xl"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    />
  );
}

// Card Overlay Component
function CardOverlay() {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl lg:rounded-3xl" />
  );
}
