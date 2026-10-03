import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { BlogClient } from "./BlogClient";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Publications & Research Archive",
  description: "Browse the complete library of essays, technical whitepapers, and research articles on generative search, personal knowledge systems, and software engineering.",
  alternates: {
    canonical: `${siteConfig.url}/blog`
  }
};

export default function BlogIndexPage() {
  return (
    <div className="container" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <Breadcrumbs items={[{ name: "Articles", url: "/blog" }]} />

      <header style={{ maxWidth: "760px", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", marginBottom: "16px" }}>
          Articles & Technical Research
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.65", margin: 0 }}>
          High-signal analyses, architecture teardowns, and practical frameworks on Generative Engine Optimization (GEO), systems performance, and structured digital thought.
        </p>
      </header>

      <BlogClient />
    </div>
  );
}
