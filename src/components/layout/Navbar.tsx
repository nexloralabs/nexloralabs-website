"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Our Work", href: "/#work" },
    { name: "Why Us", href: "/#why-us" },
    { name: "FAQs", href: "/#faq" },
    { name: "Contact", href: "/contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const pill = scrolled
        ? "bg-white/95 border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.10)] backdrop-blur-xl"
        : "bg-white/80 border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] backdrop-blur-md";

    return (
        <>
            {/* Critical font loading is handled by next/font in layout.tsx */}
            {/* 
              Removed render-blocking Google Font import here to drastically improve 
              First Contentful Paint (FCP) and eliminate redundant network requests.
            */}

            {/* ═══════════════════════════════════════
                MOBILE NAVBAR
            ═══════════════════════════════════════ */}
            <header
                className="fixed top-0 left-0 right-0 z-50 md:hidden px-4 pt-3 pointer-events-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                <m.div
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className={`pointer-events-auto flex items-center justify-between pl-0 pr-1 h-[48px] rounded-full border shadow-sm transition-all duration-500 ${pill} overflow-hidden`}
                >
                    {/* Left side: Logo */}
                    <Link href="/" className="flex items-center h-full mr-auto overflow-hidden rounded-l-full" onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        setMobileOpen(false);
                    }}>
                        {/* 
                            Aggressively scaled the logo to remove white space from the image file.
                            Using strong negative margin to literally push it out past the transparent padding
                            so the actual visible pixels touch the exact left corner of the navbar.
                        */}
                        <div className="relative w-[190px] sm:w-[210px] h-[56px] flex items-center ml-[-16px] sm:ml-[-20px]">
                            <Image
                                src="/logo.webp"
                                alt="Nexlance.tech Logo"
                                fill
                                sizes="320px"
                                className="object-contain object-left scale-[2.2] sm:scale-[2.4] origin-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Vertical Divider / Line separator */}
                    <div className="w-[1.5px] h-[22px] bg-gray-200 mx-2 flex-shrink-0 rounded-full" />

                    {/* Right side: Hamburger button */}
                    <button
                        className="w-[38px] h-[38px] flex-shrink-0 rounded-full bg-gray-50/80 hover:bg-gray-100 flex items-center justify-center text-gray-700 active:scale-95 transition-all cursor-pointer"
                        onClick={() => setMobileOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {mobileOpen ? (
                                <m.span key="x"
                                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <X size={20} strokeWidth={2} />
                                </m.span>
                            ) : (
                                <m.span key="m"
                                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <Menu size={20} strokeWidth={2} />
                                </m.span>
                            )}
                        </AnimatePresence>
                    </button>
                </m.div>
            </header>

            {/* ═══════════════════════════════════════
                MOBILE MENU OVERLAY
            ═══════════════════════════════════════ */}
            <AnimatePresence>
                {mobileOpen && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

                        {/* Menu card */}
                        <m.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25, ease }}
                            className="relative mx-4 mt-[72px] rounded-2xl bg-white border border-gray-100 shadow-[0_24px_80px_rgba(0,0,0,0.12)] overflow-hidden"
                        >

                            {/* Nav links */}
                            <div className="px-2 pt-3 pb-1">
                                {navLinks.map((link, i) => (
                                    <m.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: i * 0.04, ease }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="flex items-center px-4 py-4 rounded-xl text-[16px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all"
                                        >
                                            {link.name}
                                        </Link>
                                    </m.div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="mx-4 h-[1px] bg-gray-100" />

                            {/* CTA */}
                            <div className="p-4">
                                <a
                                    href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                                    target="_blank" rel="noopener noreferrer"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gray-900 text-white font-bold text-[15px] hover:bg-black active:scale-[0.98] transition-all shadow-lg"
                                >
                                    Book a Call
                                </a>
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>

            {/* ═══════════════════════════════════════
                DESKTOP NAVBAR — original pill layout
            ═══════════════════════════════════════ */}
            <header
                className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-start justify-between pt-5 px-6 md:px-10 pointer-events-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {/* LEFT — Logo */}
                <m.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="pointer-events-auto"
                >
                    <Link href="/" className="flex items-center group -mt-6" onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}>
                        <div className="relative w-[460px] h-[120px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.webp"
                                alt="Nexlance.tech Logo"
                                fill
                                sizes="460px"
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                </m.div>

                {/* CENTER — Nav pill */}
                <m.nav
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08, ease }}
                    className={`flex items-center gap-0.5 px-2 py-2 rounded-full border transition-all duration-500 pointer-events-auto absolute left-1/2 -translate-x-1/2 ${pill}`}
                >
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setActiveLink(link.name)}
                            onMouseLeave={() => setActiveLink(null)}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="relative px-4 py-2 rounded-full text-[13.5px] font-semibold text-gray-500 hover:text-gray-900 transition-colors duration-200"
                        >
                            {activeLink === link.name && (
                                <m.div
                                    layoutId="navHover"
                                    className="absolute inset-0 rounded-full bg-gray-100"
                                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}
                </m.nav>

                {/* RIGHT — CTA */}
                <m.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.14, ease }}
                    className="flex items-center gap-2.5 pointer-events-auto"
                >
                    {/* Availability badge */}
                    <div className={`hidden lg:flex items-center gap-2 px-3 py-2.5 rounded-full border transition-all duration-500 ${pill}`}>
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-emerald-700 text-[11px] font-bold whitespace-nowrap">Accepting projects</span>
                    </div>

                    {/* Book a Call */}
                    <a
                        href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex group relative items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-[13.5px] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 bg-[#111827] border border-gray-800 hover:bg-black shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                    >
                        Book a Call
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                            <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
                        </span>
                    </a>
                </m.div>
            </header>
        </>
    );
}