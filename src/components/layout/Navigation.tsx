"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import klarnowLogo from "@/assets/klarnow-logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PHONE_NUMBER = "+441616960976";
const PHONE_DISPLAY = "+44 161 696 0976";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check if near footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // If footer is within 100px of viewport bottom
        setIsNearFooter(footerRect.top < windowHeight + 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "14-Day System", href: "/system" },
    { label: "Pricing", href: "/pricing" },
    { label: "Results", href: "/results" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-12 sm:top-14 left-0 right-0 z-40 transition-all duration-300 mb-8 md:mb-0",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-sm"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src={klarnowLogo.src || klarnowLogo} alt="Klarnow" className="h-3.5 md:h-4 w-auto" />
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-muted/30 transition-all"
              >
                Call now
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-muted/60 backdrop-blur-xl border-t border-border/30 overflow-hidden"
            >
              <motion.div
                className="container-wide py-4 space-y-2"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 }
                      },
                      closed: {
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.2 }
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2 }
                    },
                    closed: {
                      opacity: 0,
                      y: -10,
                      transition: { duration: 0.2 }
                    }
                  }}
                >
                  <Button variant="hero" size="default" className="w-full mt-3" asChild>
                    <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2">
                      Call now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Sticky Call Bar */}
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 lg:hidden backdrop-blur-xl border-t p-2.5 safe-area-pb transition-all duration-300",
          isNearFooter 
            ? "bg-foreground border-foreground/20" 
            : "bg-background/95 border-border/30"
        )}
      >
        <Button 
          variant={isNearFooter ? "outline" : "hero"} 
          size="default" 
          className={cn(
            "w-full transition-all duration-300",
            isNearFooter && "bg-background text-foreground border-background hover:bg-background/90"
          )}
          asChild
        >
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 text-sm">
            Call {PHONE_DISPLAY}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </>
  );
};

export default Navigation;
