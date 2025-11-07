"use client";

import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import footerData from "@/data/footer-data";

export const Footer = () => {
  const { home, aboutUs, products, contactUs, social, production, copyright } =
    footerData;

  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllAbout, setShowAllAbout] = useState(false);

  const iconMap = {
    Facebook: Facebook,
    Instagram: Instagram,
    Linkedin: Linkedin,
  };

  // Always show first 3 products, additional ones are toggled
  const initialProducts = products.links.slice(0, 3);
  const additionalProducts = products.links.slice(3);
  // Always show first 3 about links, additional ones are toggled
  const initialAbout = aboutUs.links.slice(0, 3);
  const additionalAbout = aboutUs.links.slice(3);

  return (
    <footer className="bg-transparent pt-12 pb-6">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Desktop Layout (lg and up) - 5 column grid */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-5 gap-12">
            {/* Column 1: Logo */}
            <div className="flex items-start justify-center pt-2">
              <img
                src="/logos/logo.png"
                alt="pharmapack Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* Column 2: Home */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[var(--color-brand-red)] text-center mb-4">
                {home.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {home.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: About Us */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[var(--color-brand-red)] text-center mb-4">
                {aboutUs.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {initialAbout.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    showAllAbout ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {additionalAbout.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                {aboutUs.links.length > 3 && (
                  <button
                    onClick={() => setShowAllAbout(!showAllAbout)}
                    className="flex items-center justify-center space-x-1 text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 text-sm font-medium mx-auto mt-2 cursor-pointer"
                  >
                    <span>
                      {showAllAbout
                        ? "Show Less"
                        : `+${aboutUs.links.length - 3} More`}
                    </span>
                    {showAllAbout ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Column 4: Products */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[var(--color-brand-red)] text-center mb-4">
                {products.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {initialProducts.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    showAllProducts
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {additionalProducts.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                {products.links.length > 3 && (
                  <button
                    onClick={() => setShowAllProducts(!showAllProducts)}
                    className="flex items-center justify-center space-x-1 text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 text-sm font-medium mx-auto mt-2 cursor-pointer"
                  >
                    <span>
                      {showAllProducts
                        ? "Show Less"
                        : `+${products.links.length - 3} More`}
                    </span>
                    {showAllProducts ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Column 5: Contact Us */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[var(--color-brand-red)] text-center mb-4">
                {contactUs.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {contactUs.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout (below lg) */}
        <div className="block lg:hidden mb-10">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-10">
            <img
              src="/logos/logo.png"
              alt="pharmapack Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* 2x2 Grid for content sections */}
          <div className="grid grid-cols-2 gap-8 md:gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-[var(--color-brand-red)] text-center mb-4">
                {contactUs.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {contactUs.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Home */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-[var(--color-brand-red)] text-center mb-4">
                {home.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {home.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* About Us */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-[var(--color-brand-red)] text-center mb-4">
                {aboutUs.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {initialAbout.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    showAllAbout ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {additionalAbout.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                {aboutUs.links.length > 3 && (
                  <button
                    onClick={() => setShowAllAbout(!showAllAbout)}
                    className="flex items-center justify-center space-x-1 text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 text-xs font-medium mx-auto mt-2 cursor-pointer"
                  >
                    <span>
                      {showAllAbout ? "Less" : `+${aboutUs.links.length - 3}`}
                    </span>
                    {showAllAbout ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-[var(--color-brand-red)] text-center mb-4">
                {products.title}
              </h4>
              <div className="space-y-3 text-sm text-center">
                {initialProducts.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    showAllProducts
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {additionalProducts.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                {products.links.length > 3 && (
                  <button
                    onClick={() => setShowAllProducts(!showAllProducts)}
                    className="flex items-center justify-center space-x-1 text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 text-xs font-medium mx-auto mt-2 cursor-pointer"
                  >
                    <span>
                      {showAllProducts
                        ? "Less"
                        : `+${products.links.length - 3}`}
                    </span>
                    {showAllProducts ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-6">
              {social.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 flex items-center justify-center group"
                  >
                    <div className="absolute inset-0 bg-[var(--color-brand-red)] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    <Icon
                      size={26}
                      className="relative z-10 text-[var(--color-brand-red)] group-hover:text-[var(--color-brand-white)] transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>

            {/* Production Information */}
            <div className="text-sm text-[var(--color-brand-gray)] text-center px-4">
              <a
                href={production.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-brand-red)] hover:text-[#d5191d] transition-colors duration-300 font-medium"
              >
                {production.name}
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-[var(--color-brand-gray)] font-medium">
              {copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
