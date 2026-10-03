"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RagAssistant } from "./RagAssistant";
import { SkipLink } from "./SkipLink";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isRagOpen, setIsRagOpen] = useState(false);

  return (
    <>
      <SkipLink />
      <Header onOpenRag={() => setIsRagOpen(true)} />
      <main id="main-content" style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
      <RagAssistant isOpen={isRagOpen} onClose={() => setIsRagOpen(false)} />
    </>
  );
}
