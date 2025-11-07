"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { collectionsData } from "@/data/products-data";

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const tabContentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

export default function ProductsSection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [activeCollection, setActiveCollectionInternal] = useState(() => {
    const collection = searchParams.get("collection");
    return collection || "all";
  });

  useEffect(() => {
    const collection = searchParams.get("collection");
    const newActive = collection || "all";
    if (newActive !== activeCollection) {
      setActiveCollectionInternal(newActive);
    }
  }, [searchParams]);

  const setActiveCollection = (id) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      newSearchParams.delete("collection");
    } else {
      newSearchParams.set("collection", id);
    }
    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
    setActiveCollectionInternal(id);
  };

  // Create collection tabs, including "All Products"
  const totalProductsCount = collectionsData.reduce(
    (acc, collection) =>
      acc +
      collection.subcategories.reduce(
        (subAcc, sub) => subAcc + sub.products.length,
        0,
      ),
    0,
  );
  const collectionTabs = [
    { id: "all", label: "All Products", count: totalProductsCount },
    ...collectionsData.map((collection) => ({
      id: collection.title.toLowerCase().replace(/\s+/g, "-"),
      label: collection.title,
      count: collection.subcategories.reduce(
        (acc, sub) => acc + sub.products.length,
        0,
      ),
    })),
  ];

  // Get filtered content based on active collection only (no subcategories)
  const getFilteredContent = () => {
    if (activeCollection === "all") {
      return collectionsData.map((collection) => ({
        ...collection,
        products: collection.subcategories.flatMap((sub) => sub.products),
      }));
    }
    const collection = collectionsData.find(
      (col) =>
        col.title.toLowerCase().replace(/\s+/g, "-") === activeCollection,
    );
    if (!collection) return [];
    // Combine all products under the selected collection
    const combinedProducts = collection.subcategories.flatMap(
      (sub) => sub.products,
    );
    return [{ ...collection, products: combinedProducts }];
  };

  const filteredContent = getFilteredContent();

  return (
    <section className="relative py-28 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <HeaderSection />

        {/* Collection Tabs */}
        <TabsSection
          tabs={collectionTabs}
          activeTab={activeCollection}
          setActiveTab={setActiveCollection}
        />

        {/* Filtered Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCollection}`}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-16 lg:mt-20"
          >
            <FilteredCollectionsSection
              collections={filteredContent}
              activeTab={activeCollection}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function HeaderSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center mb-16 sm:mb-20 lg:mb-24"
    >
      <HeaderLabel />
      <HeaderTitle />
    </motion.div>
  );
}

function HeaderLabel() {
  return (
    <div className="inline-flex items-center gap-4 mb-6 sm:mb-8">
      <motion.div
        className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-brand-gray to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 0.8 }}
      />
      <span className="text-xs sm:text-sm font-medium text-brand-gray tracking-[0.2em] uppercase">
        OUR OFFERINGS
      </span>
      <motion.div
        className="h-px w-8 sm:w-12 bg-gradient-to-r from-brand-gray via-transparent to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

function HeaderTitle() {
  return (
    <motion.h2
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-brand-black tracking-tight leading-[1.1] mb-8 lg:mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our{" "}
      <span className="font-normal text-brand-red relative">
        Products
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </span>
    </motion.h2>
  );
}

function TabsSection({ tabs, activeTab, setActiveTab, isSubcategory = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: isSubcategory ? 0.4 : 0.3 }}
      className={`relative ${isSubcategory ? "" : ""}`}
    >
      {/* Tab Navigation */}
      <div className="relative">
        {/* Background Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>

        {/* Tabs Container */}
        <div
          className={`relative flex flex-nowrap gap-2 sm:gap-4 overflow-x-auto scrollbar-hide py-2 sm:py-4 px-2 sm:px-0 bg-white rounded-lg sm:bg-transparent sm:rounded-none justify-start sm:justify-center`}
        >
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              index={index}
              isSubcategory={isSubcategory}
            />
          ))}
        </div>
      </div>

      {/* Active Tab Indicator Line */}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-red to-brand-red/60"
        layoutId={
          isSubcategory ? "activeSubcategoryIndicator" : "activeTabIndicator"
        }
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />
    </motion.div>
  );
}

