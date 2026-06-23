"use client";
import { useEffect, useState } from "react";

export default function BookIntro() {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOpen(true), 700);
    const t2 = setTimeout(() => setGone(true), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "#000",
      opacity: open ? 0 : 1,
      transition: "opacity .5s ease 1.4s",
      pointerEvents: open ? "none" : "all",
    }}>
      {/* Left half */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "50%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "flex-end",
        paddingRight: "8vw", overflow: "hidden",
        background: "linear-gradient(120deg,#040608,#0a1520)",
        borderRight: "1px solid rgba(0,212,255,0.15)",
        transformOrigin: "left center",
        transform: open ? "rotateY(-100deg) translateX(-6%)" : "none",
        transition: "transform 1.3s cubic-bezier(.77,0,.175,1)",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 100% 50%,rgba(0,212,255,.07),transparent 65%)" }} />
        <div style={{ position: "relative", textAlign: "right" }}>
          <div style={{ fontFamily:"var(--font-rajdhani)", fontSize:"clamp(1.4rem,3.5vw,2.8rem)", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"var(--ice)", textShadow:"0 0 30px rgba(0,212,255,.5)", lineHeight:1.1 }}>Security<br/>Intelligence</div>
          <div style={{ fontFamily:"var(--font-jetbrains)", fontSize:".68rem", color:"var(--dim)", letterSpacing:".22em", textTransform:"uppercase", marginTop:"8px" }}>EDR · RMM · DLP</div>
        </div>
      </div>

      {/* Spine */}
      <div style={{ position: "absolute", zIndex: 10, textAlign: "center", pointerEvents: "none" }}>
        <div style={{ fontFamily:"var(--font-rajdhani)", fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:700, letterSpacing:".04em", lineHeight:1 }}>
          <span style={{color:"var(--ice)"}}>P</span>
          <span style={{color:"#fff"}}>Ar</span>
          <span style={{color:"var(--fire)"}}>A</span>
          <span style={{color:"#fff"}}>sYt</span>
          <span style={{color:"var(--fire)"}}>E</span>
        </div>
        <div style={{ fontFamily:"var(--font-jetbrains)", fontSize:".65rem", color:"var(--dim)", letterSpacing:".25em", marginTop:"6px" }}>cloud</div>
      </div>

      {/* Right half */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "flex-start",
        paddingLeft: "8vw", overflow: "hidden",
        background: "linear-gradient(240deg,#040608,#150a03)",
        borderLeft: "1px solid rgba(255,106,0,0.15)",
        transformOrigin: "right center",
        transform: open ? "rotateY(100deg) translateX(6%)" : "none",
        transition: "transform 1.3s cubic-bezier(.77,0,.175,1)",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 0% 50%,rgba(255,106,0,.07),transparent 65%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily:"var(--font-rajdhani)", fontSize:"clamp(1.4rem,3.5vw,2.8rem)", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"var(--fire)", textShadow:"0 0 30px rgba(255,106,0,.5)", lineHeight:1.1 }}>Control<br/>Visibility</div>
          <div style={{ fontFamily:"var(--font-jetbrains)", fontSize:".68rem", color:"var(--dim)", letterSpacing:".22em", textTransform:"uppercase", marginTop:"8px" }}>Secure Comms · DevOps</div>
        </div>
      </div>
    </div>
  );
}
