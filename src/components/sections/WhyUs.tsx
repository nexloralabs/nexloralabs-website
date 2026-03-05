"use client";

import { m, useScroll, useTransform, useInView, MotionValue } from "framer-motion";
import { useRef } from "react";

type FeatureType = {
    id: number; number: string; title: string; description: string;
    tag: string; accent: string; accentLight: string; metric: string; metricLabel: string;
    icon: React.ReactNode;
};

const features: FeatureType[] = [
    {
        id: 1, number: "01", title: "Strategy-First Engineering",
        description: "Every product we build is custom-crafted to create real, measurable business impact. We don't just write code; we build growth engines that accelerate your time-to-revenue.",
        tag: "Strategy First", accent: "#3B82F6", accentLight: "#EFF6FF", metric: "100%", metricLabel: "Client retention",
        icon: (<svg width="80" height="80" viewBox="0 0 52 52" fill="none"><defs><linearGradient id="st1" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#22D3EE" /></linearGradient></defs><circle cx="26" cy="26" r="22" stroke="url(#st1)" strokeWidth="2" strokeDasharray="3 4" opacity="0.3" /><circle cx="26" cy="26" r="14" stroke="url(#st1)" strokeWidth="2" opacity="0.6" /><circle cx="26" cy="26" r="6" fill="url(#st1)" /><line x1="44" y1="8" x2="30" y2="22" stroke="url(#st1)" strokeWidth="2.5" strokeLinecap="round" /><path d="M36 7L45 7L45 16" stroke="url(#st1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    },
    {
        id: 2, number: "02", title: "Accelerated Time-to-Market",
        description: "Speed is a competitive advantage. We deliver production-ready products in days or weeks — not months — so you capture revenue and market share faster.",
        tag: "Velocity", accent: "#8B5CF6", accentLight: "#F5F3FF", metric: "2x", metricLabel: "Faster than average",
        icon: (<svg width="80" height="80" viewBox="0 0 52 52" fill="none"><defs><linearGradient id="st2" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#8B5CF6" /><stop offset="1" stopColor="#D946EF" /></linearGradient></defs><path d="M26 6C26 6 38 12 38 28L14 28C14 12 26 6 26 6Z" stroke="url(#st2)" strokeWidth="2.5" fill="none" strokeLinejoin="round" /><circle cx="26" cy="18" r="4" stroke="url(#st2)" strokeWidth="2" fill="none" /><path d="M14 28L8 38L14 34" stroke="url(#st2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M38 28L44 38L38 34" stroke="url(#st2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 28C20 28 22 36 26 38C30 36 32 28 32 28" stroke="url(#st2)" strokeWidth="2.5" strokeLinecap="round" fill="none" /></svg>),
    },
    {
        id: 3, number: "03", title: "Transparent, Predictable Pricing",
        description: "Honest, upfront pricing with zero hidden fees. You know exactly what you're investing — no surprises, no scope creep, no budget anxiety.",
        tag: "Integrity", accent: "#10B981", accentLight: "#ECFDF5", metric: "$0", metricLabel: "Hidden fees",
        icon: (<svg width="80" height="80" viewBox="0 0 52 52" fill="none"><defs><linearGradient id="st3" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#10B981" /><stop offset="1" stopColor="#14B8A6" /></linearGradient></defs><path d="M26 4L44 10V24C44 36 26 48 26 48C26 48 8 36 8 24V10L26 4Z" stroke="url(#st3)" strokeWidth="2.5" fill="none" strokeLinejoin="round" /><path d="M17 26L23 32L35 18" stroke="url(#st3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    },
    {
        id: 4, number: "04", title: "Senior-Only Engineering Team",
        description: "Your product deserves the best. Every project is staffed with senior frontend, backend, mobile, DevOps, and AI automation engineers. Zero juniors, zero guesswork.",
        tag: "Elite Talent", accent: "#F43F5E", accentLight: "#FFF1F2", metric: "100%", metricLabel: "Senior level",
        icon: (<svg width="80" height="80" viewBox="0 0 52 52" fill="none"><defs><linearGradient id="st4" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#F43F5E" /><stop offset="1" stopColor="#F97316" /></linearGradient></defs><rect x="12" y="12" width="28" height="28" rx="6" stroke="url(#st4)" strokeWidth="2.5" fill="none" /><rect x="20" y="20" width="12" height="12" rx="3" fill="url(#st4)" fillOpacity="0.2" stroke="url(#st4)" strokeWidth="2" /><circle cx="26" cy="26" r="2" fill="url(#st4)" /><line x1="18" y1="4" x2="18" y2="12" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="26" y1="4" x2="26" y2="12" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="34" y1="4" x2="34" y2="12" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="18" y1="40" x2="18" y2="48" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="26" y1="40" x2="26" y2="48" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="34" y1="40" x2="34" y2="48" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="4" y1="18" x2="12" y2="18" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="4" y1="26" x2="12" y2="26" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="4" y1="34" x2="12" y2="34" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="40" y1="18" x2="48" y2="18" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="40" y1="26" x2="48" y2="26" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /><line x1="40" y1="34" x2="48" y2="34" stroke="url(#st4)" strokeWidth="2.5" strokeLinecap="round" /></svg>),
    },
    {
        id: 5, number: "05", title: "Real-Time Collaboration",
        description: "Shared Slack channels, weekly demos, and complete visibility into progress. You're never left wondering — you're always in the loop, making decisions together.",
        tag: "Partnership", accent: "#F59E0B", accentLight: "#FFFBEB", metric: "24/7", metricLabel: "Slack access",
        icon: (<svg width="80" height="80" viewBox="0 0 52 52" fill="none"><defs><linearGradient id="st5" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#FBBF24" /><stop offset="1" stopColor="#EAB308" /></linearGradient></defs><path d="M8 12H32C34.2 12 36 13.8 36 16V28C36 30.2 34.2 32 32 32H18L10 38V32H8C5.8 32 4 30.2 4 28V16C4 13.8 5.8 12 8 12Z" stroke="url(#st5)" strokeWidth="2.5" fill="none" strokeLinejoin="round" /><path d="M24 24H44C46.2 24 48 25.8 48 28V38C48 40.2 46.2 42 44 42H42V48L36 42H24C21.8 42 20 40.2 20 38V28C20 25.8 21.8 24 24 24Z" fill="url(#st5)" fillOpacity="0.15" stroke="url(#st5)" strokeWidth="2.5" strokeLinejoin="round" /></svg>),
    },
    {
        id: 6, number: "06", title: "Direct Access to Engineers",
        description: "No account managers, no middlemen. You work directly with the senior engineers and designers building your product — zero red tape, maximum velocity.",
        tag: "Zero Red Tape", accent: "#6366F1", accentLight: "#EEF2FF", metric: "1:1", metricLabel: "Direct connection",
        icon: (<svg width="80" height="80" viewBox="0 0 52 52" fill="none"><defs><linearGradient id="st6" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#6366F1" /><stop offset="1" stopColor="#2563EB" /></linearGradient></defs><circle cx="26" cy="16" r="6" stroke="url(#st6)" strokeWidth="2.5" fill="none" /><path d="M12 36C12 28 18 24 26 24C34 24 40 28 40 36" stroke="url(#st6)" strokeWidth="2.5" strokeLinecap="round" fill="none" /><circle cx="10" cy="24" r="4" stroke="url(#st6)" strokeWidth="2" fill="none" opacity="0.4" /><path d="M4 42C4 36 6 34 10 34C14 34 16 36 16 42" stroke="url(#st6)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" /><circle cx="42" cy="24" r="4" stroke="url(#st6)" strokeWidth="2" fill="none" opacity="0.4" /><path d="M36 42C36 36 38 34 42 34C46 34 48 36 48 42" stroke="url(#st6)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" /></svg>),
    },
];

const StickyCard = ({ feature, i, progress, range, targetScale }: { feature: FeatureType; i: number; progress: MotionValue<number>; range: number[]; targetScale: number }) => {
    const container = useRef(null);

    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0.92]);
    const yShift = useTransform(progress, range, [0, -30]);

    return (
        <div ref={container} className="flex justify-center sticky top-20 md:top-24 px-4 md:px-8 overflow-hidden z-[10] py-4">
            <m.div
                style={{
                    scale,
                    opacity,
                    y: yShift,
                    marginTop: `${i * 20}px`,
                }}
                className="relative flex flex-col xl:flex-row w-full max-w-[1100px] h-auto xl:h-[450px] rounded-[2rem] md:rounded-[3rem] bg-white border border-gray-100/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden transform-gpu will-change-transform"
            >
                {/* Immersive background aura */}
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 md:h-full opacity-[0.03]" style={{ backgroundColor: feature.accent }} />
                <div className="absolute right-0 bottom-0 w-[800px] h-[800px] rounded-full blur-[140px] opacity-20 pointer-events-none" style={{ backgroundColor: feature.accent }} />

                {/* Left Content Half */}
                <div className="w-full xl:w-1/2 h-auto xl:h-full p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between relative z-10 xl:border-r border-gray-100 bg-white">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: feature.accent }} />
                            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                                {feature.tag}
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-3 sm:mb-4">
                            {feature.title}
                        </h2>

                        <p className="text-sm sm:text-[15px] text-gray-500 lg:text-base leading-relaxed md:max-w-md font-medium">
                            {feature.description}
                        </p>
                    </div>

                    {/* Metric Row */}
                    <div className="mt-4 flex items-center gap-4 sm:gap-5">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 shrink-0" style={{ backgroundColor: feature.accentLight }}>
                            <div className="scale-50 sm:scale-75 text-gray-900 flex items-center justify-center">
                                {feature.icon}
                            </div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-black" style={{ color: feature.accent }}>{feature.metric}</div>
                            <div className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase tracking-widest">{feature.metricLabel}</div>
                        </div>
                    </div>
                </div>

                {/* Right Visual Half */}
                <div className="w-full xl:w-1/2 min-h-[200px] sm:min-h-[250px] xl:h-full relative overflow-hidden bg-gray-50/30 flex items-center justify-center group flex-1">

                    {/* Ghost Number Watermark */}
                    <div className="absolute font-black text-[120px] sm:text-[200px] md:text-[350px] leading-none text-gray-900 opacity-[0.02] select-none -right-4 -bottom-4 md:-right-10 md:-bottom-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                        {feature.number}
                    </div>

                    {/* Giant Interactive Icon */}
                    <div className="relative z-20 scale-[1] sm:scale-[1.5] md:scale-[2.5] lg:scale-[3] drop-shadow-2xl opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.2] sm:group-hover:scale-[1.7] md:group-hover:scale-[2.8] lg:group-hover:scale-[3.2] group-hover:-translate-y-4">
                        {feature.icon}
                    </div>

                    {/* Subtle noise texture overlay */}
                    {/* Removed: SVG noise texture overlay — expensive decode + render per card */}
                </div>
            </m.div>
        </div>
    );
};


export default function WhyUs() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="why-us" ref={container} className="relative bg-[#f4f4f5] w-full pb-0" style={{ position: 'relative' }}>

            <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-white to-transparent pointer-events-none" />

            {/* Introductory Header Space */}
            <div className="relative z-10 container mx-auto px-6 pt-2 sm:pt-4 lg:pt-6 pb-2">
                <div ref={headerRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-200 bg-white shadow-sm text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-[pulse_2s_ease-in-out_infinite]" />
                        The Nexlance.tech Standard
                    </m.div>

                    <m.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-3 sm:mb-4"
                    >
                        Built <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent italic pr-2">Differently</span>.<br />
                    </m.h2>

                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-2xl font-medium px-4 mb-2 sm:mb-4"
                    >
                        Scroll down to discover six reasons why ambitious founders choose us when their product absolutely must succeed.
                    </m.p>
                </div>
            </div>

            {/* The Stacking Deck */}
            <div className="relative">
                {features.map((feature, i) => {
                    const targetScale = 1 - ((features.length - i) * 0.04);
                    const step = 1 / features.length;
                    const start = i * step;
                    const end = start + (step * 0.5);
                    const range = [start, end > 1 ? 1 : end];

                    return (
                        <StickyCard
                            key={feature.id}
                            i={i}
                            feature={feature}
                            progress={scrollYProgress}
                            range={range}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

            {/* Action Bottom Buffer */}
            <div className="pt-2 pb-6 flex items-center justify-center relative z-20">
                <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black text-white font-bold text-[14px] hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="relative z-10">Start Your Build</span>
                        <span className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-sm group-hover:scale-110 group-hover:bg-white text-white group-hover:text-black transition-all">
                            <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>
                </m.div>
            </div>

        </section>
    );
}
