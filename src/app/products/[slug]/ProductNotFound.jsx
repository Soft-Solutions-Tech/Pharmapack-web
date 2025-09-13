"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductNotFound() {
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
