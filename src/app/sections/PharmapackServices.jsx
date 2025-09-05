'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: "Research & Development (R&D)",
    description: "Understanding client needs & market trends, creating unique formulations tailored to the brand's vision, and conducting comprehensive stability & safety testing.",
    image: "/pharma1.jpg",
    features: ["Client Needs Analysis", "Market Trends Research", "Custom Formulations", "Stability & Safety Testing"],
    link: "/services/research-development"
  },
  {
    id: 2,
    title: "Formulation",
    description: "Developing the right product base with active ingredients, ensuring efficacy, safety, and compliance with international standards.",
    image: "/pharma1.jpg",
    features: ["Active Ingredients", "Product Base Development", "Efficacy Testing", "International Compliance"],
    link: "/services/formulation"
  },
  {
    id: 3,
    title: "Production & Manufacturing",
    description: "Using advanced machinery across multiple production lines, maintaining strict quality assurance and GMP compliance with scalable solutions from small batches to mass production.",
    image: "/pharma1.jpg",
    features: ["Advanced Machinery", "GMP Compliance", "Quality Assurance", "Scalable Solutions"],
    link: "/services/production-manufacturing"
  },
  {
    id: 4,
    title: "Packaging Solutions",
    description: "Custom packaging design that reflects your brand identity with a wide range of options including sachets, bottles, jars, wipes packs, patches, and masks, ensuring durability, safety, and consumer appeal.",
    image: "/pharma1.jpg",
    features: ["Custom Design", "Brand Identity", "Multiple Options", "Consumer Appeal"],
    link: "/services/packaging-solutions"
  },
  {
    id: 5,
    title: "Private Label & Branding Support",
    description: "Helping you build and launch your own brand successfully with guidance on compliance, certifications, market entry, and long-term partnership to scale and grow your product portfolio.",
    image: "/pharma1.jpg",
    features: ["Brand Launch", "Compliance Guidance", "Market Entry", "Long-term Partnership"],
    link: "/services/private-label-branding"
  }
]

export default function PharmapackServices() {
  const [activeService, setActiveService] = useState(services[0])

  const handleServiceClick = (service) => {
    // For navigation, you would use Next.js router
    // router.push(service.link)
    console.log('Navigate to:', service.link)
  }

  // Add custom CSS for brand colors
  const style = {
    '--color-brand-red': '#6E0D0F',
    '--color-brand-gray': '#5F6062',
    '--color-brand-white': '#FBFEF9',
    '--color-brand-black': '#000000'
  }

  return (
    <section className="py-12 md:py-10 bg-brand-white" style={style}>
      <style jsx>{`
        .text-brand-red { color: var(--color-brand-red); }
        .text-brand-gray { color: var(--color-brand-gray); }
        .text-brand-white { color: var(--color-brand-white); }
        .text-brand-black { color: var(--color-brand-black); }
        .bg-brand-red { background-color: var(--color-brand-red); }
        .bg-brand-gray { background-color: var(--color-brand-gray); }
        .bg-brand-white { background-color: var(--color-brand-white); }
        .bg-brand-black { background-color: var(--color-brand-black); }
        .border-brand-red { border-color: var(--color-brand-red); }
        .border-brand-gray { border-color: var(--color-brand-gray); }
        .from-brand-red { --tw-gradient-from: var(--color-brand-red); }
        .to-brand-red { --tw-gradient-to: var(--color-brand-red); }
        .from-brand-gray { --tw-gradient-from: var(--color-brand-gray); }
        .to-brand-gray { --tw-gradient-to: var(--color-brand-gray); }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4 md:mb-6">
            Our <span>Services</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            We help companies build their own brands from scratch. Whether you come with just an idea or a complete concept, our experts guide you through R&D, formulation, production, and packaging, ensuring your brand stands out with quality and innovation.
          </p>
        </motion.div>

        {/* Split Screen Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-brand-gray/20"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-5 lg:h-[700px]">
            
            {/* Left Side - Services List */}
            <div className="lg:col-span-2 p-6 md:p-8 bg-gradient-to-b from-gray-50 to-brand-white lg:overflow-y-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-brand-black mb-6 md:mb-8 border-b border-brand-gray/30 pb-3 md:pb-4">
                Toll Manufacturing Process
              </h3>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => setActiveService(service)}
                      className={`w-full text-left p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 relative overflow-hidden group ${
                        activeService.id === service.id
                          ? 'bg-brand-red text-brand-white shadow-lg transform translate-x-1 md:translate-x-2'
                          : 'bg-brand-white text-brand-gray hover:bg-gray-50 hover:translate-x-1 shadow-sm border border-brand-gray/20'
                      }`}
                    >
                      <div className="relative z-10">
                        <h4 className="font-medium text-base md:text-lg leading-tight">
                          {service.title}
                        </h4>
                      </div>
                      
                      {/* Active indicator */}
                      {activeService.id === service.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-white/30 rounded-r-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Preview Area */}
            <div className="lg:col-span-3 p-6 md:p-8 relative bg-gradient-to-br from-brand-white to-gray-50 lg:h-[700px] lg:overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="h-full flex flex-col"
                >
                  {/* Service Image */}
                  <div className="relative h-40 md:h-48 lg:h-56 mb-6 rounded-xl md:rounded-2xl overflow-hidden border-2 border-brand-gray/20 flex-shrink-0">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-brand-red/10"></div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1 flex flex-col min-h-0">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-brand-black mb-3 md:mb-4 flex-shrink-0"
                      layoutId={`title-${activeService.id}`}
                    >
                      {activeService.title}
                    </motion.h3>
                    
                    <div className="flex-1 flex flex-col min-h-0">
                      <p className="text-brand-gray text-base md:text-lg leading-relaxed mb-4 md:mb-6 line-clamp-3 lg:line-clamp-4">
                        {activeService.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6 flex-shrink-0">
                        {activeService.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-brand-red/10 px-3 md:px-4 py-2 md:py-3 rounded-lg border border-brand-red/20"
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                              <span className="text-brand-black font-medium text-xs md:text-sm truncate">{feature}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        onClick={() => handleServiceClick(activeService)}
                        className="w-full bg-gradient-to-r from-brand-red to-brand-red/90 text-brand-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group flex-shrink-0 "
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}