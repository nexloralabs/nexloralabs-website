import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Terms of Service | NexLora Labs",
    description: "Read the terms and conditions for using NexLora Labs services and website.",
    alternates: { canonical: "/terms" },
    openGraph: {
        title: "Terms of Service — NexLora Labs",
        description: "Terms and conditions governing your use of NexLora Labs's custom software development services.",
        url: "https://nexloralabs.com/terms",
    },
};

const sections = [
    {
        title: "Acceptance of Terms",
        items: [
            {
                heading: "Agreement to Terms",
                content: "By accessing or using the services provided by NexLora Labs, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services. These terms apply to all visitors, clients, and others who access or use our services.",
            },
            {
                heading: "Modifications",
                content: "NexLora Labs reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes constitutes acceptance of the revised terms. We encourage you to review these terms periodically.",
            },
        ],
    },
    {
        title: "Services",
        items: [
            {
                heading: "Scope of Services",
                content: "NexLora Labs provides custom software development services including but not limited to: web application development, mobile app development, SaaS platform development, AI and automation solutions, UI/UX design, branding, MVP prototyping, and digital marketing. The specific scope of work for each project will be defined in a separate project agreement or statement of work.",
            },
            {
                heading: "Service Delivery",
                content: "We commit to delivering all services as described in the agreed-upon project scope. Timelines, milestones, and deliverables will be clearly outlined in the project agreement. Any changes to the scope of work must be agreed upon by both parties in writing and may result in adjustments to the project timeline and cost.",
            },
        ],
    },
    {
        title: "Client Responsibilities",
        items: [
            {
                heading: "Project Cooperation",
                content: "Clients are responsible for providing timely feedback, content, and approvals as required throughout the project lifecycle. Delays in client responses may impact project timelines. Clients must provide accurate and complete information necessary for the successful completion of their project.",
            },
            {
                heading: "Content and Materials",
                content: "Clients are responsible for ensuring that all content, images, and materials provided to NexLora Labs do not infringe on any third-party intellectual property rights. The client warrants that they have the necessary rights and permissions to use and share all provided materials.",
            },
        ],
    },
    {
        title: "Payment Terms",
        items: [
            {
                heading: "Pricing and Payment",
                content: "All pricing is outlined in the project proposal or statement of work. Unless otherwise agreed, a deposit is required before work begins. Payments are due according to the schedule specified in the project agreement. Late payments may result in work suspension until outstanding balances are resolved.",
            },
            {
                heading: "Refund Policy",
                content: "Deposits are non-refundable once work has commenced. Refunds for completed milestones are not available. If either party terminates the agreement, the client is responsible for payment of all work completed up to the termination date. Detailed refund terms will be outlined in each project agreement.",
            },
        ],
    },
    {
        title: "Intellectual Property",
        items: [
            {
                heading: "Ownership",
                content: "Upon full payment, the client receives full ownership of all custom code, designs, and deliverables created specifically for their project. NexLora Labs retains the right to use general knowledge, techniques, and non-proprietary components in future projects. Pre-existing tools, frameworks, and libraries remain the property of their respective owners.",
            },
            {
                heading: "Portfolio Rights",
                content: "NexLora Labs reserves the right to display completed projects in our portfolio, case studies, and marketing materials unless explicitly prohibited by a written confidentiality agreement. We may reference the client's name and a general description of the work performed.",
            },
        ],
    },
    {
        title: "Limitation of Liability",
        items: [
            {
                heading: "Liability Cap",
                content: "NexLora Labs's total liability for any claim arising from our services shall not exceed the total fees paid by the client for the specific project in question. We are not liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, data, or business opportunities.",
            },
            {
                heading: "Warranties",
                content: "We provide a 6-month post-launch support and bug-fix period for all delivered projects. Beyond this warranty period, additional support and maintenance services may be arranged under a separate agreement. Our services are provided 'as is' without any other express or implied warranties.",
            },
        ],
    },
    {
        title: "Termination",
        items: [
            {
                heading: "Termination by Either Party",
                content: "Either party may terminate the service agreement with 14 days written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date. NexLora Labs will provide all completed deliverables and work-in-progress files upon receiving final payment.",
            },
        ],
    },
    {
        title: "Governing Law",
        items: [
            {
                heading: "Jurisdiction",
                content: "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be resolved through mutual consultation. If a resolution cannot be reached, the dispute shall be subject to the exclusive jurisdiction of the courts in Hyderabad, India.",
            },
            {
                heading: "Contact",
                content: "If you have any questions about these Terms of Service, please contact us at nexloralabs@gmail.com or through the contact form on our website.",
            },
        ],
    },
];

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white font-dm">

                {/* Hero */}
                <div className="bg-[#FAFAF8] border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-6 md:px-16 pt-32 pb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-[13px] font-medium mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
                            Terms of Service
                        </h1>
                        <p className="text-gray-400 text-[14px] font-medium">
                            Last updated: March 4, 2026
                        </p>

                        {/* Policy nav pills */}
                        <div className="flex gap-3 mt-8">
                            <Link href="/privacy"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-[13px] font-medium text-gray-400 hover:text-gray-700 hover:border-gray-200 transition-all">
                                <FileText className="w-3.5 h-3.5" />
                                Privacy Policy
                            </Link>
                            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm text-[13px] font-bold text-gray-900">
                                <FileText className="w-3.5 h-3.5 text-blue-500" />
                                Terms of Service
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-6 md:px-16 py-16">
                    <div className="space-y-16">
                        {sections.map((section, si) => (
                            <div key={si}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">
                                    {section.title}
                                </h2>
                                <div className="space-y-8">
                                    {section.items.map((item, ii) => (
                                        <div key={ii} className="pl-6 border-l-2 border-gray-100">
                                            <h3 className="text-[15px] font-bold text-gray-800 mb-2">
                                                {item.heading}
                                            </h3>
                                            <p className="text-gray-500 text-[14px] leading-[1.85] font-medium">
                                                {item.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
