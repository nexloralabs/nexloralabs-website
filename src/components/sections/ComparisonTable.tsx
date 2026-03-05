"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const categories = [
    {
        label: "Cost",
        nexlance: "Fair & transparent",
        hiring: "$$$ (salary + benefits + tools)",
        agencies: "$$$ – $$$$ per project",
    },
    {
        label: "Expertise",
        nexlance: "Senior-only, full-stack team",
        hiring: "Varies per hire",
        agencies: "Varies by team",
    },
    {
        label: "Turnaround",
        nexlance: "Fast, predictable",
        hiring: "Weeks of onboarding",
        agencies: "Often slower",
    },
    {
        label: "Flexibility",
        nexlance: "Scale up or down anytime",
        hiring: "Contracts & overhead",
        agencies: "Rigid, project-locked",
    },
    {
        label: "Design Quality",
        nexlance: "Modern & original",
        hiring: "Depends on talent",
        agencies: "Template-driven",
    },
    {
        label: "Post-Launch Support",
        nexlance: "6 months free support",
        hiring: "You manage it",
        agencies: "Extra charges",
    },
];

const columns = [
    { key: "nexlance", label: "Nexlance.tech", highlight: true },
    { key: "hiring", label: "Hiring In-House", highlight: false },
    { key: "agencies", label: "Other Freelancers", highlight: false },
] as const;

export default function ComparisonTable() {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    return (
        <section className="bg-[#FAFAF8] border-b border-gray-100 overflow-hidden font-dm">

            <div className="max-w-5xl mx-auto px-6 md:px-16 pt-4 pb-2 md:pt-4 md:pb-2">

                {/* Header */}
                <div className="text-center mb-10">
                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                        <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">The Nexlance.tech Difference</span>
                    </m.div>

                    <m.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08, ease }}
                        className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-5 font-playfair"
                    >
                        Why Choose Our{" "}
                        <span style={{
                            background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            Engineering Team
                        </span>
                    </m.h2>
                    <m.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-gray-400 text-[15px] max-w-lg mx-auto font-medium"
                    >
                        Nexlance vs. in-house hiring vs. traditional freelancers — see why businesses of all sizes choose our engineering team.
                    </m.p>
                </div>

                {/* Table */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease }}
                    className="rounded-3xl border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.04)] bg-white"
                >
                    <div className="w-full overflow-x-auto rounded-3xl pb-2 md:pb-0 scrollbar-hide">
                        {/* Minimum width prevents the 4 columns from squashing on mobile */}
                        <div className="min-w-[800px] w-full">
                            {/* Column headers */}
                            <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] bg-[#FAFAF8] rounded-t-3xl overflow-hidden">
                                {/* Empty cell */}
                                <div className="p-5 md:p-6" />

                                {columns.map((col, ci) => (
                                    <div key={col.key}
                                        className={`p-5 md:p-6 text-center ${ci === 0 ? "relative" : ""}`}>
                                        {ci === 0 && (
                                            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none" />
                                        )}
                                        {ci === 0 && (
                                            <m.div
                                                initial={{ opacity: 0, y: -8 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 }}
                                                className="relative z-10"
                                            >
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500 text-white text-[9px] font-bold tracking-wider uppercase mb-2 shadow-md shadow-blue-500/20">
                                                    <Sparkles className="w-2.5 h-2.5" />
                                                    Recommended
                                                </div>
                                            </m.div>
                                        )}
                                        <p className={`text-sm font-black relative z-10 ${ci === 0 ? "text-gray-900 font-playfair" : "text-gray-400"}`}>
                                            {col.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Rows */}
                            {categories.map((cat, ri) => {
                                const isHovered = hoveredRow === ri;
                                return (
                                    <m.div
                                        key={cat.label}
                                        onMouseEnter={() => setHoveredRow(ri)}
                                        onMouseLeave={() => setHoveredRow(null)}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + ri * 0.04 }}
                                        className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] border-t border-gray-50 transition-colors duration-300"
                                        style={{ background: isHovered ? "#FAFBFF" : "white" }}
                                    >
                                        {/* Category label */}
                                        <div className="p-5 md:p-6 flex items-center">
                                            <span className="text-[13px] font-bold text-gray-800">{cat.label}</span>
                                        </div>

                                        {/* Nexlance.tech — always green check */}
                                        <div className="p-5 md:p-6 flex items-center gap-2.5 relative">
                                            {/* Subtle highlight column */}
                                            <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />
                                            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 relative z-10 shadow-sm shadow-emerald-200">
                                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-[13px] font-semibold text-gray-700 relative z-10">{cat.nexlance}</span>
                                        </div>

                                        {/* Hiring */}
                                        <div className="p-5 md:p-6 flex items-center gap-2.5">
                                            <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                                                <X className="w-3 h-3 text-red-400" strokeWidth={2.5} />
                                            </div>
                                            <span className="text-[13px] font-medium text-gray-400">{cat.hiring}</span>
                                        </div>

                                        {/* Other agencies */}
                                        <div className="p-5 md:p-6 flex items-center gap-2.5">
                                            <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                                                <X className="w-3 h-3 text-red-400" strokeWidth={2.5} />
                                            </div>
                                            <span className="text-[13px] font-medium text-gray-400">{cat.agencies}</span>
                                        </div>
                                    </m.div>
                                );
                            })}

                            {/* Bottom CTA row */}
                            <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] border-t border-gray-100 bg-[#FAFAF8] rounded-b-3xl overflow-hidden">
                                <div className="p-5 md:p-6" />
                                <div className="p-5 md:p-6 flex justify-center relative">
                                    <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />
                                    <a href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true" target="_blank" rel="noopener noreferrer"
                                        className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-[12px] font-bold hover:bg-black transition-all hover:scale-[1.03] shadow-md">
                                        Get Started
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                                <div className="p-5 md:p-6" />
                                <div className="p-5 md:p-6" />
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}
