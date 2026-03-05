"use client";

import { m } from "framer-motion";

export default function TrustBar() {
    const logos = [
        { name: "Acme Corp", icon: "🏢" },
        { name: "GlobalTech", icon: "🌐" },
        { name: "Nexus", icon: "⚡" },
        { name: "Quantum", icon: "⚛️" },
        { name: "Horizon", icon: "🌅" },
        { name: "Vanguard", icon: "🛡️" },
    ];

    // Double the array for seamless infinite scroll
    const scrollingLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-3 border-y border-gray-200 overflow-hidden bg-gray-50">
            <div className="relative flex whitespace-nowrap overflow-hidden">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />

                <m.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60,
                    }}
                    className="flex gap-16 md:gap-24 px-8 items-center"
                >
                    {scrollingLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-all duration-300 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 active:opacity-100 active:grayscale-0 active:scale-95 cursor-pointer"
                        >
                            <span className="text-2xl md:text-3xl">{logo.icon}</span>
                            <span className="font-cabinet font-semibold text-lg md:text-xl">{logo.name}</span>
                        </div>
                    ))}
                </m.div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            </div>
        </section>
    );
}
