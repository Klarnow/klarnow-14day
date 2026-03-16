"use client";

import Hero from "@/components/sections/Hero";
import LiveActivity from "@/components/sections/LiveActivity";
import Problem from "@/components/sections/Problem";
import Roadmap from "@/components/sections/Roadmap";
import Proof from "@/components/sections/Proof";
import Pricing from "@/components/sections/Pricing";
import Results from "@/components/sections/Results";
import Enterprise from "@/components/sections/Enterprise";
import FAQ from "@/components/sections/FAQ";
import CustomServices from "@/components/sections/CustomServices";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
    return (
        <main>
            <Hero />
            <LiveActivity />
            <Problem />
            <Roadmap />
            <Proof />
            <Pricing />
            <Results />
            <Enterprise />
            <FAQ />
            <CustomServices />
            <FinalCTA />
        </main>
    );
};

export default Index;

