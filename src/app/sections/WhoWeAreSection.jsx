"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { whoWeAreContent, iconMap } from "@/data/who-we-are-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

export default function WhoWeAreSection() {
  const handleCardClick = (website) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
              {whoWeAreContent.headerLabel}
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 tracking-tight"
            dangerouslySetInnerHTML={{
              __html: `Who <span className="font-light text-gray-700">${whoWeAreContent.headlineHighlight}</span>`,
            }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          {/* Left - Description */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3
              className="text-3xl md:text-4xl font-light text-gray-900 leading-tight"
              dangerouslySetInnerHTML={{
                __html: `Transforming Ideas into <span className="text-gray-700">${whoWeAreContent.descriptionTitleHighlight}</span>`,
              }}
            />

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              {whoWeAreContent.descriptionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {whoWeAreContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl font-extralight text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pharmapack-facility.jpg" // Replace with actual image path
                alt="Pharmapack manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whoWeAreContent.coreValues.map((value) => {
            const IconComponent = iconMap[value.icon];

            return (
              <motion.div
                key={value.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => handleCardClick(value.website)}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-200/20 flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/80 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-3 leading-snug group-hover:text-gray-700">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="h-1 bg-gray-200/20 group-hover:bg-gray-500 transition-colors duration-300 mt-auto"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
