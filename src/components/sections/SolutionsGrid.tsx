"use client";

import { useState, useEffect, useRef } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Code2, Smartphone, Cpu, Database, Network, Layout,
    Palette, Rocket, BarChart3, ArrowUpRight,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
    {
        icon: Code2,
        title: "Web Application Development",
        desc: "Custom web apps with React, Next.js & Node.js — scalable, production-ready, built by dedicated engineers.",
        color: "#2563EB",
        gradient: "linear-gradient(135deg, #2563EB, #06B6D4)",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "Native and cross-platform Android & iOS apps for startups, SMBs and enterprises.",
        color: "#7C3AED",
        gradient: "linear-gradient(135deg, #7C3AED, #A855F7)",
    },
    {
        icon: Cpu,
        title: "AI & n8n Workflow Automation",
        desc: "Custom AI solutions, n8n workflow automation & business process automation — replacing manual tasks with intelligent systems.",
        color: "#059669",
        gradient: "linear-gradient(135deg, #059669, #34D399)",
    },
    {
        icon: Database,
        title: "SaaS Product Development",
        desc: "Full-stack SaaS platforms — architecture, development, deployment, and scaling. End to end.",
        color: "#D97706",
        gradient: "linear-gradient(135deg, #D97706, #FBBF24)",
    },
    {
        icon: Network,
        title: "API & Third-Party Integrations",
        desc: "RESTful APIs, payment gateways, CRM integrations, and webhooks to connect your entire tech stack.",
        color: "#DC2626",
        gradient: "linear-gradient(135deg, #DC2626, #F87171)",
    },
    {
        icon: Layout,
        title: "UI/UX Design",
        desc: "Pixel-perfect interfaces that convert. Research-backed, user-tested designs for web and mobile.",
        color: "#4F46E5",
        gradient: "linear-gradient(135deg, #4F46E5, #818CF8)",
    },
    {
        icon: Palette,
        title: "Ecommerce Development",
        desc: "Custom ecommerce solutions built for performance, conversion, and scale — from storefront to checkout.",
        color: "#BE185D",
        gradient: "linear-gradient(135deg, #BE185D, #F472B6)",
    },
    {
        icon: Rocket,
        title: "MVP Development for Startups",
        desc: "Rapid MVP development from idea to deployable product in weeks. Built for market validation.",
        color: "#0284C7",
        gradient: "linear-gradient(135deg, #0284C7, #38BDF8)",
    },
    {
        icon: BarChart3,
        title: "DevOps & Cloud Deployment",
        desc: "CI/CD pipelines, cloud infrastructure, performance optimization, and production-grade deployment.",
        color: "#0D9488",
        gradient: "linear-gradient(135deg, #0D9488, #5EEAD4)",
    },
];

/* ── 3D Tilt Card (disabled on touch devices for performance) ── */
function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isTouch, setIsTouch] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const onMove = (e: React.MouseEvent) => {
        if (isTouch) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => { x.set(0); y.set(0); };

    return (
        <m.div
            ref={ref}
            onMouseMove={isTouch ? undefined : onMove}
            onMouseLeave={isTouch ? undefined : onLeave}
            style={isTouch ? style : { rotateX, rotateY, transformPerspective: 800, ...style }}
            className={className}
        >
            {children}
        </m.div>
    );
}

export default function SolutionsGrid() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="services" className="bg-white border-b border-gray-100 overflow-hidden font-dm pt-8 pb-4 md:pt-12 md:pb-6">

            <div className="max-w-6xl mx-auto px-6 md:px-16">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
                    <div>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4"
                        >
                            Our Services
                        </m.p>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08, ease }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight font-playfair"
                        >
                            Everything you need{" "}
                            <span className="text-gray-300">to </span>
                            <span style={{
                                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                ship & scale.
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
                        Get a Quote
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </m.a>
                </div>

                {/* 3x3 Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((s, i) => {
                        const isHovered = hovered === i;
                        const Icon = s.icon;

                        return (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.6, delay: i * 0.06, ease }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <TiltCard
                                    className="group relative rounded-2xl p-[1px] cursor-default overflow-hidden transition-shadow duration-500"
                                    style={{
                                        background: s.gradient,
                                        boxShadow: isHovered
                                            ? `0 20px 40px -12px ${s.color}30`
                                            : `0 4px 16px -4px ${s.color}15`,
                                    }}
                                >
                                    {/* Inner card sits inside the gradient border */}
                                    <div className="bg-white rounded-[15px] p-5 md:p-6 h-full relative overflow-hidden">

                                        {/* Spotlight glow */}
                                        <div
                                            className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500"
                                            style={{
                                                backgroundColor: s.color,
                                                opacity: isHovered ? 0.1 : 0.05,
                                            }}
                                        />

                                        <div className="relative z-10">
                                            {/* Icon with gradient background — always colored */}
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-400"
                                                style={{
                                                    background: s.gradient,
                                                    boxShadow: `0 4px 14px ${s.color}25`,
                                                }}
                                            >
                                                <Icon className="w-5 h-5 stroke-[1.8] text-white" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-[15px] md:text-base font-bold text-gray-900 tracking-tight mb-1.5 leading-snug">
                                                {s.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-[12.5px] text-gray-500 leading-relaxed font-medium mb-4">
                                                {s.desc}
                                            </p>

                                            {/* Bottom link — always visible */}
                                            <div className="flex items-center gap-1.5 transition-all duration-300">
                                                <span
                                                    className="text-[11px] font-bold tracking-wide"
                                                    style={{ color: s.color }}
                                                >
                                                    Learn More
                                                </span>
                                                <ArrowUpRight
                                                    className="w-3 h-3 transition-all duration-300"
                                                    style={{
                                                        color: s.color,
                                                        transform: isHovered ? "translate(2px, -2px)" : "translate(0, 0)",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
