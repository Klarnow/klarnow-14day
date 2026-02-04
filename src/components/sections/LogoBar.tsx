import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const logos = [
  "TechFlow",
  "Acme Co",
  "Vertex",
  "Nova",
  "Pulse",
];

const LogoBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-10 md:py-14 bg-background border-b border-border/30"
    >
      <div className="container-wide">
        <div className={cn(
          "flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 scroll-fade-in",
          isVisible && "visible"
        )}>
          {logos.map((logo) => (
            <div 
              key={logo} 
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-current" />
              <span className="text-sm font-medium tracking-wide">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
