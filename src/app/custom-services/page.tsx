"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Database, GitBranch, Share2, PieChart, Puzzle } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

const CustomServicesPage = () => {
    const services = [
        { icon: MapPin, text: "Multi-location call routing and escalation" },
        { icon: Database, text: "Custom CRM setup and reporting dashboards" },
        { icon: GitBranch, text: "Full funnel rebuilds and conversion testing" },
        { icon: Share2, text: "Ad creative systems and content pipelines" },
        { icon: PieChart, text: "Sales process and follow-up restructuring" },
        { icon: Puzzle, text: "Integrations across calendars, WhatsApp, email, and internal tools" },
    ];

    return (
        <div className="flex flex-col">

            {/* Hero Section */}
            <section className="relative hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="eyebrow mb-4 md:mb-6 animate-fade-in">Custom Services</p>
                        <h1 className="heading-display mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            For businesses with complex routing, multiple teams, <span className="serif-italic">deeper automation</span>, or a full rebuild.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            Start with Brand OS first—it helps us understand your offer quickly.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                            <Button variant="hero" size="lg" asChild>
                                <a
                                    href="https://staging.klarnow.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    Generate Brand OS
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="bg-background/50 backdrop-blur-sm">
                                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                                    Call now
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Custom Can Include */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-section text-center mb-12">What Custom Can Include</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {services.map((service, i) => {
                                const Icon = service.icon;
                                return (
                                    <div key={i} className="card-premium p-6 flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <p className="text-lg font-medium text-foreground pt-2">{service.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 text-center p-6 bg-muted/30 rounded-xl">
                            <p className="text-muted-foreground font-medium">
                                <strong>Note:</strong> Custom work is scoped after a call.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomServicesPage;
