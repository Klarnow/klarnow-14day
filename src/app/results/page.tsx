"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Target, Eye } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

const PHONE_NUMBER = "+441616960976";

const Results = () => {
    const outcomes = [
        {
            icon: TrendingUp,
            title: "More enquiries captured",
            description: "Calls answered or logged—even when you're unavailable."
        },
        {
            icon: Target,
            title: "More bookings from the same traffic",
            description: "No more \"I'll think about it\" disappearing into the void."
        },
        {
            icon: Clock,
            title: "Fewer no-shows",
            description: "Confirmations 24 hours before. Reminders 2 hours before."
        },
        {
            icon: CheckCircle2,
            title: "Every lead logged with an outcome",
            description: "Booked, followed up, or closed. You know where everything stands."
        },
        {
            icon: Eye,
            title: "Visibility on what needs attention today",
            description: "No more guessing. You see what's due and what's next."
        }
    ];

    return (
        <div className="flex flex-col">

            {/* Hero Section */}
            <section className="relative hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="eyebrow mb-4 md:mb-6 animate-fade-in">Results</p>
                        <h1 className="heading-display mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            What changes when the system is installed.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            Faster response. Cleaner follow-up. Clear outcomes. Less chaos.
                        </p>
                        <Button variant="hero" size="lg" asChild>
                            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                                Call now
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-section text-center mb-12">Outcomes You Can Expect</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {outcomes.map((outcome, i) => {
                                const Icon = outcome.icon;
                                return (
                                    <div key={i} className="card-premium p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">{outcome.title}</h3>
                                                <p className="text-muted-foreground">{outcome.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Before/After */}
            <section className="section-padding bg-muted/30">
                <div className="container-wide">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="heading-section text-center mb-12">What Changes After Installation</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Before */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold mb-6">Before the system:</h3>
                                {[
                                    { issue: "3am enquiry", result: "sits in your inbox until morning" },
                                    { issue: "Missed call during a job", result: "they call someone else" },
                                    { issue: "\"I'll think about it\"", result: "disappears forever" },
                                    { issue: "No-show", result: "empty slot, lost revenue" },
                                    { issue: "Where did that lead go?", result: "no idea" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-background rounded-lg border border-border/30">
                                        <p className="text-sm">
                                            <span className="font-medium text-foreground">{item.issue}</span>
                                            <span className="text-muted-foreground"> → {item.result}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* After */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold mb-6 text-success">After the system:</h3>
                                {[
                                    { issue: "3am enquiry", result: "captured and responded to by 9am" },
                                    { issue: "Missed call during a job", result: "AI books them before they move on" },
                                    { issue: "\"I'll think about it\"", result: "automatic follow-up in 48 hours" },
                                    { issue: "No-show", result: "confirmation 24hrs before, reminder 2hrs before" },
                                    { issue: "Where did that lead go?", result: "timestamped, logged, next action visible" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-success/5 rounded-lg border border-success/20">
                                        <p className="text-sm">
                                            <span className="font-medium text-foreground">{item.issue}</span>
                                            <span className="text-muted-foreground"> → {item.result}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* See It Live */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="heading-section mb-6">See It Live</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Want to see the system in action before you commit?<br />
                            We'll show you a live install on the 60-second fit check call.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <FinalCTA
                title="Want the same system installed?"
                subhead="Call now. 60 seconds to confirm fit and the next start date."
            />
        </div>
    );
};

export default Results;
