"use client";
import { Button } from "@/components/ui/button";
    import { ArrowRight, MapPin, Database, GitBranch, Share2, PieChart, Grid2X2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "+441616960976";

const services = [
    { icon: MapPin, title: "Multi-location setups", description: "" },
    { icon: Database, title: "CRM builds", description: "" },
    { icon: PieChart, title: "Dashboards", description: "" },
    { icon: GitBranch, title: "Funnel rebuilds", description: "" },
    { icon: Share2, title: "Sales process support", description: "" },
];

const CustomServices = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="section-padding bg-background"
            id="custom-services"
        >
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
                    {/* Left Column */}
                    <div className={cn("min-w-0 scroll-fade-left", isVisible && "visible")}>
                        <p className="eyebrow mb-4">Need something more advanced?</p>
                        <h2 className="heading-section heading-mixed mb-8">
                            Custom builds for <br /><span className="serif-italic">more complex businesses</span>
                        </h2>
                        
                        <Button variant="hero" size="default" asChild>
                            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                                Ask About Custom Services
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    {/* Right Column */}
                    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
                        {services.map((service) => (
                            <div key={service.title} className="bg-card rounded-xl border border-border/30 p-5 hover:border-border/60 transition-all duration-300">
                                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center mb-3">
                                    <service.icon className="h-4 w-4 text-foreground" />
                                </div>
                                <span className="text-base font-bold text-foreground">{service.title}</span>
                                <p className="text-xs text-muted-foreground">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomServices;
