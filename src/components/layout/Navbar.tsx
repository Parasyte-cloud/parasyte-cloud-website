"use client";

import { useEffect, useRef, useState } from "react";
import { Car, ChevronDown, Download, ExternalLink, Info, Menu, Smartphone, X } from "lucide-react";
import { BROWSER_DOWNLOADS, MOBILE_BETA_MAILTO } from "@/lib/downloads";
import { PAGE_INDEX, PAGE_META } from "@/lib/pages";

const ROOM7_DESCRIPTION = "RideArrivo's guest-facing virtual event room for launches, investor calls and town halls.";
const ROOM7_URL = "https://room7.ridearrivo.com/r/WPWVK5XT";
const RIDEARRIVO_URL = "https://ridearrivo.com";

interface Props {
  curPage: number;
  goPage: (n: number) => void;
}

export default function Navbar({ curPage, goPage }: Props) {
  const [open, setOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeMenus = () => {
    setOpen(false);
    setDownloadOpen(false);
    setEcosystemOpen(false);
  };

  const go = (n: number) => {
    goPage(n);
    closeMenus();
  };

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDownloadOpen(false);
        setEcosystemOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="lg lg-dark site-nav" aria-label="Primary navigation">
        <button onClick={() => go(PAGE_INDEX.hero)} className="brand-lockup" aria-label="PArAsYtE cloud home">
          <span className="brand-wordmark" aria-hidden="true">
            <span className="brand-ice">P</span>
            <span>A</span><span className="brand-muted">r</span><span>A</span><span className="brand-muted">s</span>
            <span className="brand-fire">Y</span><span className="brand-muted">t</span><span>E</span>
          </span>
          <span className="brand-cloud">cloud</span>
        </button>

        <div className="desk-nav nav-center">
          <div className="lg nav-pill-group">
            {PAGE_META.map((item, index) => (
              <button
                key={item.id}
                onClick={() => go(index)}
                aria-current={curPage === index ? "page" : undefined}
                className={`nav-pill ${curPage === index ? "nav-pill-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="desk-ctas nav-actions">
          <div className="nav-menu-wrap">
            <button
              onClick={() => {
                setDownloadOpen((value) => !value);
                setEcosystemOpen(false);
              }}
              className="btn-ice nav-action-button"
              aria-expanded={downloadOpen}
              aria-haspopup="menu"
            >
              <Download size={13} /> Browser <ChevronDown size={12} />
            </button>
            {downloadOpen && (
              <div className="lg lg-dark nav-dropdown download-dropdown" role="menu" aria-label="Browser downloads">
                <div className="nav-dropdown-heading">Desktop</div>
                {BROWSER_DOWNLOADS.filter((item) => item.status === "available").map((item) => (
                  <a
                    key={item.platform}
                    href={item.href ?? undefined}
                    onClick={() => setDownloadOpen(false)}
                    className="nav-dropdown-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    <span><strong>{item.platform}</strong><small>{item.format}</small></span>
                    <ExternalLink size={13} />
                  </a>
                ))}
                <div className="nav-dropdown-divider" />
                <div className="nav-dropdown-heading">Mobile</div>
                {BROWSER_DOWNLOADS.filter((item) => item.status === "coming-soon").map((item) => (
                  <div key={item.platform} className="nav-dropdown-link nav-dropdown-disabled" aria-disabled="true">
                    <span><strong>{item.platform}</strong><small>{item.format}</small></span>
                    <span className="mini-chip">Soon</span>
                  </div>
                ))}
                <a href={MOBILE_BETA_MAILTO} className="mobile-beta-link" role="menuitem">
                  <Smartphone size={13} /> Join mobile beta
                </a>
              </div>
            )}
          </div>

          <div className="nav-menu-wrap ecosystem-wrap">
            <button
              onClick={() => {
                setEcosystemOpen((value) => !value);
                setDownloadOpen(false);
              }}
              className="lg nav-action-button nav-action-muted"
              aria-expanded={ecosystemOpen}
              aria-haspopup="menu"
            >
              Ecosystem <ChevronDown size={12} />
            </button>
            {ecosystemOpen && (
              <div className="lg lg-dark nav-dropdown ecosystem-dropdown" role="menu" aria-label="PArAsYtE ecosystem">
                <a href={ROOM7_URL} target="_blank" rel="noopener noreferrer" className="nav-dropdown-link" role="menuitem" title={ROOM7_DESCRIPTION}>
                  <span><strong>Room 7</strong><small>Virtual events</small></span><Info size={14} />
                </a>
                <a href={RIDEARRIVO_URL} target="_blank" rel="noopener noreferrer" className="nav-dropdown-link" role="menuitem">
                  <span><strong>RideArrivo</strong><small>Mobility platform</small></span><Car size={14} />
                </a>
              </div>
            )}
          </div>

          <button onClick={() => go(PAGE_INDEX.scanner)} className="btn-ice nav-action-button">Scanner</button>
          <button onClick={() => go(PAGE_INDEX.contact)} className="btn-solid nav-action-button nav-primary-cta">Get Access</button>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="mob-ham mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg lg-dark mobile-nav-panel" role="dialog" aria-label="Mobile navigation">
          <div className="mobile-nav-grid">
            {PAGE_META.map((item, index) => (
              <button
                key={item.id}
                onClick={() => go(index)}
                aria-current={curPage === index ? "page" : undefined}
                className={`mobile-nav-link ${curPage === index ? "mobile-nav-link-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mobile-menu-section">
            <div className="mobile-menu-label">PArAsYtE Browser</div>
            <div className="mobile-download-grid">
              {BROWSER_DOWNLOADS.filter((item) => item.status === "available").map((item) => (
                <a key={item.platform} href={item.href ?? undefined} target="_blank" rel="noopener noreferrer" className="mobile-download-link">
                  <Download size={14} /><span><strong>{item.platform}</strong><small>{item.format}</small></span>
                </a>
              ))}
              {BROWSER_DOWNLOADS.filter((item) => item.status === "coming-soon").map((item) => (
                <div key={item.platform} className="mobile-download-link mobile-download-soon">
                  <Smartphone size={14} /><span><strong>{item.platform}</strong><small>Coming soon</small></span>
                </div>
              ))}
            </div>
            <a href={MOBILE_BETA_MAILTO} className="mobile-beta-link mobile-beta-wide"><Smartphone size={14} /> Join mobile beta</a>
          </div>

          <div className="mobile-menu-section mobile-ecosystem">
            <a href={ROOM7_URL} target="_blank" rel="noopener noreferrer"><Info size={14} /> Room 7</a>
            <a href={RIDEARRIVO_URL} target="_blank" rel="noopener noreferrer"><Car size={14} /> RideArrivo</a>
          </div>

          <div className="mobile-menu-actions">
            <button onClick={() => go(PAGE_INDEX.scanner)} className="btn-ice">Scanner</button>
            <button onClick={() => go(PAGE_INDEX.contact)} className="btn-solid">Get Access</button>
          </div>
        </div>
      )}
    </>
  );
}
