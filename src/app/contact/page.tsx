import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import dynamic from "next/dynamic";

const FloatingBar = dynamic(() => import("@/components/ui/FloatingBar"));

export const metadata: Metadata = {
    title: "Contact Nexlance — Talk to Our Engineers About Your Project",
    description:
        "Ready to build your next digital product? Contact the Nexlance engineering team for a free discovery call. Custom software, AI automation & n8n workflows for businesses of all sizes.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact Nexlance — Free Consultation for Custom Software & AI Automation",
        description:
            "Get in touch with our freelance engineering team to discuss your project. Custom web development, mobile apps, SaaS, AI automation & n8n workflows for startups, SMBs and enterprises.",
        url: "https://nexlance.tech/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="bg-[#f4f4f5] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col pt-24 w-full">
                <Contact />
            </main>
            <Footer />
            <FloatingBar />
        </div>
    );
}
