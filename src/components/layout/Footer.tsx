import Link from "next/link";
import { Instagram, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* About Section */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                                <Instagram className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-bold text-white">IG Downloader</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Free Instagram Reels, Stories & Video downloader. Fast, secure, and no login required. Download Instagram content in HD quality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                                    Blog & Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-4 font-semibold text-white">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-muted-foreground transition-colors hover:text-primary">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                        <p className="mt-4 text-xs text-muted-foreground">
                            We are not affiliated with Instagram or Meta. Instagram is a trademark of Meta Platforms, Inc.
                        </p>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="mb-4 font-semibold text-white">Connect</h3>
                        <div className="mb-4 space-y-2 text-sm">
                            <p className="text-muted-foreground">
                                <Mail className="mr-2 inline h-4 w-4" />
                                support@instagram-downloader.com
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    <p>© {currentYear} Instagram Downloader. All rights reserved.</p>
                    <p className="mt-2 text-xs">
                        Download Instagram content responsibly. Respect copyright and creators' rights.
                    </p>
                </div>
            </div>
        </footer>
    );
}
