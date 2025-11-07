"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

// Animation variants
const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  modal: {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  },
  backdrop: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  },
};

// Utility functions
const getImagePaths = (product, type, clientName = null) => {
  if (type === "pharmapack") {
    const base = `/products/pharmapack-products/pharmapack-${product.slug}`;
    if (product.pharmapack?.images?.length) {
      return product.pharmapack.images;
    }
    return [1, 2, 3].map((i) => `${base}-${i}.jpg`);
  }

  if (type === "privateLabeling" && clientName) {
    const base = `/products/clients-products/privatelabeling-${
      product.slug
    }-${clientName.toLowerCase().replace(/\s+/g, "-")}`;

    const plEntry = product.privateLabeling?.find(
      (pl) =>
        pl.clientName.toLowerCase().replace(/\s+/g, "-") ===
        clientName.toLowerCase().replace(/\s+/g, "-"),
    );

    if (plEntry?.images?.length) {
      return plEntry.images;
    }
    return [1, 2, 3, 4, 5, 6].map((i) => `${base}-${i}.jpg`);
  }

  return [];
};

// Image Display Component
const ImageDisplay = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  const handleImageClick = (src) => setSelectedImage(src);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {images.map((src, index) => (
          <ImageCard
            key={index}
            src={src}
            alt={`${alt} ${index + 1}`}
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={handleCloseModal} />
      )}
    </>
  );
};

// Individual Image Card Component
const ImageCard = ({ src, alt, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    transition={{ duration: 0.3 }}
    className="w-80 h-64 image-wrapper relative overflow-hidden group cursor-pointer"
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0"
      onLoad={(e) => {
        e.currentTarget.style.opacity = 1;
      }}
      onError={(e) => {
        e.currentTarget.closest(".image-wrapper").style.display = "none";
      }}
    />
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
  </motion.div>
);

// Image Modal Component
const ImageModal = ({ src, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    variants={animations.backdrop}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={onClose}
    style={{
      backgroundColor: "rgba(0,0,0,0.85)",
    }}
  >
    {/* Modal Content */}
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-white"
      variants={animations.modal}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        src={src}
        alt="Zoomed image"
        className="object-contain rounded-2xl"
        style={{ maxHeight: "80vh", maxWidth: "80vw" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.5, ease: "easeOut" },
        }}
      />
      <motion.button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 bg-brand-red text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <X size={20} />
      </motion.button>
    </motion.div>
  </motion.div>
);

// Tab Component
const DetailTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("pharmapack");

  const TabButton = ({ tabKey, label }) => (
    <motion.button
      className={`px-4 py-2 -mb-px relative transition-colors duration-200 cursor-pointer ${
        activeTab === tabKey
          ? "text-brand-red"
          : "text-brand-gray hover:text-brand-black"
      }`}
      onClick={() => setActiveTab(tabKey)}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {label}
      {activeTab === tabKey && (
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

  const renderTabContent = () => {
    if (activeTab === "pharmapack") {
      return <PharmapackTab product={product} />;
    }
    return <PrivateLabelingTab product={product} />;
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-3 border-b border-gray-200 relative">
        <TabButton tabKey="pharmapack" label="Pharmapack" />
        <TabButton tabKey="privatelabeling" label="Private Labeling" />
      </div>

      {/* Tab Content */}
      <motion.div
        className="pt-6"
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
};

// Pharmapack Tab Content
const PharmapackTab = ({ product }) => {
  if (!product.pharmapack) {
    return (
      <div className="text-brand-gray text-center py-12">
        No pharmapack products available.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ImageDisplay
        images={getImagePaths(product, "pharmapack")}
        alt={`${product.name} Pharmapack`}
      />
      {product.pharmapack.uniqueFeatures && (
        <FeatureList features={product.pharmapack.uniqueFeatures} />
      )}
    </div>
  );
};

// Private Labeling Tab Content
const PrivateLabelingTab = ({ product }) => {
  if (!product.privateLabeling?.length) {
    return (
      <div className="text-brand-gray text-center py-12">
        No private labeling data available.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {product.privateLabeling.map((pl, idx) => (
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
            images={getImagePaths(product, "privateLabeling", pl.clientName)}
            alt={`${product.name} - ${pl.clientName}`}
          />
          {pl.uniqueFeatures && <FeatureList features={pl.uniqueFeatures} />}
        </motion.div>
      ))}
    </div>
  );
};

// Feature List Component
const FeatureList = ({ features }) => (
  <ul className="list-disc pl-6 space-y-2 text-brand-gray">
    {features.map((feature, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
      >
        {feature}
      </motion.li>
    ))}
  </ul>
);

// Feature Card Component
const FeatureCard = ({ title, children, className = "" }) => (
  <motion.div
    variants={animations.staggerItem}
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

// Key Features Component
const KeyFeatures = ({ features }) => (
  <FeatureCard title="Key Features">
    <ul className="space-y-3 sm:space-y-4">
      {features?.map((feature, index) => (
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
);

// Key Specifications Component
const KeySpecifications = ({ specifications }) => (
  <FeatureCard title="Key Specifications">
    <div className="space-y-4 sm:space-y-5">
      {specifications?.map((item, index) => (
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
);

// Contact CTA Component
const ContactCTA = () => (
  <motion.div
    variants={animations.fadeInUp}
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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-red transition-opacity duration-300 group-hover:opacity-90" />
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
);

// Main ProductInfo Component
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
          variants={animations.fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-black leading-[1.1] tracking-tight"
        >
          {product.name}
        </motion.h1>
        <motion.p
          variants={animations.fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-brand-gray leading-relaxed max-w-2xl"
        >
          {product.features?.[0] || ""}
        </motion.p>
      </div>

      {/* Product Overview */}
      <motion.div
        variants={animations.fadeInUp}
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
        variants={animations.staggerContainer}
        className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
      >
        <KeyFeatures features={product.features} />
        <KeySpecifications specifications={product.keySpecifications} />
      </motion.div>

      {/* Detail Tabs */}
      <motion.div
        variants={animations.fadeInUp}
        className="pt-6 sm:pt-8 border-t border-gray-200"
      >
        <DetailTabs product={product} />
      </motion.div>

      {/* Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
}
