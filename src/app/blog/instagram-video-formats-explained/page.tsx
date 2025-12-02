import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram Video Formats Explained: Reels, Stories, IGTV & More",
    description: "Complete guide to understanding different Instagram video formats including Reels, Stories, IGTV, and regular posts. Learn specifications, best practices, and optimization tips.",
};

export default function InstagramFormatsPage() {
    return (
        <div className="container mx-auto min-h-screen px-4 py-12">
            <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
            </Link>

            <article className="mx-auto max-w-4xl">
                <div className="mb-8">
                    <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                        Education
                    </div>
                    <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        Instagram Video Formats Explained: Reels, Stories, IGTV & More
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            December 1, 2025
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            4 min read
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <p className="leading-relaxed">
                            Instagram offers various video formats, each designed for different types of content and audience engagement. Understanding these formats is crucial for content creators, marketers, and anyone looking to maximize their Instagram presence. This comprehensive guide breaks down each video format, their technical specifications, and best use cases.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Instagram Reels</h2>
                        <p className="mb-4 leading-relaxed">
                            Instagram Reels are short-form, entertaining videos that can be up to 90 seconds long. Launched to compete with TikTok, Reels have become one of Instagram's most popular features, offering powerful discovery potential through the Explore page.
                        </p>
                        <h3 className="mb-3 text-xl font-semibold text-white">Technical Specifications:</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Duration:</strong> 15, 30, 60, or 90 seconds</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Aspect Ratio:</strong> 9:16 (vertical)</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Resolution:</strong> 1080 x 1920 pixels (minimum)</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>File Format:</strong> MP4 or MOV</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Max File Size:</strong> 4GB</span></li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            <strong>Best For:</strong> Trending content, tutorials, entertainment, behind-the-scenes footage, and viral-worthy content. Reels benefit from Instagram's algorithm push and appear on the Explore page.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Instagram Stories</h2>
                        <p className="mb-4 leading-relaxed">
                            Stories are temporary posts that disappear after 24 hours. They appear at the top of followers' feeds and are perfect for casual, time-sensitive content.
                        </p>
                        <h3 className="mb-3 text-xl font-semibold text-white">Technical Specifications:</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Duration:</strong> Up to 60 seconds per story</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Aspect Ratio:</strong> 9:16 (vertical)</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Resolution:</strong> 1080 x 1920 pixels</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>File Format:</strong> MP4, MOV, or GIF</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Max File Size:</strong> 4GB</span></li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            <strong>Best For:</strong> Daily updates, polls, questions, limited-time offers, event coverage, and authentic, unpolished content that creates FOMO (fear of missing out).
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Instagram Feed Videos</h2>
                        <p className="mb-4 leading-relaxed">
                            Regular feed videos appear in your main Instagram feed and on your profile grid. They're permanent unless deleted and support longer content than Reels.
                        </p>
                        <h3 className="mb-3 text-xl font-semibold text-white">Technical Specifications:</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Duration:</strong> 3 seconds to 60 minutes</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Aspect Ratio:</strong> 1:1 (square), 4:5 (portrait), or 16:9 (landscape)</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Resolution:</strong> 1080 x 1080 pixels (square)</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>File Format:</strong> MP4 or MOV</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Max File Size:</strong> 4GB</span></li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            <strong>Best For:</strong> Polished content, product showcases, announcements, educational content, and videos you want to keep permanently on your profile.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">IGTV (Instagram TV)</h2>
                        <p className="mb-4 leading-relaxed">
                            IGTV was Instagram's long-form video platform, now integrated into the main feed. Videos longer than 60 seconds are automatically categorized as IGTV content.
                        </p>
                        <h3 className="mb-3 text-xl font-semibold text-white">Technical Specifications:</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Duration:</strong> 1 minute to 60 minutes</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Aspect Ratio:</strong> 9:16 (vertical) or 16:9 (horizontal)</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Resolution:</strong> Minimum 720 pixels</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>File Format:</strong> MP4</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Max File Size:</strong> 650MB (under 10 min), 3.6GB (up to 60 min)</span></li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            <strong>Best For:</strong> Long-form content, tutorials, interviews, webinars, product demos, and in-depth educational content.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Instagram Live</h2>
                        <p className="mb-4 leading-relaxed">
                            Live videos allow real-time interaction with your audience. They appear at the front of the Stories bar and send notifications to followers.
                        </p>
                        <h3 className="mb-3 text-xl font-semibold text-white">Technical Specifications:</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Duration:</strong> Up to 4 hours</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Aspect Ratio:</strong> 9:16 (vertical)</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Resolution:</strong> Depends on connection quality</span></li>
                            <li className="flex gap-2"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span><strong>Save Option:</strong> Can be saved to IGTV after broadcast</span></li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            <strong>Best For:</strong> Q&A sessions, product launches, events, behind-the-scenes content, and building authentic connections with your audience.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Choosing the Right Format</h2>
                        <p className="mb-4 leading-relaxed">
                            Selecting the appropriate video format depends on your content goals, audience preferences, and the type of message you want to convey. Here's a quick decision guide:
                        </p>
                        <ul className="space-y-3">
                            <li className="leading-relaxed"><strong>Use Reels</strong> for viral potential, trending content, and reaching new audiences through the Explore page.</li>
                            <li className="leading-relaxed"><strong>Use Stories</strong> for daily engagement, time-sensitive content, and building intimate connections with existing followers.</li>
                            <li className="leading-relaxed"><strong>Use Feed Videos</strong> for polished, permanent content that represents your brand and stays on your profile.</li>
                            <li className="leading-relaxed"><strong>Use IGTV</strong> for educational content, tutorials, and in-depth discussions that require more time.</li>
                            <li className="leading-relaxed"><strong>Use Live</strong> for real-time interaction, events, and creating urgency and FOMO.</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Conclusion</h2>
                        <p className="leading-relaxed">
                            Understanding Instagram's various video formats empowers you to create more effective content strategies. Each format serves a unique purpose and reaches your audience differently. By leveraging the right format for the right content, you can maximize engagement, grow your following, and achieve your Instagram marketing goals.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            Remember that Instagram's features and specifications evolve regularly, so stay updated with the latest changes to optimize your content strategy. Experiment with different formats to see what resonates best with your specific audience.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
