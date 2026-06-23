interface Props { id: string; contentH: string; }

const C:  Record<string,string> = { ice:"#00d4ff", fire:"#ff6a00", amber:"#ffb800" };
const CL: Record<string,string> = { ice:"rgba(0,212,255,.12)", fire:"rgba(255,106,0,.12)", amber:"rgba(255,184,0,.12)" };
const CB: Record<string,string> = { ice:"rgba(0,212,255,.22)", fire:"rgba(255,106,0,.22)", amber:"rgba(255,184,0,.22)" };

export default function ProductsPage({ id, contentH }: Props) {
  const cards = [
    { icon:"🛡️", name:"EDR Agent",      tag:"Endpoint Detection",  v:"ice",   desc:"Hardware-bound agent for Win, Mac, Linux, Chrome. Real-time threat detection with WebSocket alerts.", feats:["Hardware fingerprint device identity","USB blocking with approval workflows","Process & file execution alerts"] },
    { icon:"🖥️", name:"RMM Platform",   tag:"Remote Management",   v:"fire",  desc:"Full fleet visibility and control. Three-tier architecture from endpoint to master dashboard.", feats:["Live device status across all orgs","Remote policy push & enforcement","Multi-org master dashboard"] },
    { icon:"🔐", name:"Secure Comms",   tag:"PArA PIN",             v:"amber", desc:"Hardware-bound 7-digit PIN replaces your phone number as the access key to reach you.", feats:["Hardware-bound device identifier","PIN-gated contact access","Disappearing messages over mTLS"] },
    { icon:"☁️", name:"AWS Scanner",    tag:"Cloud Security",       v:"ice",   desc:"Serverless Step Functions scanner. Daily Telegram reports on AWS security posture and cost leaks.", feats:["Dangerous port & public S3/RDS detection","Cost leaks: EIPs, NAT Gateways, EBS","CDK-deployed, EventBridge cron"] },
    { icon:"📊", name:"DevOps Monitor", tag:"Observability",        v:"fire",  desc:"Full-stack observability on Prometheus, Grafana, and Loki. Kubernetes cluster health in real time.", feats:["Prometheus + Grafana dashboards","Falco runtime security monitoring","ArgoCD GitOps deploy tracking"] },
    { icon:"🔒", name:"DLP Engine",     tag:"Data Protection",      v:"amber", desc:"Endpoint-level data handling policies. Prevent USB exfiltration and unauthorised transfers.", feats:["USB write blocking & approval gates","Sensitive file extension enforcement","Full forensic audit log"] },
  ];

  return (
    <div id={id} style={{
      height: contentH, background: "var(--s1)",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      padding: "clamp(20px,3.5vh,40px) clamp(24px,5vw,72px) clamp(16px,2.5vh,28px)",
    }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 50% 80% at 5% 50%,rgba(0,212,255,.05),transparent 55%), radial-gradient(ellipse 50% 80% at 95% 50%,rgba(255,106,0,.05),transparent 55%)" }} />

      <div style={{ position:"relative", zIndex:1, marginBottom:"clamp(14px,2.2vh,22px)", flexShrink:0 }}>
        <div style={{ fontFamily:"var(--font-jetbrains)", fontSize:".62rem", letterSpacing:".22em", textTransform:"uppercase", color:"#00d4ff", marginBottom:"6px", display:"flex", alignItems:"center", gap:"8px" }}>
          Core Products <span style={{ width:"28px", height:"1px", background:"#00d4ff", opacity:.5, display:"block" }}/>
        </div>
        <h2 style={{ fontFamily:"var(--font-rajdhani)", fontSize:"clamp(1.5rem,3vw,2.2rem)", fontWeight:700, color:"var(--text)", marginBottom:"3px" }}>Six tools. One platform.</h2>
        <p style={{ fontFamily:"var(--font-inter)", fontSize:".82rem", color:"var(--muted)" }}>Self-hosted on your infrastructure. Zero third-party cloud. Full data sovereignty.</p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
        position: "relative", zIndex: 1,
        flex: 1,
        minHeight: 0,
      }}>
        {cards.map(c => (
          <div key={c.name}
            style={{
              background: "var(--bg)", border:"1px solid rgba(255,255,255,.08)",
              borderRadius: "12px",
              padding: "clamp(12px,1.8vh,18px) clamp(12px,1.5vw,18px)",
              position: "relative", overflow: "hidden",
              transition: "all .25s", cursor: "default",
              display: "flex", flexDirection: "column",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translateY(-3px)";
              el.style.borderColor = CB[c.v];
              el.style.boxShadow = `0 12px 32px rgba(0,0,0,.4), 0 0 20px ${CL[c.v]}`;
              const top = el.querySelector(".ctop") as HTMLElement;
              if (top) top.style.opacity = "1";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "";
              el.style.borderColor = "rgba(255,255,255,.08)";
              el.style.boxShadow = "";
              const top = el.querySelector(".ctop") as HTMLElement;
              if (top) top.style.opacity = "0";
            }}
          >
            <div className="ctop" style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,transparent,${C[c.v]},transparent)`, opacity:0, transition:"opacity .25s" }} />
            <div style={{ width:"34px", height:"34px", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"16px", marginBottom:"9px", border:"1px solid rgba(255,255,255,.08)", background:"var(--s1)", flexShrink:0 }}>{c.icon}</div>
            <div style={{ fontFamily:"var(--font-rajdhani)", fontSize:".95rem", fontWeight:700, color:"var(--text)", marginBottom:"3px" }}>{c.name}</div>
            <div style={{ fontFamily:"var(--font-jetbrains)", fontSize:".52rem", letterSpacing:".14em", textTransform:"uppercase", padding:"2px 7px", borderRadius:"20px", marginBottom:"8px", display:"inline-block", color:C[c.v], background:CL[c.v], border:`1px solid ${CB[c.v]}`, flexShrink:0 }}>{c.tag}</div>
            <p style={{ fontFamily:"var(--font-inter)", fontSize:".72rem", color:"var(--muted)", lineHeight:1.55, marginBottom:"8px", flex:1 }}>{c.desc}</p>
            <ul style={{ display:"flex", flexDirection:"column", gap:"4px" }}>
              {c.feats.map(f => (
                <li key={f} style={{ fontFamily:"var(--font-inter)", fontSize:".67rem", color:"#8a9bb0", display:"flex", alignItems:"flex-start", gap:"5px" }}>
                  <span style={{ color:C[c.v], flexShrink:0, fontSize:".6rem", marginTop:"1px" }}>→</span>{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
