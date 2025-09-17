"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Simplified animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Simple Image Display Component
function ImageDisplay({ images, alt }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex justify-center">
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.3 }}
        className="w-96 h-72"
      >
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>
    </div>
  );
}

function DetailTabs({ product }) {
  const [active, setActive] = useState("pharmapack");

  const getPharmapackImages = () => [
    `/products/pharmapack-products/pharmapack-${product.slug}-1.jpg`,
  ];

  const getPrivateLabelingImages = (clientName) => [
    `/products/clients-products/privatelabeling-${product.slug}-${clientName
      .toLowerCase()
      .replace(/\s+/g, "-")}-1.jpg`,
  ];

  const TabButton = ({ tabKey, label }) => (
    <motion.button
      className={`px-4 py-2 -mb-px relative transition-colors duration-200 ${
        active === tabKey
          ? "text-brand-red"
          : "text-brand-gray hover:text-brand-black"
      }`}
      onClick={() => setActive(tabKey)}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {label}
      {active === tabKey && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );

  return (
    <div>
      <div className="flex gap-3 border-b border-gray-200 relative">
        <TabButton tabKey="pharmapack" label="Pharmapack" />
        <TabButton tabKey="privatelabeling" label="Private Labeling" />
      </div>

      <motion.div
        className="pt-6"
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {active === "pharmapack" ? (
          <div className="space-y-6">
            {product.pharmapack && (
              <div className="space-y-6">
                <ImageDisplay
                  images={getPharmapackImages()}
                  alt={`${product.name} Pharmapack`}
                />
                {product.pharmapack.uniqueFeatures && (
                  <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                    {product.pharmapack.uniqueFeatures.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                      >
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {product.privateLabeling?.length > 0 ? (
              product.privateLabeling.map((pl, idx) => (
                <motion.div
                  key={idx}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="text-brand-black font-medium text-lg">
                    {pl.clientName}
                  </div>
                  <ImageDisplay
                    images={getPrivateLabelingImages(pl.clientName)}
                    alt={`${product.name} - ${pl.clientName}`}
                  />
                  {pl.uniqueFeatures && (
                    <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                      {pl.uniqueFeatures.map((f, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-brand-gray text-center py-12">
                No private labeling data available.
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Simplified Feature Card
function FeatureCard({ title, children, className = "" }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -2 }}
      className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100/80 relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <h3 className="text-xl sm:text-2xl font-medium text-brand-black mb-5 sm:mb-6 flex items-center gap-3">
          <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-brand-red to-red-600 rounded-full" />
          {title}
        </h3>
        {children}
      </div>
    </motion.div>
  );
}

export default function ProductInfo({ product }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="space-y-8 sm:space-y-10"
    >
      {/* Hero Section */}
      <div className="space-y-4 sm:space-y-6">
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-black leading-[1.1] tracking-tight"
        >
          {product.name}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-brand-gray leading-relaxed max-w-2xl"
        >
          {product.features?.[0] || ""}
        </motion.p>
      </div>

      {/* Product Overview */}
      <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.01 }}
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
            {product.features?.[1] || ""}
          </p>
        </div>
      </motion.div>

      {/* Features and Specifications Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
      >
        <FeatureCard title="Key Features">
          <ul className="space-y-3 sm:space-y-4">
            {product.features?.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-red flex-shrink-0 mt-2" />
                <span className="text-brand-gray text-base sm:text-lg leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </FeatureCard>

        <FeatureCard title="Key Specifications">
          <div className="space-y-4 sm:space-y-5">
            {product.keySpecifications?.map((item, index) => (
              <motion.div
                key={`${item.spec}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
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
        </FeatureCard>
      </motion.div>

      {/* Detail Tabs */}
      <motion.div
        variants={fadeInUp}
        className="pt-6 sm:pt-8 border-t border-gray-200"
      >
        <DetailTabs product={product} />
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        variants={fadeInUp}
        className="pt-6 sm:pt-8 border-t border-gray-200"
      >
        <div className="flex flex-col items-center text-center">
          <Link href="/contact">
            <motion.button
              className="group relative bg-brand-black text-brand-white px-8 py-4 rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Contact for Pricing"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-red transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <span className="text-lg font-medium">Contact for Pricing</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.button>
          </Link>
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
