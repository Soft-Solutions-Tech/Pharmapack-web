"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const animations = {
  mobileSlideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  },
  buttonHover: {
    rest: {
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)",
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(239, 68, 68, 0.25), 0 10px 10px -5px rgba(239, 68, 68, 0.1)",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  },
  listItem: {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  specItem: {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + index * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  tabIndicator: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    exit: { scaleX: 0 },
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ProductInfo({ product }) {
  return (
    <motion.div
      variants={animations.mobileSlideUp}
      initial="hidden"
      animate="visible"
      className="space-y-8 sm:space-y-10"
    >
      {/* Hero Section */}
      <div className="space-y-4 sm:space-y-6">
        <motion.h1
          variants={animations.fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-black leading-[1.1] tracking-tight"
        >
          {product.name}
        </motion.h1>
        <motion.p
          variants={animations.fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-brand-gray leading-relaxed max-w-2xl"
        >
          {product.features && product.features.length
            ? product.features[0]
            : ""}
        </motion.p>
      </div>

      {/* Product Overview */}
      <motion.div
        variants={animations.fadeInUp}
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="bg-gradient-to-br from-gray-50/80 to-gray-100/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
        </div>

        <div className="relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-red to-red-400 rounded-full mb-4"
          />
          <h3 className="text-xl sm:text-2xl font-medium text-brand-black mb-3 sm:mb-4">
            Product Overview
          </h3>
          <p className="leading-relaxed text-brand-gray text-base sm:text-lg">
            {product.features && product.features.length > 1
              ? product.features[1]
              : ""}
          </p>
        </div>
      </motion.div>

      {/* Features and Specifications Grid */}
      <motion.div
        variants={animations.staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
      >
        {/* Key Features Card */}
        <motion.div
          variants={animations.staggerItem}
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100/80 order-1 relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-medium text-brand-black mb-5 sm:mb-6 flex items-center gap-3">
              <motion.div
                className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-brand-red to-red-600 rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              Key Features
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {product.features.map((feature, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={animations.listItem}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <motion.div
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-red flex-shrink-0 mt-2"
                    whileHover={{ scale: 1.4 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-brand-gray text-base sm:text-lg leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Key Specifications Card */}
        <motion.div
          variants={animations.staggerItem}
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100/80 order-2 relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-medium text-brand-black mb-5 sm:mb-6 flex items-center gap-3">
              <motion.div
                className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-brand-red to-red-600 rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              Key Specifications
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {product.keySpecifications &&
                product.keySpecifications.map((item, index) => (
                  <motion.div
                    key={`${item.spec}-${index}`}
                    custom={index}
                    variants={animations.specItem}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100 last:border-b-0 -mx-2 px-2 rounded-lg gap-1 sm:gap-0"
                  >
                    <span className="font-medium text-brand-black text-base sm:text-lg">
                      {item.spec}
                    </span>
                    <span className="text-brand-gray text-base sm:text-lg font-medium sm:text-right">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Detail Tabs */}
      <motion.div
        variants={animations.fadeInUp}
        className="pt-6 sm:pt-8 border-t border-gray-200"
      >
        <DetailTabs product={product} />
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        variants={animations.fadeInUp}
        className="pt-6 sm:pt-8 border-t border-gray-200"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={animations.buttonHover}
            whileHover="hover"
            whileTap="tap"
            initial="rest"
            animate="rest"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-brand-red to-red-600 text-white rounded-xl sm:rounded-2xl font-medium text-base sm:text-lg transition-all duration-300 transform touch-manipulation relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: ["100%", "100%", "-100%", "-100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              />
              <span className="relative">Contact for Pricing</span>
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-brand-gray text-xs sm:text-sm px-4 mt-1.5"
          >
            Get personalized pricing and availability information
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailTabs({ product }) {
  const [active, setActive] = React.useState("pharmapack");

  return (
    <div>
      <div className="flex gap-3 border-b border-gray-200 relative">
        <motion.button
          className={`px-4 py-2 -mb-px relative transition-colors duration-200 ${
            active === "pharmapack"
              ? "text-brand-red"
              : "text-brand-gray hover:text-brand-black"
          }`}
          onClick={() => setActive("pharmapack")}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Pharmapack
          {active === "pharmapack" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-red-600"
              variants={animations.tabIndicator}
              initial="initial"
              animate="animate"
            />
          )}
        </motion.button>
        <motion.button
          className={`px-4 py-2 -mb-px relative transition-colors duration-200 ${
            active === "privatelabeling"
              ? "text-brand-red"
              : "text-brand-gray hover:text-brand-black"
          }`}
          onClick={() => setActive("privatelabeling")}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Private Labeling
          {active === "privatelabeling" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-red-600"
              variants={animations.tabIndicator}
              initial="initial"
              animate="animate"
            />
          )}
        </motion.button>
      </div>

      <motion.div
        className="pt-6"
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {active === "pharmapack" ? (
          <div className="space-y-6">
            {product.pharmapack && (
              <div className="space-y-6">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={animations.staggerContainer}
                >
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      variants={animations.staggerItem}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={`/products/pharmapack-products/pharmapack-${product.slug}-${i}.jpg`}
                        alt={`${product.name} Pharmapack ${i}`}
                        className="w-full rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
                {product.pharmapack.uniqueFeatures && (
                  <motion.ul
                    className="list-disc pl-6 space-y-2 text-brand-gray"
                    initial="hidden"
                    animate="visible"
                    variants={animations.staggerContainer}
                  >
                    {product.pharmapack.uniqueFeatures.map((f, i) => (
                      <motion.li key={i} variants={animations.staggerItem}>
                        {f}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {product.privateLabeling && product.privateLabeling.length > 0 ? (
              product.privateLabeling.map((pl, idx) => (
                <motion.div
                  key={idx}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <motion.div className="text-brand-black font-medium text-lg">
                    {pl.clientName}
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={animations.staggerContainer}
                  >
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        variants={animations.staggerItem}
                        whileHover={{ scale: 1.03, y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={`/products/clients-products/privatelabeling-${
                            product.slug
                          }-${pl.clientName
                            .toLowerCase()
                            .replace(/\s+/g, "-")}-${i}.jpg`}
                          alt={`${product.name} - ${pl.clientName} ${i}`}
                          className="w-full rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  {pl.uniqueFeatures && (
                    <motion.ul
                      className="list-disc pl-6 space-y-2 text-brand-gray"
                      initial="hidden"
                      animate="visible"
                      variants={animations.staggerContainer}
                    >
                      {pl.uniqueFeatures.map((f, i) => (
                        <motion.li key={i} variants={animations.staggerItem}>
                          {f}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-brand-gray text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No private labeling data available.
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
