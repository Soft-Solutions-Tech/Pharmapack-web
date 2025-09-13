"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/products-data";
import ProductDetailClient from "./ProductDetailClient.jsx";

// Generate all products, ensuring uniqueness by ID
const allProducts = collectionsData
  .flatMap((collection) => collection.subcategories.flatMap((sub) => sub.products))
  .reduce((unique, product) => {
    const exists = unique.find((p) => p.id === product.id);
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
  mobileSlideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
};

// Server Component: ProductDetailPage
export default async function ProductDetailPage({ params }) {
  // Await params to ensure it's resolved
  const { slug } = await params;
  console.log("productSlug:", slug); // Debug

  // Normalize slug for comparison
  const normalizedSlug = slug?.toLowerCase().replace(/^\//, "") || "";
  const product = allProducts.find(
    (p) => p.slug.replace(/^\//, "").toLowerCase() === normalizedSlug
  );

  if (!product) {
    console.log("Product not found for slug:", normalizedSlug);
    console.log("Available slugs:", allProducts.map((p) => p.slug));
    return <ProductNotFound />;
  }

  return (
    <motion.div
      className="min-h-screen bg-white mt-4"
      variants={animations.fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-32">
        <div className="pt-16 sm:pt-20 lg:pt-0">
          <ProductDetailClient product={product} />
        </div>
      </div>
    </motion.div>
  );
}

// Generate static parameters for SSG
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug.replace(/^\//, "").toLowerCase(),
  }));
}

// ProductImage, ProductInfo, Breadcrumb, ProductNotFound components
export function ProductImage({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[1950/825]"
    >
      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-100/50">
        <Image
          src={product.image || "/products/fallback-image.jpg"}
          alt={product.title}
          width={1850}
          height={825}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
          priority
        />
      </div>
    </motion.div>
  );
}

export function ProductInfo({ product }) {
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
          {product.title}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-brand-gray leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {product.description}
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
          {product.detailedDescription}
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
            Specifications
          </h3>
          <div className="space-y-4 sm:space-y-5">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <motion.div
                key={key}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50/50 -mx-2 px-2 rounded-lg transition-colors duration-200 gap-1 sm:gap-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              >
                <span className="font-medium capitalize text-brand-black text-base sm:text-lg">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="text-brand-gray text-base sm:text-lg font-medium sm:text-right">
                  {value}
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

export function Breadcrumb({ product }) {
  const collection = collectionsData.find((col) =>
    col.subcategories.some((sub) => sub.products.some((p) => p.slug === product.slug))
  );

  const subcategory = collection?.subcategories.find((sub) =>
    sub.products.some((p) => p.slug === product.slug)
  );

  return (
    <motion.nav
      className="mb-6 sm:mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ol className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base text-brand-gray bg-gray-50/80 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-100 overflow-x-auto">
        <li className="flex-shrink-0">
          <Link
            href="/products"
            className="hover:text-brand-red transition-colors duration-200 font-medium whitespace-nowrap"
          >
            Products
          </Link>
        </li>
        {collection && (
          <li className="flex items-center flex-shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mx-2 sm:mx-3 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-brand-gray font-medium whitespace-nowrap">
              {collection.title}
            </span>
          </li>
        )}
        {subcategory && (
          <li className="flex items-center flex-shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mx-2 sm:mx-3 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-brand-gray font-medium whitespace-nowrap">
              {subcategory.title}
            </span>
          </li>
        )}
        <li className="flex items-center min-w-0">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mx-2 sm:mx-3 text-gray-400 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-brand-black font-semibold truncate">
              {product.title}
            </span>
          </li>
        </ol>
    </motion.nav>
  );
}

export function ProductNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20 sm:pt-32">
      <motion.div
        className="text-center max-w-sm sm:max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-brand-red"
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
        <h1 className="text-2xl sm:text-3xl font-light text-brand-black mb-4">
          Product Not Found
        </h1>
        <p className="text-brand-gray mb-8 leading-relaxed text-sm sm:text-base px-4">
          The requested product could not be found. It may have been moved or removed.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 w-full sm:w-auto px-6 py-3 bg-brand-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors duration-300 justify-center touch-manipulation"
        >
          <span className="text-lg">←</span>
          Back to Products
        </Link>
      </motion.div>
    </div>
  );
}