import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudiesComingSoon from "@/components/sections/CaseStudiesComingSoon";
import dynamic from "next/dynamic";

const FloatingBar = dynamic(() => import("@/components/ui/FloatingBar"));

export const metadata: Metadata = {
    title: "Case Studies — NexLora Labs Engineeering",
    description: "Explore in-depth case studies of custom software development, AI automation, and product architecture by the NexLora Labs engineering team.",
    alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
    return (
        <div className="bg-[#FAFAF8] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col pt-[72px] lg:pt-[88px] w-full">
                <CaseStudiesComingSoon />
            </main>
            <Footer />
            <FloatingBar />
        </div>
    );
}
