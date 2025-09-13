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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

export default function WhoWeAreSection() {
  return (
    <section className="relative py-28 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <HeaderSection />

        {/* Main Content - Description and Image Side by Side */}
        <MainContentSection />

        {/* Stats Section - Full Width Under Image */}
        <StatsSection />

        {/* Core Values */}
        <CoreValuesSection />

        {/* Distribution Channels Section */}
        <DistributionChannelsSection />

        {/* The Young Giant Section */}
        <YoungGiantSection />

        {/* Certificates Section */}
        <CertificatesSection />
      </div>
    </section>
  );
}

// Header Section Component
function HeaderSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center mb-20 sm:mb-24 lg:mb-32"
    >
      <HeaderLabel />
      <HeaderTitle />
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
        {whoWeAreContent.headerLabel}
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
      Who{" "}
      <span className="font-normal text-brand-red relative">
        {whoWeAreContent.headlineHighlight}
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

// Main Content Section Component
function MainContentSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start mb-12 lg:mb-16"
    >
      {/* Left - Description */}
      <DescriptionSection />

      {/* Right - Image */}
      <ImageSection />
    </motion.div>
  );
}

// Description Section Component
function DescriptionSection() {
  return (
    <motion.div variants={itemVariants} className="space-y-8 lg:space-y-10">
      <motion.h3
        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-brand-black leading-tight"
        variants={itemVariants}
      >
        Transforming Ideas into{" "}
        <span className="text-brand-red font-normal relative">
          {whoWeAreContent.descriptionTitleHighlight}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-brand-red/40"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        </span>
      </motion.h3>

      <motion.div
        className="space-y-6 lg:space-y-8 text-base sm:text-lg lg:text-xl text-brand-gray leading-relaxed"
        variants={itemVariants}
      >
        {whoWeAreContent.descriptionParagraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: paragraph }}
            className="prose prose-lg prose-gray max-w-none"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// Image Section Component
function ImageSection() {
  return (
    <motion.div variants={imageVariants} className="relative">
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
        <Image
          src="/formulation.jpg"
          alt="Pharmapack manufacturing facility"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-red/5" />
      </div>
    </motion.div>
  );
}

// Stats Section Component
function StatsSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-20 sm:mb-24 lg:mb-32"
    >
      <div className="bg-gray-50/50 rounded-2xl lg:rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-100">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {whoWeAreContent.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="text-center group cursor-default"
            >
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-brand-black mb-3 lg:mb-4 group-hover:text-brand-red transition-colors duration-300"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm sm:text-base font-medium text-brand-gray tracking-wider uppercase leading-tight group-hover:text-gray-700 transition-colors duration-300">
                {stat.label}
              </div>

              {/* Decorative line */}
              <motion.div
                className="w-12 h-0.5 bg-gray-300 group-hover:bg-brand-red mx-auto mt-4 transition-colors duration-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Core Values Section Component
function CoreValuesSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 mb-20 sm:mb-24 lg:mb-32"
    >
      {whoWeAreContent.coreValues.map((value) => {
        const IconComponent = iconMap[value.icon];

        return (
          <CoreValueCard
            key={value.id}
            value={value}
            IconComponent={IconComponent}
          />
        );
      })}
    </motion.div>
  );
}

// Core Value Card Component
function CoreValueCard({ value, IconComponent }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group relative bg-white rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-200 border border-gray-100 hover:border-brand-red/20 flex flex-col overflow-hidden cursor-default"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 group-hover:to-brand-red/5 transition-all duration-200" />

      <div className="relative p-6 sm:p-8 flex-grow">
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="p-3 sm:p-4 bg-gray-50 group-hover:bg-brand-red/10 rounded-xl lg:rounded-2xl transition-all duration-200"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
          >
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gray group-hover:text-brand-red transition-colors duration-200" />
          </motion.div>

          <motion.div
            className="w-8 h-1 bg-gray-200 group-hover:bg-brand-red/40 rounded-full transition-all duration-200"
            whileHover={{
              width: "3rem",
              transition: { duration: 0.2 },
            }}
          />
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-brand-black mb-4 leading-tight group-hover:text-brand-red transition-colors duration-200">
          {value.title}
        </h3>

        <p className="text-brand-gray text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
          {value.description}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
    </motion.div>
  );
}

