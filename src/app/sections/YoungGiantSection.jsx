"use client";

import React from "react";
import { motion } from "framer-motion";
import { whoWeAreContent } from "@/data/who-we-are-data";

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

export default function YoungGiantSection() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-4 lg:px-6 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.section
          id="young-giant"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <motion.div
                className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-brand-gray to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
              />
              <span className="text-xs sm:text-sm font-medium text-brand-gray tracking-[0.2em] uppercase">
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
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}
