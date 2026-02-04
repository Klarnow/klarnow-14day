"use client";

import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import WhatWeInstall from "@/components/sections/WhatWeInstall";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";
import BrandOS from "@/components/sections/BrandOS";
import CustomServices from "@/components/sections/CustomServices";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
    return (
        <main>
            <Hero />
            <Problem />
            <WhatWeInstall />
            <Roadmap />
            <Pricing />
            <FAQ />
            <BrandOS />
            <CustomServices />
            <FinalCTA />
        </main>
    );
};

export default Index;
