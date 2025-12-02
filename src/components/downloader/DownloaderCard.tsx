"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clipboard, Download, Loader2, Search, Video, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import { getHttpErrorMessage } from "@/lib/http";
import { useVideoInfo } from "@/services/api/queries";
import { VideoInfo } from "@/types";
import { addToDownloadHistory } from "@/lib/download-history";

const formSchema = z.object({
    postUrl: z.string().url({
        message: "Provide a valid Instagram post link",
    }),
});

export function DownloaderCard() {
    const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
    const [currentUrl, setCurrentUrl] = useState("");
    const [isValidUrl, setIsValidUrl] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            postUrl: "",
        },
    });

    const { isPending, mutateAsync: getVideoInfo } = useVideoInfo();

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
                e.preventDefault();
                handlePaste();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // URL validation feedback
    useEffect(() => {
        const subscription = form.watch((value) => {
            const url = value.postUrl || "";
            setCurrentUrl(url);
            try {
                formSchema.parse({ postUrl: url });
                setIsValidUrl(true);
            } catch {
                setIsValidUrl(false);
            }
        });
        return () => subscription.unsubscribe();
    }, [form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { postUrl } = values;
        setVideoInfo(null); // Reset previous result
        try {
            const info = await getVideoInfo({ postUrl });
            setVideoInfo(info);
            setCurrentUrl(postUrl);
        } catch (error: any) {
            console.error(error);
            const errorMessage = getHttpErrorMessage(error);

            // Enhanced error messages
            if (errorMessage?.includes("401") || errorMessage?.includes("not public")) {
                toast.error("This video is private or from a private account. We can only download public content.");
            } else if (errorMessage?.includes("404") || errorMessage?.includes("not found")) {
                toast.error("Video not found. Please check the URL and try again.");
            } else if (errorMessage?.includes("Invalid")) {
                toast.error("Invalid Instagram URL. Please paste a valid Reel, Story, or Post link.");
            } else {
                toast.error(errorMessage || "Failed to fetch video. Please try again.");
            }
        }
    }

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            form.setValue("postUrl", text);
        } catch (error) {
            toast.error("Failed to read clipboard");
        }
    };

    const handleDownload = async () => {
        if (!videoInfo) return;
        try {
            toast.loading("Starting download...");
            const response = await fetch(videoInfo.videoUrl);
            if (!response.ok) throw new Error("Failed to fetch video");

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = videoInfo.filename || "instagram-video.mp4";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(blobUrl);

            // Save to history
            addToDownloadHistory({
                url: currentUrl,
                videoUrl: videoInfo.videoUrl,
                thumbnailUrl: videoInfo.thumbnailUrl,
                filename: videoInfo.filename,
                width: videoInfo.width,
                height: videoInfo.height,
            });

            toast.dismiss();
            toast.success("Download started!");

            // Trigger history refresh
            window.dispatchEvent(new Event('download-history-updated'));
        } catch (error) {
            toast.dismiss();
            toast.error("Download failed. Try right-clicking the video and 'Save as'.");
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <Card className="border-none bg-white/5 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-6 sm:p-10">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="relative flex flex-col gap-4 sm:flex-row"
                        >
                            <FormField
                                control={form.control}
                                name="postUrl"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <div className="relative">
                                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                                <Input
                                                    disabled={isPending}
                                                    placeholder="Paste Instagram URL here... (Ctrl+V)"
                                                    className="h-14 rounded-xl border-white/10 bg-black/20 pl-12 pr-32 text-lg backdrop-blur-sm transition-all focus:border-primary/50 focus:bg-black/30 focus:ring-0"
                                                    {...field}
                                                />
                                                {currentUrl && isValidUrl && (
                                                    <CheckCircle2 className="absolute right-24 top-1/2 h-5 w-5 -translate-y-1/2 text-green-500" />
                                                )}
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                                                    onClick={handlePaste}
                                                >
                                                    <Clipboard className="mr-2 h-4 w-4" />
                                                    Paste
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                disabled={isPending}
                                type="submit"
                                className="h-14 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-purple-500/40 sm:w-auto"
                            >
                                {isPending ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    "Download"
                                )}
                            </Button>
                        </form>
                    </Form>

                    <AnimatePresence>
                        {isPending && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="mt-8 space-y-4"
                            >
                                <Skeleton className="h-64 w-full rounded-xl" />
                                <div className="flex gap-4">
                                    <Skeleton className="h-12 w-full rounded-xl" />
                                    <Skeleton className="h-12 w-full rounded-xl" />
                                </div>
                            </motion.div>
                        )}

                        {videoInfo && !isPending && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black/20 p-6"
                            >
                                <div className="flex flex-col gap-6 sm:flex-row">
                                    <div className="relative aspect-[9/16] w-full max-w-[200px] overflow-hidden rounded-lg bg-black sm:w-1/3">
                                        <video
                                            src={videoInfo.videoUrl}
                                            poster={videoInfo.thumbnailUrl}
                                            className="h-full w-full object-cover"
                                            controls
                                            playsInline
                                        />
                                        <div className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm pointer-events-none">
                                            <Video className="inline h-3 w-3 mr-1" />
                                            Video
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between py-2">
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold text-white">Ready to Download</h3>
                                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                                <span className="rounded-full bg-white/5 px-3 py-1">
                                                    {videoInfo.width}x{videoInfo.height}
                                                </span>
                                                <span className="rounded-full bg-white/5 px-3 py-1">
                                                    MP4
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-col gap-3">
                                            <Button
                                                onClick={handleDownload}
                                                className="w-full bg-primary hover:bg-primary/90"
                                            >
                                                <Download className="mr-2 h-4 w-4" />
                                                Download Video
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full border-white/10 bg-transparent hover:bg-white/5"
                                                onClick={() => window.open(videoInfo.videoUrl, '_blank')}
                                            >
                                                Open in New Tab
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    );
}
