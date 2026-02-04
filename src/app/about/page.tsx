"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Video, Code, TrendingUp } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

const PHONE_NUMBER = "+441616960976";

const About = () => {
    const capabilities = [
        {
            icon: Palette,
            title: "Graphic design and brand systems"
        },
        {
            icon: Video,
            title: "Videography and content production"
        },
        {
            icon: Code,
            title: "Software development and automation"
        },
        {
            icon: TrendingUp,
            title: "Sales and marketing execution"
        },

    ];

    return (
        <div className="flex flex-col">

            {/* Hero Section */}
            <section className="relative hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="eyebrow mb-4 md:mb-6 animate-fade-in">About Klarnow</p>
                        <h1 className="heading-display mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            We're not just another agency.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            We bring demand to your business, and we help you convert it. Calls answered. Appointments booked.
                        </p>
                        <Button variant="hero" size="lg" asChild>
                            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                                Call now
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                        <p className="text-sm text-muted-foreground mt-4">60-second Fit Check. No pitch.</p>
                    </div>
                </div>
            </section>

            {/* The Journey */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-section text-center mb-12">The Klarnow Journey</h2>

                        <div className="space-y-8">
                            <div className="card-premium p-8">
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Klarnow started in creative—design, then video.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We helped businesses look premium, but we kept seeing the same problem:<br />
                                    <strong className="text-foreground">Content doesn't fix a broken system.</strong>
                                </p>
                            </div>

                            <div className="card-premium p-8">
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    So we moved into lead generation.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    More leads exposed the real leak: missed calls, slow replies, inconsistent follow-up, and no visibility on outcomes.
                                </p>
                            </div>

                            <div className="card-premium p-8 bg-primary/5">
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Now we add the final piece that makes the system convert:
                                </p>
                                <p className="text-xl font-semibold text-foreground leading-relaxed">
                                    An Instant Receptionist that answers, routes, and books—even when you're busy or closed.
                                </p>
                            </div>

                            <div className="text-center p-8">
                                <p className="text-xl font-semibold text-foreground mb-4">
                                    That's why our work is different.
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    We don't sell tactics in isolation. We install conversion infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Bring */}
            <section className="section-padding bg-muted/30">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-section text-center mb-12">What We Bring to the Table</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {capabilities.map((capability, i) => {
                                const Icon = capability.icon;
                                return (
                                    <div key={i} className="card-premium p-6 bg-background">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <p className="font-medium text-foreground">{capability.title}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-lg text-muted-foreground italic">
                                We've been on both sides—creative and technical. We know what actually works.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <FinalCTA
                title="Want the leak fixed fast?"
                subhead="Call now. 60 seconds to confirm fit and the next start date."
            />
        </div>
    );
};

export default About;
