import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "+441616960976";
const PHONE_DISPLAY = "+44 161 696 0976";

interface NavDropdownProps {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const NavDropdown = ({ label, items, isOpen, onToggle, onClose }: NavDropdownProps) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground transition-colors font-medium text-sm py-2"
      aria-expanded={isOpen}
    >
      {label}
      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
    {isOpen && (
      <>
        <div className="fixed inset-0 z-40" onClick={onClose} />
        <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl border border-border shadow-xl p-2 z-50 animate-scale-in">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </>
    )}
  </div>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = {
    products: {
      label: "Products",
      items: [
        { label: "Instant Receptionist", href: "#instant-receptionist" },
        { label: "14-Day Call-First System", href: "#how-it-works" },
        { label: "Brand OS (free)", href: "#brand-os" },
      ],
    },
    company: {
      label: "Company",
      items: [
        { label: "Results", href: "#results" },
        { label: "About", href: "#about" },
        { label: "Contact", href: `tel:${PHONE_NUMBER}` },
      ],
    },
    enterprise: {
      label: "Enterprise",
      items: [
        { label: "Multi-location", href: "#enterprise" },
        { label: "Custom workflows", href: "#enterprise" },
      ],
    },
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeDropdowns = () => setOpenDropdown(null);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              Klarnow
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <NavDropdown
                label={navItems.products.label}
                items={navItems.products.items}
                isOpen={openDropdown === "products"}
                onToggle={() => toggleDropdown("products")}
                onClose={closeDropdowns}
              />
              <NavDropdown
                label={navItems.company.label}
                items={navItems.company.items}
                isOpen={openDropdown === "company"}
                onToggle={() => toggleDropdown("company")}
                onClose={closeDropdowns}
              />
              <NavDropdown
                label={navItems.enterprise.label}
                items={navItems.enterprise.items}
                isOpen={openDropdown === "enterprise"}
                onToggle={() => toggleDropdown("enterprise")}
                onClose={closeDropdowns}
              />
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="hero" size="default" asChild>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass border-t border-border/50">
            <div className="container-wide py-6 space-y-6">
              {Object.entries(navItems).map(([key, { label, items }]) => (
                <div key={key} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Sticky Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass border-t border-border/50 p-3">
        <Button variant="hero" size="lg" className="w-full" asChild>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Call now {PHONE_DISPLAY}
          </a>
        </Button>
      </div>
    </>
  );
};

export default Navigation;
