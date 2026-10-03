export interface ArticleSource {
  title: string;
  publisher: string;
  url: string;
  author: string;
  publishedDate: string;
  accessedDate: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface HeadingItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  dek: string;
  categorySlug: string;
  topicSlugs: string[];
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  featuredImage: string;
  featuredImageAlt: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  aeoDirectAnswer: string;
  keyTakeaways: string[];
  entities: string[];
  sources: ArticleSource[];
  faqs: ArticleFAQ[];
  headings: HeadingItem[];
  contentHtml: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
    robots?: string;
  };
}

export const articlesData: Article[] = [
  {
    id: "art-geo-foundations",
    slug: "architecting-generative-engine-optimization-geo",
    title: "Architecting Generative Engine Optimization: How AI Search Changes Content Discovery",
    dek: "A deep technical blueprint on structuring web content for Perplexity, SearchGPT, Gemini, and modern LLM answer synthesis engines.",
    categorySlug: "artificial-intelligence",
    topicSlugs: ["generative-engine-optimization", "editorial-systems"],
    authorId: "author-srijan-prasad",
    publishedAt: "2025-08-15T09:00:00Z",
    updatedAt: "2026-02-10T14:30:00Z",
    readingTimeMinutes: 7,
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    featuredImageAlt: "Abstract conceptual visualization of generative data streams and semantic networks",
    isFeatured: true,
    isPopular: true,
    aeoDirectAnswer: "Generative Engine Optimization (GEO) is the practice of structuring digital content so that Large Language Models and AI answer engines can accurately extract, cite, and synthesize its information. Unlike traditional keyword-centric SEO, GEO prioritizes factual density, clear answer-first hierarchies, verifiable source citations, entity disambiguation via Schema.org JSON-LD, and unambiguous declarative assertions.",
    keyTakeaways: [
      "AI search engines prioritize factual statements, entity relationships, and provenance over keyword repetition.",
      "An 'answer-first' architectural pattern ensures retrieval algorithms locate primary answers before context expands.",
      "Valid JSON-LD schemas (such as BlogPosting, Person with sameAs, and BreadcrumbList) significantly improve LLM disambiguation.",
      "Technical publications should expose structured machine-readable formats such as llms.txt alongside standard HTML."
    ],
    entities: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Schema.org",
      "Perplexity AI",
      "SearchGPT"
    ],
    sources: [
      {
        title: "GEO: Generative Engine Optimization",
        publisher: "Princeton University & Georgia Tech Research",
        url: "https://arxiv.org/abs/2311.09735",
        author: "Aggarwal et al.",
        publishedDate: "November 2023",
        accessedDate: "January 2026"
      },
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        publisher: "NeurIPS Proceedings",
        url: "https://proceedings.neurips.cc/paper/2020/hash/6b4223cc30275f3c075cb453701357dc-Abstract.html",
        author: "Lewis, P. et al.",
        publishedDate: "December 2020",
        accessedDate: "January 2026"
      },
      {
        title: "Schema.org Technical Specification & Vocabularies",
        publisher: "W3C Schema Community Group",
        url: "https://schema.org/BlogPosting",
        author: "Schema.org Consortium",
        publishedDate: "Ongoing Revision",
        accessedDate: "February 2026"
      }
    ],
    faqs: [
      {
        question: "How does GEO differ from traditional SEO?",
        answer: "Traditional SEO focuses on earning clicks from a ranked list of blue links by matching keywords and accumulating backlinks. GEO focuses on becoming a cited source and ground-truth reference within an AI-generated synthesis, requiring high factual density, explicit entity relationships, and clear provenance."
      },
      {
        question: "Does GEO replace technical SEO best practices?",
        answer: "No. GEO builds upon technical SEO fundamentals—such as crawlability, semantic HTML5, fast Core Web Vitals, and JSON-LD structured data. An AI crawler cannot synthesize what it cannot cleanly fetch or parse."
      },
      {
        question: "What is llms.txt and should a modern blog implement it?",
        answer: "The llms.txt file is an emerging web convention that provides a clean, markdown-formatted directory of a website's core content, topics, and documentation, optimized for direct ingestion by LLM web scrapers and context windows without HTML parsing noise."
      }
    ],
    headings: [
      { id: "the-paradigm-shift", text: "The Paradigm Shift: From Ranked Links to Direct Synthesis", level: 2 },
      { id: "core-pillars-of-geo", text: "The Core Pillars of Generative Optimization", level: 2 },
      { id: "answer-first-formatting", text: "Answer-First Formatting and Factual Density", level: 3 },
      { id: "entity-disambiguation", text: "Entity Disambiguation via Semantic Graphing", level: 3 },
      { id: "source-citation-architecture", text: "Source Citation Architecture and Provenance", level: 2 },
      { id: "technical-implementation-checklist", text: "Technical Implementation Blueprint", level: 2 }
    ],
    contentHtml: `
      <section id="the-paradigm-shift">
        <h2>The Paradigm Shift: From Ranked Links to Direct Synthesis</h2>
        <p>For more than two decades, web publishing operated under a predictable contract: search engines crawled documents, calculated PageRank and keyword relevance, and presented users with a list of ten blue links. The publisher's objective was to capture high positions on the results page to generate organic click-through traffic.</p>
        <p>The proliferation of generative search architectures—including SearchGPT, Perplexity, and Gemini Search—has upended this dynamic. Today, users increasingly receive a synthesized, natural-language response synthesized in real time from multiple sources. In this environment, visibility depends not merely on indexation, but on whether an AI system recognizes your publication as an authoritative, verifiable, and extractable source of ground truth.</p>
        
        <div class="editorial-callout info">
          <span class="callout-label">Core Principle</span>
          <p>AI answer engines do not read documents like human leisure readers, nor do they treat web pages as opaque bags of keywords. They operate across embedding vector spaces and semantic parse trees, searching for factual density, contextual clarity, and verifiable provenance.</p>
        </div>
      </section>

      <section id="core-pillars-of-geo">
        <h2>The Core Pillars of Generative Optimization</h2>
        <p>Research published by researchers at Princeton and Georgia Tech (Aggarwal et al., 2023) demonstrated that optimizing content for generative search engines requires a distinct set of technical adjustments. The study identified three dominant factors that increase citation likelihood:</p>
        
        <div class="editorial-table-wrap">
          <table class="editorial-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Traditional SEO Focus</th>
                <th>Generative Engine Focus (GEO)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Metric</strong></td>
                <td>SERP Rank (Positions 1–3)</td>
                <td>Synthesis Citation & Attribution Inclusion</td>
              </tr>
              <tr>
                <td><strong>Content Density</strong></td>
                <td>Target keyword frequency & word count</td>
                <td>Factual assertions per token (Information Gain)</td>
              </tr>
              <tr>
                <td><strong>Data Structure</strong></td>
                <td>Basic metadata tags & Open Graph</td>
                <td>Connected JSON-LD Entity Graph (sameAs, Person, Sources)</td>
              </tr>
              <tr>
                <td><strong>Retrieval Pattern</strong></td>
                <td>Lexical token inverted index</td>
                <td>Dense vector similarity + BM25 hybrid reranking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="answer-first-formatting">
        <h3>Answer-First Formatting and Factual Density</h3>
        <p>Answer Engine Optimization (AEO) demands an inverted pyramid structure. When an article addresses a specific inquiry or architectural problem, the direct solution must be stated immediately in clear, declarative prose before elaborating on context, trade-offs, or historical rationale.</p>
        <p>Consider the difference between a conversational opening and an authoritative definition:</p>
        
        <div class="code-block-container">
          <div class="code-block-header">
            <span>Declarative vs. Fluff Comparison</span>
          </div>
          <pre><code>// ❌ Low Factual Density (Fluff / Keyword Stuffing):
"Have you ever wondered how AI search engines work? Many people find it confusing, but in this comprehensive guide, we will explore everything you need to know about modern SEO..."

// ✅ High Factual Density (GEO / AEO Optimized):
"Generative Engine Optimization (GEO) is the systematic methodology of engineering digital content so LLM-based answer engines can parse, attribute, and synthesize its factual claims."</code></pre>
        </div>
      </section>

      <section id="entity-disambiguation">
        <h3>Entity Disambiguation via Semantic Graphing</h3>
        <p>Search engines and foundation models rely on Knowledge Graphs to resolve ambiguity. If an author writes about "Python", the system must distinguish the programming language from the reptile or Monty Python. This resolution is achieved through explicit entity modeling.</p>
        <p>In our publishing platform, every article links concepts to canonical entities and defines the author entity with explicit <code>sameAs</code> arrays linking verified channels (including GitHub at <code>https://github.com/Srijanprasad</code>, X at <code>https://x.com/Ushan_0</code>, Instagram at <code>https://www.instagram.com/srijanprasad_/</code>, and direct email at <code>srijanprasad2006@gmail.com</code>). This guarantees that knowledge graph miners link all published insights to a single verified human creator.</p>
      </section>

      <section id="source-citation-architecture">
        <h2>Source Citation Architecture and Provenance</h2>
        <p>LLMs trained with Reinforcement Learning from Human Feedback (RLHF) and equipped with retrieval tools are penalized when they hallucinate unbacked claims. Consequently, retrieval agents heavily favor documents that provide explicit citations to primary literature, peer-reviewed journals, and canonical documentation.</p>
        <blockquote>
          "Content that includes verified source attributions, primary research citations, and quantitative data points experiences an estimated 30–40% increase in generative citation frequency compared to unsubstantiated opinion pieces."
        </blockquote>
        <p>Every article in this knowledge system includes an immutable Sources and References section detailing publisher, publication date, and accessed date. This ensures both human readers and automated crawler agents can verify claims back to their origin.</p>
      </section>

      <section id="technical-implementation-checklist">
        <h2>Technical Implementation Blueprint</h2>
        <p>To implement a robust GEO architecture, adhere to the following technical roadmap:</p>
        <ol class="editorial-list">
          <li><strong>Implement Deep JSON-LD:</strong> Ensure <code>BlogPosting</code>, <code>Person</code>, <code>BreadcrumbList</code>, and <code>FAQPage</code> schemas are rendered server-side in the initial HTML payload without requiring client JavaScript execution.</li>
          <li><strong>Publish an <code>llms.txt</code> Index:</strong> Expose a markdown index containing clean URLs, summaries, and core topics so AI scrapers can ingest the site's ontology with minimal token overhead.</li>
          <li><strong>Maintain Strict Heading Hierarchy:</strong> Guarantee exactly one <code>&lt;h1&gt;</code> per document, followed by logical <code>&lt;h2&gt;</code> and <code>&lt;h3&gt;</code> tags that represent genuine conceptual sub-divisions.</li>
          <li><strong>Deliver Sub-Second Response Times:</strong> AI crawlers (such as GPTBot and PerplexityBot) enforce strict retrieval timeouts. High server latency risks retrieval omission during real-time synthesis.</li>
        </ol>
      </section>
    `,
    seo: {
      metaTitle: "Architecting Generative Engine Optimization (GEO) | Srijan Prasad",
      metaDescription: "A comprehensive technical guide to Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) for modern AI search engines.",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    }
  },
  {
    id: "art-semantic-search",
    slug: "engineering-semantic-search-vector-embeddings-hybrid-retrieval",
    title: "The Engineering of Semantic Search: From Vector Embeddings to Hybrid BM25 Retrieval",
    dek: "How modern knowledge platforms blend dense vector embeddings with sparse lexical indexing to build fast, accurate personal search engines.",
    categorySlug: "systems-engineering",
    topicSlugs: ["semantic-search", "generative-engine-optimization"],
    authorId: "author-srijan-prasad",
    publishedAt: "2025-09-22T11:15:00Z",
    updatedAt: "2026-01-18T16:00:00Z",
    readingTimeMinutes: 8,
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    featuredImageAlt: "Abstract server architecture and multidimensional data matrices",
    isFeatured: true,
    isPopular: false,
    aeoDirectAnswer: "Semantic search uses mathematical vector embeddings in high-dimensional space to understand the conceptual meaning and intent of a query, rather than relying solely on exact character or word matches. Modern production systems combine semantic vector similarity with traditional BM25 lexical ranking (known as hybrid search) using Reciprocal Rank Fusion (RRF) to achieve both conceptual depth and keyword precision.",
    keyTakeaways: [
      "Pure vector search excels at conceptual intent but frequently stumbles on exact identifiers, acronyms, and proper nouns.",
      "Hybrid search combines sparse BM25 lexical retrieval with dense embedding cosine similarity.",
      "Reciprocal Rank Fusion (RRF) allows disparate scoring systems to be combined without fragile score normalization.",
      "Optimal document chunking must preserve semantic boundaries (paragraphs, sections) rather than cutting text at arbitrary character limits."
    ],
    entities: [
      "Vector Embeddings",
      "BM25 Retrieval Function",
      "Hybrid Search",
      "Reciprocal Rank Fusion",
      "Cosine Similarity",
      "Dense Passage Retrieval"
    ],
    sources: [
      {
        title: "The Probabilistic Relevance Framework: BM25 and Beyond",
        publisher: "Foundations and Trends in Information Retrieval",
        url: "https://www.staff.city.ac.uk/~sb317/papers/foundations_bm25_review.pdf",
        author: "Robertson, S. & Zaragoza, H.",
        publishedDate: "2009",
        accessedDate: "December 2025"
      },
      {
        title: "Reciprocal Rank Fusion outperforms Condorcet and individual Rank SVM in academic search",
        publisher: "SIGIR '09 Proceedings",
        url: "https://dl.acm.org/doi/10.1145/1571941.1572114",
        author: "Cormack, G. V. et al.",
        publishedDate: "July 2009",
        accessedDate: "January 2026"
      }
    ],
    faqs: [
      {
        question: "Why can't vector search completely replace keyword search?",
        answer: "Vector search compresses text into continuous mathematical vectors. While this captures synonyms and abstract concepts, it loses exact string precision. For queries containing specific product codes, API function names, or unique proper nouns, BM25 keyword matching remains vastly superior."
      },
      {
        question: "What is Reciprocal Rank Fusion (RRF)?",
        answer: "RRF is an algorithm that combines ranked result lists from multiple retrieval systems (e.g., BM25 and vector cosine similarity) by assigning a score based on each item's reciprocal rank (1 / (k + rank)), avoiding the need to calibrate wildly different raw score distributions."
      }
    ],
    headings: [
      { id: "limits-of-lexical-matching", text: "The Limitations of Pure Lexical Matching", level: 2 },
      { id: "vector-embeddings-explained", text: "How High-Dimensional Vector Embeddings Work", level: 2 },
      { id: "the-hybrid-architecture", text: "The Hybrid Retrieval Architecture", level: 2 },
      { id: "chunking-strategies", text: "Context-Aware Chunking Strategies", level: 3 },
      { id: "production-considerations", text: "Production Benchmarks and Latency Constraints", level: 2 }
    ],
    contentHtml: `
      <section id="limits-of-lexical-matching">
        <h2>The Limitations of Pure Lexical Matching</h2>
        <p>Standard search systems rely on inverted indices populated by tokenized text. Algorithms like BM25 score documents by term frequency (how often a term appears in a document) penalized by document length and inverse document frequency (how common the term is across the entire corpus).</p>
        <p>While BM25 is computationally efficient and exceptionally good at finding exact terms, it possesses zero semantic awareness. If a user queries for <em>"how to fix layout shift on page load"</em>, a purely lexical engine might fail to match an authoritative article discussing <em>"mitigating Cumulative Layout Shift (CLS) through aspect-ratio CSS"</em> unless the author happened to repeat the exact colloquial phrasing.</p>
      </section>

      <section id="vector-embeddings-explained">
        <h2>How High-Dimensional Vector Embeddings Work</h2>
        <p>Embedding models map textual segments into continuous dense vectors in $\mathbb{R}^d$ space (often 768 or 1536 dimensions). In this geometric landscape, textual segments with similar semantic connotations are placed in close proximity, measured via cosine similarity or dot product:</p>
        
        <div class="code-block-container">
          <div class="code-block-header">
            <span>Cosine Similarity Formula</span>
          </div>
          <pre><code>$$\text{Cosine Similarity}(u, v) = \frac{u \cdot v}{\|u\|_2 \|v\|_2} = \frac{\sum_{i=1}^{n} u_i v_i}{\sqrt{\sum_{i=1}^{n} u_i^2} \sqrt{\sum_{i=1}^{n} v_i^2}}$$</code></pre>
        </div>
        <p>This allows an inquiry about "fast web design" to naturally retrieve documents discussing "Core Web Vitals optimization" and "minimal DOM complexity" without requiring manual synonym dictionaries.</p>
      </section>

      <section id="the-hybrid-architecture">
        <h2>The Hybrid Retrieval Architecture</h2>
        <p>The industry consensus for high-signal retrieval is <strong>Hybrid Search</strong>. A user query is simultaneously dispatched to two engines:</p>
        <ul class="editorial-list">
          <li><strong>Sparse Retrieval (BM25):</strong> Captures exact identifiers, jargon, code signatures, and proper nouns.</li>
          <li><strong>Dense Retrieval (Embeddings):</strong> Captures user intent, synonyms, and high-level conceptual questions.</li>
        </ul>
        <p>The resulting candidate lists are merged using Reciprocal Rank Fusion (RRF):</p>
        <div class="code-block-container">
          <div class="code-block-header">
            <span>Reciprocal Rank Fusion Implementation</span>
          </div>
          <pre><code>function calculateRRF(bm25Ranks, vectorRanks, k = 60) {
  const mergedScores = new Map();
  
  for (const [docId, rank] of bm25Ranks.entries()) {
    mergedScores.set(docId, (mergedScores.get(docId) || 0) + (1 / (k + rank)));
  }
  
  for (const [docId, rank] of vectorRanks.entries()) {
    mergedScores.set(docId, (mergedScores.get(docId) || 0) + (1 / (k + rank)));
  }
  
  return Array.from(mergedScores.entries()).sort((a, b) => b[1] - a[1]);
}</code></pre>
        </div>
      </section>

      <section id="chunking-strategies">
        <h3>Context-Aware Chunking Strategies</h3>
        <p>A frequent mistake in RAG and search pipelines is splitting documents blindly by fixed character counts (e.g., cutting every 500 characters). This fragments sentences, destroys code snippets, and strips headers of their contextual children.</p>
        <p>Instead, technical publications must apply <strong>hierarchical semantic chunking</strong>, respecting HTML section boundaries, heading tags (<code>H2</code>, <code>H3</code>), and complete list items. Each chunk should carry its parent article title and category metadata as context prefixes.</p>
      </section>

      <section id="production-considerations">
        <h2>Production Benchmarks and Latency Constraints</h2>
        <p>For an editorial knowledge base with hundreds or thousands of articles, search must operate under 50 milliseconds to maintain an immediate, responsive feel. By indexing pre-computed article vectors and using lightweight client-side or edge similarity scoring, users can explore deep thematic relationships with zero external API latency.</p>
      </section>
    `,
    seo: {
      metaTitle: "Engineering Semantic Search & Hybrid BM25 Retrieval | Srijan Prasad",
      metaDescription: "An architectural guide to building semantic search engines combining dense vector embeddings and BM25 lexical retrieval.",
      robots: "index, follow"
    }
  },
  {
    id: "art-pkm-second-brain",
    slug: "building-resilient-second-brains-personal-knowledge-architecture",
    title: "Building Resilient Second Brains: Information Architecture for Personal Knowledge",
    dek: "How to design an enduring personal knowledge graph using atomic notes, bidirectional linking, and digital gardening principles.",
    categorySlug: "knowledge-management",
    topicSlugs: ["personal-knowledge-systems", "editorial-systems"],
    authorId: "author-srijan-prasad",
    publishedAt: "2025-10-05T08:30:00Z",
    updatedAt: "2026-01-04T12:00:00Z",
    readingTimeMinutes: 6,
    featuredImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
    featuredImageAlt: "A calm, organized editorial desk with books, notebook, and digital device",
    isFeatured: false,
    isPopular: true,
    aeoDirectAnswer: "A resilient second brain is a decentralized personal information architecture that captures, connects, and synthesizes thoughts using atomic notes and bidirectional links rather than rigid hierarchical folders. By treating notes as living knowledge assets (a 'digital garden') that evolve over time, knowledge workers compound their intellectual output and eliminate intellectual dead ends.",
    keyTakeaways: [
      "Rigid folder hierarchies create cognitive friction and cause notes to be forgotten over time.",
      "Atomic notes focus on a single conceptual idea, making them infinitely recombineable into larger essays.",
      "Bidirectional links reveal unexpected cross-disciplinary connections between disparate domains.",
      "A public knowledge base acts as a digital garden, inviting readers into an active thinking process."
    ],
    entities: [
      "Personal Knowledge Management (PKM)",
      "Zettelkasten Method",
      "Digital Garden",
      "Bidirectional Linking",
      "Niklas Luhmann",
      "Progressive Summarization"
    ],
    sources: [
      {
        title: "Communicating with Slip Boxes: An Empirical Account",
        publisher: "Universitas",
        url: "https://sociologica.unibo.it/article/view/10044",
        author: "Luhmann, Niklas",
        publishedDate: "1981",
        accessedDate: "November 2025"
      },
      {
        title: "How to Take Smart Notes",
        publisher: "Sönke Ahrens Publishing",
        url: "https://takesmartnotes.com/",
        author: "Ahrens, Sönke",
        publishedDate: "2017",
        accessedDate: "December 2025"
      }
    ],
    faqs: [
      {
        question: "What is the difference between a traditional blog and a digital garden?",
        answer: "A traditional blog presents polished, chronological publications where older articles sink into obscurity. A digital garden presents an interconnected, non-linear web of thoughts and essays with explicit maturity states (seedling, budding, evergreen) that are continuously updated as thinking evolves."
      },
      {
        question: "Why should notes be 'atomic'?",
        answer: "Atomic notes isolate a single concept or thesis. By preventing a note from becoming an unfocused collection of disparate topics, you can link, reference, and recombine that specific thought into multiple future essays and technical analyses without duplicating content."
      }
    ],
    headings: [
      { id: "the-folder-fallacy", text: "The Folder Fallacy and Hierarchical Rot", level: 2 },
      { id: "atomic-notes-and-zettelkasten", text: "Atomic Notes: The Building Blocks of Synthesis", level: 2 },
      { id: "bidirectional-graphs", text: "Bidirectional Linking as a Cognitive Engine", level: 2 },
      { id: "digital-gardens", text: "From Static Archives to Living Digital Gardens", level: 2 }
    ],
    contentHtml: `
      <section id="the-folder-fallacy">
        <h2>The Folder Fallacy and Hierarchical Rot</h2>
        <p>Most individuals organize digital documents the same way people sorted paper in 1970: nested within hierarchical folders. We create a directory named <code>/Artificial-Intelligence/Search/Architecture</code> and file our notes inside.</p>
        <p>This taxonomy breaks down almost immediately. What happens when an article discusses both artificial intelligence, cognitive psychology, and database indexing? Forcing an idea into a single taxonomic silo cuts off its organic connections to adjacent disciplines. The note becomes buried, out of sight and out of mind.</p>
      </section>

      <section id="atomic-notes-and-zettelkasten">
        <h2>Atomic Notes: The Building Blocks of Synthesis</h2>
        <p>Sociologist Niklas Luhmann achieved legendary productivity—publishing more than 70 books and 400 academic papers—using an analogue slip-box system known as the <em>Zettelkasten</em>. The fundamental rule was simplicity itself: <strong>one note per card, containing one cohesive idea, expressed in one's own words.</strong></p>
        <p>When notes are kept atomic, they act like Lego bricks. Rather than staring at a terrifying blank screen when writing an extensive piece, you assemble pre-validated, atomic arguments into a structured outline.</p>
        
        <div class="editorial-callout quote">
          <p>“One cannot think without writing; at least not in any sophisticated, networked manner.” — Niklas Luhmann</p>
        </div>
      </section>

      <section id="bidirectional-graphs">
        <h2>Bidirectional Linking as a Cognitive Engine</h2>
        <p>Modern personal knowledge platforms leverage bidirectional hyperlinks (wikilinks). When Document A links to Document B, Document B automatically registers a backlink to Document A. Over months of consistent writing, this simple mechanism transforms an unstructured repository of notes into an organic, queryable knowledge graph.</p>
        <p>This mirrors how human associative memory operates: thoughts do not exist in isolation, but trigger related insights across contextual bridges.</p>
      </section>

      <section id="digital-gardens">
        <h2>From Static Archives to Living Digital Gardens</h2>
        <p>Publishing your knowledge base publicly creates what the web community terms a <strong>Digital Garden</strong>. Unlike traditional blogs that celebrate finality, a digital garden is transparent about ideas being works-in-progress.</p>
        <p>By making the author's topical taxonomy, entity relationships, and source references publicly accessible, readers can trace the provenance of every argument and witness the evolution of deep intellectual work.</p>
      </section>
    `,
    seo: {
      metaTitle: "Building Resilient Second Brains: Knowledge Architecture | Srijan Prasad",
      metaDescription: "Explore information architecture for personal knowledge management, atomic notes, Zettelkasten systems, and digital gardening.",
      robots: "index, follow"
    }
  },
  {
    id: "art-core-web-vitals",
    slug: "modern-web-performance-core-web-vitals-inp-lcp",
    title: "Mastering Core Web Vitals: Eliminating Layout Shifts and Interaction Latency (INP)",
    dek: "A hands-on engineering guide to mastering Interaction to Next Paint (INP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS).",
    categorySlug: "systems-engineering",
    topicSlugs: ["core-web-vitals", "editorial-systems"],
    authorId: "author-srijan-prasad",
    publishedAt: "2025-11-12T10:00:00Z",
    updatedAt: "2026-02-01T15:20:00Z",
    readingTimeMinutes: 7,
    featuredImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80",
    featuredImageAlt: "High performance code editor and digital metric displays",
    isFeatured: false,
    isPopular: false,
    aeoDirectAnswer: "Core Web Vitals are standardized performance metrics developed by Google to measure real-world user experience across three dimensions: loading speed (Largest Contentful Paint, under 2.5s), visual stability (Cumulative Layout Shift, under 0.1), and interactive responsiveness (Interaction to Next Paint, under 200ms). Eliminating long JavaScript tasks and reserving layout dimensions natively are key to meeting all thresholds.",
    keyTakeaways: [
      "Interaction to Next Paint (INP) replaced FID, evaluating the latency of every user tap, click, or keypress throughout the entire page lifecycle.",
      "Cumulative Layout Shift (CLS) is almost always caused by unsized images, dynamically injected web fonts, or late-rendering ad banners.",
      "Clean Vanilla CSS with modern custom properties renders significantly faster than heavyweight CSS-in-JS runtimes.",
      "Optimizing Largest Contentful Paint (LCP) requires server-rendering the primary editorial heading and preloading critical hero imagery."
    ],
    entities: [
      "Core Web Vitals",
      "Interaction to Next Paint (INP)",
      "Largest Contentful Paint (LCP)",
      "Cumulative Layout Shift (CLS)",
      "Main Thread Optimization",
      "Web Vitals API"
    ],
    sources: [
      {
        title: "Interaction to Next Paint (INP) Specification",
        publisher: "web.dev / Google Chrome Team",
        url: "https://web.dev/articles/inp",
        author: "Chrome Web Vitals Team",
        publishedDate: "May 2023",
        accessedDate: "January 2026"
      },
      {
        title: "Optimizing Largest Contentful Paint",
        publisher: "Google Developer Documentation",
        url: "https://web.dev/articles/optimize-lcp",
        author: "Walton, Philip",
        publishedDate: "Updated 2024",
        accessedDate: "January 2026"
      }
    ],
    faqs: [
      {
        question: "What is an acceptable INP score?",
        answer: "A good INP score is 200 milliseconds or less at the 75th percentile of real-world user interactions. Scores between 200ms and 500ms need improvement, while scores exceeding 500ms are classified as poor."
      },
      {
        question: "How do you prevent font swaps from causing CLS?",
        answer: "Use CSS `font-display: swap` combined with font fallback metric overrides (`size-adjust`, `ascent-override`, and `descent-override`) or preload your primary font file in the `<head>` to minimize layout shift when web fonts finish downloading."
      }
    ],
    headings: [
      { id: "understanding-inp", text: "Deconstructing Interaction to Next Paint (INP)", level: 2 },
      { id: "lcp-optimization", text: "Accelerating Largest Contentful Paint (LCP)", level: 2 },
      { id: "taming-layout-shifts", text: "Taming Cumulative Layout Shift (CLS)", level: 2 },
      { id: "vanilla-css-advantage", text: "The Vanilla CSS Performance Advantage", level: 3 }
    ],
    contentHtml: `
      <section id="understanding-inp">
        <h2>Deconstructing Interaction to Next Paint (INP)</h2>
        <p>In March 2024, Google formally promoted Interaction to Next Paint (INP) to a Core Web Vital, replacing the obsolete First Input Delay (FID). While FID only measured the delay of the user's very first interaction, INP tracks the latency of <strong>every single interaction</strong>—clicks, taps, keyboard presses—across the user's entire session.</p>
        <p>INP measures the duration from when a user interacts to the precise frame when the browser paints visual feedback:</p>
        <div class="code-block-container">
          <div class="code-block-header">
            <span>INP Breakdown</span>
          </div>
          <pre><code>INP = Input Delay (waiting for main thread)
    + Processing Duration (executing event callbacks)
    + Presentation Delay (layout, styling, composition, and screen paint)</code></pre>
        </div>
        <p>If your website attaches heavy JavaScript loops to scroll or input listeners, the main thread locks up, causing the interface to feel sluggish or unresponsive.</p>
      </section>

      <section id="lcp-optimization">
        <h2>Accelerating Largest Contentful Paint (LCP)</h2>
        <p>Largest Contentful Paint measures how quickly the primary content element—typically the article's H1 or hero image—is rendered on screen. To achieve an LCP of under 1.8 seconds:</p>
        <ul class="editorial-list">
          <li><strong>Server-Side Render (SSR) the Main Heading:</strong> Deliver the article text in the initial HTTP payload so the browser does not wait for client JavaScript bundles to download before showing text.</li>
          <li><strong>Avoid Lazy-Loading Above-the-Fold Images:</strong> Never place <code>loading="lazy"</code> on the featured hero image. Priority hero assets should be declared with <code>fetchpriority="high"</code>.</li>
        </ul>
      </section>

      <section id="taming-layout-shifts">
        <h2>Taming Cumulative Layout Shift (CLS)</h2>
        <p>There are few web experiences more irritating than attempting to click a link, only for the text to jump unexpectedly under your thumb because an image or banner just loaded above it.</p>
        <p>CLS must be maintained below 0.1. The solution is straightforward: <strong>always reserve aspect ratios in CSS</strong>:</p>
        <div class="code-block-container">
          <div class="code-block-header">
            <span>CSS Aspect Ratio Reservation</span>
          </div>
          <pre><code>.article-featured-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background-color: var(--color-surface-subtle);
}</code></pre>
        </div>
      </section>

      <section id="vanilla-css-advantage">
        <h3>The Vanilla CSS Performance Advantage</h3>
        <p>Modern CSS features—such as CSS custom properties (variables), native nesting, container queries, and subgrid—provide everything needed for responsive, premium design systems. Eliminating heavy CSS-in-JS runtimes ensures zero JavaScript parse overhead for styling, keeping the main thread free for swift user interactions.</p>
      </section>
    `,
    seo: {
      metaTitle: "Mastering Core Web Vitals: INP, LCP, CLS | Srijan Prasad",
      metaDescription: "Detailed engineering techniques to achieve perfect Core Web Vitals scores, focusing on Interaction to Next Paint and visual stability.",
      robots: "index, follow"
    }
  },
  {
    id: "art-high-signal-editorial",
    slug: "anatomy-of-high-signal-publishing-editorial-standards-ai-era",
    title: "The Anatomy of High-Signal Publishing: Editorial Standards in the Era of Synthetic Content",
    dek: "Why information gain, rigorous provenance, and deep structural clarity are the only enduring moats for digital writers.",
    categorySlug: "content-strategy",
    topicSlugs: ["editorial-systems", "generative-engine-optimization"],
    authorId: "author-srijan-prasad",
    publishedAt: "2025-12-08T09:45:00Z",
    updatedAt: "2026-02-14T11:00:00Z",
    readingTimeMinutes: 6,
    featuredImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1400&q=80",
    featuredImageAlt: "Open vintage hardcover books stacked in an academic library setting",
    isFeatured: false,
    isPopular: true,
    aeoDirectAnswer: "High-signal publishing is the discipline of creating digital content with high information gain, verifiable provenance, and zero rhetorical filler. In an era where generative AI floods the internet with superficial summaries, publications achieve distinction and authority by documenting firsthand technical experience, primary research citations, and original conceptual frameworks.",
    keyTakeaways: [
      "Search algorithms and AI systems increasingly measure 'information gain'—the unique delta of knowledge a document provides over existing web corpora.",
      "Synthetic filler and keyword-stuffed prose are rapidly devalued by both human readers and search crawlers.",
      "Clear typographic hierarchy and scannable visual anchors respect reader cognitive bandwidth.",
      "Transparent source citations and author entity linking establish authentic authority that cannot be faked."
    ],
    entities: [
      "Information Gain",
      "Editorial Integrity",
      "Synthetic Media",
      "Source Attribution",
      "Digital Publishing Ethics",
      "Schema.org Entity Disambiguation"
    ],
    sources: [
      {
        title: "Information Gain Scores for Web Document Retrieval",
        publisher: "US Patent Office / Google Research",
        url: "https://patents.google.com/patent/US10592594B2/en",
        author: "Google LLC",
        publishedDate: "March 2020",
        accessedDate: "January 2026"
      },
      {
        title: "The Trust Project: 8 Indicators of Editorial Quality",
        publisher: "The Trust Project Consortium",
        url: "https://thetrustproject.org/",
        author: "Trust Project Standards Committee",
        publishedDate: "2022",
        accessedDate: "February 2026"
      }
    ],
    faqs: [
      {
        question: "What is an Information Gain score in search patents?",
        answer: "Google's Information Gain patent describes a mechanism where a user's search session tracks what information they have already consumed. Search engines then prioritize subsequent documents that provide novel, non-redundant insights that were missing from the previously viewed pages."
      },
      {
        question: "How can individual creators compete with automated content farms?",
        answer: "Automated content farms can only recycle existing web correlations. Independent creators stand out by sharing firsthand experiments, original architectural diagrams, verifiable benchmarks, contrarian perspectives backed by evidence, and direct personal accountability."
      }
    ],
    headings: [
      { id: "the-glut-of-synthetic-text", text: "The Infinite Glut of Synthetic Text", level: 2 },
      { id: "understanding-information-gain", text: "Information Gain as the New Quality Metric", level: 2 },
      { id: "the-editorial-contract", text: "The Editorial Contract with the Reader", level: 2 },
      { id: "the-future-of-personal-publication", text: "The Future of the Personal Knowledge Publication", level: 2 }
    ],
    contentHtml: `
      <section id="the-glut-of-synthetic-text">
        <h2>The Infinite Glut of Synthetic Text</h2>
        <p>The marginal cost of generating grammatically fluent text has dropped to zero. Any prompt can output thousands of words on virtually any topic in seconds. The consequence is an internet drowning in generic, circular summaries that consume reading time without delivering genuine understanding.</p>
        <p>In this landscape, verbosity is a liability. Readers and intelligent search engines alike seek <strong>signal</strong>: dense, distilled insight that respects their attention and advances their comprehension.</p>
      </section>

      <section id="understanding-information-gain">
        <h2>Information Gain as the New Quality Metric</h2>
        <p>Search engines are rapidly transitioning to information-gain scoring models. If ten articles on the web repeat the identical five bullet points about a topic, the eleventh article that merely rephrases those same points has an information gain score approaching zero.</p>
        <p>To produce high-signal content, an author must ask:</p>
        <ul class="editorial-list">
          <li>What counter-intuitive reality did our firsthand tests reveal?</li>
          <li>What specific code snippet or metric proves this assertion?</li>
          <li>What primary source or whitepaper originated this principle?</li>
        </ul>
      </section>

      <section id="the-editorial-contract">
        <h2>The Editorial Contract with the Reader</h2>
        <p>A personal publication is not a billboard; it is an ongoing intellectual conversation. Respecting that relationship requires clear editorial rules:</p>
        <ol class="editorial-list">
          <li><strong>No fabricated claims:</strong> Never claim benchmarks, credentials, or statistics without an explicit, verifiable source citation.</li>
          <li><strong>Honest author identity:</strong> Make author provenance transparent and maintain verified links to public channels (including GitHub at <code>https://github.com/Srijanprasad</code>, X at <code>https://x.com/Ushan_0</code>, Instagram at <code>https://www.instagram.com/srijanprasad_/</code>, and direct email at <code>srijanprasad2006@gmail.com</code>).</li>
          <li><strong>Accessible typography:</strong> Deliver high-contrast, comfortable line heights and responsive layouts so reading feels calm and engaging across any viewport.</li>
        </ol>
      </section>

      <section id="the-future-of-personal-publication">
        <h2>The Future of the Personal Knowledge Publication</h2>
        <p>The future of digital publishing does not belong to generic content portals. It belongs to curated personal knowledge platforms: spaces where a single author methodically organizes their research, maps topics into coherent entity clusters, and invites both human thinkers and intelligent search engines into a well-crafted garden of ideas.</p>
      </section>
    `,
    seo: {
      metaTitle: "Anatomy of High-Signal Publishing | Srijan Prasad",
      metaDescription: "Why information gain, verifiable provenance, and structural clarity are essential for editorial authority in the AI era.",
      robots: "index, follow"
    }
  },
  {
    id: "art-wordcamp-bhopal-2025",
    slug: "my-first-experience-as-a-volunteer-at-wordcamp-bhopal-2025",
    title: "My First Experience as a Volunteer at WordCamp Bhopal 2025",
    dek: "Some experiences stay with you because of what you do. Others stay with you because of the people you meet along the way. Reflections on seeing WordCamp from the other side as a volunteer and contributor.",
    categorySlug: "systems-engineering",
    topicSlugs: ["editorial-systems", "personal-knowledge-systems"],
    authorId: "author-srijan-prasad",
    publishedAt: "2025-02-28T09:00:00Z",
    updatedAt: "2025-03-03T11:00:00Z",
    readingTimeMinutes: 6,
    featuredImage: "/wordcamp-bhopal-2025-group-photo.jpg",
    featuredImageAlt: "WordCamp Bhopal 2025 Community Group Photo with Organizers, Speakers, Volunteers and Attendees",
    isFeatured: true,
    isPopular: true,
    aeoDirectAnswer: "WordCamp Bhopal 2025 marked Srijan Prasad's first time contributing as a core volunteer and Pattern Table Lead, following his 2023 session as a speaker on WordPress Security. Experiencing the event from behind the scenes highlighted the true essence of open source: that community success relies on quiet coordination, shared trust, and many individuals doing small things well rather than the stage or spectacle alone.",
    keyTakeaways: [
      "Volunteering offers a fundamentally different vantage point: you aren't just attending the sessions, you are helping build the environment.",
      "Community events succeed through a balance of visible work (stage, schedule) and invisible work (coordination, hospitality, problem solving).",
      "Open source contribution extends far beyond writing code or giving talks; it includes giving time, welcoming newcomers, and showing up.",
      "The full-resolution WordCamp Bhopal 2025 group photo is archived and accessible on Google Drive."
    ],
    entities: [
      "WordCamp Bhopal",
      "Open Source Community",
      "WordPress Volunteers",
      "Full Site Editing (FSE)",
      "WordPress Block Patterns",
      "WordPress Bhopal",
      "WPKolhapur"
    ],
    sources: [
      {
        title: "WordCamp Bhopal 2025 Official Group Photo Archive",
        publisher: "Google Drive High-Resolution Archive",
        url: "https://drive.google.com/file/d/1-7_nshsf0iD2U-oKy0Nf57AvDbWhNUP5/view?usp=drive_link",
        author: "WordCamp Bhopal Media & Photography Team",
        publishedDate: "February 2025",
        accessedDate: "March 2025"
      },
      {
        title: "WordPress Bhopal Community Organization",
        publisher: "LinkedIn Community Organization",
        url: "https://www.linkedin.com/company/wordpress-bhopal/",
        author: "WordPress Bhopal Chapter",
        publishedDate: "2025",
        accessedDate: "March 2025"
      },
      {
        title: "WordPress Community Guidelines and Contributor Day Handbooks",
        publisher: "WordPress.org Community Team",
        url: "https://make.wordpress.org/community/",
        author: "WordPress Foundation",
        publishedDate: "2024",
        accessedDate: "February 2025"
      }
    ],
    faqs: [
      {
        question: "What was Srijan Prasad's experience volunteering at WordCamp Bhopal 2025?",
        answer: "WordCamp Bhopal 2025 was Srijan Prasad's first time contributing as a volunteer and Pattern Table Lead. After speaking at WordCamp Bhopal in 2023, he chose to experience the event from behind the scenes, helping with attendee guidance, hands-on FSE pattern workshops, coordination, and community building."
      },
      {
        question: "Who was on the WordCamp Bhopal 2025 volunteer team?",
        answer: "The volunteer team included Krishika Verma, Sanskriti Malviya, Pramanya Rajput, Taufiq Lohar, Srijan Prasad, Suhas Sutar, Chandra Prakash Ojha, Yash, Jaya Muvania, Roshni Rajani, Prathamesh Palve, and silent supporter Astha J."
      },
      {
        question: "Where can attendees access the official WordCamp Bhopal 2025 group photo?",
        answer: "The full-resolution photograph is available for viewing and download via Google Drive at: https://drive.google.com/file/d/1-7_nshsf0iD2U-oKy0Nf57AvDbWhNUP5/view?usp=drive_link."
      }
    ],
    headings: [
      { id: "seeing-wordcamp-from-the-other-side", text: "Seeing WordCamp from the Other Side", level: 2 },
      { id: "my-first-volunteer-experience", text: "My First Volunteer Experience", level: 2 },
      { id: "the-people-made-the-experience", text: "The People Made the Experience", level: 2 },
      { id: "the-volunteer-team", text: "The Volunteer Team: Visible and Invisible Work", level: 2 },
      { id: "the-organizers-speakers-and-everyone", text: "The Organizers, Speakers, and Everyone Who Made It Happen", level: 2 },
      { id: "what-i-learned", text: "What I Learned About Community", level: 2 },
      { id: "a-different-kind-of-contribution", text: "A Different Kind of Contribution", level: 2 },
      { id: "the-memories-ill-take-with-me", text: "The Memories I'll Take With Me", level: 2 },
      { id: "thank-you-wordcamp-bhopal", text: "Thank You, WordCamp Bhopal 💙", level: 2 },
      { id: "wordcamp-bhopal-2025-group-photo", text: "WordCamp Bhopal 2025 — Group Photo & Download", level: 2 }
    ],
    contentHtml: `
      <section id="introduction">
        <p>Some experiences stay with you because of what you do.</p>
        <p>Others stay with you because of the people you meet along the way.</p>
        <p><strong>WordCamp Bhopal 2025 was one of those experiences for me.</strong></p>
        <p>This was my first time contributing to WordCamp Bhopal as a volunteer, and it gave me a completely different perspective on what goes into making a community event happen. I had attended WordCamp before—and back in 2023, I had the opportunity to speak at WordCamp Bhopal on WordPress Security &amp; Cleanup—but being part of the team behind the event was different. You don't just show up for the sessions. You become part of everything happening around them.</p>
      </section>

      <section id="seeing-wordcamp-from-the-other-side">
        <h2>Seeing WordCamp from the Other Side</h2>
        <p>As an attendee, it's easy to see the stage, the speakers, the sessions, the activities, and the excitement around the event.</p>
        <p>As a volunteer, you start noticing everything else:</p>
        <ul class="editorial-list">
          <li>The coordination.</li>
          <li>The small decisions.</li>
          <li>The last-minute changes.</li>
          <li>The people quietly making sure things keep moving.</li>
        </ul>
        <p>There are plenty of things attendees may never notice — and that's probably a good thing. It means the volunteers are doing their job.</p>
        <p>For me, that was one of the most interesting parts of the experience. I got to see how much effort goes into creating an environment where everyone else can simply participate, learn, meet people, and enjoy the event.</p>
      </section>

      <section id="my-first-volunteer-experience">
        <h2>My First Volunteer Experience</h2>
        <p>Being a volunteer at WordCamp Bhopal 2025 was a learning experience in a very different way. I wasn't there simply to attend sessions. I was contributing to the event and working alongside people who were equally invested in making it a good experience for everyone.</p>
        <p>There was a lot of coordination, communication, and teamwork. And, of course, there were moments where things didn't go exactly according to plan. But that's part of organizing any community event.</p>
        <div class="editorial-callout quote">
          <p>“You figure things out. You help where you can. You move on to the next thing. And somewhere in between all of that, you realize that you're no longer just attending the event. You're helping build it.”</p>
        </div>
        <p>Alongside event operations, I also had the opportunity to lead the <strong>Pattern Table</strong> during Contributor Day, sharing hands-on knowledge around Full Site Editing (FSE) and WordPress Pattern creation with creators and developers.</p>
      </section>

      <section id="the-people-made-the-experience">
        <h2>The People Made the Experience</h2>
        <p>The biggest takeaway for me wasn't any particular task. <strong>It was the people.</strong></p>
        <p>From organizers and speakers to fellow volunteers and attendees, there was a sense of openness that made it easy to get involved. Everyone brought something different:</p>
        <ul class="editorial-list">
          <li>Some had years of WordPress experience.</li>
          <li>Some were contributing to the community for the first time.</li>
          <li>Some were speakers, organizers, or volunteers.</li>
        </ul>
        <p>But during those days, everyone was part of the same community. That's something I really appreciate about WordPress. You can meet someone for the first time and still end up having a meaningful conversation about something you're both interested in.</p>
      </section>

      <section id="the-volunteer-team">
        <h2>The Volunteer Team: Visible and Invisible Work</h2>
        <p>A big thank you to the people I had the opportunity to work alongside:</p>
        <p>
          <a href="https://www.linkedin.com/in/krishika-verma-309016265/" target="_blank" rel="noopener noreferrer" class="source-link">Krishika</a>, 
          <a href="https://www.linkedin.com/in/sanskriti-malviya-697a5828b/" target="_blank" rel="noopener noreferrer" class="source-link">Sanskriti</a>, 
          <a href="https://www.linkedin.com/in/pramanya-rajput/" target="_blank" rel="noopener noreferrer" class="source-link">Pramanya</a>, 
          <a href="https://www.linkedin.com/in/taufiq-lohar-3023ab344/" target="_blank" rel="noopener noreferrer" class="source-link">Taufiq</a>, 
          <a href="https://www.linkedin.com/in/srijan-prasad-/" target="_blank" rel="noopener noreferrer" class="source-link">Srijan</a>, 
          <a href="https://www.linkedin.com/in/suhas-sutar-68b907236/" target="_blank" rel="noopener noreferrer" class="source-link">Suhas</a>, 
          <a href="https://www.linkedin.com/in/cpojha17/" target="_blank" rel="noopener noreferrer" class="source-link">Chandra Prakash</a>, 
          <a href="https://www.linkedin.com/in/yashblog/" target="_blank" rel="noopener noreferrer" class="source-link">Yash</a>, 
          <a href="https://www.linkedin.com/in/jaya-muvania/" target="_blank" rel="noopener noreferrer" class="source-link">Jaya</a>, 
          <a href="https://www.linkedin.com/in/roshni-rajani/" target="_blank" rel="noopener noreferrer" class="source-link">Roshni</a>, and 
          <a href="https://www.linkedin.com/in/prathamesh-palve/" target="_blank" rel="noopener noreferrer" class="source-link">Prathamesh</a>. 
          And a special mention to <a href="https://www.linkedin.com/in/iastha/" target="_blank" rel="noopener noreferrer" class="source-link">Astha J.</a>, one of the quiet supporters behind the scenes.
        </p>
        <p>There is a lot of visible work at an event. But there is also a lot of invisible work. Both matter.</p>
      </section>

      <section id="the-organizers-speakers-and-everyone">
        <h2>The Organizers, Speakers, and Everyone Who Made It Happen</h2>
        <p>A community event doesn't come together because of one person. It takes organizers, speakers, volunteers, sponsors, attendees, and many people working behind the scenes.</p>
        
        <h3>The Organizing Team</h3>
        <p>I'm grateful to the organizing team:</p>
        <p>
          <a href="https://www.linkedin.com/in/kripeshadwani/" target="_blank" rel="noopener noreferrer" class="source-link">Kripesh</a>, 
          <a href="https://www.linkedin.com/in/shashank-jain1/" target="_blank" rel="noopener noreferrer" class="source-link">Shashank</a>, 
          <a href="https://www.linkedin.com/in/kapilaryamvp/" target="_blank" rel="noopener noreferrer" class="source-link">Kapil</a>, 
          <a href="https://www.linkedin.com/in/ishita-agrawal-a37687210/" target="_blank" rel="noopener noreferrer" class="source-link">Ishita</a>, 
          <a href="https://www.linkedin.com/in/amit-vishwakarma-av7999/" target="_blank" rel="noopener noreferrer" class="source-link">Amit</a>, 
          <a href="https://www.linkedin.com/in/shivammishra-styx/" target="_blank" rel="noopener noreferrer" class="source-link">Shivam</a>, 
          <a href="https://www.linkedin.com/in/atishara-shrivastava-iimv/" target="_blank" rel="noopener noreferrer" class="source-link">Atishara</a>, and 
          <a href="https://www.linkedin.com/in/ethicaladitya/" target="_blank" rel="noopener noreferrer" class="source-link">Aditya Shah</a>. 
          Thank you for creating the space and giving volunteers like me the opportunity to be part of it.
        </p>

        <h3>The Speakers</h3>
        <p>And thank you to all the speakers who shared their knowledge with the community:</p>
        <p>
          <a href="https://www.linkedin.com/in/hiabhaykulkarni/" target="_blank" rel="noopener noreferrer" class="source-link">Abhay</a>, 
          <a href="https://www.linkedin.com/in/theadityavikram/" target="_blank" rel="noopener noreferrer" class="source-link">Aditya</a>, 
          <a href="https://www.linkedin.com/in/heyakshat/" target="_blank" rel="noopener noreferrer" class="source-link">Akshat</a>, 
          <a href="https://www.linkedin.com/in/teamamittiwari/" target="_blank" rel="noopener noreferrer" class="source-link">Amit</a>, 
          <a href="https://www.linkedin.com/in/damini-tripathi-2626101a0/" target="_blank" rel="noopener noreferrer" class="source-link">Damini</a>, 
          <a href="https://www.linkedin.com/in/dr-tabassum-zafar-0468126b/" target="_blank" rel="noopener noreferrer" class="source-link">Dr. Tabassum</a>, 
          <a href="https://www.linkedin.com/in/jinendra-khobare-99003923/" target="_blank" rel="noopener noreferrer" class="source-link">Jinendra</a>, 
          <a href="https://www.linkedin.com/in/naman-deshmukh-941b04267/" target="_blank" rel="noopener noreferrer" class="source-link">Naman</a>, 
          <a href="https://www.linkedin.com/in/priyanka-s-shah/" target="_blank" rel="noopener noreferrer" class="source-link">Priyanka</a>, 
          <a href="https://www.linkedin.com/in/richa-khanna-61537615/" target="_blank" rel="noopener noreferrer" class="source-link">Richa</a>, 
          <a href="https://www.linkedin.com/in/suman-kant-jain-55644994/" target="_blank" rel="noopener noreferrer" class="source-link">Suman Kant</a>, 
          <a href="https://www.linkedin.com/in/saakshichoithani/" target="_blank" rel="noopener noreferrer" class="source-link">Saakshi</a>, 
          <a href="https://www.linkedin.com/in/sakshi-mehta-believeinyourself/" target="_blank" rel="noopener noreferrer" class="source-link">Sakshi</a>, 
          <a href="https://www.linkedin.com/in/sandeshjangam/" target="_blank" rel="noopener noreferrer" class="source-link">Sandesh</a>, and 
          <a href="https://www.linkedin.com/in/sourabhmatolia/" target="_blank" rel="noopener noreferrer" class="source-link">Sourabh</a>. 
          We also missed <a href="https://www.linkedin.com/in/mdshoeb/" target="_blank" rel="noopener noreferrer" class="source-link">Mohammad Shoeb</a>.
        </p>

        <p>And thank you to <a href="https://www.linkedin.com/in/talib-ahmed/" target="_blank" rel="noopener noreferrer" class="source-link">Talib</a> and <a href="https://www.linkedin.com/in/ashishkolarkar/" target="_blank" rel="noopener noreferrer" class="source-link">Ashish</a> for the showcases.</p>
      </section>

      <section id="what-i-learned">
        <h2>What I Learned About Community</h2>
        <p>My biggest learning from volunteering wasn't necessarily technical. It was about community.</p>
        <p>You realize pretty quickly that a successful event isn't built by one person doing everything. It's built by many people doing small things well:</p>
        <ul class="editorial-list">
          <li>Someone coordinates.</li>
          <li>Someone guides attendees.</li>
          <li>Someone helps a speaker.</li>
          <li>Someone handles a problem.</li>
          <li>Someone welcomes a newcomer.</li>
          <li>Someone stays behind when everyone else has left.</li>
        </ul>
        <p>Individually, these things might not seem significant. Together, they make the event work. That's probably what community means to me after this experience.</p>
      </section>

      <section id="a-different-kind-of-contribution">
        <h2>A Different Kind of Contribution</h2>
        <p>I've always liked the idea of contributing to open source and community. But WordCamp Bhopal 2025 gave me a more practical understanding of it.</p>
        <p>Contribution doesn't always have to mean writing code. It doesn't always have to mean speaking on a stage. Sometimes it means giving your time. Sometimes it means helping someone. Sometimes it means doing the small things that allow everyone else to have a better experience. And sometimes, it's simply showing up and being willing to help.</p>
        <p>That was my first experience as a WordCamp volunteer, and I'm glad I said yes.</p>
      </section>

      <section id="the-memories-ill-take-with-me">
        <h2>The Memories I'll Take With Me</h2>
        <p>The event eventually came to an end. The sessions finished. The microphones went quiet. People started heading home.</p>
        <p>But the conversations didn't really end there. The handshakes, conversations, shared laughs, new connections, and small moments throughout the event are the things I'll probably remember most. That's what made WordCamp Bhopal 2025 special for me. Not just the event itself. The people behind it.</p>
      </section>

      <section id="thank-you-wordcamp-bhopal">
        <h2>Thank You, WordCamp Bhopal 💙</h2>
        <p>My first experience as a volunteer at WordCamp Bhopal 2025 was something I genuinely enjoyed. I'm grateful to the entire <a href="https://www.linkedin.com/company/wordpress-bhopal/" target="_blank" rel="noopener noreferrer" class="source-link">WordPress Bhopal community</a> for giving me the opportunity to contribute, learn, and meet so many wonderful people.</p>
        <p>A special thank you to the entire WordCamp Bhopal 2025 team for the hospitality, trust, and experience. And to everyone I met during the event — thank you for making those days memorable.</p>
        <p>This was my first time volunteering at WordCamp. Hopefully, it won't be my last.</p>
        <p><strong>Until the next WordCamp. 🚀</strong></p>
      </section>

      <section id="wordcamp-bhopal-2025-group-photo">
        <h2>WordCamp Bhopal 2025 — Official Group Photo</h2>
        <div style="margin: 30px 0; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-medium); box-shadow: var(--shadow-md);">
          <img
            src="/wordcamp-bhopal-2025-group-photo.jpg"
            alt="WordCamp Bhopal 2025 Community and Team Group Photo"
            style="width: 100%; height: auto; display: block;"
          />
        </div>
        <p style="text-align: center; font-style: italic; color: var(--text-tertiary); font-size: 0.9rem; margin-top: -15px; margin-bottom: 25px;">
          Photo: WordCamp Bhopal 2025 community/team group photo
        </p>

        <div class="editorial-callout info" style="text-align: center; padding: 28px 20px; margin: 30px 0;">
          <span class="callout-label">Official Google Drive Master File</span>
          <h3 style="margin: 4px 0 10px 0; font-size: 1.2rem;">Download High-Resolution Community Photograph</h3>
          <p style="margin-bottom: 18px; color: var(--text-secondary); font-size: 0.95rem;">
            Use the provided Google Drive link below to view or download the full-resolution master photo:
          </p>
          <a
            href="https://drive.google.com/file/d/1-7_nshsf0iD2U-oKy0Nf57AvDbWhNUP5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-lg"
            style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;"
          >
            <span>Open Photo on Google Drive</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </section>
    `,
    seo: {
      metaTitle: "My First Experience as a Volunteer at WordCamp Bhopal 2025 | Srijan Prasad",
      metaDescription: "Srijan Prasad's personal reflections on volunteering at WordCamp Bhopal 2025: seeing the event from the other side, the volunteer team, community lessons, and official group photo.",
      robots: "index, follow"
    }
  },
  {
    id: "art-capgemini-tit-industry-interaction",
    slug: "an-interaction-that-gave-me-a-better-perspective-on-the-industry-capgemini-tit",
    title: "An Interaction That Gave Me a Better Perspective on the Industry: Capgemini × TIT Group of Institutions",
    dek: "Reflections from a final-year CSE student on bridging the gap between academic computer science and enterprise expectations: communication, adaptability, problem-solving, and continuous learning from Capgemini leadership at TIT Group of Institutions.",
    categorySlug: "systems-engineering",
    topicSlugs: ["systems-engineering", "editorial-systems"],
    authorId: "author-srijan-prasad",
    publishedAt: "2025-09-12T10:00:00Z",
    updatedAt: "2025-09-12T10:00:00Z",
    readingTimeMinutes: 4,
    featuredImage: "/capgemini-tit-industry-interaction.jpg",
    featuredImageAlt: "Capgemini Leadership Team interacting with final-year CSE students at TIT Group of Institutions, Bhopal",
    isFeatured: true,
    isPopular: true,
    aeoDirectAnswer: "During an enterprise leadership interaction session between Capgemini and TIT Group of Institutions (Bhopal), final-year Computer Science Engineering students gained critical industry perspectives: modern enterprise engineering values adaptability, cross-functional communication, and foundational problem-solving far above static syntax knowledge. To become truly industry-ready, students must treat learning as an ongoing, iterative discipline as technology continuously evolves.",
    keyTakeaways: [
      "Enterprise engineering expectations transcend specific programming languages or framework trends; companies look for adaptable problem solvers who can navigate evolving tools.",
      "Clear communication and emotional intelligence are core technical superpowers that determine how effectively an engineer collaborates in distributed enterprise teams.",
      "Continuous learning is non-negotiable: graduating engineers must develop the curiosity and discipline to self-upgrade as AI, cloud systems, and paradigms shift.",
      "Direct interactions between corporate leaders and engineering students provide practical roadmaps that academic curricula alone cannot impart.",
      "Srijan Prasad and fellow final-year CSE students received firsthand mentorship from Capgemini leaders Altamash Qureshi, Amit Nayak, Punit Santani, Deevith Rao, and Vaibhav Deshpande at TIT Group of Institutions."
    ],
    entities: [
      "Capgemini",
      "TIT Group of Institutions",
      "Technocrats Group of Institutions",
      "Computer Science and Engineering",
      "Industry Readiness",
      "Software Engineering",
      "Continuous Learning",
      "Problem-Solving",
      "Adaptability",
      "Enterprise Leadership"
    ],
    sources: [
      {
        title: "An Interaction That Gave Me a Better Perspective on the Industry | Capgemini × TIT Group of Institutions",
        publisher: "LinkedIn",
        url: "https://lnkd.in/p/dW4yDf7i",
        author: "Srijan Prasad",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      },
      {
        title: "Capgemini Official Global Community & Corporate Profile",
        publisher: "Capgemini",
        url: "https://www.linkedin.com/company/capgemini/",
        author: "Capgemini Global",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      },
      {
        title: "Technocrats Group of Institutions (TIT Bhopal) Official Profile",
        publisher: "TIT Group of Institutions",
        url: "https://www.linkedin.com/school/technocrats-group-of-institutions-bhopal/",
        author: "TIT Group of Institutions",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      },
      {
        title: "Altamash Qureshi — Capgemini Leadership Profile",
        publisher: "LinkedIn",
        url: "https://www.linkedin.com/in/altamash-qureshi-ba9aa71a/",
        author: "Altamash Qureshi",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      },
      {
        title: "Amit Nayak — Capgemini Leadership Profile",
        publisher: "LinkedIn",
        url: "https://www.linkedin.com/in/amit-nayak-aba747a/",
        author: "Amit Nayak",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      },
      {
        title: "Punit Santani — Capgemini Leadership Profile",
        publisher: "LinkedIn",
        url: "https://www.linkedin.com/in/punit-santani-930bb51/",
        author: "Punit Santani",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      },
      {
        title: "Deevith Rao — Capgemini Leadership Profile",
        publisher: "LinkedIn",
        url: "https://www.linkedin.com/in/deevith-rao/",
        author: "Deevith Rao",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      },
      {
        title: "Vaibhav Deshpande — Capgemini Leadership Profile",
        publisher: "LinkedIn",
        url: "https://www.linkedin.com/in/vaibhavdeshpande01/",
        author: "Vaibhav Deshpande",
        publishedDate: "2025",
        accessedDate: "2026-10-04"
      }
    ],
    faqs: [
      {
        question: "What was the focus of the Capgemini interaction at TIT Group of Institutions?",
        answer: "The session went beyond general technology and recruitment pitches to deliver an authentic perspective on what enterprise engineering teams expect from graduating computer science students: communication, adaptability, problem-solving under ambiguity, and an unshakeable commitment to continuous learning."
      },
      {
        question: "Who from Capgemini took part in mentoring the students?",
        answer: "The interactive panel featured senior leaders Altamash Qureshi, Amit Nayak, Punit Santani, Deevith Rao, and Vaibhav Deshpande, who generously shared their professional journeys and real-world enterprise expectations with students."
      },
      {
        question: "Why are soft skills and adaptability so crucial for modern software engineers?",
        answer: "Because coding syntax and frameworks change rapidly. An engineer who excels at cross-functional communication, questions assumptions, breaks complex problems down methodically, and adapts to new toolchains delivers far greater enterprise impact than someone with narrow, static technical knowledge."
      }
    ],
    headings: [
      { id: "bridging-academic-and-enterprise-realities", text: "Bridging Academic and Enterprise Realities", level: 2 },
      { id: "four-foundations-of-industry-readiness", text: "The Four Foundations of Industry Readiness", level: 2 },
      { id: "gratitude-to-capgemini-leadership", text: "Gratitude to the Capgemini Leadership Team", level: 2 },
      { id: "empowering-students-at-tit", text: "Empowering Students at TIT Group of Institutions", level: 2 },
      { id: "the-road-ahead-final-year-reflection", text: "The Road Ahead: Building an Enduring Mindset", level: 2 },
      { id: "original-linkedin-post-and-discussion", text: "Original LinkedIn Post & Community Discussion", level: 2 }
    ],
    contentHtml: `
      <section id="bridging-academic-and-enterprise-realities">
        <p class="article-lead">
          Today’s interaction with the leadership team from <a href="https://www.linkedin.com/company/capgemini/" target="_blank" rel="noopener noreferrer" class="source-link"><strong>Capgemini</strong></a> at <a href="https://www.linkedin.com/school/technocrats-group-of-institutions-bhopal/" target="_blank" rel="noopener noreferrer" class="source-link"><strong>TIT Group of Institutions</strong></a> was a deeply valuable experience, especially as a final-year Computer Science &amp; Engineering (CSE) student preparing to step into the professional world.
        </p>

        <p>
          What stood out to me was that the session went far beyond standard technology overviews or routine career placement advice. It gave us a practical, grounded perspective on what the industry actually expects from graduating students and how vital it is to keep learning and adapting as the technology landscape continues to evolve at unprecedented speed.
        </p>

        <div style="margin: 28px 0; padding: 24px; background-color: var(--bg-surface); border-left: 4px solid var(--accent-primary); border-radius: var(--radius-sm); box-shadow: var(--shadow-sm);">
          <p style="margin: 0; font-size: 1.08rem; font-style: italic; color: var(--text-primary); line-height: 1.7;">
            "The transition from university coursework to professional software engineering is not merely about writing more lines of code. It is about understanding the broader ecosystem—how systems scale, how teams collaborate, and how engineers continuously adapt to solve real human problems."
          </p>
        </div>
      </section>

      <section id="four-foundations-of-industry-readiness">
        <h2>The Four Foundations of Industry Readiness</h2>
        <p>
          The discussion around communication, adaptability, problem-solving, and continuous learning was particularly insightful. It provided a rare mirror to reflect honestly on the competencies I need to strengthen before beginning my professional engineering journey:
        </p>

        <div style="display: grid; grid-template-columns: 1fr; gap: 16px; margin: 24px 0;">
          <div style="padding: 20px; background-color: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md);">
            <h3 style="margin: 0 0 8px 0; font-size: 1.15rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: var(--accent-primary);"></span>
              1. Communication as a Technical Superpower
            </h3>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65;">
              In enterprise settings, the best code is worthless if the rationale behind it cannot be communicated clearly to teammates, product managers, and stakeholders. Clear written documentation, active listening, and articulated architectural tradeoffs are core engineering traits.
            </p>
          </div>

          <div style="padding: 20px; background-color: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md);">
            <h3 style="margin: 0 0 8px 0; font-size: 1.15rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: var(--accent-secondary);"></span>
              2. Adaptability in Shifting Tech Landscapes
            </h3>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65;">
              Technologies, frameworks, and generative AI toolchains will continually change throughout our careers. What stays constant is an engineer's willingness to step outside their comfort zone, embrace unfamiliar paradigms, and adapt swiftly.
            </p>
          </div>

          <div style="padding: 20px; background-color: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md);">
            <h3 style="margin: 0 0 8px 0; font-size: 1.15rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: var(--accent-emerald);"></span>
              3. Rigorous Problem-Solving Under Constraints
            </h3>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65;">
              Academic problems often come with clean, predefined inputs and outputs. Enterprise problems are messy, ambiguous, and subject to latency, cost, and security constraints. Developing a structured, iterative problem-solving mindset is essential.
            </p>
          </div>

          <div style="padding: 20px; background-color: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md);">
            <h3 style="margin: 0 0 8px 0; font-size: 1.15rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: var(--accent-warm);"></span>
              4. Continuous Learning as a Daily Habit
            </h3>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65;">
              Graduation is not the finish line of education; it is the starting gate. Cultivating curiosity, reading technical documentation, experimenting with side architectures, and learning from peers must remain lifelong disciplines.
            </p>
          </div>
        </div>
      </section>

      <section id="gratitude-to-capgemini-leadership">
        <h2>Gratitude to the Capgemini Leadership Team</h2>
        <p>
          A sincere and heartfelt thank you to the distinguished leaders from Capgemini who took the time to interact with us, share their candid experiences, and answer our questions with humility and depth:
        </p>

        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0;">
          <a
            href="https://www.linkedin.com/in/altamash-qureshi-ba9aa71a/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link-pill"
            style="background-color: var(--bg-surface); padding: 8px 16px; border: 1px solid var(--border-light);"
          >
            <span>Altamash Qureshi Sir</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>

          <a
            href="https://www.linkedin.com/in/amit-nayak-aba747a/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link-pill"
            style="background-color: var(--bg-surface); padding: 8px 16px; border: 1px solid var(--border-light);"
          >
            <span>Amit Nayak Sir</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>

          <a
            href="https://www.linkedin.com/in/punit-santani-930bb51/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link-pill"
            style="background-color: var(--bg-surface); padding: 8px 16px; border: 1px solid var(--border-light);"
          >
            <span>Punit Santani Sir</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>

          <a
            href="https://www.linkedin.com/in/deevith-rao/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link-pill"
            style="background-color: var(--bg-surface); padding: 8px 16px; border: 1px solid var(--border-light);"
          >
            <span>Deevith Rao Sir</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>

          <a
            href="https://www.linkedin.com/in/vaibhavdeshpande01/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link-pill"
            style="background-color: var(--bg-surface); padding: 8px 16px; border: 1px solid var(--border-light);"
          >
            <span>Vaibhav Deshpande Sir</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>

        <p>
          Hearing firsthand narratives regarding how global consulting and engineering practices navigate technological transformations, client delivery pressures, and talent development provided invaluable perspective that cannot be found in textbooks.
        </p>
      </section>

      <section id="empowering-students-at-tit">
        <h2>Empowering Students at TIT Group of Institutions</h2>
        <p>
          I am deeply grateful to <a href="https://www.linkedin.com/school/technocrats-group-of-institutions-bhopal/" target="_blank" rel="noopener noreferrer" class="source-link"><strong>TIT Group of Institutions</strong></a> for consistently organizing high-impact interactions that bridge the gap between academic education and corporate reality.
        </p>
        <p>
          Providing students with the opportunity to engage directly with industry veterans shapes our aspirations, grounds our career choices, and demystifies what it truly takes to succeed in today's software engineering market.
        </p>
      </section>

      <section id="the-road-ahead-final-year-reflection">
        <h2>The Road Ahead: Building an Enduring Mindset</h2>
        <p>
          As I progress through my final year in Computer Science &amp; Engineering, sessions like this act as an intellectual compass. They remind me that technical expertise, while fundamental, must be paired with:
        </p>

        <ul class="editorial-list">
          <li><strong>Humility:</strong> Acknowledging what I do not know and remaining eager to learn from senior mentors and peers alike.</li>
          <li><strong>Ownership:</strong> Taking full accountability for the reliability, clarity, and security of the code and documentation I produce.</li>
          <li><strong>Curiosity:</strong> Constantly investigating new architectures—whether Full Site Editing in WordPress, Generative Engine Optimization, or semantic retrieval graphs.</li>
        </ul>

        <p>
          Taking back valuable lessons, fresh motivation, and a clearer perspective on what it means to become truly industry-ready. 🚀
        </p>
      </section>

      <section id="original-linkedin-post-and-discussion">
        <h2>Original LinkedIn Post &amp; Community Discussion</h2>
        <p>
          This reflection was originally shared with the professional community on LinkedIn. You can explore the original update, join the conversation, and connect with fellow students and industry professionals:
        </p>

        <div style="margin: 24px 0; padding: 24px; background-color: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
            <div>
              <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-primary);">
                Verified LinkedIn Article &amp; Update
              </span>
              <h3 style="margin: 4px 0 0 0; font-size: 1.15rem;">
                An Interaction That Gave Me a Better Perspective on the Industry
              </h3>
            </div>
            <a
              href="https://lnkd.in/p/dW4yDf7i"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
              style="display: inline-flex; align-items: center; gap: 8px;"
            >
              <span>View Post on LinkedIn</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 8px; padding-top: 12px; border-top: 1px solid var(--border-light);">
            <span class="topic-tag">#Capgemini</span>
            <span class="topic-tag">#IndustryInteraction</span>
            <span class="topic-tag">#IndustryExposure</span>
            <span class="topic-tag">#CareerGrowth</span>
            <span class="topic-tag">#LeadershipInteraction</span>
            <span class="topic-tag">#Learning</span>
            <span class="topic-tag">#CSE</span>
            <span class="topic-tag">#TIT</span>
            <span class="topic-tag">#StudentDevelopment</span>
          </div>
        </div>
      </section>
    `,
    seo: {
      metaTitle: "An Interaction That Gave Me a Better Perspective on the Industry: Capgemini × TIT | Srijan Prasad",
      metaDescription: "Final-year CSE student reflections on the Capgemini leadership interaction at TIT Group of Institutions: adaptability, communication, problem-solving, and industry readiness.",
      robots: "index, follow"
    }
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  if (slug === "wordcamp-bhopal-2025-pattern-table-lead-open-source-community") {
    return articlesData.find((a) => a.slug === "my-first-experience-as-a-volunteer-at-wordcamp-bhopal-2025");
  }
  if (
    slug === "capgemini-tit" ||
    slug === "capgemini-tit-industry-interaction" ||
    slug === "capgemini-tit-group-of-institutions"
  ) {
    return articlesData.find(
      (a) => a.slug === "an-interaction-that-gave-me-a-better-perspective-on-the-industry-capgemini-tit"
    );
  }
  return articlesData.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articlesData.filter((a) => a.categorySlug === categorySlug);
}

export function getArticlesByTopic(topicSlug: string): Article[] {
  return articlesData.filter((a) => a.topicSlugs.includes(topicSlug));
}

export function getRelatedArticles(currentArticle: Article, limit = 3): Article[] {
  return articlesData
    .filter((a) => a.id !== currentArticle.id)
    .map((a) => {
      let score = 0;
      if (a.categorySlug === currentArticle.categorySlug) score += 3;
      const sharedTopics = a.topicSlugs.filter((t) => currentArticle.topicSlugs.includes(t));
      score += sharedTopics.length * 2;
      const sharedEntities = a.entities.filter((e) => currentArticle.entities.includes(e));
      score += sharedEntities.length * 1.5;
      return { article: a, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}