function TabButton({ tab, isActive, onClick, index, isSubcategory }) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-4 py-2 sm:px-6 sm:py-4 flex-shrink-0 group
        transition-all duration-300 ease-out rounded-lg sm:rounded-none
        ${
          isActive
            ? "text-brand-red bg-gray-50 sm:bg-transparent"
            : "text-brand-gray hover:text-brand-black hover:bg-gray-50 sm:hover:bg-transparent"
        }
        sm:cursor-pointer
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
    >
      {/* Tab Content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-left sm:text-center">
        <span
          className={`
          text-xs sm:text-base font-medium tracking-wide transition-all duration-300
          ${isActive ? "font-semibold" : "group-hover:font-medium"}
        `}
        >
          {tab.label}
        </span>

        {/* Product Count Badge */}
        <motion.span
          className={`
            inline-flex items-center justify-center min-w-[1.5rem] h-5 sm:h-6 px-2 mt-1 sm:mt-0
            text-xs font-medium rounded-full transition-all duration-300
            ${
              isActive
                ? "bg-brand-red text-white"
                : "bg-gray-100 text-brand-gray group-hover:bg-gray-200"
            }
          `}
          whileHover={{ scale: 1.05 }}
        >
          {tab.count}
        </motion.span>
      </div>

      {/* Hover Effect Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:opacity-0"
        initial={false}
        animate={{ opacity: isActive ? 0.1 : 0 }}
      />
    </motion.button>
  );
}

function FilteredCollectionsSection({ collections, activeTab }) {
  if (activeTab === "all") {
    return (
      <div className="space-y-24 lg:space-y-32">
        {collections.map((collection, index) => (
          <motion.div
            key={`${collection.title}-${index}`}
            variants={containerVariants}
            className="border-b border-gray-100 last:border-b-0 pb-24 lg:pb-32 last:pb-0"
          >
            <CollectionHeader collection={collection} />
            <ProductGrid products={collection.products} activeTab={activeTab} />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-16 lg:space-y-20">
      {collections.map((collection, index) => (
        <motion.div
          key={`${collection.title}-${index}`}
          variants={containerVariants}
        >
          <CollectionHeader collection={collection} />
          <ProductGrid
            products={collection.products}
            showCollectionTitle={false}
            activeTab={activeTab}
          />
        </motion.div>
      ))}
    </div>
  );
}

function CollectionHeader({ collection }) {
  return (
    <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-brand-black">
          {collection.title}
        </h3>
        <motion.div
          className="h-px flex-1 ml-8 bg-gradient-to-r from-gray-200 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      <p className="text-lg lg:text-xl text-brand-gray max-w-2xl">
        {collection.description}
      </p>
    </motion.div>
  );
}

function ProductGrid({ products, showCollectionTitle = true, activeTab }) {
  return (
    <motion.div
      className="space-y-12 lg:space-y-16"
      variants={containerVariants}
    >
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductRow
            key={product.id}
            product={product}
            index={index}
            activeTab={activeTab}
          />
        ))
      ) : (
        <p className="text-center text-brand-gray">No products available.</p>
      )}
    </motion.div>
  );
}

function ProductRow({ product, index, activeTab }) {
  const isReverse = index % 2 === 1;

  return (
    <Link
      href={`/products/${product.slug.replace(/^\//, "")}`}
      className="block group"
    >
      <motion.div
        variants={productVariants}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isReverse ? "lg:grid-flow-col-dense" : ""
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <motion.div
          variants={imageVariants}
          className={`relative overflow-hidden rounded-lg bg-white ${
            isReverse ? "lg:col-start-2" : ""
          }`}
        >
          <Image
            src={`/products/index-products/${product.indexImage}`}
            alt={product.name || product.title}
            width={1200}
            height={900}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Overlay Badge */}
          <motion.div
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
          >
            <span className="text-sm font-medium text-brand-black">
              View Details
            </span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={productVariants}
          className={`space-y-6 ${isReverse ? "lg:col-start-1" : ""}`}
        >
          <div className="space-y-4">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-light text-brand-black group-hover:text-brand-red transition-colors duration-300">
              {product.name}
            </h4>
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {product.features && product.features.length
                ? product.features[0]
                : ""}
            </p>
          </div>

          <motion.div
            className="flex items-center gap-3 text-brand-red group-hover:gap-4 transition-all duration-300"
            whileHover={{ x: 4 }}
          >
            <span className="text-sm font-medium tracking-wide uppercase">
              Learn More
            </span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
