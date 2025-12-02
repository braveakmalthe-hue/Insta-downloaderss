"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 shadow-lg shadow-purple-500/20"
            >
                <Instagram className="h-8 w-8 text-white" />
            </motion.div>
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
                Instagram Reels Downloader
            </motion.h1>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl text-lg text-muted-foreground"
            >
                Download Instagram Reels, Stories, Photos & Videos in HD. Fast, free, and no login required.
            </motion.p>
        </div>
    );
}
