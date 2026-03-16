"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "+441616960976";

export const pricingPackages = [
    {
        name: "Klarnow Receptionist",
        price: "From £95/month",
        bestFor: "service businesses that want enquiries answered and bookings captured from day one.",
        promise: "Your business keeps answering, capturing, and booking enquiries even when the team is flat out.",
        features: [
            "Call answering and lead capture",
            "Booking and rescheduling",
            "Basic customer questions handled",
            "One call flow, one calendar connection",
            "Basic support included"
        ],
        ctaText: "Start with Receptionist",
        options: [
            "24-month plan — from £95/month",
            "12-month plan — from £145/month",
            "Rolling monthly — from £195/month"
        ]
    },
    {
        name: "Klarnow Growth System",
        price: "£995 Setup + £495/Month Managed",
        bestFor: "service businesses that want Klarnow to manage and grow the system for them.",
        promise: "Klarnow installs everything, runs it monthly, and is accountable for results.",
        features: [
            "Full system install in 14 days",
            "5 high-converting content assets",
            "AI receptionist & booking flow",
            "Follow-up automation system",
            "Mobile-first landing page",
            "Monthly managed service",
            "Script updates & optimisation monthly"
        ],
        ctaText: "Get the Growth System",
        featured: true,
        options: [
            "If not live in 14 days — you do not pay setup",
            "Monthly keeps it running and improving"
        ]
    }
];

interface PricingCardsProps {
    showCTA?: boolean;
}

export const PricingCards = ({ showCTA = true }: PricingCardsProps) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {pricingPackages.map((pkg, i) => (
                    <div
                        key={i}
                        className={`card-premium p-6 sm:p-8 flex flex-col min-w-0 ${pkg.featured ? 'ring-2 ring-primary relative' : ''}`}
                    >
                        {pkg.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full whitespace-nowrap uppercase tracking-wider">
                                Recommended for growth
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-3">{pkg.name}</h3>
                            <div className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{pkg.price}</div>
                            <p className="text-sm font-semibold text-primary mb-4 leading-relaxed">
                                {pkg.promise}
                            </p>
                            <p className="text-base font-semibold mb-8 text-muted-foreground">Best for: {pkg.bestFor}</p>
                        </div>

                        <div className="mb-8 flex-grow">
                            <div className="mb-6">
                                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Included in {pkg.name}:</p>
                                <p className="text-sm font-medium text-foreground/60 italic">{pkg.promise}</p>
                            </div>
                            
                            <ul className="space-y-4 mb-10 flex-grow">
                                {pkg.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm font-semibold text-foreground/80 leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {pkg.options && pkg.options.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-border/50">
                                    <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Plan Details</h4>
                                    <ul className="space-y-2">
                                        {pkg.options.map((opt, k) => (
                                            <li key={k} className="text-xs text-muted-foreground flex items-center gap-2">
                                                <span className="w-1 h-1 bg-border rounded-full" />
                                                {opt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {showCTA && (
                            <Button
                                variant={pkg.featured ? "default" : "outline"}
                                size="lg"
                                className={cn(
                                    "w-full font-bold",
                                    pkg.featured ? "bg-primary hover:bg-primary/90" : "border-primary/20 hover:bg-primary/5"
                                )}
                                asChild
                            >
                                <a href={`tel:${PHONE_NUMBER}`}>
                                    {pkg.ctaText}
                                </a>
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto p-6 rounded-xl space-y-2 text-center">
                <p className="text-xs md:text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Software subscriptions and ad spend are paid directly by you.
                </p>
            </div>
        </>
    );
};

