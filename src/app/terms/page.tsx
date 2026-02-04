const Terms = () => {
    return (
        <section className="section-padding bg-background pt-32 md:pt-40">
            <div className="container-narrow">
                <h1 className="heading-display mb-12">Terms</h1>

                <div className="space-y-12 text-lg text-foreground/80 leading-relaxed">
                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Scope</h2>
                        <p>We provide installation services based on the package selected.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Client responsibilities</h2>
                        <p>You must provide timely access to required tools and accounts. Delays in access or approvals will shift timelines.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Advertising and software costs</h2>
                        <p>Ad spend is paid by you directly to the platform. Required software subscriptions are paid by you unless explicitly stated otherwise.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Installation guarantee</h2>
                        <p>If we can't deliver your system in 14 days, you don't pay. Installation is guaranteed for the agreed scope.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Capacity and start dates</h2>
                        <p>We run 4 install slots per month. Start dates are confirmed on the call.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Deliverables by package</h2>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>
                                <strong>Instant Receptionist ($995):</strong> AI call agent installed and live.
                            </li>
                            <li>
                                <strong>14-Day System + Traffic ($2,795):</strong> Full install plus go-live on Day 12. Includes 4 launch creatives.
                            </li>
                            <li>
                                <strong>System + Traffic + Pro Content ($3,995):</strong> Full install plus professional shoot. Includes 12 edited vertical clips (9:16).
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Payments</h2>
                        <p>Payment secures an install slot.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Communications</h2>
                        <p>Requests and approvals must go through the agreed channel to keep delivery on time.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Updates</h2>
                        <p>We update these terms as needed. The latest version is published on this website.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;
