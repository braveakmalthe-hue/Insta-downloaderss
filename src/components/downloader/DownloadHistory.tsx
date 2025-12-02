"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Download, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DownloadHistoryItem } from "@/types";
import { getDownloadHistory, clearDownloadHistory, removeFromHistory } from "@/lib/download-history";
import { toast } from "sonner";

interface DownloadHistoryProps {
    onRedownload?: (url: string) => void;
}

export function DownloadHistory({ onRedownload }: DownloadHistoryProps) {
    const [history, setHistory] = useState<DownloadHistoryItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = () => {
        setHistory(getDownloadHistory());
    };

    const handleClearHistory = () => {
        clearDownloadHistory();
        setHistory([]);
        toast.success("History cleared");
    };

    const handleRemoveItem = (id: string) => {
        removeFromHistory(id);
        loadHistory();
        toast.success("Item removed from history");
    };

    const handleDownload = async (item: DownloadHistoryItem) => {
        try {
            const response = await fetch(item.videoUrl);
            if (!response.ok) throw new Error("Failed to fetch video");

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = item.filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(blobUrl);

            toast.success("Download started!");
        } catch (error) {
            toast.error("Download failed");
        }
    };

    const formatTimestamp = (timestamp: number) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

        if (diffInHours < 1) {
            const minutes = Math.floor(diffInHours * 60);
            return `${minutes}m ago`;
        } else if (diffInHours < 24) {
            return `${Math.floor(diffInHours)}h ago`;
        } else {
            return date.toLocaleDateString();
        }
    };

    if (history.length === 0) {
        return null;
    }

    return (
        <div className="w-full max-w-3xl mx-auto mt-12">
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                >
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Recent Downloads ({history.length})</span>
                </button>
                {history.length > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleClearHistory}
                        className="text-muted-foreground hover:text-destructive"
                    >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear All
                    </Button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                    >
                        {history.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-black">
                                            <img
                                                src={item.thumbnailUrl}
                                                alt="Thumbnail"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className="truncate text-sm text-muted-foreground">
                                                {item.width}x{item.height} • {formatTimestamp(item.timestamp)}
                                            </p>
                                            <p className="truncate text-xs text-muted-foreground/60">
                                                {item.filename}
                                            </p>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                onClick={() => handleDownload(item)}
                                                className="bg-primary hover:bg-primary/90"
                                            >
                                                <Download className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-muted-foreground hover:text-destructive"
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
