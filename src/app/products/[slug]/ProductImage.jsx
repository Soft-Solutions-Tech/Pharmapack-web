"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductImage({ product }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[1950/825] mb-8 sm:mb-12"
    >
      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-100/50 relative">
        {/* Loading placeholder */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-brand-red rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error fallback */}
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50">
            <svg
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-xs mt-1">Image not available</p>
          </div>
        ) : (
          <Image
            src={`/products/index-products/${product.slug}.jpg`}
            alt={product.name}
            width={1850}
            height={825}
            className={`w-full h-full object-contain hover:scale-105 transition-transform duration-700 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            priority
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
      </div>
    </motion.div>
  );
}
