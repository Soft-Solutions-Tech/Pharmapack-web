"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Shield, Users, Globe } from "lucide-react";

// Core values data
const coreValues = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Pioneering solutions that transform ideas into market-leading products",
    icon: Award,
  },
  {
    id: 2,
    title: "Quality",
    description:
      "Pharmaceutical-grade excellence in every product we manufacture",
    icon: Shield,
  },
  {
    id: 3,
    title: "Partnership",
    description:
      "Building lasting relationships through trust and collaboration",
    icon: Users,
  },
  {
    id: 4,
    title: "Global Reach",
    description:
      "Delivering world-class solutions across international markets",
    icon: Globe,
  },
];

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

export default function WhoWeAreSection() {
  return (
    <section className="py-20 px-6 bg-white">
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
              About Us
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 tracking-tight">
            Who <span className="font-light text-gray-700">We Are</span>
          </h2>
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
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Transforming Ideas into
              <span className="text-gray-700"> Market Success</span>
            </h3>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over{" "}
                <strong className="text-gray-900 font-semibold">
                  25 years
                </strong>
                , Pharmapack has been a trusted leader in toll manufacturing and
                private label solutions, specializing in pharmaceutical-grade
                product development.
              </p>

              <p>
                We partner with companies worldwide, transforming innovative
                concepts into successful market-ready products through our
                expertise in R&D, formulation, manufacturing, and packaging.
              </p>

              <p>
                Our commitment to excellence and regulatory compliance has made
                us the preferred manufacturing partner for businesses bringing
                high-quality products to global markets.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-extralight text-gray-900 mb-1">
                  25+
                </div>
                <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                  Years
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extralight text-gray-900 mb-1">
                  60+
                </div>
                <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                  Markets
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extralight text-gray-900 mb-1">
                  5M+
                </div>
                <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                  Products
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                alt="Modern pharmaceutical manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
