"use client";

import { m } from "framer-motion";
import { Hammer, Sparkles, ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudiesComingSoon() {
    return (
        <section className="relative w-full flex-grow flex items-center justify-center overflow-hidden font-dm bg-[#FAFAF8] px-4 sm:px-6 py-6 sm:py-12">
            
            {/* --- Premium Engineered Background --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Edge Fading Mask */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FAFAF8_75%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8] via-transparent to-[#FAFAF8] opacity-80" />

                {/* Accent Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10 blur-[100px] rounded-[100%]" />
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
                
                {/* Icon Container with subtle animation */}
                <m.div
                    initial={{ scale: 0.9, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease }}
                    className="relative flex items-center justify-center w-20 h-20 bg-white/60 backdrop-blur-md shadow-[0_8px_32px_rgba(37,99,235,0.08)] rounded-2xl mb-8 border border-blue-100/50"
                >
                    <Code2 className="w-8 h-8 text-blue-600" />
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
                        <Hammer className="w-4 h-4 text-purple-600" />
                    </div>
                </m.div>

                <m.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease }}
                    className="flex flex-col items-center w-full"
                >
                    {/* Coming Soon Badge */}
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/80 backdrop-blur-sm border border-indigo-100/60 mb-6 shadow-[0_2px_10px_rgba(99,102,241,0.05)]">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                        <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-[0.15em]">Coming Soon</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[2.2rem] sm:text-[3rem] md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.05] font-playfair mb-6">
                        Real Problems.<br className="hidden sm:block" />
                        <span className="inline-block sm:mt-2" style={{
                            background: "linear-gradient(135deg,#1d4ed8,#7c3aed)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}> Actual Code.</span>
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mb-10 font-medium font-dm bg-white/40 backdrop-blur-3xl px-6 py-4 rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
                        We are meticulously documenting our most impactful projects. Soon, you&apos;ll be able to explore complete deep dives into exactly how we engineered scalable platforms, integrated AI, and built complex technical architectures to solve real business bottlenecks. Our engineers are hard at work curating these case studies!
                    </p>

                    {/* CTA Button */}
                    <Link href="/">
                        <button className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-bold text-[14px] transition-all duration-300 hover:scale-[1.03] active:scale-95 overflow-hidden shadow-[0_8px_24px_rgba(37,99,235,0.25)]" 
                                style={{ background: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
                            {/* Shimmer sweep on hover */}
                            <span className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                            
                            <span className="relative z-10 flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                                Return Home
                            </span>
                        </button>
                    </Link>
                </m.div>
            </div>
        </section>
    );
}
