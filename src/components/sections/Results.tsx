"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { CheckCircle2, TrendingUp, Zap, ShieldCheck, RefreshCw } from "lucide-react";

const outcomes = [
    { text: "More leads answered and captured", icon: CheckCircle2 },
    { text: "More appointments booked from existing enquiries", icon: TrendingUp },
    { text: "Faster follow-up that keeps buyers warm", icon: Zap },
    { text: "Less revenue lost to missed calls and slow response", icon: ShieldCheck },
    { text: "A managed system that improves every month", icon: RefreshCw },
];

const Results = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="section-padding bg-background-subtle"
            id="results"
        >
            <div className="container-wide">
                <div className={cn("text-center mb-12 scroll-fade-in", isVisible && "visible")}>
                    <p className="eyebrow mb-4">OUTCOMES</p>
                    <h2 className="heading-section mb-6">
                        More leads handled. More appointments booked. <br />
                        <span className="serif-italic text-primary">More revenue protected.</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto font-medium">
                        Klarnow fixes what happens after interest shows up — so more of the right people actually move forward.
                    </p>
                </div>

                <div className={cn("max-w-3xl mx-auto scroll-fade-up", isVisible && "visible")} style={{ transitionDelay: "150ms" }}>
                    <div className="grid md:grid-cols-1 gap-4">
                        {outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/30 hover:border-primary/20 transition-all duration-300">
                                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                                    <outcome.icon className="h-5 w-5 text-primary" />
                                </div>
                                <span className="text-base font-semibold text-foreground">{outcome.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;

