"use client";

import { Shield, Zap, Smartphone, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Shield,
        title: "No Login Required",
        description: "We don't ask for your credentials. Safe & anonymous.",
    },
    {
        icon: Layers,
        title: "HD Quality",
        description: "Download videos in original high definition quality.",
    },
    {
        icon: Zap,
        title: "All IG Formats",
        description: "Supports Reels, Stories, Photos, and IGTV videos.",
    },
    {
        icon: Smartphone,
        title: "Fast & Mobile-Friendly",
        description: "Optimized for all devices with lightning fast speeds.",
    },
];

export function Features() {
    return (
        <div className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="group relative overflow-hidden rounded-2xl border bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    );
}
