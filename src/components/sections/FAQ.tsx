"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
    {
        question: "Who is behind NexLora Labs?",
        answer: "NexLora Labs is a dedicated freelance engineering team of senior software engineers, designers, and automation specialists. Every project is built by our core team — no outsourcing, no junior developers, no middlemen.",
    },
    {
        question: "Do you accept custom requirements?",
        answer: "Absolutely. Every engagement starts with a discovery call where we deeply understand your unique requirements. We craft a custom blueprint — no cookie-cutter templates, no compromises on quality.",
    },
    {
        question: "What is your turnaround time?",
        answer: "Small to medium apps: 4–6 weeks. Complex enterprise platforms or AI systems: 2–4 months. We scope realistically and deliver on time, every single time.",
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes — 6 months of complimentary support after launch. This includes bug fixes, performance monitoring, security patches, and priority response within 24 hours. Your success is our success.",
    },
    {
        question: "Do you offer AI automation and n8n workflow services?",
        answer: "Yes — we specialize in replacing manual business tasks with intelligent automated systems. We build custom AI automations and n8n workflows that save hours of manual work, reduce errors, and scale with your business.",
    },
    {
        question: "Can you work with businesses of any size?",
        answer: "Absolutely. We partner with businesses of all sizes — solo founders with an idea, growing startups needing a tech team, SMBs looking to digitize operations, and established enterprises requiring custom software. One team, every service, end to end.",
    },
    {
        question: "What's your pricing?",
        answer: "Fair, transparent, and predictable. After the discovery call, you receive a detailed, fixed-price proposal — no hidden fees, no scope creep surprises. You approve everything before a single line of code is written.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-2 md:py-4 relative overflow-hidden bg-white content-visibility-auto">

            <div className="max-w-2xl mx-auto px-6 md:px-16 pt-0 pb-2 md:pt-0 md:pb-2">

                {/* Header */}
                <div className="text-center mb-8">
                    <m.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4"
                    >
                        FAQs
                    </m.p>
                    <m.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08, ease }}
                        className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4 font-playfair"
                    >
                        Questions About{" "}
                        <span style={{
                            background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            Our Services
                        </span>
                    </m.h2>
                    <m.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-gray-400 text-[15px] max-w-lg mx-auto font-medium"
                    >
                        Common questions about our custom software development process, AI automation, and engineering team.
                    </m.p>
                </div>

                {/* Chat conversation */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;

                        return (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, ease }}
                                className="flex flex-col gap-2.5"
                            >
                                {/* User question — right-aligned bubble */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="group max-w-[85%] flex items-center gap-2.5 rounded-2xl rounded-br-md px-5 py-3 text-left transition-all duration-300"
                                        style={{
                                            background: isOpen ? "#111" : "#F3F4F6",
                                            color: isOpen ? "#fff" : "#374151",
                                            boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.12)" : "none",
                                        }}
                                    >
                                        <span className="text-[14px] font-bold leading-snug">{faq.question}</span>
                                        <svg
                                            className="w-4 h-4 shrink-0 transition-transform duration-300"
                                            style={{
                                                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                                color: isOpen ? "rgba(255,255,255,0.5)" : "#9CA3AF",
                                            }}
                                            viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <line x1="8" y1="3" x2="8" y2="13" />
                                            <line x1="3" y1="8" x2="13" y2="8" />
                                        </svg>
                                    </button>
                                </div>

                                {/* NexLora Labs answer — left-aligned chat bubble */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <m.div
                                            initial={{ opacity: 0, scale: 0.96 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.96 }}
                                            transition={{ duration: 0.35, ease }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex items-start gap-3 max-w-[90%]">
                                                {/* NexLora Labs avatar */}
                                                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-sm border border-gray-100 overflow-hidden relative bg-white">
                                                    <div className="relative w-4 h-4">
                                                        <Image
                                                            src="/icon.png"
                                                            alt="NexLora Labs"
                                                            fill
                                                            sizes="16px"
                                                            className="object-contain"
                                                            unoptimized
                                                        />
                                                    </div>
                                                </div>

                                                {/* Answer bubble */}
                                                <div className="relative bg-[#F9FAFB] border border-gray-100 rounded-2xl rounded-tl-md px-5 py-4">
                                                    {/* Speech triangle */}
                                                    <div className="absolute -left-[7px] top-3 w-3.5 h-3.5 bg-[#F9FAFB] border-l border-b border-gray-100 rotate-45" />
                                                    <p className="text-gray-600 text-[13px] leading-[1.8] font-medium relative z-10">
                                                        {faq.answer}
                                                    </p>
                                                    {/* Typing indicator dots — brief flash when opening */}
                                                    <m.div
                                                        initial={{ opacity: 1 }}
                                                        animate={{ opacity: 0 }}
                                                        transition={{ delay: 0.4, duration: 0.3 }}
                                                        className="absolute inset-0 bg-[#F9FAFB] rounded-2xl rounded-tl-md flex items-center px-5 z-20"
                                                    >
                                                        <div className="flex gap-1">
                                                            {[0, 1, 2].map(d => (
                                                                <m.div
                                                                    key={d}
                                                                    animate={{ y: [0, -4, 0] }}
                                                                    transition={{ duration: 0.5, delay: d * 0.12, repeat: 1 }}
                                                                    className="w-2 h-2 rounded-full bg-gray-300"
                                                                />
                                                            ))}
                                                        </div>
                                                    </m.div>
                                                </div>
                                            </div>
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
