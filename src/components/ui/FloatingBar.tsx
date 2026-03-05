"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function FloatingBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 500) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && !dismissed && (
                <m.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg"
                >
                    <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Close button */}
                        <button
                            onClick={() => setDismissed(true)}
                            className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-all cursor-pointer hover:scale-110 active:scale-95"
                            aria-label="Dismiss"
                        >
                            <X size={14} strokeWidth={2.5} />
                        </button>

                        <div className="flex items-center gap-3">
                            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-black overflow-hidden shadow-sm">
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/icon.webp"
                                        alt="Nexlance"
                                        fill
                                        sizes="20px"
                                        className="object-contain"
                                    />
                                </div>
                            </span>
                            <div>
                                <p className="text-gray-900 font-bold text-sm">Only 2 engagements available</p>
                                <p className="text-gray-500 text-xs font-medium">Partner with real engineers</p>
                            </div>
                        </div>
                        <a
                            href="https://cal.com/nexlance.tech/discovery-call?duration=30&overlayCalendar=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-black transition-colors whitespace-nowrap text-center shadow-md cursor-pointer"
                        >
                            Start a Project
                        </a>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
