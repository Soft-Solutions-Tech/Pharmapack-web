"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
import Breadcrumb from "./Breadcrumb.jsx";

export default function ProductDetailClient({ product }) {
  // Debug: Check if components are defined
  if (!ProductImage || !ProductInfo || !Breadcrumb) {
    console.error("One or more components are undefined:", {
      ProductImage,
      ProductInfo,
      Breadcrumb,
    });
    return <div>Error: Missing components</div>;
  }

  if (!product) {
    return <div>Error: No product data</div>;
  }

  return (
    <>
      <Breadcrumb product={product} />
      <BackButton />
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </>
  );
}

function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.button
      onClick={handleBack}
      style={{ cursor: "pointer" }}
      className="inline-flex items-center gap-2 mb-8 sm:mb-12 px-4 py-3 -ml-4 text-sm sm:text-base font-medium text-brand-red hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300 group touch-manipulation cursor-pointer"
      whileHover={{ x: -2 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform duration-300">
        ←
      </span>
      <span className="hidden sm:inline">Back to Products</span>
      <span className="sm:hidden">Back</span>
    </motion.button>
  );
}
