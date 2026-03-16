"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { m, useInView } from "framer-motion";
import { resetCookieConsent } from "@/components/ui/CookieConsent";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    const handleSubscribe = async () => {
        if (!email || isSubmitting) return;
        setIsSubmitting(true);
        try {
            const fd = new FormData();
            fd.append("access_key", "12b3272b-2a01-4d5b-89c9-b432f15ebfbb");
            fd.append("email", email);
            fd.append("subject", "New Newsletter Subscription | NexLora Labs");
            fd.append("from_name", "NexLora Labs Website");
            const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
            const data = await res.json();
            if (data.success) setSubmitted(true);
        } catch (err) {
            console.error("Subscription error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer ref={ref} className="relative font-dm bg-white overflow-hidden border-t border-gray-100">

            {/* ══════════════════════════════════════════════════════
                AMBIENT MAGICAL GLOWS (Subtle Light Theme Effects)
            ══════════════════════════════════════════════════════ */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>
                {/* Top left subtle blue glow */}
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[120px]" />
                {/* Bottom right subtle purple glow */}
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-100/40 blur-[120px]" />

                {/* Very subtle grid pattern overlay for texture */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-4 lg:pt-8 pb-8">

                {/* ══════════════════════════════════════════════════════
                    TOP HERO SECTION IN FOOTER
                ══════════════════════════════════════════════════════ */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-gray-100 pb-8 mb-10"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[13px] font-semibold mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Let&apos;s build the extraordinary</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05]">
                            Ready to scale <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">your business?</span>
                        </h2>
                    </div>

                    <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden transition-transform active:scale-95 shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 font-semibold text-[15px]">Start a Project</span>
                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </m.div>

                {/* ══════════════════════════════════════════════════════
                    MAIN GRID CONTENT
                ══════════════════════════════════════════════════════ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-8 gap-y-8">

                    {/* Brand & Info */}
                    <m.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                        className="flex flex-col"
                    >
                        <Link href="/" className="inline-block" onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}>
                            <div className="relative w-[240px] md:w-[460px] h-[60px] md:h-[120px] mb-2 md:-ml-4">
                                <Image
                                    src="/logo.png"
                                    alt="NexLora Labs"
                                    fill
                                    sizes="(max-width: 768px) 240px, 460px"
                                    className="object-contain object-left"
                                    unoptimized
                                />
                            </div>
                        </Link>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed font-normal max-w-[280px] mb-5">
                            Freelance engineering team building web apps, mobile apps, SaaS, AI solutions & n8n automations for businesses of all sizes.
                        </p>
                        <div className="flex flex-col gap-2.5">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nexloralabs@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-[14.5px] font-medium transition-colors">
                                <span className="text-gray-400 text-[13px]">✉</span> nexloralabs@gmail.com
                            </a>
                            <a href="tel:+919505231281" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-[14.5px] font-medium transition-colors">
                                <span className="text-gray-400 text-[14px]">☎</span> +91 95052 31281
                            </a>
                        </div>
                    </m.div>

                    {/* Company Navigation */}
                    <m.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15, ease }}
                    >
                        <h4 className="font-semibold text-gray-900 text-[14px] uppercase tracking-wider mb-5">Company</h4>
                        <ul className="space-y-3.5">
                            {[
                                { label: "Services", href: "/#services" },
                                { label: "Our Work", href: "/#work" },
                                { label: "Why Us", href: "/#why-us" },
                                { label: "FAQs", href: "/#faq" },
                                { label: "Contact", href: "/contact" },
                            ].map(l => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-gray-500 hover:text-blue-600 text-[15px] font-medium transition-colors duration-200 inline-block relative group">
                                        {l.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </m.div>

                    {/* Socials Navigation */}
                    <m.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease }}
                    >
                        <h4 className="font-semibold text-gray-900 text-[14px] uppercase tracking-wider mb-5">Socials</h4>
                        <ul className="space-y-3.5">
                            {[
                                { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=nexloralabs@gmail.com" },
                                { label: "Instagram", href: "https://www.instagram.com/nexloralabs" },
                                { label: "LinkedIn", href: "https://www.linkedin.com/company/nexloralabs" },
                            ].map(l => (
                                <li key={l.label}>
                                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-gray-500 hover:text-blue-600 text-[15px] font-medium transition-colors duration-200">
                                        <span className="relative">
                                            {l.label}
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full" />
                                        </span>
                                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-0 -translate-y-1 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </m.div>

                    {/* Newsletter */}
                    <m.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.25, ease }}
                    >
                        <h4 className="font-semibold text-gray-900 text-[14px] uppercase tracking-wider mb-5">Newsletter</h4>
                        <p className="text-gray-500 text-[14px] leading-relaxed font-normal mb-4">
                            Subscribe to get the latest design news, articles, resources and inspiration.
                        </p>

                        {submitted ? (
                            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 font-medium text-[14px]">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                                        <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                Thanks for subscribing!
                            </div>
                        ) : (
                            <div className="relative flex items-center bg-gray-50 hover:bg-white border border-gray-200 rounded-full h-[52px] shadow-sm hover:shadow-md focus-within:border-blue-400 focus-within:bg-white focus-within:shadow-md focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-300">
                                <span className="absolute left-4 text-gray-400">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                                    className="flex-1 bg-transparent w-full h-full pl-11 pr-[4.5rem] text-[14px] text-gray-900 placeholder-gray-400 outline-none font-medium rounded-full"
                                    disabled={isSubmitting}
                                />
                                <button
                                    onClick={handleSubscribe}
                                    disabled={isSubmitting}
                                    className="absolute right-1.5 w-10 h-10 rounded-full bg-gray-900 hover:bg-blue-600 text-white flex items-center justify-center transition-colors duration-300 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <ArrowRight className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        )}
                    </m.div>
                </div>

                {/* ══════════════════════════════════════════════════════
                    BOTTOM BAR
                ══════════════════════════════════════════════════════ */}
                <div className="mt-10 pt-5 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-[13px] font-medium">
                        © {year} NexLora Labs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-gray-400 hover:text-gray-900 text-[13px] font-medium transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-gray-900 text-[13px] font-medium transition-colors">
                            Terms of Service
                        </Link>
                        <button
                            onClick={() => resetCookieConsent()}
                            className="text-gray-400 hover:text-gray-900 text-[13px] font-medium transition-colors"
                        >
                            Cookie Options
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}