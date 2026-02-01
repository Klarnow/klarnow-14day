const ProductPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-background-subtle border-y border-border/50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-subsection mb-3">What it looks like when it's working</h2>
          <p className="text-body max-w-2xl mx-auto">
            Calls answered or captured. Booking locked. Follow-up running. Everything logged.
          </p>
        </div>

        {/* Flow strip */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 md:gap-6 px-6 py-3 bg-card rounded-full border border-border shadow-card">
            {["Tap", "Call", "Book", "Confirm", "Show"].map((step, i) => (
              <span key={step} className="flex items-center gap-3 md:gap-6">
                <span className="text-sm md:text-base font-semibold text-foreground">{step}</span>
                {i < 4 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Activity preview row */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { 
              title: "Incoming Calls", 
              count: "12 today",
              items: ["Sarah M. • Booked", "James T. • Follow-up", "Emily R. • Booked"]
            },
            { 
              title: "Follow-ups Active", 
              count: "8 running",
              items: ["Day 2 reminder sent", "Confirmation due", "No-show recovery"]
            },
            { 
              title: "Bookings", 
              count: "9 this week",
              items: ["Tomorrow 10:00 AM", "Wed 2:30 PM", "Fri 11:00 AM"]
            },
          ].map((card) => (
            <div key={card.title} className="card-premium p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-foreground">{card.title}</h4>
                <span className="text-xs text-muted-foreground">{card.count}</span>
              </div>
              <div className="space-y-2">
                {card.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
