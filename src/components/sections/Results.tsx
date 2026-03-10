"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Results = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="section-padding bg-background-subtle"
            id="results"
        >
            <div className="container-narrow text-center">
                <div className={cn("scroll-fade-in", isVisible && "visible")}>
                    <p className="eyebrow mb-4">What this helps improve</p>
                    <h2 className="heading-section heading-mixed mb-6">
                        More answered leads. <span className="serif-italic">More booked appointments.</span>
                    </h2>
                    <ul className="text-body max-w-xl mx-auto space-y-2 mb-6 text-foreground font-medium">
                        <li>Less voicemail.</li>
                        <li>Less delay.</li>
                        <li>Less missed revenue.</li>
                    </ul>
                    <p className="text-body max-w-xl mx-auto text-muted-foreground">
                        This is about fixing what happens after interest shows up.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Results;
