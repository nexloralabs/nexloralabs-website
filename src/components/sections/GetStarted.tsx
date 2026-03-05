"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, MessageSquare, FileText, Rocket } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
    {
        number: "01",
        tag: "Discovery",
        title: "Share Your Vision",
        desc: "A real 30-minute conversation — no forms, no jargon. We listen, ask the right questions, and get completely aligned on what you want to build and why.",
        color: "#2563EB",
        icon: MessageSquare,
        pills: ["Free 30-min call", "Same-day reply", "No commitment"],
        visual: {
            emoji: "💬",
            metrics: [
                { label: "Response Time", value: "< 2hrs" },
                { label: "Discovery Calls", value: "Free" },
            ],
        },
    },
    {
        number: "02",
        tag: "Strategy",
        title: "We Craft the Blueprint",
        desc: "Within 48 hours you receive a detailed plan — scope, architecture, design direction, timeline, and pricing. You approve every detail before we write a single line of code.",
        color: "#7C3AED",
        icon: FileText,
        pills: ["48-hr blueprint", "Full transparency", "You approve first"],
        visual: {
            emoji: "📋",
            metrics: [
                { label: "Blueprint Delivery", value: "48 hrs" },
                { label: "Your Approval", value: "100%" },
            ],
        },
    },
    {
        number: "03",
        tag: "Execution",
        title: "Watch It Come Alive",
        desc: "Our senior engineering team builds with precision. Weekly live demos, real-time progress updates, and a launch-ready product delivered on schedule — every single time.",
        color: "#059669",
        icon: Rocket,
        pills: ["Weekly live demos", "Senior engineers", "100% on-time"],
        visual: {
            emoji: "🚀",
            metrics: [
                { label: "On-Time Rate", value: "100%" },
                { label: "Client Rating", value: "5.0 ★" },
            ],
        },
    },
];

export default function GetStarted() {
    const [active, setActive] = useState(0);
    const step = steps[active];
    const Icon = step.icon;

    return (
        <section className="bg-white border-b border-gray-100 overflow-hidden font-dm">
            <div className="max-w-6xl mx-auto px-6 md:px-16 pt-6 pb-6 md:pt-8 md:pb-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4"
                        >
                            How It Works
                        </m.p>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08, ease }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] font-playfair"
                        >
                            Our development process:{" "}
                            <span className="text-gray-300">from discovery </span>
                            <span style={{
                                background: "linear-gradient(135deg,#2563EB,#7C3AED,#059669)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                to launch.
                            </span>
                        </m.h2>
                    </div>
                    <m.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-gray-400 text-[14px] max-w-xs leading-relaxed md:text-right font-medium"
                    >
                        No long onboarding. No back-and-forth. Just a clear, proven process from our engineering team that gets your product built right.
                    </m.p>
                </div>

                {/* Interactive Steps UI */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0 rounded-3xl border border-gray-100 overflow-hidden bg-white shadow-[0_4px_40px_rgba(0,0,0,0.04)]"
                >
                    {/* LEFT: Step Tabs */}
                    <div className="bg-[#FAFAF8] p-4 lg:p-6 flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-gray-100">
                        {steps.map((s, i) => {
                            const isActive = active === i;
                            const StepIcon = s.icon;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`relative flex items-center gap-4 p-4 lg:p-5 rounded-2xl text-left transition-all duration-300 w-full min-w-[200px] lg:min-w-0 ${isActive
                                        ? "bg-white shadow-lg"
                                        : "hover:bg-white/60"
                                        }`}
                                    style={{
                                        boxShadow: isActive ? `0 8px 32px ${s.color}12, 0 0 0 1px ${s.color}20` : undefined,
                                    }}
                                >
                                    {/* Active indicator bar */}
                                    {isActive && (
                                        <m.div
                                            layoutId="activeBar"
                                            className="absolute left-0 top-3 bottom-3 w-1 rounded-full hidden lg:block"
                                            style={{ background: s.color }}
                                            transition={{ duration: 0.4, ease }}
                                        />
                                    )}

                                    {/* Icon */}
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                                        style={{
                                            background: isActive ? s.color : "#F3F4F6",
                                            color: isActive ? "white" : "#9CA3AF",
                                        }}>
                                        <StepIcon className="w-5 h-5" />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-0.5 transition-colors duration-300"
                                            style={{ color: isActive ? s.color : "#9CA3AF" }}>
                                            Step {s.number}
                                        </p>
                                        <p className={`text-[14px] font-bold truncate transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-500"}`}>
                                            {s.tag}
                                        </p>
                                    </div>

                                    {/* Checkmark for completed steps */}
                                    {i < active && (
                                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </button>
                            );
                        })}

                        {/* Progress indicator */}
                        <div className="hidden lg:flex items-center gap-3 px-5 pt-3 mt-auto border-t border-gray-100">
                            <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                                <m.div
                                    className="h-full rounded-full"
                                    animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                                    transition={{ duration: 0.5, ease }}
                                    style={{ background: `linear-gradient(90deg, #2563EB, ${step.color})` }}
                                />
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 tabular-nums">
                                {active + 1}/{steps.length}
                            </span>
                        </div>
                    </div>

                    {/* RIGHT: Content Panel */}
                    <div className="p-6 md:p-10 lg:p-12">
                        <AnimatePresence mode="wait">
                            <m.div
                                key={active}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease }}
                            >
                                {/* Step header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                                        style={{ background: step.color + "10" }}>
                                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: step.color }}>
                                            {step.tag}
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight font-playfair">
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-8 max-w-lg">
                                    {step.desc}
                                </p>

                                {/* Checklist pills */}
                                <div className="flex flex-col gap-3 mb-8">
                                    {step.pills.map((pill, pi) => (
                                        <m.div
                                            key={pill}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: pi * 0.08, ease }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                                                style={{ background: step.color + "15" }}>
                                                <Check className="w-3.5 h-3.5" style={{ color: step.color }} />
                                            </div>
                                            <span className="text-[13px] font-semibold text-gray-700">{pill}</span>
                                        </m.div>
                                    ))}
                                </div>

                                {/* Metrics cards */}
                                <div className="flex gap-4 mb-2">
                                    {step.visual.metrics.map((metric, mi) => (
                                        <m.div
                                            key={metric.label}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + mi * 0.1, ease }}
                                            className="flex-1 rounded-2xl p-4 border"
                                            style={{ borderColor: step.color + "15", background: step.color + "05" }}
                                        >
                                            <p className="text-xl font-black text-gray-900 mb-0.5">{metric.value}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{metric.label}</p>
                                        </m.div>
                                    ))}
                                </div>
                            </m.div>
                        </AnimatePresence>
                    </div>
                </m.div>
            </div>

            {/* CTA strip */}
            <div className="border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-lg font-black text-gray-900 mb-1 font-playfair">
                            Ready to take Step 01?
                        </p>
                        <p className="text-gray-400 text-[13px] font-medium">
                            Schedule a free strategy session. No pressure, no strings.
                        </p>
                    </div>
                    <a
                        href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-bold text-[14px] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
                        style={{
                            background: "linear-gradient(135deg,#1d4ed8,#7c3aed)",
                            boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
                        }}
                    >
                        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-black text-sm">N</span>
                        Start Your Project Today
                        <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                            <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}