'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter } from 'lucide-react'

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "Chief Executive Officer",
    bio: "Leading with 20+ years of pharmaceutical expertise and strategic vision.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c671?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Chief Technology Officer",
    bio: "Driving innovation through advanced manufacturing technology solutions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com/in/michaelrodriguez"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    position: "Head of Research & Development",
    bio: "Pioneering breakthrough formulations and product development initiatives.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com/in/emilywatson"
  },
  {
    id: 4,
    name: "James Thompson",
    position: "VP Manufacturing Operations",
    bio: "Ensuring world-class production quality across global facilities.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com/in/jamesthompson"
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function MeetTheTeam() {
  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
              Leadership Team
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">
            Meet <span className="font-light text-gray-700">Our Team</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
            The experienced professionals who drive our mission of excellence in pharmaceutical manufacturing.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="text-center group"
            >
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="128px"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide">
                    {member.position}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Social Link */}
                {member.linkedin && (
                  <div className="pt-2">
                    <button
                      onClick={() => handleSocialClick(member.linkedin)}
                      className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-blue-600 text-gray-400 hover:text-white rounded-full transition-all duration-300"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}