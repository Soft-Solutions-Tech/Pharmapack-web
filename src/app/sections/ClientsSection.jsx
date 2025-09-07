"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2 } from "lucide-react";
import { clients, sectionContent } from "@/data/clients-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const nameVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Placeholder component for when no clients are available
const ClientsPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center py-20"
  >
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center justify-center w-20 h-20 bg-brand-gray/10 rounded-full mb-8"
      >
        <Building2 className="w-10 h-10 text-brand-gray" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl font-light text-brand-black mb-4"
      >
        {sectionContent.placeholder.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg text-brand-gray leading-relaxed"
      >
        {sectionContent.placeholder.description}
      </motion.p>
    </div>
  </motion.div>
);

export default function ClientsSection() {
  // Set to true to show placeholder, false to show actual clients
  const showPlaceholder = false;
  const hasClients = clients && clients.length > 0;

  const handleClientClick = (website) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-brand-gray/30"></div>
            <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
              {sectionContent.headerLabel}
            </span>
            <div className="h-px w-12 bg-brand-gray/30"></div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-brand-black mb-6 tracking-tight"
          >
            Trusted by{" "}
            <span className="font-light text-brand-gray">Industry Leaders</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto font-light"
          >
            {sectionContent.description}
          </motion.p>
        </motion.div>

        {/* Clients Grid or Placeholder */}
        {showPlaceholder || !hasClients ? (
          <ClientsPlaceholder />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                onClick={() => handleClientClick(client.website)}
                className="group relative bg-white/50 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white border border-brand-gray/10 hover:border-brand-gray/20 transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <div className="relative w-full h-20">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain p-4 opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                  />
                </div>
                <motion.span
                  variants={nameVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm font-light text-center text-brand-gray tracking-wider mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  {client.name}
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom CTA and Stats */}
        {hasClients && !showPlaceholder && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-20 pt-12 border-t border-brand-gray/10"
          >
            <motion.p
              className="text-brand-gray mt-8 font-light text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {sectionContent.ctaText}
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
