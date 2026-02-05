"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Database, GitBranch, Share2, PieChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "+441616960976";

const services = [
    { icon: MapPin, title: "Multi-location routing", description: "Route calls to specific teams." },
    { icon: Database, title: "Custom CRM setup", description: "Reporting dashboards & pipelines." },
    { icon: GitBranch, title: "Full funnel rebuilds", description: "Conversion testing & optimization." },
    { icon: Share2, title: "Ad creative systems", description: "Content pipelines & systems." },
    { icon: PieChart, title: "Sales restructuring", description: "Follow-up & process overhaul." },
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
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left Column */}
                    <div className={cn("scroll-fade-left", isVisible && "visible")}>
                        <p className="eyebrow mb-4">Need Something More Complex?</p>
                        <h2 className="heading-section heading-mixed mb-4">
                            Custom <span className="serif-italic">Services</span>
                        </h2>
                        <p className="text-body mb-4">
                            For multi-location or deep automation needs. If your setup involves multiple teams, custom CRM builds, or full funnel rebuilds, start with Brand OS first.
                        </p>
                        <p className="text-body mb-8">
                            When you're ready, call and ask about Custom Services.
                        </p>
                        <Button variant="hero" size="default" asChild>
                            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                                Call now
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    {/* Right Column */}
                    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
                        {services.map((service) => (
                            <div key={service.title} className="bg-card rounded-xl border border-border/30 p-5 hover:border-border/60 transition-all duration-300">
                                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center mb-3">
                                    <service.icon className="h-4 w-4 text-foreground" />
                                </div>
                                <h3 className="font-semibold text-foreground text-sm mb-1">{service.title}</h3>
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
