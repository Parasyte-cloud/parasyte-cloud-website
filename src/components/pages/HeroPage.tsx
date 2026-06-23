"use client";

interface Props { id: string; contentH: string; goPage: (n: number) => void; }

export default function HeroPage({ id, contentH, goPage }: Props) {
  const stats = [
    { val:"EDR",  label:"Endpoint Detection",  desc:"Hardware-bound agents for Win, Mac, Linux, Chrome", color:"#00d4ff" },
    { val:"RMM",  label:"Remote Management",   desc:"3-tier portal: agent → org admin → master view",    color:"#ff6a00" },
    { val:"DLP",  label:"Data Loss Prevention", desc:"USB blocking, site restriction, file monitoring",   color:"#ffb800" },
    { val:"mTLS", label:"Agent Security",       desc:"Mutual TLS + hardware PIN for all agent comms",     color:"#00d4ff" },
  ];

  return (
    <div id={id} style={{ height: contentH, position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", justifyContent:"center", padding:"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)", background:"var(--bg)" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 45% 80% at 8% 50%,rgba(0,212,255,.05) 0%,transparent 60%), radial-gradient(ellipse 45% 80% at 92% 50%,rgba(255,106,0,.05) 0%,transparent 60%)" }} />
      <div className="bg-dot-grid" style={{ position:"absolute", inset:0, pointerEvents:"none" }} />
      <div style={{ position:"absolute", left:"50%", top:"10%", bottom:"10%", width:"1px", background:"linear-gradient(180deg,transparent,rgba(255,255,255,.05) 30%,rgba(255,255,255,.05) 70%,transparent)", pointerEvents:"none" }} />

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, height:"100%", alignItems:"center", position:"relative", zIndex:1 }}>
        <div style={{ paddingRight:"clamp(24px,4vw,64px)", borderRight:"1px solid rgba(255,255,255,.07)", display:"flex", flexDirection:"column", justifyContent:"center", height:"100%" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", fontFamily:"var(--font-jetbrains)", fontSize:".62rem", letterSpacing:".22em", textTransform:"uppercase", color:"var(--muted)", marginBottom:"20px" }}>
            <span className="pulse" style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#00d4ff", flexShrink:0, display:"block" }} />
            Private access · Now available
          </div>
          <h1 style={{ fontFamily:"var(--font-rajdhani)", fontSize:"clamp(3.5rem,8vw,7rem)", fontWeight:700, lineHeight:".95", letterSpacing:"-.01em", marginBottom:"6px" }}>
            <span style={{color:"#00d4ff"}}>P</span><span style={{color:"var(--text)"}}>A</span><span style={{color:"var(--muted)"}}>r</span><span style={{color:"var(--text)"}}>A</span><span style={{color:"var(--muted)"}}>s</span><span style={{color:"#ff6a00"}}>Y</span><span style={{color:"var(--muted)"}}>t</span><span style={{color:"var(--text)"}}>E</span>
          </h1>
          <div style={{ fontFamily:"var(--font-rajdhani)", fontSize:"clamp(1rem,2.5vw,1.8rem)", fontWeight:300, letterSpacing:".18em", color:"var(--dim)", marginBottom:"22px" }}>cloud</div>
          <div style={{ width:"160px", height:"1px", background:"linear-gradient(90deg,#00d4ff,rgba(255,255,255,.3),#ff6a00)", opacity:.45, marginBottom:"18px" }} />
          <div style={{ fontFamily:"var(--font-jetbrains)", fontSize:"clamp(.6rem,1.2vw,.78rem)", letterSpacing:".28em", textTransform:"uppercase", color:"var(--muted)", marginBottom:"28px" }}>
            <span style={{color:"#00d4ff"}}>Security</span>&nbsp;·&nbsp;Intelligence&nbsp;·&nbsp;<span style={{color:"#ff6a00"}}>Control</span>
          </div>
          <p style={{ fontFamily:"var(--font-inter)", fontSize:"clamp(.82rem,1.5vw,.92rem)", color:"var(--muted)", lineHeight:1.7, maxWidth:"420px", marginBottom:"24px" }}>
            Self-hosted endpoint security combining EDR, RMM, and DLP on bare-metal Kubernetes. No managed cloud. Full ownership.
          </p>
          <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
            <button onClick={()=>goPage(6)} style={{ fontFamily:"var(--font-rajdhani)", fontSize:".88rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"12px 28px", borderRadius:"8px", background:"linear-gradient(135deg,#00d4ff,#00a8cc)", color:"#000", border:"none", cursor:"pointer", transition:"all .22s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 24px rgba(0,212,255,.35)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
              Request Access
            </button>
            <button onClick={()=>goPage(2)} style={{ fontFamily:"var(--font-rajdhani)", fontSize:".88rem", fontWeight:600, letterSpacing:".1em", textTransform:"uppercase", padding:"12px 28px", borderRadius:"8px", border:"1px solid rgba(255,106,0,.22)", color:"#ff6a00", background:"transparent", cursor:"pointer", transition:"all .22s" }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,106,0,.08)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent"}}>
              Try Scanner →
            </button>
          </div>
        </div>

        <div style={{ paddingLeft:"clamp(24px,4vw,64px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
          {stats.map(s => (
            <div key={s.val} style={{ background:"var(--s1)", border:"1px solid rgba(255,255,255,.08)", borderRadius:"10px", padding:"16px 18px", position:"relative", overflow:"hidden", transition:"all .2s" }}>
              <div style={{ fontFamily:"var(--font-rajdhani)", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:700, lineHeight:1, color:s.color, marginBottom:"4px" }}>{s.val}</div>
              <div style={{ fontFamily:"var(--font-jetbrains)", fontSize:".58rem", letterSpacing:".18em", textTransform:"uppercase", color:"var(--dim)", marginBottom:"6px" }}>{s.label}</div>
              <div style={{ fontFamily:"var(--font-inter)", fontSize:".75rem", color:"var(--muted)", lineHeight:1.4 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
