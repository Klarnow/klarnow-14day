"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

const PHONE_NUMBER = "+441616960976";

const SystemPage = () => {
    return (
        <div className="flex flex-col">

            {/* Hero Section */}
            <section className="relative hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="eyebrow mb-4 md:mb-6 animate-fade-in">The 14-Day System</p>
                        <h1 className="heading-display mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            The system that turns enquiries into booked appointments.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            In 14 days, we install your call-first page, Instant Receptionist, booking flow, follow-ups, reminders, and owner visibility—so no enquiry disappears.
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

            {/* Who It's For */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-section text-center mb-12">Who It's For</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card-premium p-8">
                                <h3 className="heading-subsection mb-4 text-success">This system works if:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "You sell appointments, consultations, or viewings",
                                        "You already get enquiries but bookings leak",
                                        "You want a clear process with visible outcomes",
                                        "You can respond during open hours when escalation is needed"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-premium p-8 bg-muted/30">
                                <h3 className="heading-subsection mb-4">Not for you if:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "You want a full website rebuild (we don't do that)",
                                        "You want unlimited custom features (start with Custom Services)",
                                        "You cannot respond during open hours at all"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-muted-foreground">• {item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Install */}
            <section className="section-padding bg-muted/30">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-section text-center mb-4">What We Install</h2>
                        <p className="text-xl text-center text-muted-foreground mb-12 font-medium">
                            Answered. Booked. Followed up. Logged.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Call-first landing page with one clear action",
                                "Instant Receptionist for missed calls and after-hours",
                                "Booking setup (Cal.com or your current tool)",
                                "Follow-up automation for unbooked enquiries",
                                "Confirmations and reminders",
                                "No-show recovery",
                                "Owner visibility—every lead timestamped with next action"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-section text-center mb-12">Timeline: What Happens Across the 14 Days</h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Days 1–3: Leak map and build plan",
                                    description: "We audit where enquiries are breaking down and map out what gets built."
                                },
                                {
                                    title: "Days 4–11: Build and integration",
                                    description: "We build your call-first page, install the Instant Receptionist, connect your booking system, and set up follow-up automation."
                                },
                                {
                                    title: "Day 12: Go-live (Traffic switch-on)",
                                    description: "Your system goes live. Traffic starts hitting it. We monitor in real-time."
                                },
                                {
                                    title: "Days 13–14: Monitoring and handover",
                                    description: "We watch performance, handle any issues, and hand over full control to you."
                                }
                            ].map((phase, i) => (
                                <div key={i} className="card-premium p-6">
                                    <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                                    <p className="text-muted-foreground">{phase.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                            <p className="text-sm text-muted-foreground mb-2">
                                <strong>Note:</strong> Software subscriptions and ad spend are paid by you directly.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <strong>Installation guarantee:</strong> If we can't deliver in 14 days, you don't pay.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <FinalCTA
                title="Want this installed in your business?"
                subhead="Call now. 60 seconds to confirm fit and the next start date."
            />
        </div>
    );
};

export default SystemPage;
