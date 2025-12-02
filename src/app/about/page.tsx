import Link from "next/link";
import { ArrowLeft, CheckCircle, Shield, Zap, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Instagram Reels Downloader",
    description: "Learn about our free Instagram downloader service. We help millions of users download Instagram Reels, Stories, and Videos in HD quality without any login required.",
};

export default function AboutPage() {
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
                <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl">About Us</h1>

                <div className="space-y-8 text-muted-foreground">
                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Our Mission</h2>
                        <p className="leading-relaxed">
                            We are dedicated to providing a free, fast, and reliable Instagram content downloader that helps users save their favorite Instagram Reels, Stories, Photos, and Videos in high definition quality. Our mission is to make Instagram content accessible to everyone, anywhere, without the need for complicated software or paid subscriptions.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            Since our launch, we've helped millions of users worldwide download and save Instagram content for offline viewing, content creation, and personal archiving. We believe in making social media content more accessible while respecting creators' rights and Instagram's terms of service.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-6 text-2xl font-semibold text-white">Why Choose Us?</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-white">100% Free Forever</h3>
                                    <p className="text-sm">
                                        No hidden fees, no subscriptions, no premium plans. Our service is completely free and will always remain free for everyone.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-white">No Login Required</h3>
                                    <p className="text-sm">
                                        We never ask for your Instagram credentials. Simply paste the URL and download - it's that simple and secure.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-white">Lightning Fast</h3>
                                    <p className="text-sm">
                                        Our optimized servers ensure quick processing and instant downloads, saving you valuable time.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Heart className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-white">HD Quality</h3>
                                    <p className="text-sm">
                                        Download Instagram content in the highest quality available, preserving the original resolution and clarity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">What We Offer</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="mb-2 font-semibold text-white">Instagram Reels Downloader</h3>
                                <p className="leading-relaxed">
                                    Download Instagram Reels in MP4 format with full HD quality. Perfect for content creators, marketers, and anyone who wants to save entertaining short videos.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">Instagram Stories Downloader</h3>
                                <p className="leading-relaxed">
                                    Save Instagram Stories before they disappear after 24 hours. Keep memories and important content for future reference.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">Instagram Video Downloader</h3>
                                <p className="leading-relaxed">
                                    Download regular Instagram videos and IGTV content in high quality. Great for offline viewing and content archiving.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">Instagram Photo Downloader</h3>
                                <p className="leading-relaxed">
                                    Save Instagram photos in their original quality. Download single images or entire photo carousels with ease.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Our Technology</h2>
                        <p className="leading-relaxed">
                            We use cutting-edge web technologies to provide a seamless experience across all devices. Our platform is built with Next.js, React, and TypeScript, ensuring fast performance, reliability, and security. We continuously update our systems to maintain compatibility with Instagram's latest features and formats.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            Our servers are optimized for speed and can handle millions of requests daily. We use advanced caching mechanisms and CDN distribution to ensure fast download speeds regardless of your location.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Privacy & Security</h2>
                        <p className="leading-relaxed">
                            We take your privacy seriously. We don't collect, store, or share any personal information. We don't track your downloads or require any registration. Your usage of our service is completely anonymous and secure.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            All downloads are processed securely through encrypted connections. We comply with all applicable privacy laws and regulations, including GDPR and CCPA.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Responsible Use</h2>
                        <p className="leading-relaxed">
                            We encourage responsible use of our service. Please respect copyright laws and content creators' rights. Only download content that you have permission to use or content that is publicly available. Our service is designed for personal use and should not be used for commercial purposes without proper authorization.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            We are not affiliated with Instagram or Meta. Instagram is a trademark of Meta Platforms, Inc. Our service operates independently and uses publicly available Instagram data.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
                        <p className="leading-relaxed">
                            Have questions, suggestions, or feedback? We'd love to hear from you! Visit our{" "}
                            <Link href="/contact" className="text-primary hover:underline">
                                Contact page
                            </Link>{" "}
                            to get in touch with our team. We typically respond within 24-48 hours.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Join Millions of Happy Users</h2>
                        <p className="leading-relaxed">
                            Join millions of users worldwide who trust our service for downloading Instagram content. Whether you're a content creator, marketer, educator, or just someone who loves Instagram, our downloader makes it easy to save and enjoy your favorite content offline.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105"
                            >
                                Try It Now - It's Free!
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
