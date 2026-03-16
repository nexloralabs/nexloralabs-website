"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "12b3272b-2a01-4d5b-89c9-b432f15ebfbb");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setErrorMsg(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMsg("Network error. Please check your connection and try again.");
        }
    };

    const inputClass =
        "w-full bg-transparent border border-gray-300 rounded-2xl px-6 py-4 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all";

    return (
        <section id="contact" className="bg-[#f4f4f5] border-t border-gray-200 w-full pt-6 pb-24 md:pt-10 md:pb-32 font-dm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

                {/* ── Left Column: Contact Info ── */}
                <div className="flex flex-col justify-between">
                    <div>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-semibold text-gray-900 mb-4"
                        >
                            Start a project
                        </m.p>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6 font-playfair"
                        >
                            Let&apos;s Collaborate
                        </m.h2>
                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[15px] sm:text-base text-gray-600 leading-relaxed max-w-sm mb-16 font-medium"
                        >
                            Reach out and let&apos;s explore how we can bring your ideas to life. Whether you&apos;re ready to begin or just have questions.
                        </m.p>

                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mb-16"
                        >
                            <a href="tel:+919505231281" className="block text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors mb-3">
                                +91 9505231281
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nexloralabs@gmail.com" target="_blank" rel="noopener noreferrer" className="block text-2xl sm:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors mb-3">
                                nexloralabs@gmail.com
                            </a>
                            <p className="text-[14px] text-gray-500 font-medium max-w-xs leading-relaxed">
                                Reach out to us via email or give us a call, we are happy to assist you!
                            </p>
                        </m.div>
                    </div>

                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-3"
                    >
                        <a href="https://www.instagram.com/nexloralabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors group w-fit">
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/company/nexloralabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors group w-fit">
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            LinkedIn
                        </a>
                    </m.div>
                </div>

                {/* ── Right Column: Form ── */}
                <m.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {status === "success" ? (
                        /* ── Success state ── */
                        <m.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center py-20 gap-5"
                        >
                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                                <Check className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 font-playfair">Message Sent!</h3>
                            <p className="text-gray-500 text-[15px] font-medium max-w-sm">
                                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-4 px-6 py-3 rounded-2xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all"
                            >
                                Send another message
                            </button>
                        </m.div>
                    ) : (
                        /* ── Form ── */
                        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                            {/* Hidden fields for Web3Forms */}
                            <input type="hidden" name="subject" value="New Project Inquiry — NexLora Labs" />
                            <input type="hidden" name="from_name" value="NexLora Labs Website" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className={inputClass}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company name"
                                    className={inputClass}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    className={inputClass}
                                />
                            </div>

                            {/* Budget — Open text field */}
                            <input
                                type="text"
                                name="budget"
                                placeholder="Your budget (e.g. $500, $2000, flexible)"
                                className={inputClass}
                            />

                            <textarea
                                name="message"
                                placeholder="What can we help you with?"
                                rows={6}
                                required
                                className={`${inputClass} resize-y`}
                            />

                            {/* Error message */}
                            {status === "error" && (
                                <m.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-sm font-medium px-1"
                                >
                                    {errorMsg}
                                </m.p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full bg-black text-white hover:bg-gray-900 active:scale-[0.98] transition-all py-5 rounded-2xl font-bold text-sm shadow-xl shadow-black/10 mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                            >
                                {status === "sending" ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    )}
                </m.div>

            </div>
        </section>
    );
}
