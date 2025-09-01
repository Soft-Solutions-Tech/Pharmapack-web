"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { productionLines } from "@/data/production-lines-data";
import { ChevronRight, Sparkles, Zap, Shield, Clock } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function ProductionLinesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 min-h-screen overflow-hidden"
    >
      {/* Refined Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orb */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            rotate: { duration: 120, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#6E0D0F]/25 to-[#5F6062]/10 rounded-full blur-3xl"
        />

        {/* Secondary floating orb */}
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#5F6062]/20 to-[#000000]/5 rounded-full blur-2xl"
        />

        {/* Tertiary accent */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#6E0D0F]/20 to-[#5F6062]/8 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center gap-3 bg-[#000000]/10 backdrop-blur-xl border border-[#5F6062]/20 rounded-full px-8 py-3 mb-10 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-[#6E0D0F]" />
            <span className="text-[#000000] font-semibold tracking-wide">
              Premium Pharmaceutical Manufacturing
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-7xl md:text-8xl font-black tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-[#000000] via-[#5F6062] to-[#000000] bg-clip-text text-transparent drop-shadow-lg">
                Production
              </span>
              <span className="block bg-gradient-to-r from-[#6E0D0F] via-[#8B1113] to-[#6E0D0F] bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[#5F6062] max-w-5xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            State-of-the-art manufacturing facilities delivering
            pharmaceutical-grade products with uncompromising quality,
            precision, and innovation across six specialized production lines.
          </motion.p>
        </motion.div>

        {/* Professional Production Lines Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {productionLines.map((line, index) => {
            const IconComponent = line.icon;
            const isHovered = hoveredCard === line.id;

            return (
              <motion.div
                key={line.id}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(line.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative h-full cursor-pointer"
              >
                {/* Main Card with Professional Hover */}
                <motion.div
                  className="relative bg-[#FBFEF9]/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#5F6062]/15 h-full flex flex-col overflow-hidden"
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    boxShadow: "0 25px 50px -12px rgba(95, 96, 98, 0.3)",
                    borderColor: "rgba(110, 13, 15, 0.2)",
                    backgroundColor: "rgba(251, 254, 249, 1)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#6E0D0F]/4 via-transparent to-[#5F6062]/4 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Professional Icon Design */}
                  <motion.div
                    className="relative w-20 h-20 mb-8 mx-auto"
                    whileHover={{
                      scale: 1.08,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    {/* Icon background with subtle glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#6E0D0F]/25 to-[#5F6062]/25 rounded-2xl blur-lg"
                      animate={{
                        opacity: isHovered ? 0.9 : 0.5,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    {/* Icon container */}
                    <motion.div
                      className="relative w-full h-full bg-gradient-to-br from-[#6E0D0F] to-[#5F6062] rounded-2xl flex items-center justify-center shadow-lg border border-[#FBFEF9]/15"
                      whileHover={{
                        background:
                          "linear-gradient(135deg, #6E0D0F 0%, #8B1113 50%, #5F6062 100%)",
                        borderColor: "rgba(251, 254, 249, 0.25)",
                        boxShadow: "0 15px 30px rgba(110, 13, 15, 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.3 + index * 0.08 }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                      >
                        <IconComponent className="w-10 h-10 text-[#FBFEF9] drop-shadow-lg" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Content */}
                  <div className="relative flex-grow text-center">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-[#000000] mb-6 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.08 }}
                      whileHover={{
                        color: "#6E0D0F",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {line.title}
                    </motion.h3>

                    <motion.p
                      className="text-[#5F6062] leading-relaxed text-base mb-8 min-h-[120px] flex items-center justify-center"
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.08 }}
                    >
                      {line.description}
                    </motion.p>

                    {/* Professional Feature Tags */}
                    <motion.div
                      className="flex flex-wrap justify-center gap-2 mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.08 }}
                    >
                      {line.features.map((feature, featureIndex) => (
                        <motion.span
                          key={feature}
                          className="px-4 py-2 bg-[#FBFEF9] text-[#6E0D0F] text-sm font-medium rounded-lg border border-[#5F6062]/20 shadow-sm"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#6E0D0F",
                            color: "#FBFEF9",
                            y: -2,
                            borderColor: "rgba(110, 13, 15, 0.4)",
                            boxShadow: "0 8px 20px rgba(110, 13, 15, 0.3)",
                            transition: { duration: 0.2, ease: "easeOut" },
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            delay: 0.7 + index * 0.08 + featureIndex * 0.03,
                            duration: 0.4,
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Sleek Bottom Accent */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6E0D0F] via-red-400 to-[#5F6062] rounded-b-2xl"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: isHovered ? 1 : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Professional shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FBFEF9]/8 to-transparent rounded-2xl pointer-events-none"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={
                      isHovered
                        ? {
                            x: "100%",
                            opacity: [0, 1, 0],
                            transition: {
                              duration: 1.2,
                              ease: "easeInOut",
                            },
                          }
                        : { x: "-100%", opacity: 0 }
                    }
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              {
                number: "6",
                label: "Specialized Production Lines",
                icon: Zap,
                suffix: "",
              },
              {
                number: "99.9",
                label: "Quality Assurance Rate",
                icon: Shield,
                suffix: "%",
              },
              {
                number: "24",
                label: "Continuous Manufacturing",
                icon: Clock,
                suffix: "/7",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group/stat"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 1.4 + index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {/* Icon with professional hover */}
                <motion.div
                  className="inline-flex items-center justify-center w-18 h-18 bg-[#000000]/8 backdrop-blur-xl rounded-2xl mb-6 border border-[#5F6062]/20 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    backgroundColor: "rgba(110, 13, 15, 0.1)",
                    borderColor: "rgba(110, 13, 15, 0.25)",
                    boxShadow: "0 20px 40px rgba(110, 13, 15, 0.15)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <stat.icon className="w-9 h-9 text-[#6E0D0F] drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Number with smooth animation */}
                <motion.div
                  className="text-5xl md:text-6xl font-black text-[#000000] mb-3 tracking-tight"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 1.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#6E0D0F",
                    transition: { duration: 0.2 },
                  }}
                >
                  {stat.number}
                  <span className="text-3xl">{stat.suffix}</span>
                </motion.div>

                {/* Label */}
                <div className="text-[#5F6062] font-medium text-lg tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center space-y-6"
          >
            <motion.button
              onClick={() => {
                // Add your contact page navigation here
                window.location.href = "/contact";
              }}
              className="relative group/cta bg-[#6E0D0F] text-[#FBFEF9] px-12 py-5 rounded-xl font-semibold text-xl shadow-lg border border-[#6E0D0F] overflow-hidden uppercase tracking-wide"
              whileHover={{
                scale: 1.02,
                y: -2,
                backgroundColor: "#000000",
                boxShadow: "0 20px 40px rgba(110, 13, 15, 0.4)",
                borderColor: "rgba(0, 0, 0, 0.8)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              {/* Subtle background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#5F6062]/20 via-transparent to-[#5F6062]/20"
                initial={{ opacity: 0, x: "-100%" }}
                whileHover={{
                  opacity: 1,
                  x: "0%",
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
              />

              <span className="relative flex items-center gap-4">
                Contact Us
                <motion.div
                  whileHover={{
                    x: 4,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>

            <motion.p
              className="text-[#5F6062] text-base font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2.0 }}
            >
              Discuss custom toll manufacturing and private label solutions
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 254, 249, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 254, 249, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </section>
  );
}
