"use client";

import { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
    {
        title: "TejEduTech Consultancy",
        category: "Web Platform",
        desc: "A comprehensive educational consultancy platform that increased student inquiries by 3x — delivered from concept to live deployment in just 7 days.",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        accent: "#2563EB",
        stats: { delivery: "7 Days", rating: "5.0★" },
        image: "/tejedutech.webp",
    },
    {
        title: "Rapid Reel Creations",
        category: "Creative Studio",
        desc: "Ultra-premium brand website that established instant market credibility — designed, developed, and deployed in under 4 days to meet an urgent brand launch.",
        tech: ["Next.js", "Framer Motion", "Vercel"],
        accent: "#E11D48",
        stats: { delivery: "4 Days", rating: "5.0★" },
        image: "/rapidreel.webp",
    },
    {
        title: "Terminal.me",
        category: "SaaS Platform",
        desc: "A fullstack SaaS portfolio builder for creators and founders. Designed, developed, tested, and shipped as a production-ready application in 10 days.",
        tech: ["Next.js", "PostgreSQL", "Fullstack"],
        accent: "#059669",
        stats: { delivery: "10 Days", rating: "5.0★" },
        image: "/terminalme.webp",
    },
];

export default function OurWorks() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="work" className="bg-white border-b border-gray-100 overflow-hidden font-dm">
            <div className="max-w-6xl mx-auto px-6 md:px-16 pt-4 pb-2 md:pt-6 md:pb-4">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4"
                        >
                            Our Work
                        </m.p>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08, ease }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight font-playfair"
                        >
                            Our Product Development{" "}
                            <span className="text-gray-300">Portfolio </span>
                            <span style={{
                                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                speaks for itself.
                            </span>
                        </m.h2>
                    </div>
                    <m.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[13px] font-bold text-gray-700 hover:border-gray-400 hover:bg-gray-50 active:scale-95 transition-all"
                    >
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </m.a>
                </div>

                {/* Wide Horizontal Project Cards */}
                <div className="flex flex-col gap-6">
                    {projects.map((p, i) => {
                        const isHovered = hovered === i;
                        const isEven = i % 2 === 0;
                        return (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer active:scale-[0.995] transition-all duration-300 border border-gray-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                            >
                                <div className={`grid grid-cols-1 md:grid-cols-[1.1fr_1fr] ${!isEven ? "md:direction-rtl" : ""}`}
                                    style={!isEven ? { direction: "rtl" } : {}}>

                                    {/* Screenshot Side */}
                                    <div className="relative bg-gray-50 overflow-hidden" style={!isEven ? { direction: "ltr" } : {}}>
                                        {/* Subtle accent gradient overlay */}
                                        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none"
                                            style={{ background: `linear-gradient(135deg, ${p.accent}, transparent)` }} />

                                        {/* Browser mockup */}
                                        <div className="p-5 md:p-8">
                                            <m.div
                                                animate={{ y: isHovered ? -4 : 0 }}
                                                transition={{ duration: 0.4, ease }}
                                                className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white"
                                            >
                                                {/* Chrome bar */}
                                                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                                                    <div className="flex gap-1.5">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                                                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                                                    </div>
                                                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 font-medium border border-gray-100 truncate ml-2">
                                                        {p.title.toLowerCase().replace(/[\s.]+/g, "")}.com
                                                    </div>
                                                </div>
                                                {/* Screenshot */}
                                                <div className="relative w-full aspect-[16/10]">
                                                    <Image
                                                        src={p.image}
                                                        alt={`${p.title} — ${p.category} built by NexLora Labs custom software development`}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 55vw"
                                                        className="object-cover object-top"
                                                    />
                                                </div>
                                            </m.div>
                                        </div>
                                    </div>

                                    {/* Info Side */}
                                    <div className="flex flex-col justify-center p-6 md:p-10" style={!isEven ? { direction: "ltr" } : {}}>

                                        {/* Category badge */}
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
                                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: p.accent }}>
                                                {p.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-snug mb-3 font-playfair">
                                            {p.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 text-[14px] leading-relaxed mb-6 font-medium">
                                            {p.desc}
                                        </p>

                                        {/* Tech tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {p.tech.map(t => (
                                                <span key={t} className="px-3 py-1 rounded-full text-[11px] font-bold border"
                                                    style={{ borderColor: p.accent + "25", color: p.accent, background: p.accent + "08" }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stats + CTA row */}
                                        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                                            <div className="flex gap-6">
                                                {Object.entries(p.stats).map(([k, v]) => (
                                                    <div key={k}>
                                                        <p className="text-lg font-black text-gray-900">{v}</p>
                                                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{k}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <m.div
                                                animate={{ rotate: isHovered ? 0 : -45, scale: isHovered ? 1.1 : 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-shadow"
                                                style={{ background: p.accent, boxShadow: isHovered ? `0 6px 20px ${p.accent}40` : "none" }}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </m.div>
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
