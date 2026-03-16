import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Privacy Policy | NexLora Labs",
    description: "Your privacy is our priority. Learn how NexLora Labs handles your data and protects your information.",
    alternates: { canonical: "/privacy" },
    openGraph: {
        title: "Privacy Policy | NexLora Labs",
        description: "Your privacy is our priority. Learn how NexLora Labs handles your data and protects your information.",
        url: "https://nexloralabs.com/privacy",
    },
};

const sections = [
    {
        title: "Introduction",
        items: [
            {
                heading: "Purpose of the Policy",
                content: "This Privacy Policy outlines how NexLora Labs collects, uses, discloses, and protects your information when you visit our website or interact with our services. It is designed to help you understand the types of data we collect, why we collect it, and how we use and manage that information. By making our data practices transparent, we aim to foster trust and ensure compliance with applicable data protection laws.",
            },
            {
                heading: "Scope of Coverage",
                content: "This policy applies to all visitors, users, and others who access our website or use our services, regardless of their physical location or device used. It covers all data interactions across our platforms, including our primary website, contact forms, email communications, and third-party service integrations that collect or process data on our behalf.",
            },
            {
                heading: "Consent",
                content: "By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with the practices outlined here, we recommend discontinuing use of our services. Continued use of our website following the publication of updates constitutes your acceptance of those changes.",
            },
        ],
    },
    {
        title: "Information We Collect",
        items: [
            {
                heading: "Personal Information",
                content: "We may collect personally identifiable information such as your full name, email address, phone number, job title, company name, and any other details you provide voluntarily through our contact forms or communication channels. This information is collected when you submit inquiries, request quotes, subscribe to newsletters, or engage in any other form of communication with us.",
            },
            {
                heading: "Non-Personal Information",
                content: "Non-personal information includes data that does not directly identify you but provides insights into your usage of our website. This may include your browser type, operating system, language preferences, referring URLs, and device information. This data helps us analyze trends, administer the site, and improve user experience.",
            },
            {
                heading: "Information Collected Automatically",
                content: "We use cookies, tracking pixels, and third-party analytics tools like Google Analytics to collect information about your interaction with our site. This includes pages visited, time spent on each page, user flow, and interactions with site features. These tools help us understand visitor behavior and optimize our site accordingly.",
            },
        ],
    },
    {
        title: "How We Use Your Information",
        items: [
            {
                heading: "To Provide and Maintain Our Services",
                content: "Your information is essential for us to deliver the services you request. We use it to process your inquiries, manage project communications, create client accounts, and fulfill our contractual obligations. Without this information, we may be unable to provide personalized service or maintain consistent communication.",
            },
            {
                heading: "To Communicate with You",
                content: "We may use your contact information to send you service-related messages, respond to questions, deliver project updates, or provide administrative notices. With your consent, we may also send promotional materials, newsletters, and information about new offerings or features that may interest you.",
            },
            {
                heading: "To Improve User Experience",
                content: "We use the data we collect to analyze how our website is being used and to identify areas for improvement. By understanding user behavior, we can refine our content, streamline navigation, and ensure the website functions seamlessly across devices. Your feedback and behavioral data inform design and development decisions that enhance overall usability.",
            },
        ],
    },
    {
        title: "Sharing and Disclosure",
        items: [
            {
                heading: "Service Providers and Partners",
                content: "We may share your information with third-party service providers who assist us in hosting, maintaining, and analyzing our website and communications. These partners are contractually obligated to safeguard your information and only use it for the purposes specified by us.",
            },
            {
                heading: "For Legal Requirements",
                content: "We may disclose your personal information if required to do so by law or in response to valid legal processes such as subpoenas, court orders, or government requests. We also reserve the right to disclose information to protect our legal rights, prevent fraud, and ensure the security of our users and the public.",
            },
            {
                heading: "In Business Transfers",
                content: "In the event that NexLora Labs is involved in a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the business transaction. We will ensure that any new entity handling your data is bound by privacy obligations consistent with this policy.",
            },
        ],
    },
    {
        title: "Data Security",
        items: [
            {
                heading: "How We Protect Your Data",
                content: "We implement industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your personal data from unauthorized access, disclosure, alteration, or destruction. Our internal processes are designed to minimize data exposure and mitigate potential security risks.",
            },
        ],
    },
    {
        title: "Third-Party Links and Services",
        items: [
            {
                heading: "External Websites",
                content: "Our website may contain links to other websites not operated by NexLora Labs. We are not responsible for the privacy practices or the content of these external sites. We encourage users to review the privacy policies of any third-party sites they visit.",
            },
            {
                heading: "Embedded Content",
                content: "Articles or pages on our website may include embedded content (e.g., videos, images, articles) from other websites. This content behaves in the same way as if the visitor had visited the original website, which may collect data or use cookies independently.",
            },
        ],
    },
];

export default function PrivacyPage() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 text-[14px] font-medium">
                            Last updated: May 25, 2025
                        </p>

                        {/* Policy nav pills */}
                        <div className="flex gap-3 mt-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm text-[13px] font-bold text-gray-900">
                                <FileText className="w-3.5 h-3.5 text-blue-500" />
                                Privacy Policy
                            </span>
                            <Link href="/terms"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-[13px] font-medium text-gray-400 hover:text-gray-700 hover:border-gray-200 transition-all">
                                <FileText className="w-3.5 h-3.5" />
                                Terms of Service
                            </Link>
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
