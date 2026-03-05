"use client";

import { useEffect, useState } from "react";
import { domAnimation, LazyMotion, m, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

/* ─── Cycling words ─── */
const words = ["Scale.", "Convert.", "Dominate.", "Last.", "Win."];

/* ─── Floating metric cards ─── */
const metrics = [
    { value: "10+", label: "Products Shipped", color: "#2563EB", sub: "for startups & enterprises" },
    { value: "100%", label: "On-Time Delivery", color: "#059669", sub: "zero missed deadlines" },
    { value: "4.9★", label: "Client Satisfaction", color: "#D97706", sub: "from 20+ engagements" },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Animated SVG circuit line ─── */
function CircuitLine() {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.04" />
                </linearGradient>
            </defs>
            {/* Large diagonal slash — the key structural element */}
            <m.line
                x1="800" y1="-50" x2="300" y2="850"
                stroke="#111" strokeWidth="0.5" strokeOpacity="0.06"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            />
            <m.line
                x1="860" y1="-50" x2="360" y2="850"
                stroke="#111" strokeWidth="0.5" strokeOpacity="0.04"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
            />
            {/* Horizontal rule lines */}
            {[140, 280, 420, 560, 700].map((y, i) => (
                <m.line key={y}
                    x1="0" y1={y} x2="1200" y2={y}
                    stroke="#111" strokeWidth="0.4" strokeOpacity="0.035"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.8, delay: 0.1 * i, ease: "easeOut" }}
                />
            ))}
            {/* Dot grid — right half */}
            {Array.from({ length: 8 }, (_, row) =>
                Array.from({ length: 6 }, (_, col) => (
                    <m.circle key={`${row}-${col}`}
                        cx={680 + col * 70} cy={80 + row * 90} r="1.5"
                        fill="#2563EB" fillOpacity="0.12"
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + row * 0.04 + col * 0.03 }}
                    />
                ))
            )}
            {/* Accent arc */}
            <m.path
                d="M 950 -100 Q 1150 300 980 700"
                fill="none" stroke="url(#lg1)" strokeWidth="80"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
            />
        </svg>
    );
}

/* ─── Magnetic cursor ─── */
function Cursor() {
    const mx = useMotionValue(-300);
    const my = useMotionValue(-300);
    const sx = useSpring(mx, { stiffness: 60, damping: 16 });
    const sy = useSpring(my, { stiffness: 60, damping: 16 });
    useEffect(() => {
        const h = (e: MouseEvent) => { mx.set(e.clientX - 180); my.set(e.clientY - 180); };
        window.addEventListener("mousemove", h);
        return () => window.removeEventListener("mousemove", h);
    }, [mx, my]);
    return (
        <m.div style={{ x: sx, y: sy }}
            className="fixed top-0 left-0 w-[360px] h-[360px] rounded-full pointer-events-none z-0"
            aria-hidden>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/10 via-violet-300/6 to-transparent blur-[80px]" />
        </m.div>
    );
}

/* ─── Floating Testimonial ─── */
function TestimonialCard({ quote, author, role, company, color, rotate, delay }: { quote: string; author: string; role: string; company: string; color: string; rotate: number; delay: number; image?: string }) {
    return (
        <m.div
            initial={{ opacity: 0, y: 30, rotate: rotate * 2 }}
            animate={{ opacity: 1, y: 0, rotate }}
            transition={{ duration: 1.2, delay, ease }}
            className="absolute w-[220px] z-20"
        >
            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_48px_rgba(0,0,0,0.10)] border border-black/[0.06]">
                <div className="w-full h-0.5 rounded-full mb-3" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{quote}</p>
                <p className="text-[10px] text-gray-600 font-semibold">— {author}, {role}, {company}</p>
            </div>
        </m.div>
    );
}

