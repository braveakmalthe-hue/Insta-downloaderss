"use client";

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                "name": "Instagram Reels Downloader",
                "description": "Free Instagram video downloader. Download Instagram Reels, Stories, Photos & Videos in HD quality.",
                "url": "https://instagram-downloader.vercel.app",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "featureList": [
                    "Download Instagram Reels",
                    "Download Instagram Stories",
                    "Download Instagram Photos",
                    "Download Instagram Videos",
                    "HD Quality Downloads",
                    "No Login Required",
                    "Free to Use"
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Instagram Downloader",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Web Browser",
                "offers": {
                    "@type": "Offer",
                    "price": "0"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "1250"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How do I download Instagram Reels?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Copy the Instagram Reel URL, paste it into our downloader, and click Download. The video will be saved to your device in HD quality."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it free to download Instagram videos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Instagram downloader is completely free to use. No registration or payment required."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to log in to download Instagram content?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, you don't need to log in or provide any credentials. Simply paste the URL and download."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
