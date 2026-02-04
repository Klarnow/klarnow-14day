import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Solution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background" 
      id="solution"
    >
      <div className="container-narrow text-center">
        <div className={cn("scroll-fade-in", isVisible && "visible")}>
          <p className="eyebrow mb-4">The Solution</p>
          <h2 className="heading-section heading-mixed mb-6">
            We install the system.<br />
            You do <span className="serif-italic">what you're best at.</span>
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Instant Receptionist is the front desk you never had time to train. Routes enquiries, books properly, and follows up until there's an outcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
