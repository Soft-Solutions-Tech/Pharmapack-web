"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroContent } from "@/data/hero-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

export default function HeroBanner() {
  const handleCtaClick = () => {
    const section = document.getElementById("production-lines");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/pharma-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="absolute bottom-8 left-6 sm:bottom-4 sm:left-10 lg:bottom-6 lg:left-12 z-20 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 tracking-tight leading-tight text-left text-brand-white"
          variants={itemVariants}
          dangerouslySetInnerHTML={{
            __html: `${heroContent.headline}<br />${heroContent.headlineHighlight}`,
          }}
        />

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed font-light text-left text-gray-300"
          variants={itemVariants}
        >
          {heroContent.subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={buttonVariants}>
          <motion.button
            className="group relative bg-brand-black text-brand-white px-8 py-4 rounded-lg overflow-hidden cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label={heroContent.ctaText}
            onClick={handleCtaClick}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-red transition-opacity duration-300 group-hover:opacity-90"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <span className="text-lg font-medium">{heroContent.ctaText}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
