const PHONE_NUMBER = "+441616960976";
const PHONE_DISPLAY = "+44 161 696 0976";

const Privacy = () => {
    return (
        <section className="section-padding bg-background pt-32 md:pt-40">
            <div className="container-narrow">
                <h1 className="heading-display mb-12">Privacy Policy</h1>

                <div className="space-y-12 text-lg text-foreground/80 leading-relaxed">
                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Who we are</h2>
                        <p>This website is operated by Klarnow. We provide installation services for lead capture and booking systems.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">What we collect</h2>
                        <p>Contact details you provide, information shared during calls or audits, website usage data, and tracking data where you consent.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">How we use your data</h2>
                        <p>To respond to enquiries, deliver audits and installations, provide support, improve the system, and measure performance.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Call handling</h2>
                        <p>We log call details and outcomes to route you correctly and improve quality.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Sharing</h2>
                        <p>We do not sell your data. We share limited data with providers used to run our tools.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Retention</h2>
                        <p>We keep data only as long as needed, then delete or anonymise where possible.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Contact</h2>
                        <p>For privacy questions: <a href={`tel:${PHONE_NUMBER}`} className="font-semibold hover:underline">{PHONE_DISPLAY}</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
