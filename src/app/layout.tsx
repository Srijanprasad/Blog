import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { authorData } from "@/data/author";
import { getWebsiteJsonLd, getAuthorJsonLd } from "@/lib/seo";
import { LayoutClient } from "@/components/LayoutClient";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} — Editorial & Knowledge Platform`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  authors: [{ name: authorData.name, url: `${siteConfig.url}/author/${authorData.slug}` }],
  creator: authorData.name,
  publisher: authorData.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: authorData.handle
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = getWebsiteJsonLd();
  const authorSchema = getAuthorJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
        />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
