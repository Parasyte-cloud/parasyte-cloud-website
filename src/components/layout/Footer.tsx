"use client";

import { PAGE_INDEX, PAGE_META } from "@/lib/pages";

interface Props {
  goPage: (n: number) => void;
}

export default function Footer({ goPage }: Props) {
  return (
    <footer className="lg lg-dark site-footer">
      <div className="footer-prism" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-row">
          <button onClick={() => goPage(PAGE_INDEX.hero)} className="footer-brand" aria-label="PArAsYtE cloud home">
            <span className="brand-ice">P</span><span>ArAs</span><span className="brand-fire">Y</span><span>tE</span>
            <small>cloud</small>
          </button>
          <nav className="footer-links" aria-label="Footer navigation">
            {PAGE_META.map((page, index) => (
              <button key={page.id} onClick={() => goPage(index)}>{page.label}</button>
            ))}
          </nav>
          <div className="footer-external">
            <a href="https://github.com/Parasyte-cloud" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="mailto:infra@parasyte.cloud">Contact</a>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 PArAsYtE cloud</span>
          <span>Security · Intelligence · Control</span>
          <span>infra@parasyte.cloud</span>
        </div>
      </div>
    </footer>
  );
}
