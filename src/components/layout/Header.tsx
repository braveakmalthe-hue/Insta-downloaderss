"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/terms-of-service", label: "Terms" },
        { href: "/privacy-policy", label: "Privacy" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                        <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <span className="hidden text-lg font-bold text-white sm:inline-block">
                        IG Downloader
                    </span>
                </Link>

                <nav className="flex items-center gap-4 overflow-x-auto">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href
                                    ? "text-white"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
