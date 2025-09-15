"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const animations = {
  mobileSlideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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
      <div className="space-y-4 sm:space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-black leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {product.name}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-brand-gray leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {product.features && product.features.length
            ? product.features[0]
            : ""}
        </motion.p>
      </div>
      <motion.div
        className="bg-gray-50/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-xl sm:text-2xl font-medium text-brand-black mb-3 sm:mb-4">
          Product Overview
        </h3>
        <p className="leading-relaxed text-brand-gray text-base sm:text-lg">
          {product.features && product.features.length > 1
            ? product.features[1]
            : ""}
        </p>
      </motion.div>
      <motion.div
        variants={animations.staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
      >
        <motion.div
          variants={animations.staggerItem}
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100/80 order-1"
        >
          <h3 className="text-xl sm:text-2xl font-medium text-brand-black mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-brand-red rounded-full"></div>
            Key Features
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            {product.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 sm:gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              >
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-red flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-brand-gray text-base sm:text-lg leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={animations.staggerItem}
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100/80 order-2"
        >
          <h3 className="text-xl sm:text-2xl font-medium text-brand-black mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-brand-red rounded-full"></div>
            Key Specifications
          </h3>
          <div className="space-y-4 sm:space-y-5">
            {product.keySpecifications &&
              product.keySpecifications.map((item, index) => (
                <motion.div
                  key={`${item.spec}-${index}`}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50/50 -mx-2 px-2 rounded-lg transition-colors duration-200 gap-1 sm:gap-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
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
        </motion.div>
      </motion.div>
      <motion.div
        className="pt-6 sm:pt-8 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <DetailTabs product={product} />
      </motion.div>
      <motion.div
        className="pt-6 sm:pt-8 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col items-center text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 bg-brand-red text-white rounded-xl sm:rounded-2xl font-medium text-base sm:text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-500/25 transform hover:scale-105 active:scale-95 mb-3 touch-manipulation"
          >
            Contact for Pricing
          </Link>
          <p className="text-brand-gray text-xs sm:text-sm px-4">
            Get personalized pricing and availability information
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailTabs({ product }) {
  const [active, setActive] = React.useState("pharmapack");
  return (
    <div>
      <div className="flex gap-3 border-b border-gray-200">
        <button
          className={`px-4 py-2 -mb-px ${
            active === "pharmapack"
              ? "text-brand-red border-b-2 border-brand-red"
              : "text-brand-gray"
          }`}
          onClick={() => setActive("pharmapack")}
        >
          Pharmapack
        </button>
        <button
          className={`px-4 py-2 -mb-px ${
            active === "privatelabeling"
              ? "text-brand-red border-b-2 border-brand-red"
              : "text-brand-gray"
          }`}
          onClick={() => setActive("privatelabeling")}
        >
          Private Labeling
        </button>
      </div>
      <div className="pt-6">
        {active === "pharmapack" ? (
          <div className="space-y-6">
            {product.pharmapack && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`/products/pharmapack-products/pharmapack-${product.slug}-${i}.jpg`}
                      alt={`${product.name} Pharmapack ${i}`}
                      className="w-full rounded-xl border border-gray-100"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ))}
                </div>
                {product.pharmapack.uniqueFeatures && (
                  <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                    {product.pharmapack.uniqueFeatures.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {product.privateLabeling && product.privateLabeling.length > 0 ? (
              product.privateLabeling.map((pl, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-brand-black font-medium">
                    {pl.clientName}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`/products/clients-products/privatelabeling-${
                          product.slug
                        }-${pl.clientName
                          .toLowerCase()
                          .replace(/\s+/g, "-")}-${i}.jpg`}
                        alt={`${product.name} - ${pl.clientName} ${i}`}
                        className="w-full rounded-xl border border-gray-100"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ))}
                  </div>
                  {pl.uniqueFeatures && (
                    <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                      {pl.uniqueFeatures.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <div className="text-brand-gray">
                No private labeling data available.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
