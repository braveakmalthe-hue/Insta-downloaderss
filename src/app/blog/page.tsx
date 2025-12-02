import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogArticles } from "@/lib/blog-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Instagram Downloader Guides & Tips",
    description: "Learn how to download Instagram Reels, understand video formats, and get tips for content creation. Expert guides and tutorials for Instagram users.",
};

export default function BlogPage() {
    return (
        <div className="container mx-auto min-h-screen px-4 py-12">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            <div className="mx-auto max-w-6xl">
                <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Blog & Guides</h1>
                <p className="mb-12 text-lg text-muted-foreground">
                    Expert guides, tips, and tutorials for Instagram users and content creators.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogArticles.map((article) => (
                        <Link key={article.slug} href={`/blog/${article.slug}`}>
                            <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:scale-105 hover:border-primary/50">
                                <CardContent className="p-6">
                                    <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                        {article.category}
                                    </div>
                                    <h2 className="mb-3 text-xl font-bold text-white line-clamp-2">
                                        {article.title}
                                    </h2>
                                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                                        {article.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {new Date(article.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
