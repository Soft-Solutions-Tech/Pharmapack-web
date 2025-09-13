"use client";

import React from "react";
import { motion } from "framer-motion";
import { whoWeAreContent } from "@/data/who-we-are-data";

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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function CertificatesSection() {
  return (
    <section className="relative px-4 sm:px-4 lg:px-6 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.section
          id="certificates"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 sm:mb-24 lg:mb-32"
        >
          <div className="text-center mb-12 lg:mb-16">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-4 mb-6">
                <motion.div
                  className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-brand-gray to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ duration: 0.8 }}
                />
                <span className="text-xs sm:text-sm font-medium text-brand-gray tracking-[0.2em] uppercase">
                  Quality Assurance
                </span>
                <motion.div
                  className="h-px w-8 sm:w-12 bg-gradient-to-r from-brand-gray via-transparent to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-black tracking-tight leading-tight mb-6">
                International{" "}
                <span className="font-normal text-brand-red relative">
                  Certificates
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </span>
              </h3>

              <p className="text-lg sm:text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto">
                {whoWeAreContent.certificates.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {whoWeAreContent.certificates.certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20 cursor-default overflow-hidden"
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 bg-brand-red/10 group-hover:bg-brand-red/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-200"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <cert.icon className="w-8 h-8 text-brand-red" />
                  </motion.div>

                  <h4 className="text-xl sm:text-2xl font-medium text-brand-black mb-3 group-hover:text-brand-red transition-colors duration-200">
                    {cert.name}
                  </h4>

                  <p className="text-brand-gray text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-200 mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-brand-red/10 text-xs font-medium text-brand-red rounded-full">
                      {cert.year}
                    </span>

                    <motion.div
                      className="w-8 h-1 bg-gray-200 group-hover:bg-brand-red/60 rounded-full transition-all duration-200"
                      whileHover={{ width: "3rem" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}
