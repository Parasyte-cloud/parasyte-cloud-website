"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PAGES } from "@/lib/pages";

const NAV = ["Home","Products","Scanner","Platform","PArA PIN","Infra","Contact"];

interface Props { curPage: number; goPage: (n: number) => void; }

export default function Navbar({ curPage, goPage }: Props) {
  const [open, setOpen] = useState(false);
  const go = (n: number) => { goPage(n); setOpen(false); };

  return (
    <>
      <nav style={{
        height: "var(--nav-h)", width: "100%", flexShrink: 0,
        display: "flex", alignItems: "center",
        padding: "0 clamp(16px,4vw,56px)",
        background: "rgba(7,9,15,0.93)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative", zIndex: 100,
      }}>
        {/* Logo */}
        <button onClick={() => go(0)} style={{ fontFamily:"var(--font-rajdhani)", fontSize:"1.35rem", fontWeight:700, letterSpacing:".04em", flexShrink:0, background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"baseline", gap:"4px" }}>
          <span style={{color:"var(--ice)"}}>P</span>
          <span style={{color:"#fff"}}>A</span>
          <span style={{color:"var(--muted)"}}>r</span>
          <span style={{color:"#fff"}}>A</span>
          <span style={{color:"var(--muted)"}}>s</span>
          <span style={{color:"var(--fire)"}}>Y</span>
          <span style={{color:"var(--muted)"}}>t</span>
          <span style={{color:"#fff"}}>E</span>
          <span style={{color:"var(--dim)", fontSize:".75rem", fontWeight:400, letterSpacing:".06em", marginLeft:"2px"}}>cloud</span>
        </button>

        {/* Center axis with links */}
        <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 clamp(12px,3vw,40px)", position:"relative" }} className="hidden-mobile">
          <div style={{ position:"absolute", top:"50%", left:0, right:0, height:"1px", background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)", transform:"translateY(-50%)" }} />
          <div style={{
            display:"flex", gap:"2px",
            background:"var(--s1)", border:"1px solid rgba(255,255,255,0.06)",
            borderRadius:"8px", padding:"3px", position:"relative", zIndex:1,
          }}>
            {NAV.map((label, i) => (
              <button key={i} onClick={() => go(i)} style={{
                fontFamily:"var(--font-inter)", fontSize:".76rem", fontWeight:500,
                color: curPage === i ? "var(--ice)" : "var(--muted)",
                background: curPage === i ? "rgba(0,212,255,0.08)" : "transparent",
                padding:"5px 13px", borderRadius:"6px",
                border:"none", cursor:"pointer",
                transition:"all .18s", whiteSpace:"nowrap",
                letterSpacing:".02em",
              }}>{label}</button>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display:"flex", gap:"8px", flexShrink:0 }} className="hidden-mobile">
          <button onClick={() => go(2)} style={{
            fontFamily:"var(--font-rajdhani)", fontSize:".78rem", fontWeight:700,
            letterSpacing:".1em", textTransform:"uppercase",
            padding:"6px 16px", borderRadius:"7px",
            border:"1px solid rgba(0,212,255,0.2)", color:"var(--ice)",
            background:"transparent", cursor:"pointer", transition:"all .2s",
          }}
          onMouseEnter={e=>(e.currentTarget.style.background="rgba(0,212,255,0.08)")}
          onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
          >Try Scanner</button>
          <button onClick={() => go(6)} style={{
            fontFamily:"var(--font-rajdhani)", fontSize:".78rem", fontWeight:700,
            letterSpacing:".1em", textTransform:"uppercase",
            padding:"6px 16px", borderRadius:"7px",
            background:"linear-gradient(135deg,var(--ice),var(--ice-mid))",
            color:"#000", border:"none", cursor:"pointer", transition:"all .2s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,212,255,0.35)"}}
          onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}
          >Get Access</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(v=>!v)} style={{ marginLeft:"auto", padding:"6px", color:"var(--muted)", display:"none" }} className="show-mobile" aria-label="Menu">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:"fixed", top:"var(--nav-h)", left:0, right:0, zIndex:99,
          background:"rgba(7,9,15,0.98)", backdropFilter:"blur(20px)",
          borderBottom:"1px solid rgba(255,255,255,0.06)",
          display:"flex", flexDirection:"column", gap:"2px", padding:"12px 16px",
        }}>
          {NAV.map((label, i) => (
            <button key={i} onClick={() => go(i)} style={{
              fontFamily:"var(--font-inter)", fontSize:".88rem",
              color:"var(--muted)", padding:"10px 12px", borderRadius:"7px",
              textAlign:"left", background:"none", border:"none", cursor:"pointer",
              transition:"all .18s",
            }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.color="var(--text)";(e.currentTarget as HTMLButtonElement).style.background="var(--s1)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.color="var(--muted)";(e.currentTarget as HTMLButtonElement).style.background="none"}}
            >{label}</button>
          ))}
          <div style={{ display:"flex", gap:"8px", paddingTop:"10px", borderTop:"1px solid rgba(255,255,255,0.06)", marginTop:"6px" }}>
            <button onClick={()=>go(2)} style={{ flex:1, textAlign:"center", fontFamily:"var(--font-rajdhani)", fontSize:".8rem", fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", padding:"9px", borderRadius:"7px", border:"1px solid rgba(0,212,255,0.25)", color:"var(--ice)", background:"none", cursor:"pointer" }}>Try Scanner</button>
            <button onClick={()=>go(6)} style={{ flex:1, textAlign:"center", fontFamily:"var(--font-rajdhani)", fontSize:".8rem", fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", padding:"9px", borderRadius:"7px", background:"linear-gradient(135deg,var(--ice),var(--ice-mid))", color:"#000", border:"none", cursor:"pointer" }}>Get Access</button>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:900px){.hidden-mobile{display:none!important}.show-mobile{display:flex!important}}
        @media(min-width:901px){.show-mobile{display:none!important}}
      `}</style>
    </>
  );
}
