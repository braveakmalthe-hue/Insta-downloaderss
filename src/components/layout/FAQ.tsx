"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle, Download } from "lucide-react";

const steps = [
    {
        icon: Copy,
        title: "Copy URL",
        description: "Open Instagram app or website, find the Reel you want to download, and copy its link.",
    },
    {
        icon: CheckCircle,
        title: "Paste Link",
        description: "Return to our downloader, paste the link into the input field, and click Download.",
    },
    {
        icon: Download,
        title: "Save Video",
        description: "Wait for the preview to appear, then click the Download Video button to save it.",
    },
];

export function FAQ() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                        How to Download Instagram Reels
                    </h2>
                    <p className="text-muted-foreground">
                        Follow these simple steps to save your favorite content.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-primary shadow-lg shadow-primary/10 ring-1 ring-white/10 backdrop-blur-sm">
                                <step.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                            <p className="max-w-xs text-muted-foreground">{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="absolute right-0 top-8 hidden h-[2px] w-1/3 -translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