// Distribution Channels Section
function DistributionChannelsSection() {
  return (
    <motion.section
      id="distribution-channels"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-20 sm:mb-24 lg:mb-32"
    >
      <div className="bg-gradient-to-br from-gray-50/80 to-white rounded-3xl p-8 sm:p-10 lg:p-16 border border-gray-100 shadow-sm">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-brand-red to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8 }}
            />
            <span className="text-xs sm:text-sm font-medium text-brand-red tracking-[0.2em] uppercase">
              Distribution Network
            </span>
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-brand-red via-transparent to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-black tracking-tight leading-tight">
            Distribution{" "}
            <span className="font-normal text-brand-red relative">
              Channels
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {whoWeAreContent.distributionChannels.map((channel, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20 cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 group-hover:to-brand-red/5 transition-all duration-200 rounded-2xl" />

              <div className="relative">
                <motion.div
                  className="w-12 h-12 bg-brand-red/10 group-hover:bg-brand-red/20 rounded-xl flex items-center justify-center mb-6 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <channel.icon className="w-6 h-6 text-brand-red" />
                </motion.div>

                <h4 className="text-xl sm:text-2xl font-medium text-brand-black mb-4 group-hover:text-brand-red transition-colors duration-200">
                  {channel.name}
                </h4>

                <p className="text-brand-gray text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-200 mb-4">
                  {channel.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {channel.regions.map((region, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 group-hover:bg-brand-red/10 text-xs font-medium text-brand-gray group-hover:text-brand-red rounded-full transition-all duration-200"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// The Young Giant Section
function YoungGiantSection() {
  return (
    <motion.section
      id="young-giant"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-20 sm:mb-24 lg:mb-32"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Left - Content */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-10">
          <div className="inline-flex items-center gap-4 mb-6">
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-brand-red to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8 }}
            />
            <span className="text-xs sm:text-sm font-medium text-brand-red tracking-[0.2em] uppercase">
              Our Journey
            </span>
          </div>

          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-black leading-tight"
            variants={itemVariants}
          >
            The Young{" "}
            <span className="font-normal text-brand-red relative">
              Giant
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-brand-red/40"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </span>
          </motion.h3>

          <motion.div
            className="space-y-6 lg:space-y-8 text-base sm:text-lg lg:text-xl text-brand-gray leading-relaxed"
            variants={itemVariants}
          >
            {whoWeAreContent.youngGiant.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="prose prose-lg prose-gray max-w-none"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            {whoWeAreContent.youngGiant.affiliations.map(
              (affiliation, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-brand-red/10 to-brand-red/5 rounded-full border border-brand-red/20 text-sm font-medium text-brand-red cursor-default"
                >
                  {affiliation}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right - Visual Element */}
        <motion.div variants={imageVariants} className="relative">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-brand-red/5 to-gray-100/50 rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-brand-red/20 rounded-2xl rotate-12" />
            <div className="absolute top-20 right-12 w-12 h-12 bg-brand-red/15 rounded-xl -rotate-6" />
            <div className="absolute bottom-16 left-12 w-20 h-20 bg-brand-red/10 rounded-3xl rotate-45" />

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <motion.div
                  className="w-24 h-24 bg-brand-red/20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-brand-red rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h4 className="text-2xl font-light text-brand-black mb-2">
                  Growing Fast
                </h4>
                <p className="text-brand-gray text-sm">
                  Building tomorrow's pharmaceutical excellence
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Certificates Section
function CertificatesSection() {
  return (
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
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-brand-red to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8 }}
            />
            <span className="text-xs sm:text-sm font-medium text-brand-red tracking-[0.2em] uppercase">
              Quality Assurance
            </span>
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-brand-red via-transparent to-transparent"
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
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-red/3 to-transparent rounded-full translate-y-12 -translate-x-12" />

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
  );
}
