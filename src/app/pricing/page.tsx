"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PricingCards } from "@/components/pricing/PricingCards";
import FinalCTA from "@/components/sections/FinalCTA";

const PHONE_NUMBER = "+441616960976";

const PricingPage = () => {
    return (
        <div className="flex flex-col">

            {/* Hero Section */}
            <section className="relative hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="eyebrow mb-4 md:mb-6 animate-fade-in">Pricing</p>
                        <h1 className="heading-display mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Three installs. One outcome.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            Choose the level of launch support you want. Every option stops the leak.
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

            {/* Pricing Cards */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <PricingCards />
                </div>
            </section>

            {/* CTA */}
            <FinalCTA
                title="Ready to stop the leak?"
                subhead={
                    <>
                        Call now. We'll tell you what's breaking and when we can fix it.<br />
                        60 seconds. No pitch.
                    </>
                }
            />
        </div>
    );
};

export default PricingPage;
