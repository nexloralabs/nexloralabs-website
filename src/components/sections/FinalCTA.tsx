"use client";

import { m } from "framer-motion";
import { Sparkles, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* Service pills for the marquee */
const services = [
    "Web Application Development",
    "Mobile App Development",
    "AI & Automation",
    "n8n Workflow Automation",
    "Business Process Automation",
    "UI/UX Design",
    "API Integration",
    "SaaS Product Development",
    "Full Stack Development (MERN / Next.js)",
    "Custom Software Development",
    "Ecommerce Solutions",
    "Rapid Prototyping & MVPs",
    "DevOps & CI/CD Setup",
    "Cloud Architecture & Deployment",
    "System Architecture Design",
    "Database Design & Optimization",
    "Microservices Development",
    "Performance Optimization",
    "Progressive Web Apps (PWA)",
    "Technical Consulting & Strategy",
    "Product Scaling & Infrastructure",
    "AI Chatbot Development",
    "CRM & CMS Development",
    "Startup Tech Consulting",
    "Serverless Applications",
    "Technical Support & Maintenance",
];

/* Duplicate for seamless loop */
const marqueeItems = [...services, ...services];
export default function FinalCTA() {
    return (
        <section className="px-4 md:px-8 py-0 font-dm">

            <div className="relative rounded-[2rem] overflow-hidden bg-[#111113]">

                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)" }} />

                <div className="relative z-10 pt-6 md:pt-10 pb-6">

                    {/* ── Main content ── */}
                    <div className="text-center px-6 mb-12">
                        <m.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease }}
                            className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8 max-w-2xl mx-auto font-playfair"
                        >
                            Ready to build your next{" "}
                            <span className="text-white/50">flagship product?</span>{" "}
                            <span style={{
                                background: "linear-gradient(135deg,#818CF8,#C084FC)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                Let&apos;s make it happen.
                            </span>
                        </m.h2>

                        <m.a
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, ease }}
                            href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-gray-900 font-bold text-[14px] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
                        >
                            <Sparkles className="w-4 h-4 text-gray-900" />
                            Schedule a Discovery Call
                        </m.a>
                    </div>

                    {/* ── Marquee section ── */}
                    <div className="mt-8 border-t border-white/[0.06] pt-10 pb-6">

                        {/* Trust text */}
                        <m.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center text-white/30 text-[13px] font-medium mb-8"
                        >
                            Trusted by ambitious founders and growing enterprises
                        </m.p>

                        {/* Marquee with brand in center */}
                        <div className="relative overflow-hidden">

                            {/* Fade edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#111113] to-transparent pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#111113] to-transparent pointer-events-none" />

                            {/* Center brand overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                <div className="px-8 py-3 rounded-2xl bg-[#111113] border border-white/[0.08] shadow-[0_0_60px_rgba(0,0,0,0.5)] flex items-center gap-1">
                                    <m.span
                                        className="text-white font-black text-[18px] tracking-tight inline-block overflow-hidden whitespace-nowrap border-r-2 border-white/40 font-playfair"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: ["0ch", "11ch", "11ch", "0ch", "0ch"],
                                            borderColor: [
                                                "rgba(255,255,255,0.4)",
                                                "rgba(255,255,255,0)",
                                                "rgba(255,255,255,0.4)",
                                                "rgba(255,255,255,0.4)",
                                                "rgba(255,255,255,0.4)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            times: [0, 0.3, 0.8, 0.9, 1]
                                        }}
                                    >
                                        Nexlance.tech...
                                    </m.span>
                                </div>
                            </div>

                            {/* Scrolling track */}
                            <m.div
                                className="flex w-max items-center gap-3"
                                animate={{ x: [0, "-50%"] }}
                                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            >
                                {marqueeItems.map((item, i) => (
                                    <div
                                        key={`${item}-${i}`}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap shrink-0 border transition-colors"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            borderColor: "rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <div className="w-4 h-4 rounded-full flex items-center justify-center bg-white/10">
                                            <Check className="w-2.5 h-2.5 text-white/50" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[12px] font-semibold text-white/40">{item}</span>
                                    </div>
                                ))}
                            </m.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
