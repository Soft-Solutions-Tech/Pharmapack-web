"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Beaker,
  Cog,
  Package,
  Globe,
  TrendingUp,
} from "lucide-react";

export const HeroBanner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Dynamic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.pexels.com/download/video/3191916/"
            type="video/mp4"
          />
          {/* Fallback gradient for video loading */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        </video>

        {/* Professional dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      {/* Animated Background Icons */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {/* Lab Flask Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [-100, -50, -100],
            y: [100, 50, 100],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4"
        >
          <Beaker className="w-16 h-16 text-brand-red" />
        </motion.div>

        {/* Gear Animation */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3"
        >
          <Cog className="w-20 h-20 text-red-600/15" />
        </motion.div>

        {/* Package Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4"
        >
          <Package className="w-14 h-14 text-red-600/20" />
        </motion.div>

        {/* Globe Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            y: [50, -20, 50],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/5"
        >
          <Globe className="w-18 h-18 text-red-600/15" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Company Identifier */}
          {/* <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-red-600/30 bg-black/60 backdrop-blur-md">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-white tracking-widest uppercase">
                Pharmapack
              </span>
              <div className="w-px h-4 bg-white/30 mx-4"></div>
              <span className="text-xs text-gray-300 font-medium">
                Manufacturing Excellence
              </span>
            </div>
          </motion.div> */}

          {/* Bold Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
              <span className="text-white block">From Idea to</span>
              <span className="text-red-600 block">Market</span>
              <span className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-300 block mt-2">
                We Make It Possible
              </span>
            </h1>
          </motion.div>

          {/* Professional Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light">
              End-to-end toll manufacturing and private label solutions with
              quality, compliance, and innovation at every step.
            </p>
          </motion.div>

          {/* Modern CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-base flex items-center gap-3 transition-all duration-300 shadow-2xl min-w-[220px] justify-center"
            >
              <span className="relative z-10">Explore Our Services</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/40 hover:border-white/70 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-base flex items-center gap-3 transition-all duration-300 backdrop-blur-md min-w-[220px] justify-center"
            >
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Partner With Us</span>
            </motion.button>
          </motion.div>

          {/* Journey Process Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {/* R&D Stage */}
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-600/20 transition-all duration-300">
                  <Beaker className="w-7 h-7 text-brand-red" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">R&D Lab</h3>
              <p className="text-gray-400 text-xs text-center leading-relaxed">
                Custom formulation & testing
              </p>
            </div>

            {/* Production Stage */}
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-600/20 transition-all duration-300">
                  <Cog className="w-7 h-7 text-brand-red" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Production
              </h3>
              <p className="text-gray-400 text-xs text-center leading-relaxed">
                Advanced manufacturing lines
              </p>
            </div>

            {/* Packaging Stage */}
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-600/20 transition-all duration-300">
                  <Package className="w-7 h-7 text-brand-red" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Packaging
              </h3>
              <p className="text-gray-400 text-xs text-center leading-relaxed">
                Custom brand packaging
              </p>
            </div>

            {/* Global Distribution */}
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-600/20 transition-all duration-300">
                  <TrendingUp className="w-7 h-7 text-brand-red" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Market Launch
              </h3>
              <p className="text-gray-400 text-xs text-center leading-relaxed">
                Global distribution ready
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Tech Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(90deg, transparent 98%, rgba(110, 13, 15, 0.3) 100%),
            linear-gradient(180deg, transparent 98%, rgba(110, 13, 15, 0.3) 100%)
          `,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroBanner;