export default function Hero() {
    const [wordIdx, setWordIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2400);
        return () => clearInterval(t);
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <section className="relative flex items-center justify-center overflow-hidden bg-[#FAFAF8] pt-24 pb-10 md:pt-24 md:pb-10 lg:pt-24 lg:pb-10 font-dm">

                {/* ── Structural background ── */}
                <CircuitLine />

                {/* Right half tinted panel */}
                <div className="absolute right-0 top-0 bottom-0 w-[42%] bg-gradient-to-bl from-[#F0F4FF] via-[#F5F7FF] to-transparent pointer-events-none" />

                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none">
                    <div className="h-full bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500" />
                </div>

                {/* Magnetic cursor — desktop */}
                <div className="hidden lg:block"><Cursor /></div>



                {/* ── MAIN CONTENT ── */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-[1fr_auto] gap-10 items-center">

                    {/* ── Inside Floating testimonial (moved here to prevent clipping) ── */}
                    <div className="hidden xl:block absolute right-[420px] 2xl:right-[540px] top-[15%] 2xl:top-[20%] z-20">
                        <TestimonialCard
                            quote="We needed more than a website — we needed credibility. Nexlance.tech built our entire digital presence with clarity and professionalism."
                            author="Umesh Kumar" role="Founder" company=" Tej Edutech Consultancy"
                            image="/clients/umesh.webp" color="#7C3AED" rotate={-5} delay={1.1}
                        />
                    </div>

                    {/* LEFT: All text */}
                    <div className="flex flex-col relative">

                        {/* Pill badge */}
                        <a
                            href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-fade-in inline-flex items-center gap-2.5 self-start mb-6 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 cursor-pointer hover:bg-blue-100 hover:border-blue-200 transition-colors duration-200"
                            style={{ animationDelay: '0.05s' }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-[11px] font-semibold text-blue-700 tracking-wide">Bring your ideas to life — Book a free discovery call</span>
                            <ArrowRight className="w-3 h-3 text-blue-400" />
                        </a>

                        {/* ── HEADLINE — single SEO-friendly h1 ── */}
                        <h1 className="mb-4 space-y-0 text-[clamp(2.5rem,5vw,3.8rem)] font-black leading-[1.0] tracking-[-0.03em] text-gray-900 font-playfair">

                            {/* Line 1 */}
                            <div className="overflow-hidden">
                                <span
                                    className="hero-slide-up block"
                                    style={{ animationDelay: '0.15s' }}
                                >
                                    We Build
                                </span>
                            </div>

                            {/* Line 2 — inline badge + text */}
                            <div className="overflow-hidden">
                                <span
                                    className="hero-slide-up flex flex-wrap items-center gap-4"
                                    style={{ animationDelay: '0.25s' }}
                                >
                                    <span>Products</span>
                                    {/* Inline floating tag */}
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-[11px] font-black uppercase tracking-[0.12em] shadow-lg"
                                        style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", boxShadow: "0 4px 24px rgba(99,102,241,0.35)" }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 0L6.2 3.8H10L7 6.1L8.1 10L5 7.8L1.9 10L3 6.1L0 3.8H3.8L5 0Z" fill="white" /></svg>
                                        World-Class
                                    </span>
                                    <span>That</span>
                                </span>
                            </div>

                            {/* Line 3 — cycling word in blue */}
                            <div className="overflow-hidden h-[clamp(3rem,5.5vw,4.5rem)] relative flex items-center pb-2">
                                <span
                                    className="hero-slide-up flex items-center gap-4"
                                    style={{ animationDelay: '0.35s' }}
                                >
                                    <AnimatePresence mode="wait">
                                        <m.span
                                            key={wordIdx}
                                            initial={{ y: 70, opacity: 0, scale: 0.95 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{ y: -70, opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.45, ease }}
                                            className="text-[#2563EB] block"
                                        >
                                            {words[wordIdx]}
                                        </m.span>
                                    </AnimatePresence>
                                </span>
                            </div>
                        </h1>

                        {/* ── Divider rule ── */}
                        <m.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.9, delay: 0.5, ease }}
                            className="w-24 h-[2px] bg-gradient-to-r from-blue-600 to-violet-500 mb-2 origin-left"
                        />

                        {/* Sub copy */}
                        <p
                            className="hero-fade-in text-[14px] md:text-[15px] text-gray-500 max-w-lg leading-[1.7] mb-1 font-medium"
                            style={{ animationDelay: '0.55s' }}
                        >
                            A dedicated freelance engineering team that partners with businesses
                            of all sizes — from ambitious startups to growing enterprises.{" "}
                            <span className="text-gray-800 font-semibold">Your product engineers</span>
                            {" "}— design, build, deploy, automate, and scale.
                        </p>

                        {/* ── CTAs ── */}
                        <div
                            className="hero-fade-in flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-0"
                            style={{ animationDelay: '0.65s' }}
                        >
                            {/* Primary — Expandable "N + You" CTA */}
                            <a
                                href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white font-bold text-[14px] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg,#1d4ed8,#7c3aed)",
                                    boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                                }}
                            >
                                {/* Shimmer sweep on hover */}
                                <span className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                                <span className="relative z-10">Schedule a Discovery Call</span>
                                <span className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </a>

                            {/* Secondary */}
                            <a href="#work"
                                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-gray-200 hover:border-gray-800 text-gray-500 hover:text-gray-900 font-semibold text-[14px] transition-all duration-300 active:bg-gray-50 active:scale-95">
                                View Our Work
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>

                            {/* Inline review */}
                            <m.div
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.9, ease }}
                                className="hidden xl:block max-w-[220px] ml-8 -rotate-[2deg] hover:rotate-0 transition-transform duration-300"
                            >
                                <div className="bg-white rounded-2xl p-3.5 shadow-[0_6px_36px_rgba(0,0,0,0.08)] border border-black/[0.05]">
                                    <p className="text-[10px] text-gray-500 leading-relaxed mb-2.5">Nexlance.tech brought RapidReel Creations to life with a cinematic, high-performance website that truly reflects our brand identity.</p>
                                    <p className="text-[10px] text-gray-600 font-semibold">— Sanjay Kumar, Founder & CEO, RapidReelCreations.com</p>
                                </div>
                            </m.div>
                        </div>

                        {/* ── Social proof ── */}
                        <div
                            className="hero-fade-in flex flex-wrap items-center gap-5"
                            style={{ animationDelay: '0.75s' }}
                        >
                            <div className="flex -space-x-2.5">
                                {[
                                    "/clients/sanjay.webp",
                                    "/clients/umesh.webp",
                                    "/clients/client3.jpg",
                                ].map((src, i) => (
                                    <Image
                                        key={i}
                                        src={src}
                                        alt={`Nexlance.tech satisfied client ${i + 1}`}
                                        width={36}
                                        height={36}
                                        loading="lazy"
                                        className="w-9 h-9 rounded-full object-cover border-[2.5px] border-[#FAFAF8] shadow-sm transform transition-transform hover:scale-110"
                                    />
                                ))}
                                <div className="w-9 h-9 rounded-full bg-gray-100 border-[2.5px] border-[#FAFAF8] flex items-center justify-center shadow-sm">
                                    <span className="text-[10px] font-bold text-gray-500">+20</span>
                                </div>
                            </div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                            </div>
                            <span className="text-[12px] font-medium text-gray-400">From 20+ reviews</span>
                        </div>
                    </div>

                    {/* RIGHT: Vertical metric cards */}
                    <m.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.8, ease }}
                        className="hidden lg:flex flex-col gap-3 w-[190px] flex-shrink-0"
                    >
                        {metrics.map((metric, i) => (
                            <m.div
                                key={metric.label}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.85 + i * 0.1, ease }}
                                whileHover={{ x: -4, transition: { duration: 0.2 } }}
                                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] cursor-default group"
                            >
                                {/* Top accent */}
                                <div className="w-8 h-1 rounded-full mb-3" style={{ background: metric.color }} />
                                <div className="text-2xl font-black text-gray-900 mb-1 tracking-tight group-hover:scale-105 transition-transform origin-left"
                                    style={{ color: metric.color }}>
                                    {metric.value}
                                </div>
                                <div className="text-[12px] font-bold text-gray-700 mb-1">{metric.label}</div>
                                <div className="text-[10px] text-gray-400 font-medium">{metric.sub}</div>
                            </m.div>
                        ))}

                        {/* Decorative "as seen" label */}
                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-[9px] text-gray-300 font-semibold tracking-widest uppercase whitespace-nowrap">Nexlance.tech</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>
                    </m.div>
                </div>

                {/* ── Bottom ticker strip ── */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 overflow-hidden h-10 flex items-center bg-white/60 backdrop-blur-sm">
                    <m.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-12 whitespace-nowrap text-[10px] font-semibold tracking-[0.15em] text-gray-300 uppercase px-8"
                    >
                        {[...Array(2)].map((_, rep) => (
                            <span key={rep} className="flex items-center gap-12">
                                {["Next.js", "React Native", "TypeScript", "Framer", "Figma", "Node.js", "Supabase", "Tailwind CSS", "AI Integration", "Product Design"].map(t => (
                                    <span key={t} className="flex items-center gap-12">
                                        {t}
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    </span>
                                ))}
                            </span>
                        ))}
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    );
}