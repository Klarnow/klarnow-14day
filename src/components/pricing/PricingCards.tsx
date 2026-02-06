"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

export const pricingPackages = [
    {
        name: "Instant Receptionist",
        price: "£995",
        bestFor: "You miss calls or lose after-hours enquiries.",
        promise: "Stop the bleeding today.",
        features: [
            "AI call agent installed and live",
            "Answers, books, reschedules, cancels, handles FAQs",
            "Routing rules and handover to you when needed"
        ]
    },
    {
        name: "14-Day System + Traffic",
        price: "£2,795",
        bestFor: "You want the full fix + launch support.",
        promise: "Turn it on and scale it.",
        features: [
            "Everything in Instant Receptionist",
            "Landing page or funnel page installed",
            "Tracking and conversion events",
            "Go-live (traffic switch-on) on Day 12",
            "4 launch ad creatives"
        ],
        featured: true
    },
    {
        name: "System + Traffic + Pro Content",
        price: "£3,995",
        bestFor: "You're launching or relaunching properly.",
        promise: "Launch like you mean it.",
        features: [
            "Everything in the £2,795 package",
            "Professional shoot",
            "12 edited clips for ads, conversion page and social"
        ]
    }
];

interface PricingCardsProps {
    showCTA?: boolean;
}

export const PricingCards = ({ showCTA = true }: PricingCardsProps) => {
    return (
        <>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPackages.map((pkg, i) => (
                    <div
                        key={i}
                        className={`card-premium p-8 flex flex-col ${pkg.featured ? 'ring-1 ring-foreground relative' : ''}`}
                    >
                        {pkg.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-sm font-medium rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-3">{pkg.name}</h3>
                            <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                            <p className="text-sm text-muted-foreground mb-3">
                                {pkg.bestFor}
                            </p>
                            <p className="text-sm font-medium text-[hsl(262,83%,58%)]">
                                {pkg.promise}
                            </p>
                        </div>

                        <div className="mb-8 flex-grow">
                            <ul className="space-y-2.5">
                                {pkg.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-foreground/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {showCTA && (
                            <Button
                                variant={pkg.featured ? "default" : "outline"}
                                size="lg"
                                className="w-full"
                                asChild
                            >
                                <a href={`tel:${PHONE_NUMBER}`}>
                                    Get Started
                                </a>
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 max-w-6xl mx-auto p-6 rounded-xl space-y-2 text-center">
                <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Software subscriptions and ad spend are paid by you directly.
                </p>
                <p className="text-sm text-muted-foreground">
                    <strong>Installation guarantee:</strong> If we can't deliver your system in 14 days, you don't pay.
                </p>
            </div>
        </>
    );
};
