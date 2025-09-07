"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Brand colors defined as CSS custom properties (assumed global, or add to global.css)
const brandStyles = `
  :root {
    --color-brand-red: #6E0D0F;
    --color-brand-gray: #5F6062;
    --color-brand-white: #FBFEF9;
    --color-brand-black: #000000;
  }
`;

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
  return (
    <>
      <style>{brandStyles}</style>
      <div
        className="relative w-full h-[100vh] overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
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
            {/* Fallback background for when video doesn't load */}
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
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 tracking-tight leading-tight text-left"
            style={{ color: "#FBFEF9" }}
            variants={itemVariants}
          >
            Transforming Business
            <br />
            <span className="font-normal">Through Innovation</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed font-light text-left"
            style={{ color: "#D1D5DB" }}
            variants={itemVariants}
          >
            We deliver strategic solutions that drive sustainable growth and
            create lasting value for organizations worldwide.
          </motion.p>

          {/* CTA Button (matches Discover Our Story from IntroSection) */}
          <motion.div variants={buttonVariants}>
            <motion.button
              className="group relative bg-brand-black text-brand-white px-8 py-4 overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Discover our solutions"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-red transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <span className="text-lg font-medium">
                  Discover Our Solutions
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
