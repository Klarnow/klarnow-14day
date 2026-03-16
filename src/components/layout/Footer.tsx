"use client";
import { ArrowRight, Phone, Globe } from "lucide-react";
import logoWhite from "@/assets/klarnow-logo-white.svg";
import Link from "next/link";

const PHONE_NUMBER = "+441616960976";
const PHONE_DISPLAY = "+44 161 696 0976";

const footerLinks = {
  resources: {
    title: "Resources",
    links: [
      { label: "Brand OS", href: "https://staging.klarnow.ai" },
      { label: "Brand System", href: "https://brand.klarnow.co.uk/" },
      { label: "Custom Services", href: "/custom-services" },
      { label: "Fit Check", href: "/fit-check" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-8 block">
              <img src={logoWhite.src || logoWhite} alt="Klarnow" className="h-5 w-auto" />
            </Link>
            <p className="text-background/60 font-medium text-base mb-8 max-w-xs leading-relaxed">
              Story-led System Powered by AI. <br />
              Built for UK service businesses.
            </p>
          </div>

          {/* Contact Info (Right side in user request) */}
          <div className="lg:col-span-1">
             <h4 className="font-bold text-background mb-6 uppercase tracking-widest text-xs">Contact</h4>
             <div className="space-y-4">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors font-bold">
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
                <a href="https://klarnow.uk" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors font-bold">
                  <Globe className="h-4 w-4" />
                  klarnow.uk
                </a>
             </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-bold text-background mb-6 uppercase tracking-widest text-xs">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => {
                  const isInternal = link.href.startsWith("/");
                  return (
                    <li key={link.label}>
                      {isInternal ? (
                        <Link
                          href={link.href}
                          className="text-base text-background/60 hover:text-background transition-colors font-medium "
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-base text-background/60 hover:text-background transition-colors font-medium"
                          {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-medium text-background/30 uppercase tracking-widest">
              © 2026 Klarnow. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
               <span className="text-xs font-bold text-background/30 uppercase tracking-widest">UK SERVICE BUSINESSES</span>
            </div>
        </div>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </footer>
  );
};

export default Footer;

