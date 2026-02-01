import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "+441616960976";
const PHONE_DISPLAY = "+44 161 696 0976";

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { label: "Instant Receptionist", href: "#instant-receptionist" },
      { label: "14-Day Call-First System", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Results", href: "#results" },
      { label: "About", href: "#about" },
      { label: "Contact", href: `tel:${PHONE_NUMBER}` },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Brand OS", href: "https://staging.klarnow.ai" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold text-background mb-4 block">
              Klarnow
            </a>
            <p className="text-background/60 text-sm mb-6 max-w-xs">
              Story-led System Powered by AI.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-background/80">
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-background transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <Button 
                variant="outline" 
                size="default" 
                className="border-background/20 text-background hover:bg-background/10 hover:text-background"
                asChild
              >
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </Button>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-background mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/40">
              © {new Date().getFullYear()} Klarnow. All rights reserved.
            </p>
            <p className="text-sm text-background/40">
              Built for UK service businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </footer>
  );
};

export default Footer;
