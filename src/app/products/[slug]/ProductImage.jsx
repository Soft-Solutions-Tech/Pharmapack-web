"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductImage({ product }) {
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
