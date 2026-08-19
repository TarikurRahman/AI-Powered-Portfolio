import type { Metadata } from "next";
import AppProviders from "@/components/providers/AppProviders";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tarikur.com"),
  title: {
    default: "Tarikur Rahman | Full-Stack Developer, Shopify & Bubble.io Expert",
    template: "%s | Tarikur Rahman",
  },
  description:
    "Tarikur Rahman is a Full-Stack Developer specializing in React, Next.js, Shopify, Bubble.io, responsive web applications and high-performance digital experiences.",
  alternates: {
    canonical: "https://www.tarikur.com",
  },
  authors: [{ name: "Tarikur Rahman", url: "https://www.tarikur.com" }],
  creator: "Tarikur Rahman",
  verification: {
    google: "NHNrDYmGz-4MGt0_HW8C7Os273Ih2zXmr4Z0usyitpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tarikur.com/",
    siteName: "Tarikur Rahman",
    title: "Tarikur Rahman | Full-Stack Developer, Shopify & Bubble.io Expert",
    description:
      "Tarikur Rahman is a Full-Stack Developer specializing in React, Next.js, Shopify, Bubble.io, responsive web applications and high-performance digital experiences.",
    images: [
      {
        url: "https://www.tarikur.com/nafij-og.png",
        width: 1200,
        height: 630,
        alt: "Tarikur Rahman - Full-Stack Developer, Shopify & Bubble.io Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarikur Rahman | Full-Stack Developer, Shopify & Bubble.io Expert",
    description:
      "Tarikur Rahman is a Full-Stack Developer specializing in React, Next.js, Shopify, Bubble.io, responsive web applications and high-performance digital experiences.",
    images: ["https://www.tarikur.com/nafij-og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.tarikur.com/#tarikur-rahman",
      "name": "Tarikur Rahman",
      "alternateName": "Tarikur",
      "url": "https://www.tarikur.com/",
      "image": "https://www.tarikur.com/Nafij-Islam.png",
      "jobTitle": "Full-Stack Developer",
      "description":
        "Tarikur Rahman is a Full-Stack Developer specializing in React, Next.js, Shopify, Bubble.io, responsive web applications and high-performance digital experiences.",
      "sameAs": [
        "https://www.facebook.com/tarikurrahman/",
        "https://github.com/tarikurrahmanbd",
        "https://yourtarikur.netlify.app/",
        "https://tarikur.bd/"
      ],
      "knowsAbout": [
        "Full-Stack Development",
        "Frontend Development",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Shopify Development",
        "Bubble.io Development",
        "No-Code Development",
        "Responsive Web Development",
        "Backend Development",
        "API Integration",
        "Git",
        "GitHub",
        "eCommerce Development",
        "Web Performance Optimization"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tarikur.com/#website",
      "url": "https://www.tarikur.com/",
      "name": "Tarikur Rahman | Full-Stack Developer, Shopify & Bubble.io Expert",
      "description":
        "Official portfolio of Tarikur Rahman - Full-Stack Developer, Shopify & Bubble.io Expert.",
      "publisher": {
        "@id": "https://www.tarikur.com/#tarikur-rahman"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.tarikur.com/#profilepage",
      "url": "https://www.tarikur.com/",
      "name": "Tarikur Rahman Portfolio",
      "mainEntity": {
        "@id": "https://www.tarikur.com/#tarikur-rahman"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
