"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        number: "01",
        category: "Web Platform",
        title: "TejEduTech Consultancy",
        description: "Educational consultancy platform that increased student enrollment inquiries by 3x — delivered from concept to deployment in just 7 days.",
        image: "/tejedutech.webp",
        client: "Umesh Chandra",
        role: "Founder & CEO",
        company: "Tej EduTech",
        quote: "NexLora Labs transformed our vision into a live platform in a week — the quality exceeded our expectations.",
        tags: ["Next.js", "Tailwind CSS", "Education", "7-Day Delivery"],
        color: "#2563EB",
        light: "#EFF6FF",
    },
    {
        id: 2,
        number: "02",
        category: "Creative Studio",
        title: "Rapid Reel Creations",
        description: "Ultra-premium brand presence that established market credibility from day one — designed, developed, and deployed in under 4 days.",
        image: "/rapidreel.webp",
        client: "Sanjay",
        role: "Founder & CEO",
        company: "Rapid Reel Creations",
        quote: "NexLora Labs didn't just meet the deadline, they set a new standard for quality.",
        tags: ["Next.js", "Framer Motion", "Web Design", "4-Day Launch"],
        color: "#E11D48",
        light: "#FFE4E6",
    },
    {
        id: 3,
        number: "03",
        category: "SaaS Platform",
        title: "Terminal.me",
        description: "Full-stack SaaS portfolio builder for creators and founders — designed, built, tested, and shipped as a production-ready product in 10 days.",
        image: "/terminalme.webp",
        client: "Creators & Founders",
        role: "Target Audience",
        company: "Terminal.me",
        quote: "From idea to a fully functional platform in under two weeks.",
        tags: ["Next.js", "PostgreSQL", "Fullstack", "10-Day Delivery"],
        color: "#059669",
        light: "#ECFDF5",
    },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const project = projects[active];
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection(1);
            setActive((i) => (i + 1) % projects.length);
        }, 5000);
    }, []);

    useEffect(() => {
        resetTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [resetTimer]);

    const goNext = () => { setDirection(1); setActive((i) => (i + 1) % projects.length); resetTimer(); };
    const goPrev = () => { setDirection(-1); setActive((i) => (i - 1 + projects.length) % projects.length); resetTimer(); };

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
        center: { x: 0, opacity: 1, transition: { duration: 0.5, ease } },
        exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.4, ease } }),
    };

    return (
        <section className="bg-[#FAFAF8] border-b border-gray-100 overflow-hidden font-dm">
            <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 md:py-10">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                    <div>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4"
                        >
                            Selected Work
                        </m.p>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08, ease }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight font-playfair"
                        >
                            Products We&apos;ve{" "}
                            <span style={{ color: project.color }} className="transition-colors duration-500">Shipped.</span>
                        </m.h2>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-400 tabular-nums mr-1">
                            {String(active + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                        </span>
                        <button onClick={goPrev} aria-label="Previous"
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-90">
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <button onClick={goNext} aria-label="Next"
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all active:scale-90 shadow-md"
                            style={{ background: project.color }}>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Main Slider Content */}
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <m.div
                        key={active}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        {/* LEFT — Browser Mockup */}
                        <div style={{ perspective: "1000px" }}>
                            <m.div
                                className="rounded-xl overflow-hidden bg-white border border-gray-200"
                                style={{
                                    boxShadow: `0 24px 48px -12px rgba(0,0,0,0.08), 0 12px 24px -8px ${project.color}10`,
                                    transform: "rotateY(-2deg) rotateX(1deg)",
                                }}
                                whileHover={{ transform: "rotateY(0deg) rotateX(0deg)" }}
                                transition={{ duration: 0.5, ease }}
                            >
                                {/* Chrome bar */}
                                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2.5 border-b border-gray-200">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                                    </div>
                                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 font-medium border border-gray-100 truncate">
                                        {project.company.toLowerCase().replace(/\s+/g, "")}.com
                                    </div>
                                </div>
                                {/* Screenshot */}
                                <div className="relative w-full aspect-[16/10]">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} — ${project.category} developed by NexLora Labs engineering team`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-top"
                                        loading="lazy"
                                    />
                                </div>
                            </m.div>
                        </div>

                        {/* RIGHT — Info Card */}
                        <div className="flex flex-col gap-6">
                            {/* Category */}
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-black font-playfair" style={{ color: project.color }}>
                                    {project.number}
                                </span>
                                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                    {project.category}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight font-playfair">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-full text-[11px] font-bold border"
                                        style={{ borderColor: project.color + "30", color: project.color, background: project.light }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-100" />

                            {/* Quote & Client */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-sm font-black"
                                    style={{ background: project.color }}>
                                    {project.client[0]}
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-600 text-[13px] italic leading-relaxed mb-2">
                                        &ldquo;{project.quote}&rdquo;
                                    </p>
                                    <p className="text-[12px] font-bold text-gray-900">{project.client}</p>
                                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{project.role} · {project.company}</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <a href="/contact"
                                className="group inline-flex items-center gap-2.5 self-start px-6 py-3 rounded-full text-white text-[13px] font-bold transition-all hover:scale-[1.03] active:scale-95 shadow-md"
                                style={{ background: project.color, boxShadow: `0 8px 24px -4px ${project.color}40` }}>
                                Start a Similar Project
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </m.div>
                </AnimatePresence>

                {/* Bottom Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); resetTimer(); }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-8" : "w-2 opacity-30 hover:opacity-60"}`}
                            style={{ background: active === i ? project.color : "#9CA3AF" }}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}