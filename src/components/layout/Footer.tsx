"use client";

const links = [
  { label: "Home", page: 0 },
  { label: "Products", page: 1 },
  { label: "Scanner", page: 2 },
  { label: "Platform", page: 3 },
  { label: "PArA PIN", page: 4 },
  { label: "Infra", page: 5 },
  { label: "Contact", page: 6 },
];

export default function Footer() {
  const go = (n: number) => {
    const vp = document.querySelector(".snap-viewport");
    const pages = ["pg-hero","pg-products","pg-scanner","pg-platform","pg-parapin","pg-infra","pg-contact"];
    const el = vp?.querySelector(`#${pages[n]}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{
      height: "var(--foot-h)", flexShrink: 0, width: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(7,9,15,0.96)",
      backdropFilter: "blur(20px)",
      position: "relative", zIndex: 100,
    }}>
      {/* Gradient top line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg,transparent,rgba(0,212,255,0.3),rgba(255,106,0,0.3),transparent)",
      }} />

      <div style={{
        width: "min(640px,90vw)",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "9px",
      }}>
        {/* Logo + links row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ fontFamily: "var(--font-rajdhani)", fontSize: "1rem", fontWeight: 700, letterSpacing: ".06em" }}>
            <span style={{color:"var(--ice)"}}>PA</span>
            <span style={{color:"var(--muted)"}}>rAs</span>
            <span style={{color:"var(--fire)"}}>Yt</span>
            <span style={{color:"var(--muted)"}}>E</span>
            <span style={{color:"var(--dim)", fontWeight:400, fontSize:".75rem", marginLeft:"3px"}}>cloud</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            {links.map((l, i) => (
              <span key={l.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <button onClick={() => go(l.page)} style={{
                  fontFamily: "var(--font-inter)", fontSize: ".71rem",
                  color: "var(--dim)", background: "none", border: "none",
                  cursor: "pointer", transition: "color .2s", padding: 0,
                }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--muted)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--dim)")}
                >{l.label}</button>
                {i < links.length - 1 && <span style={{ color: "var(--dim)", opacity: .4, fontSize: ".55rem" }}>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p style={{
          fontFamily: "var(--font-jetbrains)", fontSize: ".58rem",
          color: "var(--dim)", letterSpacing: ".14em", textTransform: "uppercase",
          textAlign: "center",
        }}>
          © 2026 PArAsYtE cloud · Security · Intelligence · Control · infra@parasyte.cloud
        </p>
      </div>
    </footer>
  );
}
