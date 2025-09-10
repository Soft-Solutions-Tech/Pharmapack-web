"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { teamContent } from "@/data/team-data";

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        {teamContent.headerLabel}
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
      Meet{" "}
      <span className="font-normal text-brand-red relative">
        {teamContent.headlineHighlight}
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
        {teamContent.subheadline}
      </p>
    </motion.div>
  );
}

export default function MeetTheTeam() {
  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <HeaderSection />

        {/* Team Grid */}
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {teamContent.teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={animations.card}
              whileHover="hover"
              className="text-center group relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-brand-red/20 transition-all duration-300"
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-brand-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mt-2 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="128px"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 relative z-10 px-4 pb-6">
                <div>
                  <h3 className="text-xl font-medium text-brand-black">
                    {member.name}
                  </h3>
                  <p className="text-brand-gray text-sm font-medium tracking-wide">
                    {member.position}
                  </p>
                </div>

                <p className="text-brand-gray text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Link */}
                {member.linkedin && (
                  <div className="pt-2">
                    <button
                      onClick={() => handleSocialClick(member.linkedin)}
                      className="inline-flex items-center justify-center w-8 h-8 bg-gray-50 hover:bg-brand-red/10 text-brand-gray hover:text-brand-red rounded-full transition-all duration-300"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red/60 via-brand-red to-brand-red/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
