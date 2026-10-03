import Link from "next/link";
import { articlesData } from "@/data/articles";
import { categories } from "@/data/categories";
import { topicsData } from "@/data/topics";
import { authorData } from "@/data/author";
import { ArticleCard } from "@/components/ArticleCard";
import { AuthorBox } from "@/components/AuthorBox";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Compass,
  Cpu,
  Terminal,
  Clock,
  Calendar,
  Layers,
  Search,
  ExternalLink
} from "lucide-react";

export default function HomePage() {
  const sortedArticles = [...articlesData].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const featuredArticle =
    articlesData.find(
      (a) =>
        a.slug === "my-first-experience-as-a-volunteer-at-wordcamp-bhopal-2025" ||
        a.slug === "wordcamp-bhopal-2025-pattern-table-lead-open-source-community"
    ) || sortedArticles[0];
  const latestArticles = sortedArticles.slice(0, 6);
  const popularArticles = articlesData.filter((a) => a.isPopular);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={22} />;
      case "Terminal":
        return <Terminal size={22} />;
      case "BookOpen":
        return <BookOpen size={22} />;
      case "Compass":
      default:
        return <Compass size={22} />;
    }
  };

  const featuredDate = new Date(featuredArticle.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      {/* Editorial Hero Section */}
      <section
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
          borderBottom: "1px solid var(--border-light)",
          marginBottom: "60px"
        }}
        aria-labelledby="hero-heading"
      >
        <div style={{ maxWidth: "860px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
            <span className="badge badge-accent">Personal Publication & Knowledge Base</span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-tertiary)" }}>•</span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              Curated by {authorData.name}
            </span>
          </div>

          <h1
            id="hero-heading"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "24px"
            }}
          >
            Distilling software architecture, generative search, and personal knowledge systems.
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: "32px",
              maxWidth: "760px"
            }}
          >
            A high-signal digital publication dedicated to deep technical synthesis. Exploring how Generative Engine Optimization (GEO), semantic retrieval, web performance, and cognitive scaffolding shape the future of information discovery.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
            <Link href="/blog" className="btn btn-primary btn-lg">
              <span>Explore All Articles</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/topics/generative-engine-optimization" className="btn btn-secondary btn-lg">
              <Layers size={18} />
              <span>Knowledge Clusters</span>
            </Link>
            <Link href="/search" className="btn btn-ghost btn-lg" style={{ border: "1px solid var(--border-light)" }}>
              <Search size={18} />
              <span>Semantic Search</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Editorial Article */}
      <section style={{ marginBottom: "70px" }} aria-labelledby="featured-heading">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px" }}>
          <div>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-primary)" }}>
              Lead Editorial Feature
            </span>
            <h2 id="featured-heading" style={{ fontSize: "1.85rem", margin: "4px 0 0 0" }}>
              Featured Investigation
            </h2>
          </div>
          <Link href="/blog" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent-primary)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>View all archive</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="featured-hero">
          <Link href={`/blog/${featuredArticle.slug}`} className="featured-hero-image-wrap" tabIndex={-1} aria-hidden="true">
            <img
              src={featuredArticle.featuredImage}
              alt={featuredArticle.featuredImageAlt}
              className="featured-hero-image"
            />
          </Link>
          <div className="featured-hero-body">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span className="badge badge-accent">
                {featuredArticle.categorySlug.replace("-", " ")}
              </span>
              <span style={{ color: "var(--text-tertiary)", fontSize: "0.85rem" }}>•</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <Clock size={13} />
                {featuredArticle.readingTimeMinutes} min read
              </span>
            </div>

            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)", lineHeight: 1.25, marginBottom: "14px", fontWeight: 700 }}>
              <Link href={`/blog/${featuredArticle.slug}`} style={{ color: "var(--text-primary)" }}>
                {featuredArticle.title}
              </Link>
            </h3>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "var(--text-secondary)", marginBottom: "22px" }}>
              {featuredArticle.dek}
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "18px", borderTop: "1px solid var(--border-light)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-tertiary)" }}>
                <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{authorData.name}</span>
                <span>•</span>
                <time dateTime={featuredArticle.publishedAt} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={13} />
                  {featuredDate}
                </time>
              </div>

              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="btn btn-primary btn-sm"
              >
                <span>Read Feature</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section style={{ marginBottom: "70px" }} aria-labelledby="categories-heading">
        <div style={{ marginBottom: "24px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-tertiary)" }}>
            Knowledge Taxonomy
          </span>
          <h2 id="categories-heading" style={{ fontSize: "1.85rem", margin: "4px 0 0 0" }}>
            Core Editorial Verticals
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog/category/${cat.slug}`}
              className="article-card"
              style={{ padding: "26px", textDecoration: "none" }}
            >
              <div style={{ display: "inline-flex", padding: "12px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--accent-surface)", color: "var(--accent-primary)", marginBottom: "16px", width: "fit-content" }}>
                {getCategoryIcon(cat.iconName)}
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-primary)" }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section style={{ marginBottom: "70px" }} aria-labelledby="latest-heading">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px" }}>
          <div>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-primary)" }}>
              Chronological Dispatch
            </span>
            <h2 id="latest-heading" style={{ fontSize: "1.85rem", margin: "4px 0 0 0" }}>
              Latest Research & Articles
            </h2>
          </div>
          <Link href="/blog" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent-primary)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>Explore all ({articlesData.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }}>
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Topic Clusters Section */}
      <section
        style={{
          padding: "40px",
          backgroundColor: "var(--bg-secondary)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-light)",
          marginBottom: "70px"
        }}
        aria-labelledby="topics-heading"
      >
        <div style={{ maxWidth: "680px", marginBottom: "24px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-primary)" }}>
            Topical Authority & Clusters
          </span>
          <h2 id="topics-heading" style={{ fontSize: "1.75rem", margin: "4px 0 10px 0" }}>
            Thematic Knowledge Clusters
          </h2>
          <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", margin: 0 }}>
            Every major topic is organized into an interconnected knowledge cluster linking pillar essays, subtopics, entities, and verified research sources.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {topicsData.map((topic) => (
            <Link
              key={topic.id}
              href={`/topics/${topic.slug}`}
              style={{
                padding: "20px",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-primary)" }}>
                  {topic.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "14px" }}>
                  {topic.shortDescription}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--accent-primary)", fontWeight: 600 }}>
                <span>{topic.coreEntities.length} Core Entities</span>
                <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Author Profile Section */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="author-section-heading">
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-tertiary)" }}>
            Identity & Provenance
          </span>
          <h2 id="author-section-heading" style={{ fontSize: "1.85rem", margin: "4px 0 0 0" }}>
            About the Author
          </h2>
        </div>
        <AuthorBox />
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}
