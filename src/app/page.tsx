import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import FounderQuote from "@/components/sections/FounderQuote";
import Challenges from "@/components/sections/Challenges";

/* ── Deep below-fold: dynamic imports (only loads when user scrolls) ── */
const WhyUs = dynamic(() => import("@/components/sections/WhyUs"));
const GetStarted = dynamic(() => import("@/components/sections/GetStarted"));
const SolutionsGrid = dynamic(() => import("@/components/sections/SolutionsGrid"));
const OurWorks = dynamic(() => import("@/components/sections/OurWorks"));
const ComparisonTable = dynamic(() => import("@/components/sections/ComparisonTable"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const FloatingBar = dynamic(() => import("@/components/ui/FloatingBar"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ProjectsCarousel />

        <FounderQuote />
        <Challenges />
        <WhyUs />
        <GetStarted />
        <SolutionsGrid />
        <OurWorks />
        <ComparisonTable />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingBar />
    </>
  );
}
