"use client";

import { m } from "framer-motion";
import { Code2, Rocket, Users, Shield, Palette, Monitor, Database, PenTool } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
    { icon: Rocket, title: "Ship Fast, Ship Right", desc: "Speed without sacrificing quality — your competitive edge.", color: "#2563EB" },
    { icon: Users, title: "Obsess Over Outcomes", desc: "We measure success by your business results, not just deliverables.", color: "#7C3AED" },
    { icon: Code2, title: "Partner, Not Outsourcer", desc: "We think like co-founders — invested in your growth, from MVP to scale.", color: "#059669" },
    { icon: Shield, title: "Quality is Non-Negotiable", desc: "Every pixel, every line of code, every automation — held to the highest standard.", color: "#D97706" },
];

export default function FounderQuote() {
    return (
        <section className="bg-[#FAFAF8] relative overflow-hidden font-dm">

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 40%, transparent 100%)" }} />

            <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 md:py-8">

                {/* ══ Quote Card ══ */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.04)] overflow-hidden">

                    <div className="grid lg:grid-cols-[1fr_280px]">

                        {/* ── LEFT: Quote area ── */}
                        <div className="p-8 md:p-12 lg:p-14">

                            {/* Eyebrow */}
                            <m.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease }}
                                className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-6"
                            >
                                Our Philosophy
                            </m.p>

                            {/* Opening quote mark */}
                            <m.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="block text-[64px] md:text-[80px] leading-none text-blue-600 select-none -mb-4 md:-mb-6 font-playfair font-bold"
                            >
                                &ldquo;
                            </m.span>

                            {/* Quote */}
                            <div className="overflow-hidden mb-1">
                                <m.h2
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.15, ease }}
                                    className="text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.2] tracking-[-0.02em] text-gray-900 font-playfair font-bold italic"
                                >
                                    Technology is our tool.
                                </m.h2>
                            </div>
                            <div className="overflow-hidden">
                                <m.h2
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.25, ease }}
                                    className="text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.2] tracking-[-0.02em] text-gray-900 font-playfair font-bold italic"
                                >
                                    <span className="text-blue-600">Impact</span> is our outcome.&rdquo;
                                </m.h2>
                            </div>

                            {/* Author — Team attribution */}
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.35, ease }}
                                className="flex items-center gap-3 mt-6"
                            >
                                <div className="w-10 h-px bg-blue-200" />
                                <p className="text-[11px] font-semibold text-gray-400 tracking-[0.12em] uppercase">
                                    The NexLora Labs Engineering Team
                                </p>
                            </m.div>
                        </div>

                        {/* ── RIGHT: Team Visual Panel ── */}
                        <m.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative bg-gradient-to-br from-blue-50 via-violet-50/50 to-blue-50/30 flex items-center justify-center p-10 lg:p-8 border-t lg:border-t-0 lg:border-l border-gray-100"
                        >
                            {/* Team Icon Grid */}
                            <div className="flex flex-col items-center gap-5">
                                {/* Stacked avatars representing the team */}
                                <div className="flex -space-x-3">
                                    {[
                                        { icon: Rocket, color: "#2563EB" },
                                        { icon: Palette, color: "#7C3AED" },
                                        { icon: Monitor, color: "#059669" },
                                        { icon: Database, color: "#D97706" },
                                        { icon: PenTool, color: "#E11D48" },
                                    ].map((item, i) => {
                                        const Icon = item.icon;
                                        const isEven = i % 2 === 0;
                                        return (
                                            <m.div
                                                key={i}
                                                animate={{ y: isEven ? [-6, 6, -6] : [6, -6, 6] }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: i * 0.15,
                                                }}
                                                className="w-11 h-11 rounded-full border-[3px] border-white flex items-center justify-center text-white shadow-sm"
                                                style={{ background: item.color, zIndex: 5 - i }}
                                            >
                                                <Icon className="w-4 h-4" />
                                            </m.div>
                                        );
                                    })}
                                </div>
                                <div className="text-center">
                                    <p className="text-[13px] font-bold text-gray-700">Core Engineering Team</p>
                                    <p className="text-[11px] text-gray-400 font-medium">Engineers · Designers · Automation Specialists</p>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <m.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 right-6 lg:bottom-8 lg:right-4"
                            >
                                <div className="flex items-center gap-1.5">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                        <path d="M4.5 3L18.5 10L11.5 12.5L9 19.5L4.5 3Z" fill="#111" strokeLinejoin="round" />
                                    </svg>
                                    <div className="px-3 py-1.5 rounded-full bg-gray-900 shadow-lg">
                                        <span className="text-white text-[9px] font-semibold tracking-wide whitespace-nowrap">
                                            Solutions Beyond Syntax
                                        </span>
                                    </div>
                                </div>
                            </m.div>
                        </m.div>
                    </div>
                </div>

                {/* ══ Values strip — tight 4-col below card ══ */}
                <div className="mt-6">
                    <m.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase mb-6"
                    >
                        What We Stand For
                    </m.p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <m.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                                    className="group relative lg:pl-6 lg:first:pl-0 lg:border-l lg:first:border-l-0 border-gray-100 cursor-pointer"
                                >
                                    {/* Icon */}
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300"
                                        style={{ background: v.color + "10" }}>
                                        <Icon className="w-4 h-4" style={{ color: v.color }} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[1.05rem] leading-[1.3] text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-1.5 font-playfair font-bold">
                                        {v.title}
                                    </h3>

                                    {/* Accent line */}
                                    <div className="w-5 h-[1.5px] bg-gray-200 group-hover:w-8 transition-all duration-300 mb-2" />

                                    {/* Description */}
                                    <p className="text-[12px] text-gray-400 leading-relaxed font-medium group-hover:text-gray-500 transition-colors duration-300">
                                        {v.desc}
                                    </p>
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}