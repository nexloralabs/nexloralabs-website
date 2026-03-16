"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const challenges = [
    {
        id: 1,
        number: "01",
        problem: "Outdated Digital Presence",
        problemDesc: "Outdated website or app turns away potential clients before they even read a word.",
        solution: "Modern & Aesthetic UI/UX",
        solutionDesc: "Stunning, high-converting designs that build instant trust and keep visitors hooked.",
        color: "#8B5CF6",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        id: 2,
        number: "02",
        problem: "Lack of Technical Expertise",
        problemDesc: "Struggling with evolving tech stacks and the cost of building or maintaining an in-house team.",
        solution: "Our Engineering Team",
        solutionDesc: "Dedicated freelance engineers building scalable, production-grade solutions on modern stacks — without the overhead of full-time hires.",
        color: "#3B82F6",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 3,
        number: "03",
        problem: "Manual & Inefficient Processes",
        problemDesc: "Manual work, repetitive tasks, and outdated tools drain your team’s time and energy every single day.",
        solution: "AI & n8n Workflow Automation",
        solutionDesc: "Custom AI automations and n8n workflows that replace manual human tasks with intelligent systems — saving hours at scale.",
        color: "#10B981",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        id: 4,
        number: "04",
        problem: "Inconsistent Branding",
        problemDesc: "Your brand looks different across platforms — weakening trust and confusing users.",
        solution: "Cohesive Design Systems",
        solutionDesc: "A unified visual language that makes your brand feel polished and powerful everywhere.",
        color: "#F43F5E",
        gradient: "from-rose-500 to-pink-500",
    },
    {
        id: 5,
        number: "05",
        problem: "Low Online Visibility",
        problemDesc: "Great product, but your target audience simply can't find you online.",
        solution: "SEO & Growth Strategy",
        solutionDesc: "Precision-targeted digital strategy that puts you in front of the right people at the right time.",
        color: "#F59E0B",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        id: 6,
        number: "06",
        problem: "Ever-Changing Demands",
        problemDesc: "Your business evolves fast — but rigid systems and codebases can't keep pace.",
        solution: "Agile Development",
        solutionDesc: "Modular, scalable infrastructure built to adapt, grow, and never hold you back.",
        color: "#6366F1",
        gradient: "from-indigo-500 to-blue-600",
    },
];

