"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Sparkles, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/data/siteConfig";

interface HeaderProps {
  onOpenRag?: () => void;
}

export function Header({ onOpenRag }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Articles", href: "/blog" },
    { title: "Topics", href: "/topics/generative-engine-optimization" },
    { title: "Author", href: "/author/srijan-prasad" },
    { title: "About", href: "/about" },
    { title: "Studio / CMS", href: "/editor" }
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-identity" aria-label="Srijan Prasad — Home">
          <div className="brand-avatar" aria-hidden="true" style={{ overflow: "hidden", padding: 0 }}>
            <img
              src="/srijan-prasad-avatar.png"
              alt="Srijan Prasad"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <span className="brand-title">Srijan Prasad</span>
            <span className="brand-subtitle">Editorial & Knowledge Platform</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <Link
            href="/search"
            className="icon-button"
            aria-label="Search articles and entities"
            title="Search knowledge base"
          >
            <Search size={18} />
          </Link>

          {onOpenRag && (
            <button
              onClick={onOpenRag}
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-flex", gap: "6px" }}
              aria-label="Open AI Research Assistant"
              title="Query Grounded Knowledge Assistant"
            >
              <Sparkles size={15} style={{ color: "var(--accent-warm)" }} />
              <span className="rag-btn-text">Ask AI</span>
            </button>
          )}

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="icon-button"
            style={{ display: "none" }}
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (visible when mobileMenuOpen is true) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-surface)",
            borderBottom: "1px solid var(--border-medium)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            zIndex: 99
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                padding: "8px 0"
              }}
            >
              {link.title}
            </Link>
          ))}
          <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Contact Desk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
