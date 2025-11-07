"use client";
import * as React from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Products", href: "/products" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [clientPathname, setClientPathname] = React.useState("");
  const pathname = usePathname();

  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  React.useEffect(() => {
    setClientPathname(pathname || "");
    setIsMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent supports-[backdrop-filter]:bg-[var(--color-background)/60] shadow-sm pointer-events-none">
      <div className="flex items-center justify-between p-6 pointer-events-auto">
        <Link
          href="/"
          className="flex items-center"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/logos/logo.png"
            alt="pharmapack Logo"
            width={602}
            height={181}
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-3">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm rounded-lg font-medium text-[var(--color-brand-gray)] hover:text-[var(--color-brand-red)] hover:bg-[var(--color-brand-red)/10] border-2 border-transparent hover:border-[var(--color-brand-red)/20] transition-all duration-300",
                      pathname === item.href &&
                        "text-[var(--color-brand-red)] font-semibold bg-[var(--color-brand-red)/10] border-[var(--color-brand-red)/30]",
                    )}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="z-50 ml-auto text-[var(--color-brand-gray)] hover:bg-[var(--color-brand-red)/10] hover:text-[var(--color-brand-red)] transition-all duration-300 border-2 border-transparent hover:border-[var(--color-brand-red)/20] rounded-lg"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </Button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu onClose={toggleMobileMenu} pathname={clientPathname} />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function MobileMenu({ onClose, pathname }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="mobile-menu fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-50 text-[var(--color-brand-gray)]"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-5 right-4 z-50 text-[var(--color-brand-gray)] hover:bg-[var(--color-brand-red)/10] hover:text-[var(--color-brand-red)] border-2 border-transparent hover:border-[var(--color-brand-red)/20] rounded-lg"
      >
        <motion.div animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
          <X size={28} />
        </motion.div>
      </Button>

      <nav className="flex flex-col items-center space-y-6 w-full max-w-sm px-8">
        {NAV_ITEMS.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="w-full text-center"
          >
            <Link
              href={item.href}
              onClick={onClose}
              className={cn(
                "w-full inline-block py-4 px-6 text-lg font-medium rounded-xl border-2 border-transparent text-[var(--color-brand-gray)] hover:text-[var(--color-brand-red)] hover:bg-[var(--color-brand-red)/10] hover:border-[var(--color-brand-red)/20] transition-all duration-300",
                pathname === item.href &&
                  "text-[var(--color-brand-red)] font-semibold bg-[var(--color-brand-red)/10] border-[var(--color-brand-red)/30]",
              )}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Background blur circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-brand-gray)/50] to-[var(--color-brand-red)/5] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[var(--color-brand-red)/10] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[var(--color-brand-red)/10] rounded-full blur-2xl -z-10" />
    </motion.div>
  );
}