export default function Challenges() {
    const [active, setActive] = useState(0);
    const item = challenges[active];

    return (
        <section className="bg-[#FAFAF8] relative overflow-hidden border-b border-gray-100 font-dm"
        >

            <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 md:py-10">

                {/* ── Section header ── */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <div>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-3"
                        >
                            Problem → Solution
                        </m.p>
                        <m.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05, ease }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-5 font-playfair"
                        >
                            Product Development Challenges —{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                Solved.
                            </span>
                        </m.h2>
                    </div>
                    <m.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-gray-400 text-[13px] max-w-xs font-medium"
                    >
                        Select any software development challenge to see how our engineering team turns obstacles into growth opportunities.
                    </m.p>
                </div>

                {/* ── Interactive layout: Challenges left + Solution right ── */}
                <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-0 items-stretch">

                    {/* LEFT: Challenge list (accordion style) */}
                    <div className="flex flex-col bg-white rounded-3xl lg:rounded-r-none border border-gray-100 lg:border-r-0 overflow-hidden shadow-sm">
                        {challenges.map((c, i) => {
                            const isActive = active === i;
                            return (
                                <m.button
                                    key={c.id}
                                    onClick={() => setActive(i)}
                                    className={`group relative text-left px-6 md:px-8 py-5 border-b border-gray-50 last:border-b-0 transition-all duration-300 ${isActive ? "bg-gray-50" : "hover:bg-gray-50/50"}`}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.06, ease }}
                                >
                                    {/* Active indicator bar */}
                                    <m.div
                                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                                        style={{ backgroundColor: c.color }}
                                        initial={false}
                                        animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <div className="flex items-center gap-4">
                                        {/* Number */}
                                        <span className={`text-[11px] font-black tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-200"}`}>
                                            {c.number}
                                        </span>

                                        {/* Dot */}
                                        <div
                                            className="w-2 h-2 rounded-full shrink-0 transition-all duration-300"
                                            style={{ backgroundColor: isActive ? c.color : "#E5E7EB", transform: isActive ? "scale(1.3)" : "scale(1)" }}
                                        />

                                        {/* Problem text */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`text-[14px] md:text-[15px] font-bold leading-snug transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"}`}>
                                                {c.problem}
                                            </h3>
                                            <AnimatePresence initial={false}>
                                                {isActive && (
                                                    <m.p
                                                        initial={{ opacity: 0, y: -4 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -4 }}
                                                        transition={{ duration: 0.25, ease }}
                                                        className="overflow-hidden text-[12px] text-gray-400 leading-relaxed mt-1"
                                                    >
                                                        {c.problemDesc}
                                                    </m.p>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Arrow */}
                                        <m.svg
                                            animate={{ x: isActive ? 3 : 0, opacity: isActive ? 1 : 0.3 }}
                                            transition={{ duration: 0.2 }}
                                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            className="shrink-0"
                                        >
                                            <path d="M6 4L10 8L6 12" stroke={isActive ? c.color : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </m.svg>
                                    </div>
                                </m.button>
                            );
                        })}
                    </div>

                    {/* RIGHT: Solution panel */}
                    <div className="relative bg-white rounded-3xl lg:rounded-l-none border border-gray-100 overflow-hidden shadow-sm min-h-[420px] flex items-center">

                        {/* Background accent glow */}
                        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full opacity-[0.06] pointer-events-none"
                            style={{ backgroundColor: item.color }} />

                        {/* Ghost number watermark */}
                        <div className="absolute top-6 right-8 select-none pointer-events-none"
                            style={{
                                fontSize: "clamp(100px, 12vw, 160px)",
                                fontWeight: 900,
                                lineHeight: 1,
                                color: "transparent",
                                WebkitTextStroke: `1.5px ${item.color}15`,
                            }}
                        >
                            {item.number}
                        </div>

                        <AnimatePresence mode="wait">
                            <m.div
                                key={active}
                                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                transition={{ duration: 0.4, ease }}
                                className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full"
                            >
                                {/* Solution badge */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider mb-5 self-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    Our Solution
                                </div>

                                {/* Solution title */}
                                <h3
                                    className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-3 font-playfair"
                                >
                                    {item.solution}
                                </h3>

                                {/* Accent line */}
                                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${item.gradient} mb-5`} />

                                {/* Solution description */}
                                <p className="text-gray-500 text-[15px] leading-[1.8] font-medium mb-8 max-w-md">
                                    {item.solutionDesc}
                                </p>

                                {/* Mini stats */}
                                <div className="flex items-center gap-6 mb-8">
                                    {[
                                        { val: "< 6 wks", label: "Delivery" },
                                        { val: "100%", label: "On-Time" },
                                        { val: "5.0★", label: "Rating" },
                                    ].map(s => (
                                        <div key={s.label} className="flex flex-col">
                                            <span className="text-lg font-black" style={{ color: item.color }}>{s.val}</span>
                                            <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider">{s.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href="https://cal.com/nexloralabs.com/discovery-call?duration=30&overlayCalendar=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r ${item.gradient} text-white text-[13px] font-bold self-start hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-300`}
                                    style={{ boxShadow: `0 6px 24px ${item.color}30` }}
                                >
                                    Let&apos;s solve this together
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </m.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ── Bottom CTA strip ── */}
                <m.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                    <p className="text-gray-500 text-[13px] font-medium">
                        Facing one of these challenges right now? Let&apos;s talk strategy.
                    </p>
                    <a href="https://cal.com/nexloralabs.com/discovery-call?duration=30&overlayCalendar=true" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-bold text-[13px] hover:bg-black transition-all duration-300 hover:scale-[1.02]">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">📅</span>
                        Book a Strategy Session
                    </a>
                </m.div>
            </div>
        </section>
    );
}