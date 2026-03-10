"use client";

import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import Results from "@/components/sections/Results";
import Proof from "@/components/sections/Proof";
import Enterprise from "@/components/sections/Enterprise";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
    return (
        <main>
            <Hero />
            <Problem />
            <Roadmap />
            <Proof />
            <Pricing />
            <Results />
            <Enterprise />
            <FAQ />
            <FinalCTA />
        </main>
    );
};

export default Index;
