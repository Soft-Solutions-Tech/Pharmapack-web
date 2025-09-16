"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
  buttonVariants: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
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

// Image Carousel Component
function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.3 }}
          className="w-96 h-72" // Bigger dimensions
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
      </motion.div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      {" "}
      {/* Bigger container */}
      <div className="overflow-hidden rounded-xl">
        <motion.div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {" "}
              {/* Removed padding that caused extra slide */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-72" // Bigger height for consistency
              >
                <img
                  src={src}
                  alt={`${alt} ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Navigation Buttons */}
      <motion.button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </motion.button>
      <motion.button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </motion.button>
      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentIndex === index ? "bg-brand-red" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}

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
          <motion.div variants={animations.buttonVariants}>
            <motion.button
              className="group relative bg-brand-black text-brand-white px-8 py-4 rounded-lg overflow-hidden cursor-pointer"
              variants={animations.buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Contact for Pricing"
              asChild
            >
              <Link href="/contact">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-red transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="text-lg font-medium">
                    Contact for Pricing
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.button>
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

  // Helper function to get images for pharmapack
  const getPharmapackImages = () => {
    const images = [];
    for (let i = 1; i <= 3; i++) {
      images.push(
        `/products/pharmapack-products/pharmapack-${product.slug}-${i}.jpg`
      );
    }
    return images;
  };

  // Helper function to get images for private labeling
  const getPrivateLabelingImages = (clientName) => {
    const images = [];
    for (let i = 1; i <= 3; i++) {
      images.push(
        `/products/clients-products/privatelabeling-${product.slug}-${clientName
          .toLowerCase()
          .replace(/\s+/g, "-")}-${i}.jpg`
      );
    }
    return images;
  };

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
                <ImageCarousel
                  images={getPharmapackImages()}
                  alt={`${product.name} Pharmapack`}
                />
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
                  <ImageCarousel
                    images={getPrivateLabelingImages(pl.clientName)}
                    alt={`${product.name} - ${pl.clientName}`}
                  />
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
