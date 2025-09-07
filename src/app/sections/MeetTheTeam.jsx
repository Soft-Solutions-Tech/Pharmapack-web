"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { teamContent } from "@/data/team-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function MeetTheTeam() {
  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
              {teamContent.headerLabel}
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          <h2
            className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 tracking-tight"
            dangerouslySetInnerHTML={{
              __html: `Meet <span className="font-light text-gray-700">${teamContent.headlineHighlight}</span>`,
            }}
          />

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
            {teamContent.subheadline}
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {teamContent.teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="text-center group"
            >
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="128px"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide">
                    {member.position}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Link */}
                {member.linkedin && (
                  <div className="pt-2">
                    <button
                      onClick={() => handleSocialClick(member.linkedin)}
                      className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-blue-600 text-gray-400 hover:text-white rounded-full transition-all duration-300"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
