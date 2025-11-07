"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { servicesContent } from "@/data/services-data";

// Animation Variants
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function PharmapackServices() {
  const [activeService, setActiveService] = useState(
    servicesContent.services[0],
  );

  return (
    <section
      id="PharmaPackServices"
      className="min-h-screen flex flex-col px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto flex-1 flex flex-col mb-20">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-16 bg-brand-gray/40"></div>
            <span className="text-sm font-medium text-brand-gray tracking-widest uppercase">
              {servicesContent.headerLabel}
            </span>
            <div className="h-px w-16 bg-brand-gray/40"></div>
          </motion.div>

          {/* Updated Title */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-brand-black tracking-tight leading-[1.1] mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Manufacturing{" "}
            <span className="font-normal text-brand-red relative">
              {servicesContent.headlineHighlight}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              />
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-brand-gray leading-relaxed font-light">
              {servicesContent.subheadline}
            </p>
          </motion.div>
        </motion.div>

        {/* Main Service Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-brand-gray/10 overflow-hidden flex-1 flex flex-col"
        >
          {/* Fixed Height Wrapper */}
          <div className="grid lg:grid-cols-5 h-full min-h-[700px]">
            {/* Services Navigation */}
            <div className="lg:col-span-2 bg-gradient-to-br from-brand-white to-gray-50 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-brand-black mb-2">
                  {servicesContent.portfolioTitle}
                </h3>
                <p className="text-brand-gray text-sm font-light">
                  {servicesContent.portfolioSubtitle}
                </p>
              </div>

              <nav className="space-y-3" role="tablist">
                {servicesContent.services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    onClick={() => setActiveService(service)}
                    role="tab"
                    aria-selected={activeService.id === service.id}
                    aria-controls={`service-panel-${service.id}`}
                    className={`group relative w-full text-left p-4 rounded-2xl transition-all duration-500 ease-out cursor-pointer ${
                      activeService.id === service.id
                        ? "bg-brand-red text-white shadow-lg transform translate-x-2"
                        : "bg-white text-brand-gray hover:bg-brand-red/5 hover:translate-x-1 shadow-sm border border-brand-gray/20 hover:border-brand-red/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              activeService.id === service.id
                                ? "bg-white"
                                : "bg-brand-red"
                            }`}
                          />
                          <span className="text-xs font-medium tracking-wider uppercase opacity-70">
                            Step {index + 1}
                          </span>
                        </div>
                        <h4 className="font-medium text-base leading-tight truncate">
                          {service.shortTitle}
                        </h4>
                      </div>

                      <ArrowRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          activeService.id === service.id
                            ? "text-white translate-x-1"
                            : "text-brand-gray group-hover:text-brand-red group-hover:translate-x-1"
                        }`}
                      />
                    </div>

                    {activeService.id === service.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 rounded-r-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  id={`service-panel-${activeService.id}`}
                  role="tabpanel"
                  className="flex flex-col h-full"
                >
                  {/* Service Image */}
                  <div className="relative h-full mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-gray/5 to-brand-gray/10">
                    <Image
                      src={activeService.image}
                      alt={`${activeService.title} service`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                      priority={activeService.id === 1}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <motion.h3
                      className="text-2xl md:text-3xl font-light text-brand-black mb-4"
                      layoutId={`title-${activeService.id}`}
                    >
                      {activeService.title}
                    </motion.h3>

                    <p className="text-brand-gray text-base leading-relaxed mb-6 flex-grow">
                      {activeService.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-brand-black font-medium mb-3 text-sm uppercase tracking-wider">
                        Key Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeService.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-2 p-2 rounded-lg bg-brand-red/5 border border-brand-red/10"
                          >
                            <CheckCircle className="w-3 h-3 text-brand-red flex-shrink-0" />
                            <span className="text-brand-black text-xs font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
