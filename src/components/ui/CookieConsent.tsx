"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "nexlance-cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

function getStoredConsent(): ConsentStatus {
    if (typeof window === "undefined") return null;
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
    return null;
}

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only show if no preference stored
        const consent = getStoredConsent();
        if (!consent) {
            // Small delay so it doesn't flash during hydration
            const timer = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = useCallback(() => {
        localStorage.setItem(STORAGE_KEY, "accepted");
        setVisible(false);
        // Dispatch custom event so analytics scripts can listen
        window.dispatchEvent(new CustomEvent("cookie-consent", { detail: "accepted" }));
    }, []);

    const handleReject = useCallback(() => {
        localStorage.setItem(STORAGE_KEY, "rejected");
        setVisible(false);
        window.dispatchEvent(new CustomEvent("cookie-consent", { detail: "rejected" }));
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <m.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    role="dialog"
                    aria-label="Cookie consent"
                    aria-modal="false"
                    className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[9999] sm:max-w-[400px] font-dm"
                >
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">

                        {/* Content */}
                        <div className="p-6 pb-5">
                            {/* Title */}
                            <div className="flex items-center gap-2.5 mb-3">
                                <span className="text-[22px] leading-none" role="img" aria-label="cookie">🍪</span>
                                <h3 className="text-[17px] font-black text-gray-900 tracking-tight">
                                    We value your privacy!
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-[14px] text-gray-500 leading-[1.7] font-medium mb-1">
                                Our website uses tracking cookies to understand how you interact with it.
                                The tracking will be enabled only if you accept.{" "}
                                <button
                                    onClick={() => {
                                        // Scroll to footer or just link to privacy
                                        window.open("/privacy", "_blank");
                                    }}
                                    className="text-gray-700 font-semibold underline underline-offset-2 decoration-gray-300 hover:decoration-gray-500 transition-colors cursor-pointer"
                                >
                                    Manage preferences
                                </button>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="px-6 pb-5 flex gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 py-3.5 rounded-xl bg-gray-900 text-white font-bold text-[14px] hover:bg-black active:scale-[0.97] transition-all duration-200 shadow-sm"
                            >
                                Accept all
                            </button>
                            <button
                                onClick={handleReject}
                                className="flex-1 py-3.5 rounded-xl bg-gray-900 text-white font-bold text-[14px] hover:bg-black active:scale-[0.97] transition-all duration-200 shadow-sm"
                            >
                                Reject all
                            </button>
                        </div>

                        {/* Footer links */}
                        <div className="border-t border-gray-100 px-6 py-3.5 flex items-center gap-5">
                            <Link
                                href="/privacy"
                                className="text-[13px] font-medium text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-[13px] font-medium text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
}

/**
 * Utility hook for other components to check cookie consent status.
 * Use this to conditionally load analytics scripts.
 *
 * Usage:
 *   const consent = useCookieConsent();
 *   if (consent === "accepted") { loadAnalytics(); }
 */
export function useCookieConsent() {
    const [consent, setConsent] = useState<ConsentStatus>(null);

    useEffect(() => {
        setConsent(getStoredConsent());

        const handler = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            setConsent(detail as ConsentStatus);
        };

        window.addEventListener("cookie-consent", handler);
        return () => window.removeEventListener("cookie-consent", handler);
    }, []);

    return consent;
}

/**
 * Call this function to reset the cookie consent preference.
 * Useful for a "Manage Preferences" button in the footer.
 */
export function resetCookieConsent() {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
}
