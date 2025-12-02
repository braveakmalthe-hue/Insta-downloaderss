"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("Message sent successfully! We'll get back to you soon.");

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="container mx-auto min-h-screen px-4 py-12">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            <div className="mx-auto max-w-4xl">
                <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
                <p className="mb-12 text-lg text-muted-foreground">
                    Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                            <CardContent className="p-8">
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                                            <CheckCircle className="h-10 w-10 text-green-500" />
                                        </div>
                                        <h2 className="mb-2 text-2xl font-bold text-white">Message Sent!</h2>
                                        <p className="mb-6 text-muted-foreground">
                                            Thank you for contacting us. We'll respond within 24-48 hours.
                                        </p>
                                        <Button
                                            onClick={() => setIsSubmitted(false)}
                                            className="bg-primary hover:bg-primary/90"
                                        >
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                                                Name *
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="h-12 border-white/10 bg-black/20 backdrop-blur-sm"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                                                Email *
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-12 border-white/10 bg-black/20 backdrop-blur-sm"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                                                Subject *
                                            </label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="h-12 border-white/10 bg-black/20 backdrop-blur-sm"
                                                placeholder="What is this about?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white backdrop-blur-sm transition-all focus:border-primary/50 focus:bg-black/30 focus:outline-none focus:ring-0"
                                                placeholder="Tell us more about your inquiry..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg font-semibold hover:scale-105"
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-2 font-semibold text-white">Email Us</h3>
                                <p className="text-sm text-muted-foreground">
                                    support@instagram-downloader.com
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                            <CardContent className="p-6">
                                <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
                                <div className="space-y-2 text-sm">
                                    <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                                        Blog & Guides
                                    </Link>
                                    <Link href="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors">
                                        Privacy Policy
                                    </Link>
                                    <Link href="/terms-of-service" className="block text-muted-foreground hover:text-primary transition-colors">
                                        Terms of Service
                                    </Link>
                                    <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                                        About Us
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                            <CardContent className="p-6">
                                <h3 className="mb-4 font-semibold text-white">Response Time</h3>
                                <p className="text-sm text-muted-foreground">
                                    We typically respond to all inquiries within 24-48 hours during business days.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-semibold text-white">Frequently Asked Questions</h2>
                    <p className="mb-4 text-muted-foreground">
                        Before contacting us, you might find answers to common questions in our FAQ section on the homepage. Here are some topics we can help with:
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">Technical support and troubleshooting</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">Feature requests and suggestions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">Partnership and collaboration inquiries</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">General questions about our service</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
