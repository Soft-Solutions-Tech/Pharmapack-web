'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { collectionsData } from "@/data/products-data";


// Animation variants
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
      ease: 'easeOut',
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
      ease: 'easeOut',
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

export default function ProductsSection() {
  return (
    <section className="relative py-28 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <HeaderSection />

        {/* Collections */}
        <CollectionsSection />
      </div>
    </section>
  );
}

function HeaderSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center mb-24 sm:mb-28 lg:mb-36"
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
        animate={{ width: '3rem' }}
        transition={{ duration: 0.8 }}
      />
      <span className="text-xs sm:text-sm font-medium text-brand-gray tracking-[0.2em] uppercase">
        OUR OFFERINGS
      </span>
      <motion.div
        className="h-px w-8 sm:w-12 bg-gradient-to-r from-brand-gray via-transparent to-transparent"
        initial={{ width: 0 }}
        animate={{ width: '3rem' }}
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
      Our{' '}
      <span className="font-normal text-brand-red relative">
        Products
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        />
      </span>
    </motion.h2>
  );
}

function CollectionsSection() {
  return (
    <div className="space-y-24 lg:space-y-32">
      {collectionsData.map((collection, index) => (
        <motion.div
          key={index}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="border-b border-gray-100 last:border-b-0 pb-24 lg:pb-32 last:pb-0"
        >
          <CollectionHeader collection={collection} />
          <ProductGrid products={collection.products} />
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
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      <p className="text-lg lg:text-xl text-brand-gray max-w-2xl">
        {collection.description}
      </p>
    </motion.div>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="space-y-12 lg:space-y-16">
      {products.map((product, index) => (
        <ProductRow key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

function ProductRow({ product, index }) {
  const isReverse = index % 2 === 1;

  return (
    <Link href={`/products/${product.slug}`} className="block group">
      <motion.div
        variants={productVariants}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isReverse ? 'lg:grid-flow-col-dense' : ''
        }`}
      >
        {/* Image */}
        <motion.div
          variants={imageVariants}
          className={`relative h-64 sm:h-80 lg:h-96 overflow-hidden ${
            isReverse ? 'lg:col-start-2' : ''
          }`}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={productVariants}
          className={`space-y-6 ${isReverse ? 'lg:col-start-1' : ''}`}
        >
          <div className="space-y-4">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-light text-brand-black group-hover:text-brand-red transition-colors duration-300">
              {product.title}
            </h4>
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-3 text-brand-red group-hover:gap-4 transition-all duration-300">
            <span className="text-sm font-medium tracking-wide uppercase">
              Learn More
            </span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
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
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}