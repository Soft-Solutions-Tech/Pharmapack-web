"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { introContent, iconMap } from "@/data/intro-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Count-up animation utility
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps
    let animationFrame;

    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.round(start * 10) / 10);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

export default function IntroSection() {
  const handleCTAClick = () => {
    const section = document.getElementById("ClientsSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreClick = () => {
    const section = document.getElementById("PharmaPackServices");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Count-up values for metrics
  const yearsCount = useCountUp(introContent.metrics[0].value, 10000);
  const marketsCount = useCountUp(introContent.metrics[1].value, 10000);
  const productsCount = useCountUp(introContent.metrics[2].value, 10000);
  const qualityCount = useCountUp(introContent.metrics[3].value, 10000);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Premium background with subtle patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="min-h-screen grid lg:grid-cols-12 gap-16 items-center py-20">
            {/* Left Content - 7 columns */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-12"
            >
              {/* Premium brand indicator */}
              <motion.div
                variants={slideUpVariants}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-px"></div>
                  <iconMap.Globe className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-500 tracking-[0.2em] uppercase">
                    {introContent.headerLabel}
                  </span>
                </div>
              </motion.div>

              {/* Updated Hero headline */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-brand-black tracking-tight leading-[1.1] mb-8 lg:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {introContent.headline}{" "}
                <span className="font-normal text-brand-red relative">
                  {introContent.headlineHighlight}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                  />
                </span>
              </motion.h1>

              {/* Sophisticated subtitle */}
              <motion.div variants={slideUpVariants} className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-extralight text-gray-500 leading-relaxed max-w-2xl">
                  {introContent.subtitle}
                </h2>

                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl font-light">
                  {introContent.description}
                </p>
              </motion.div>

              {/* Premium action buttons */}
              <motion.div
                variants={slideUpVariants}
                className="flex flex-col sm:flex-row gap-6 pt-8"
              >
                <motion.button
                  onClick={handleCTAClick}
                  className="group relative bg-brand-black text-brand-white px-8 py-4 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={introContent.ctaPrimary.text}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-red transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="text-lg font-medium">
                      {introContent.ctaPrimary.text}
                    </span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.button>

                <motion.button
                  onClick={handleExploreClick}
                  className="group text-brand-black px-8 py-4 border border-gray-500 hover:border-brand-red transition-all duration-300 relative overflow-hidden rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={introContent.ctaSecondary.text}
                >
                  <div className="absolute inset-0 bg-brand-red -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-3 group-hover:text-brand-white transition-colors duration-500">
                    <span className="text-lg font-medium">
                      {introContent.ctaSecondary.text}
                    </span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - 5 columns */}
            <motion.div
              variants={scaleInVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 relative"
            >
              {/* Main hero image */}
              <div className="relative h-[600px] lg:h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-transparent z-10 rounded-2xl"></div>
                <Image
                  src="/medicine.jpg"
                  alt="State-of-the-art pharmaceutical manufacturing facility"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                />

                {/* Floating achievement cards */}
                {introContent.achievements.map((achievement, index) => {
                  const IconComponent = iconMap[achievement.icon];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                      className={`absolute ${
                        index === 0 ? "top-8 -left-8" : "bottom-8 -right-8"
                      } bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/20`}
                    >
                      <div className="flex items-center space-x-4">
                        <IconComponent className="w-8 h-8 text-brand-red" />
                        <div>
                          <div className="text-2xl font-bold text-brand-black">
                            {achievement.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {achievement.subtitle}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="border-t border-gray-200/20 bg-white/80 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {introContent.metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-extralight text-brand-black mb-2 group-hover:scale-110 transition-transform duration-300">
                    {index === 0
                      ? `${yearsCount}+`
                      : index === 1
                        ? `${(marketsCount / 1000000).toFixed(1)}M+`
                        : index === 2
                          ? `${(productsCount / 1000000).toFixed(1)}M+`
                          : `${qualityCount}%`}
                  </div>
                  <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
