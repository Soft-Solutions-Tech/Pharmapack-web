"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { collectionsData } from "@/data/products-data";

export default function Breadcrumb({ product }) {
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
