"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/products-data";

const allProducts = collectionsData
  .flatMap((collection) => collection.products)
  .reduce((unique, product) => {
    const exists = unique.find((p) => p.title === product.title);
    if (!exists) {
      unique.push(product);
    }
    return unique;
  }, []);

// Animation variants
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

// Back Button Component
function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.button
      onClick={handleBack}
      className="inline-flex items-center gap-2 mb-10 px-4 py-2 -ml-4 text-sm font-medium text-brand-red hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300 group"
      whileHover={{ x: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">
        ←
      </span>
      Back to Products
    </motion.button>
  );
}

// Product Image Component
function ProductImage({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full aspect-[1950/825]"
    >
      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl border border-gray-100/50">
        <Image
          src={product.image}
          alt={product.title}
          width={1850}
          height={825}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
          sizes="100vw"
          priority
        />
      </div>
    </motion.div>
  );
}

// Product Info Component
function ProductInfo({ product }) {
  return (
    <motion.div
      variants={animations.slideUp}
      initial="hidden"
      animate="visible"
      className="space-y-10"
    >
      {/* Product Header */}
      <div className="space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-brand-black leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {product.title}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-brand-gray leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {product.description}
        </motion.p>
      </div>

      {/* Detailed Description */}
      <motion.div
        className="bg-gray-50/80 rounded-2xl p-8 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-medium text-brand-black mb-4">
          Product Overview
        </h3>
        <p className="leading-relaxed text-brand-gray text-lg">
          {product.detailedDescription}
        </p>
      </motion.div>

      {/* Features and Specifications Grid */}
      <motion.div
        variants={animations.staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Key Features */}
        <motion.div
          variants={animations.staggerItem}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80"
        >
          <h3 className="text-2xl font-medium text-brand-black mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-brand-red rounded-full"></div>
            Key Features
          </h3>
          <ul className="space-y-4">
            {product.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              >
                <div className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-brand-gray text-lg leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Specifications */}
        <motion.div
          variants={animations.staggerItem}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80"
        >
          <h3 className="text-2xl font-medium text-brand-black mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-brand-red rounded-full"></div>
            Specifications
          </h3>
          <div className="space-y-5">
            {Object.entries(product.specifications).map(
              ([key, value], index) => (
                <motion.div
                  key={key}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50/50 -mx-2 px-2 rounded-lg transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                >
                  <span className="font-medium capitalize text-brand-black text-lg">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-brand-gray text-lg font-medium">
                    {value}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="pt-8 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col items-center text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-red text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-500/25 transform hover:scale-105 active:scale-95 mb-3"
          >
            Contact for Pricing
          </Link>
          <p className="text-brand-gray text-sm">
            Get personalized pricing and availability information
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Breadcrumb Component
function Breadcrumb({ product }) {
  const collection = collectionsData.find((col) =>
    col.products.some((p) => p.id === product.id)
  );

  return (
    <motion.nav
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ol className="flex items-center space-x-2 text-base text-brand-gray bg-gray-50/80 rounded-xl px-6 py-3 border border-gray-100">
        <li>
          <Link
            href="/products"
            className="hover:text-brand-red transition-colors duration-200 font-medium"
          >
            Products
          </Link>
        </li>
        <li className="flex items-center">
          <svg
            className="w-5 h-5 mx-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-brand-gray font-medium">
            {collection?.title}
          </span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-5 h-5 mx-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-brand-black font-semibold truncate max-w-xs">
            {product.title}
          </span>
        </li>
      </ol>
    </motion.nav>
  );
}

// Main Product Detail Component
export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-32">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-brand-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-light text-brand-black mb-4">
            Product Not Found
          </h1>
          <p className="text-brand-gray mb-8 leading-relaxed">
            The requested product could not be found. It may have been moved or
            removed.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors duration-300"
          >
            <span className="text-lg">←</span>
            Back to Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={animations.fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-32">
        <Breadcrumb product={product} />
        <BackButton />
        <div className="grid grid-cols-1 gap-12 mb-16">
          <ProductImage product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
    </motion.div>
  );
}
