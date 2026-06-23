"use client";
import { PAGES } from "@/lib/pages";

interface Props { curPage: number; goPage: (n: number) => void; }

export default function PageIndicator({ curPage, goPage }: Props) {
  return (
    <div style={{
      position: "fixed", right: "16px",
      top: "calc(var(--nav-h) + 35vh)",
      transform: "translateY(-50%)",
      zIndex: 200, display: "flex", flexDirection: "column", gap: "7px",
    }} className="hide-on-mobile">
      {PAGES.map((_, i) => (
        <button key={i} onClick={() => goPage(i)} title={PAGES[i]} style={{
          width: "4px",
          height: curPage === i ? "18px" : "4px",
          borderRadius: "2px",
          background: curPage === i ? "var(--ice)" : "var(--dim)",
          boxShadow: curPage === i ? "0 0 8px rgba(0,212,255,0.4)" : "none",
          border: "none", cursor: "pointer", transition: "all .3s ease",
          padding: 0,
        }} />
      ))}
      <style>{`@media(max-width:900px){.hide-on-mobile{display:none!important}}`}</style>
    </div>
  );
}
