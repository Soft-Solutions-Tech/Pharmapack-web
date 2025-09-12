'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Copy } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'General Question', // Default value for dropdown
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState({ email: false, phone: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatus('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          inquiryType: 'General Question',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-[65vh] w-full pt-32 pb-16 bg-gradient-to-b from-brand-white to-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <form className="space-y-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-8"
          >
            <motion.div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-brand-gray"></div>
              <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
                Contact
              </span>
              <div className="h-px w-12 bg-brand-gray"></div>
            </motion.div>

            {/* Updated Title */}
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-brand-black tracking-tight leading-[1.1] mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get in{' '}
              <span className="font-normal text-brand-red relative">
                Touch
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-red/60 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                />
              </span>
            </motion.h2>

            <p className="text-base sm:text-lg md:text-xl text-brand-gray leading-relaxed font-light max-w-2xl mx-auto">
              Connect with our team to explore possibilities and discuss your next strategic initiative.
            </p>
          </motion.div>

          {/* Contact Form and Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="w-full mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column - Info */}
              <div className="flex flex-col justify-start bg-brand-white/80 p-6 rounded-lg shadow-sm border border-brand-gray/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-black mb-4">Got a Question?</h3>
                    <p className="text-base font-light text-brand-gray leading-relaxed mb-6">
                      We've got answers! Whether it's about our products, services, or just general inquiries, our team is here to help. Drop us a message and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-brand-black mb-3">Reach Out Today:</h4>
                    <ul className="space-y-2 text-base font-light text-brand-gray mb-6">
                      <li>• Fill out the form below</li>
                      <li className="flex items-center space-x-2 relative">
                        <span>• Email us at </span>
                        <button
                          onClick={() => handleCopy('contact@company.com', 'email')}
                          className="font-semibold text-brand-black hover:text-brand-red transition-colors duration-300 relative"
                        >
                          contact@company.com
                        </button>
                        <Copy
                          className="w-4 h-4 text-brand-gray hover:text-brand-red cursor-pointer transition-colors duration-300"
                          onClick={() => handleCopy('contact@company.com', 'email')}
                        />
                        {copied.email && (
                          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 text-sm text-green-600 bg-brand-white px-2 py-1 rounded shadow z-10 transition-opacity duration-500 opacity-100">
                            Copied!
                          </span>
                        )}
                      </li>
                      <li className="flex items-center space-x-2 relative">
                        <span>• Or call us at </span>
                        <button
                          onClick={() => handleCopy('+1 (555) 123-4567', 'phone')}
                          className="font-semibold text-brand-black hover:text-brand-red transition-colors duration-300 relative"
                        >
                          +1 (555) 123-4567
                        </button>
                        <Copy
                          className="w-4 h-4 text-brand-gray hover:text-brand-red cursor-pointer transition-colors duration-300"
                          onClick={() => handleCopy('+1 (555) 123-4567', 'phone')}
                        />
                        {copied.phone && (
                          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 text-sm text-green-600 bg-brand-white px-2 py-1 rounded shadow z-10 transition-opacity duration-500 opacity-100">
                            Copied!
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>

                  <p className="text-base font-light text-brand-gray">
                    Your questions matter—let's get them answered!
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="group flex flex-col">
                    <label className="text-sm font-medium text-brand-gray tracking-wider uppercase mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 text-base font-light bg-brand-white border border-brand-gray/20 rounded-lg focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition-all duration-300 placeholder-brand-gray/50"
                      placeholder="John"
                    />
                  </div>
                  <div className="group flex flex-col">
                    <label className="text-sm font-medium text-brand-gray tracking-wider uppercase mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 text-base font-light bg-brand-white border border-brand-gray/20 rounded-lg focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition-all duration-300 placeholder-brand-gray/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="group flex flex-col">
                  <label className="flex items-center space-x-3 mb-2">
                    <Mail className="w-5 h-5 text-brand-gray group-hover:text-brand-red transition-colors duration-500" />
                    <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-base font-light bg-brand-white border border-brand-gray/20 rounded-lg focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition-all duration-300 placeholder-brand-gray/50"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="group flex flex-col">
                  <label className="flex items-center space-x-3 mb-2">
                    <Phone className="w-5 h-5 text-brand-gray group-hover:text-brand-red transition-colors duration-500" />
                    <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-base font-light bg-brand-white border border-brand-gray/20 rounded-lg focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition-all duration-300 placeholder-brand-gray/50"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="group flex flex-col">
                  <label className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
                      Inquiry Type
                    </span>
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-base font-light bg-brand-white border border-brand-gray/20 rounded-lg focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition-all duration-300"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Become a Partner">Become a Partner</option>
                    <option value="Support Request">Support Request</option>
                    <option value="Business Inquiry">Business Inquiry</option>
                  </select>
                </div>

                <div className="group flex flex-col">
                  <label className="flex items-center space-x-3 mb-2">
                    <MessageSquare className="w-5 h-5 text-brand-gray group-hover:text-brand-red transition-colors duration-500" />
                    <span className="text-sm font-medium text-brand-gray tracking-wider uppercase">
                      Message
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-base font-light bg-brand-white border border-brand-gray/20 rounded-lg focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition-all duration-300 resize-none placeholder-brand-gray/50 h-[150px]"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group w-full text-brand-black px-6 py-2.5 border border-gray-500 hover:border-brand-red transition-all duration-300 relative overflow-hidden rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Send Message"
                  >
                    <div className="absolute inset-0 bg-brand-red -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="relative flex items-center justify-center space-x-3 group-hover:text-brand-white transition-colors duration-500">
                      <span className="text-base font-medium">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>

            {status === 'error' && (
              <p className="mt-4 text-center text-brand-red text-sm">
                Failed to send your message. Please try again.
              </p>
            )}
            {status === 'success' && (
              <p className="mt-4 text-center text-green-600 text-sm">
                Your message has been sent successfully!
              </p>
            )}
          </motion.div>
        </form>
      </div>
    </section>
  );
}