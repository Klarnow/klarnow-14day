const ProductPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        {/* Header - Large mixed typography */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">
          <h2 className="heading-section heading-mixed">
            Designed to<br />
            Help You Do<br />
            More <span className="serif-italic">With Less</span><br />
            <span className="serif-italic">Stress</span>
          </h2>
          <div className="lg:pt-4">
            <p className="text-body max-w-md">
              Our call-first system is built for modern service businesses who want to stay organized, 
              focused, and in control of every enquiry.
            </p>
          </div>
        </div>

        {/* Feature grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { 
              title: "Smart Call Handling", 
              description: "Easily answer, qualify, and route calls with an AI receptionist that adapts to your business workflow."
            },
            { 
              title: "Integrated Booking & Follow-ups", 
              description: "Stay ahead of your schedule with built-in booking that syncs across all your devices and follows up automatically."
            },
            { 
              title: "Focus Mode", 
              description: "Eliminate distractions with a minimalist dashboard and time-blocking tools that help you get into deep work—fast."
            },
          ].map((feature) => (
            <div key={feature.title} className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
