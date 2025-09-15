"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { whoWeAreContent } from "@/data/who-we-are-data";

// Smooth, sleek animations without delays
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

// View-only button with no download functionality
const ViewButton = ({ cert }) => {
  const handleViewClick = (e) => {
    e.stopPropagation();

    if (!cert.file) {
      alert(`Certificate for ${cert.name} is not available yet.`);
      return;
    }
  };

  return (
    <motion.button
      onClick={handleViewClick}
      disabled={!cert.file}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full inline-flex items-center justify-center gap-2 px-6 py-3 
        text-sm font-medium rounded-xl transition-all duration-200
        ${
          cert.file
            ? "bg-brand-red hover:bg-brand-red/90 text-white shadow-sm hover:shadow-md"
            : "bg-gray-100 text-gray-500 cursor-not-allowed"
        }
      `}
      aria-label={`View ${cert.name} certificate`}
    >
      <span>{cert.file ? "View Certificate" : "Coming Soon"}</span>
      {cert.file && <ExternalLink className="w-4 h-4" />}
    </motion.button>
  );
};

export default function CertificatesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          {/* Simplified header design */}
          <div className="inline-flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-brand-red" />
            <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
              Quality Assurance
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light text-brand-black mb-6">
            International{" "}
            <span className="font-medium text-brand-red">Certificates</span>
          </h3>

          <p className="text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
            {whoWeAreContent.certificates.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {whoWeAreContent.certificates.certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-white hover:border-brand-red/10"
            >
              {/* Improved card layout */}
              <div className="flex flex-col h-full">
                {/* Header with icon and action */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <cert.icon className="w-7 h-7 text-brand-red" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 mb-6">
                  <h4 className="text-xl font-semibold text-brand-black mb-3 leading-tight">
                    {cert.name}
                  </h4>

                  <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Simplified year badge */}
                  <span className="inline-block px-3 py-1 bg-brand-red/10 text-xs font-medium text-brand-red rounded-lg">
                    {cert.year}
                  </span>
                </div>

                {/* CTA Button */}
                <ViewButton cert={cert} variant="primary" />
              </div>

              {/* Removed red hover accent line */}
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Add a subtle call-to-action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-brand-gray text-sm">
            All certificates are internationally recognized and regularly
            updated
          </p>
        </motion.div>
      </div>
    </section>
  );
}
