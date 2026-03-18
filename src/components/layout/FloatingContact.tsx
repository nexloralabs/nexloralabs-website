"use client";

import { m, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.087 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    // Auto-open & auto-close logic: peeks open 3.5 seconds after page loads, closes 3.5 seconds later
    useEffect(() => {
        let closeTimer: NodeJS.Timeout;
        const openTimer = setTimeout(() => {
            setIsOpen(true);
            
            // Automatically close the popup after it has been open for 3.5 seconds
            closeTimer = setTimeout(() => {
                setIsOpen(false);
            }, 3500);
            
        }, 3500);

        return () => {
            clearTimeout(openTimer);
            if (closeTimer) clearTimeout(closeTimer);
        };
    }, []);

    // Pre-filled WhatsApp message
    const message = encodeURIComponent("Hi NexLora Labs! I'm interested in working with you on a project.");
    
    // Updated user details
    const waLink = `https://wa.me/919505231281?text=${message}`; 
    const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=nexloralabs@gmail.com";
    const phoneLink = "tel:+919505231281"; 

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-dm">
            
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }} 
                        className="flex flex-col gap-3 mb-4 pointer-events-auto"
                    >
                        {/* WhatsApp */}
                        <a href={waLink} target="_blank" rel="noopener noreferrer" 
                           className="group flex items-center justify-end gap-3 w-full">
                            <span className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.06)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 outline outline-1 outline-gray-100 hidden sm:block">
                                WhatsApp
                            </span>
                            <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-transform flex-shrink-0">
                                <WhatsAppIcon className="w-6 h-6" />
                            </div>
                        </a>

                        {/* Email */}
                        <a href={emailLink} target="_blank" rel="noopener noreferrer"
                           className="group flex items-center justify-end gap-3 w-full">
                            <span className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.06)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 outline outline-1 outline-gray-100 hidden sm:block">
                                Email Us
                            </span>
                            <div className="w-12 h-12 rounded-full bg-[#EA4335] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(234,67,53,0.3)] hover:scale-110 active:scale-95 transition-transform flex-shrink-0">
                                <GmailIcon className="w-[22px] h-[22px]" />
                            </div>
                        </a>

                        {/* Phone */}
                        <a href={phoneLink} 
                           className="group flex items-center justify-end gap-3 w-full">
                            <span className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.06)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 outline outline-1 outline-gray-100 hidden sm:block">
                                Call Us
                            </span>
                            <div className="w-12 h-12 rounded-full bg-[#007AFF] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,122,255,0.3)] hover:scale-110 active:scale-95 transition-transform flex-shrink-0">
                                <PhoneIcon className="w-5 h-5" />
                            </div>
                        </a>
                    </m.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <div className="relative pointer-events-auto">
                {/* Ping Animation effect behind the button when closed to attract attention */}
                {!isOpen && (
                    <span 
                        className="absolute inset-0 rounded-full bg-[#7C3AED] animate-ping opacity-40" 
                        style={{ animationDuration: '3s' }} 
                    />
                )}
                
                {/* Continuous attention animation */}
                <m.button 
                    onClick={() => setIsOpen(!isOpen)}
                    animate={!isOpen ? { scale: [1, 1.08, 1], rotate: [0, -4, 4, -4, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-[0_12px_36px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95 transition-transform outline-none overflow-hidden"
                    aria-label="Contact Us"
                    style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <m.span 
                                key="close" 
                                initial={{ rotate: -90, opacity: 0 }} 
                                animate={{ rotate: 0, opacity: 1 }} 
                                exit={{ rotate: 90, opacity: 0 }}
                                className="relative z-10"
                            >
                                <X size={26} strokeWidth={2.5} />
                            </m.span>
                        ) : (
                            <m.span 
                                key="chat" 
                                initial={{ scale: 0, opacity: 0 }} 
                                animate={{ scale: 1, opacity: 1 }} 
                                exit={{ scale: 0, opacity: 0 }}
                                className="relative z-10"
                            >
                                <MessageCircle size={26} strokeWidth={2.5} className="fill-white" />
                            </m.span>
                        )}
                    </AnimatePresence>
                </m.button>
            </div>
        </div>
    );
}
