import { Hero } from "@/components/layout/Hero";
import { Features } from "@/components/layout/Features";
import { FAQ } from "@/components/layout/FAQ";
import { Footer } from "@/components/layout/Footer";
import { DownloaderCard } from "@/components/downloader/DownloaderCard";
import { DownloadHistory } from "@/components/downloader/DownloadHistory";
import { AdPlaceholder } from "@/components/ads/AdPlaceholder";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4">
        <Hero />

        {/* Top Ad - Before Downloader */}
        <AdPlaceholder label="Advertisement - Top Banner" />

        <section className="relative z-10 mb-20">
          <DownloaderCard />
        </section>

        {/* Download History */}
        <DownloadHistory />

        {/* Middle Ad - After Downloader */}
        <AdPlaceholder label="Advertisement - Middle Banner" />

        <Features />
        <FAQ />

        {/* Bottom Ad - Before Footer */}
        <AdPlaceholder label="Advertisement - Bottom Banner" />
      </div>
      <Footer />
    </div>
  );
}
