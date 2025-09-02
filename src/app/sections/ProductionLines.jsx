"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/data/production-lines-data";
import { ChevronRight, ChevronLeft, Sparkles, Zap, Shield, Clock } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function ProductionLinesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const totalCards = content.productionLines.length;
  // Fixed calculation: ensure we don't go beyond showing all cards properly
  const maxIndex = Math.max(0, totalCards - Math.floor(cardsPerView));

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Update cards per view and recalculate boundaries
  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1536) { // 2xl
        setCardsPerView(3);
      } else if (window.innerWidth >= 1280) { // xl
        setCardsPerView(2.5);
      } else if (window.innerWidth >= 1024) { // lg
        setCardsPerView(2);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);

  // Reset currentIndex when cardsPerView changes to prevent out-of-bounds
  React.useEffect(() => {
    const newMaxIndex = Math.max(0, totalCards - Math.floor(cardsPerView));
    if (currentIndex > newMaxIndex) {
      setCurrentIndex(newMaxIndex);
    }
  }, [cardsPerView, currentIndex, totalCards]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 min-h-screen overflow-hidden"
    >
      {/* Refined Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orb */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            rotate: { duration: 120, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#6E0D0F]/25 to-[#5F6062]/10 rounded-full blur-3xl"
        />

        {/* Secondary floating orb */}
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#5F6062]/20 to-[#000000]/5 rounded-full blur-2xl"
        />

        {/* Tertiary accent */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#6E0D0F]/20 to-[#5F6062]/8 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          {/* Main Title */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-7xl md:text-8xl font-black tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-[#000000] via-[#5F6062] to-[#000000] bg-clip-text text-transparent drop-shadow-lg">
                {content.titlePart1}
              </span>
              <span className="block bg-gradient-to-r from-[#6E0D0F] via-[#8B1113] to-[#6E0D0F] bg-clip-text text-transparent">
                {content.titlePart2}
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[#5F6062] max-w-5xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        {/* Production Lines Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Mobile: Vertical Grid */}
          <div className="lg:hidden grid grid-cols-1 gap-8">
            {content.productionLines.map((line, index) => (
              <ProductionCard
                key={line.id}
                line={line}
                index={index}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Desktop: Card-by-Card Navigation */}
          <div className="hidden lg:block relative">
            {/* Left Navigation Button */}
            <motion.button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                currentIndex > 0 
                  ? 'border-[#6E0D0F] bg-[#6E0D0F] text-[#FBFEF9] hover:scale-110 hover:shadow-xl shadow-lg' 
                  : 'border-[#5F6062]/30 bg-[#5F6062]/10 text-[#5F6062]/50 cursor-not-allowed'
              }`}
              style={{ marginLeft: '-2rem' }}
              whileHover={currentIndex > 0 ? { scale: 1.1 } : {}}
              whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>

            {/* Right Navigation Button - Fixed condition */}
            <motion.button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                currentIndex < maxIndex 
                  ? 'border-[#6E0D0F] bg-[#6E0D0F] text-[#FBFEF9] hover:scale-110 hover:shadow-xl shadow-lg' 
                  : 'border-[#5F6062]/30 bg-[#5F6062]/10 text-[#5F6062]/50 cursor-not-allowed'
              }`}
              style={{ marginRight: '-2rem' }}
              whileHover={currentIndex < maxIndex ? { scale: 1.1 } : {}}
              whileTap={currentIndex < maxIndex ? { scale: 0.95 } : {}}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>

            {/* Cards Container with Smooth Transition and Proper Height */}
            <motion.div 
              className="overflow-hidden py-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ minHeight: '600px' }}
            >
              <motion.div
                className="flex gap-8 transition-transform duration-700 ease-out"
                animate={{
                  x: `calc(-${currentIndex * (100 / Math.floor(cardsPerView))}% - ${currentIndex * (32 / Math.floor(cardsPerView))}px)`
                }}
                style={{
                  width: `calc(${(totalCards * 100) / Math.floor(cardsPerView)}% + ${((totalCards - 1) * 32) / Math.floor(cardsPerView)}px)`
                }}
              >
                {content.productionLines.map((line, index) => (
                  <motion.div 
                    key={line.id} 
                    className="flex-none"
                    style={{ width: `calc(${100 / totalCards}% - ${(32 * (totalCards - 1)) / totalCards}px)` }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  >
                    <ProductionCard
                      line={line}
                      index={index}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                      isInView={isInView}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Progress Indicator - Fixed to show correct total */}
            <motion.div
              className="flex justify-center items-center gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-sm font-medium text-[#5F6062] mr-4">
                {Math.min(currentIndex + Math.floor(cardsPerView), totalCards)} of {totalCards} cards visible
              </div>
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#6E0D0F] scale-125' 
                      : 'bg-[#5F6062]/30 hover:bg-[#5F6062]/50'
                  }`}
                  whileHover={{ scale: index === currentIndex ? 1.25 : 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Separate ProductionCard component for cleaner code
function ProductionCard({ line, index, hoveredCard, setHoveredCard, isInView }) {
  const IconComponent = line.icon;
  const isHovered = hoveredCard === line.id;

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHoveredCard(line.id)}
      onHoverEnd={() => setHoveredCard(null)}
      className="group relative h-full cursor-pointer"
      style={{ zIndex: isHovered ? 10 : 1 }}
    >
      {/* Main Card with Professional Hover */}
      <motion.div
        className="relative bg-[#FBFEF9]/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#5F6062]/15 h-full flex flex-col overflow-hidden"
        whileHover={{
          y: -12,
          scale: 1.05,
          boxShadow: "0 35px 70px -12px rgba(95, 96, 98, 0.4)",
          borderColor: "rgba(110, 13, 15, 0.3)",
          backgroundColor: "rgba(251, 254, 249, 1)",
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ 
          minHeight: '520px',
          transformOrigin: 'center center'
        }}
      >
        {/* Subtle gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#6E0D0F]/4 via-transparent to-[#5F6062]/4 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Icon Design */}
        <motion.div
          className="relative w-20 h-20 mb-8 mx-auto"
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          {/* Icon background with subtle glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#6E0D0F]/25 to-[#5F6062]/25 rounded-2xl blur-lg"
            animate={{
              opacity: isHovered ? 0.9 : 0.5,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Icon container */}
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-[#6E0D0F] to-[#5F6062] rounded-2xl flex items-center justify-center shadow-lg border border-[#FBFEF9]/15"
            whileHover={{
              borderColor: "rgba(251, 254, 249, 0.25)",
              boxShadow: "0 15px 30px rgba(110, 13, 15, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 + index * 0.08 }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
            >
              <IconComponent className="w-10 h-10 text-[#FBFEF9] drop-shadow-lg" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative flex-grow text-center">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-[#000000] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.08 }}
            whileHover={{
              color: "#6E0D0F",
              transition: { duration: 0.3 },
            }}
          >
            {line.title}
          </motion.h3>

          <motion.p
            className="text-[#5F6062] leading-relaxed text-base mb-8 min-h-[120px] flex items-center justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.08 }}
          >
            {line.description}
          </motion.p>

          {/* Professional Feature Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 + index * 0.08 }}
          >
            {line.features.map((feature, featureIndex) => (
              <motion.span
                key={feature}
                className="px-4 py-2 bg-[#FBFEF9] text-[#6E0D0F] text-sm font-medium rounded-lg border border-[#5F6062]/20 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#6E0D0F",
                  color: "#FBFEF9",
                  y: -2,
                  borderColor: "rgba(110, 13, 15, 0.4)",
                  boxShadow: "0 8px 20px rgba(110, 13, 15, 0.3)",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Sleek Bottom Accent */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#6E0D0F] via-red-400 to-[#5F6062] rounded-b-2xl"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FBFEF9]/8 to-transparent rounded-2xl pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          animate={
            isHovered
              ? {
                  x: "100%",
                  opacity: [0, 1, 0],
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                }
              : { x: "-100%", opacity: 0 }
          }
        />
      </motion.div>
    </motion.div>
  );
}