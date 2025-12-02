import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import { Toaster } from "sonner";

import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { AdSense } from "@/components/adsense/AdSense";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Reels Downloader - Download IG Reels, Stories & Videos in HD",
  description: "Free Instagram video downloader. Download Instagram Reels, Stories, Photos & Videos in HD quality. Fast, secure, and no login required. Works on all devices.",
  keywords: ["instagram downloader", "reels downloader", "instagram video download", "ig downloader", "save instagram reels", "download instagram stories", "instagram photo downloader"],
  authors: [{ name: "Instagram Downloader" }],
  creator: "Instagram Downloader",
  publisher: "Instagram Downloader",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://instagram-downloader.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Instagram Reels Downloader - Download IG Reels & Videos in HD",
    description: "Free Instagram video downloader. Download Reels, Stories, Photos & Videos in HD quality. No login required.",
    url: '/',
    siteName: 'Instagram Downloader',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Instagram Downloader - Download Reels & Videos',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Instagram Reels Downloader - Download IG Reels & Videos in HD",
    description: "Free Instagram video downloader. Download Reels, Stories, Photos & Videos in HD quality. No login required.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <AdSense pId="9504654793147997" />
        <StructuredData />
      </head>
      <body
        className={cn(
          fontSans.variable,
          "overflow-x-hidden bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Header />
            <main className="relative min-h-screen">
              {children}
            </main>
            <Toaster position="top-center" richColors />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
