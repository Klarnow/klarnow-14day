"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

export const pricingPackages = [
    {
        name: "Klarnow AI Receptionist",
        price: "From £95/month",
        bestFor: "Businesses missing calls, after-hours enquiries, and easy bookings.",
        promise: "Answers calls. Handles bookings. Stops leads going cold.",
        features: [
            "Instant call answering",
            "Booking and rescheduling",
            "Basic customer questions",
            "One call flow",
            "One calendar connection",
            "Basic support"
        ],
        ctaText: "Start with AI Receptionist",
        options: [
            "24-month plan from £95/month",
            "12-month plan from £145/month",
            "Rolling monthly from £195/month"
        ]
    },
    {
        name: "Klarnow 14-Day Call-First System",
        price: "From £995/month",
        bestFor: "Businesses that want the full system, not just call answering.",
        promise: "The full lead capture and booking system, installed around your business.",
        features: [
            "AI Receptionist",
            "Mobile-first landing page",
            "Booking flow",
            "Follow-up automation",
            "Reminders and no-show recovery",
            "Monthly support and improvements"
        ],
        ctaText: "Explore the 14-Day System",
        featured: true,
        options: []
    }
];

interface PricingCardsProps {
    showCTA?: boolean;
}

export const PricingCards = ({ showCTA = true }: PricingCardsProps) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {pricingPackages.map((pkg, i) => (
                    <div
                        key={i}
                        className={`card-premium p-6 sm:p-8 flex flex-col min-w-0 ${pkg.featured ? 'ring-1 ring-foreground relative' : ''}`}
                    >
                        {pkg.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-sm font-medium rounded-full whitespace-nowrap">
                                Built for Service Businesses
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-3">{pkg.name}</h3>
                            <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                            <p className="text-sm font-medium text-[hsl(262,83%,58%)] mb-3">
                                {pkg.promise}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <strong>Best for:</strong> {pkg.bestFor}
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
                            
                            {pkg.options && pkg.options.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-border/50">
                                    <h4 className="text-sm font-bold mb-3">Plan options</h4>
                                    <ul className="space-y-2">
                                        {pkg.options.map((opt, k) => (
                                            <li key={k} className="text-xs text-muted-foreground">{opt}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {showCTA && (
                            <Button
                                variant={pkg.featured ? "default" : "outline"}
                                size="lg"
                                className="w-full"
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
                <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Software subscriptions and any ad spend are paid by you directly.
                </p>
            </div>
        </>
    );
};
