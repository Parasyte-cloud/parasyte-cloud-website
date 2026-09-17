"use client";

import { PAGE_META } from "@/lib/pages";

interface Props {
  curPage: number;
  goPage: (n: number) => void;
}

export default function PageIndicator({ curPage, goPage }: Props) {
  return (
    <nav className="page-indicator hide-on-mobile" aria-label="Section navigation">
      {PAGE_META.map((page, index) => (
        <button
          key={page.id}
          onClick={() => goPage(index)}
          title={page.label}
          aria-label={`Go to ${page.label}`}
          aria-current={curPage === index ? "page" : undefined}
          className={curPage === index ? "page-dot page-dot-active" : "page-dot"}
        />
      ))}
    </nav>
  );
}
