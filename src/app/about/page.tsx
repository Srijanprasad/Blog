import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { authorData } from "@/data/author";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorBox } from "@/components/AuthorBox";
import { ShieldCheck, BookOpen, Cpu, Layers, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Publication & Editorial Philosophy",
  description: "Learn about the publication standards, knowledge architecture, and editorial philosophy behind Srijan Prasad's personal platform.",
  alternates: {
    canonical: `${siteConfig.url}/about`
  }
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <Breadcrumbs items={[{ name: "About", url: "/about" }]} />

      <div className="reading-container">
        <header style={{ marginBottom: "45px" }}>
          <div style={{ display: "inline-flex", marginBottom: "12px" }}>
            <span className="badge badge-accent">Editorial Mission</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.4rem)", marginBottom: "20px" }}>
            Editorial Standards in the Age of Automated Content
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
            This platform is an independent editorial publication and digital knowledge repository. Our purpose is to provide dense, verified technical analysis on software architecture, generative search optimization (GEO/AEO), and modern personal knowledge systems.
          </p>
        </header>

        <section className="article-body" style={{ marginBottom: "50px" }}>
          <h2>The Four Editorial Pillars</h2>
          <p>
            As artificial intelligence dramatically lowers the barrier to producing generic, synthetic text, web publishing faces an existential challenge: distinguishing true intellectual signal from recursive statistical noise. This platform is governed by four non-negotiable principles:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", margin: "30px 0" }}>
            <div style={{ padding: "24px", backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <ShieldCheck size={20} style={{ color: "var(--accent-emerald)" }} />
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>1. Verifiable Provenance & Zero Fabrication</h3>
              </div>
              <p style={{ fontSize: "1rem", margin: 0, color: "var(--text-secondary)" }}>
                We never cite non-existent studies, fabricate credentials, or manipulate benchmarks. Every empirical claim includes explicit publisher attribution, publication year, and direct reference links.
              </p>
            </div>

            <div style={{ padding: "24px", backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <Cpu size={20} style={{ color: "var(--accent-primary)" }} />
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>2. Generative Engine Optimization (GEO) & AEO</h3>
              </div>
              <p style={{ fontSize: "1rem", margin: 0, color: "var(--text-secondary)" }}>
                Content is structured for both human reading comfort and autonomous machine comprehension. With answer-first definitions, deep JSON-LD entity graphs, and markdown ingestion indices (`llms.txt`), knowledge is readily cited by LLM synthesis engines.
              </p>
            </div>

            <div style={{ padding: "24px", backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <Layers size={20} style={{ color: "var(--accent-secondary)" }} />
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>3. Atomic Knowledge Architecture</h3>
              </div>
              <p style={{ fontSize: "1rem", margin: 0, color: "var(--text-secondary)" }}>
                Articles are treated as interconnected nodes within a persistent digital garden. By connecting pillar essays to subtopics and core conceptual entities, thinking compounds systematically over years.
              </p>
            </div>

            <div style={{ padding: "24px", backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <BookOpen size={20} style={{ color: "var(--accent-warm)" }} />
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>4. Disciplined Web Performance & Accessibility</h3>
              </div>
              <p style={{ fontSize: "1rem", margin: 0, color: "var(--text-secondary)" }}>
                No bloated tracker scripts, no layout shifts, and no heavy runtime styling layers. We prioritize sub-second page loads, WCAG AA compliance, and calm typographic legibility.
              </p>
            </div>
          </div>

          <h2>The Author Entity</h2>
          <p>
            The website establishes an authentic, verifiable relationship between the author entity, published articles, and official social accounts. Verified accounts:
          </p>
          <ul className="editorial-list">
            <li>
              <strong>GitHub:</strong>{" "}
              <a href={authorData.socials.github} target="_blank" rel="noopener noreferrer" className="source-link">
                https://github.com/Srijanprasad
              </a>
            </li>
            <li>
              <strong>X (Twitter):</strong>{" "}
              <a href={authorData.socials.x} target="_blank" rel="noopener noreferrer" className="source-link">
                https://x.com/Ushan_0
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a href={authorData.socials.instagram} target="_blank" rel="noopener noreferrer" className="source-link">
                https://www.instagram.com/srijanprasad_/
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={authorData.socials.email} className="source-link">
                {authorData.email}
              </a>
            </li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </div>
  );
}
