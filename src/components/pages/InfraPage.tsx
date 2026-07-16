interface Props{id:string;contentH:string;isMobile:boolean}
export default function InfraPage({id,contentH,isMobile}:Props){
  const stack=[
    ["Proxmox VE","6-Node Bare-Metal"],["RKE2","Kubernetes Engine"],["Cilium","CNI + eBPF"],["ArgoCD","GitOps Deploy"],
    ["HashiCorp Vault","Secrets & PKI"],["Falco","Runtime Security"],["Prometheus","Metrics & Alerts"],["Grafana","Dashboards"],
    ["Loki","Log Aggregation"],["MinIO","Object Storage"],["MikroTik RB5009","BGP AS65000 · Dual WAN"],["Cloudflare","DNS · CDN · DDoS"],
    ["FastAPI","Python Backend"],["PostgreSQL","Primary Database"],["AWS CDK","Scanner Infra"],["Step Functions","Scan Orchestration"],
  ];
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:isMobile?"80px 20px 40px":"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div className="orb-field"><div className="orb orb-ice" style={{animationDelay:"-5s"}}/><div className="orb orb-fire" style={{animationDelay:"-13s"}}/></div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"220px 1fr",gap:isMobile?"24px":"clamp(24px,4vw,56px)",height:isMobile?"auto":"100%",alignItems:"center",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#00d4ff",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Self-Hosted<span style={{display:"block",width:"28px",height:"1px",background:"#00d4ff",opacity:.5}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:isMobile?"2rem":"clamp(1.6rem,3vw,2.4rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>Full-Stack<br/>Ownership</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"20px"}}>No managed cloud for the platform. Every component runs on bare-metal Kubernetes — owned end-to-end.</p>
          <div className="lg" style={{display:"inline-flex",alignItems:"center",gap:"7px",fontFamily:"var(--font-jetbrains)",fontSize:".6rem",letterSpacing:".14em",textTransform:"uppercase",padding:"7px 14px",borderRadius:"20px",color:"#4ade80",border:"1px solid rgba(74,222,128,.3)",boxShadow:"0 0 20px rgba(74,222,128,.08), 0 2px 0 rgba(74,222,128,.1) inset",position:"relative",zIndex:1}}>
            <span className="pulse" style={{width:"5px",height:"5px",borderRadius:"50%",background:"#4ade80",display:"block"}}/>
            Systems operational
          </div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".6rem",color:"var(--dim)",marginTop:"10px",letterSpacing:".1em"}}>BGP AS65000 · Dual WAN · 6-node cluster</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(4,1fr)",gap:"8px"}}>
          {stack.map(([name,role])=>(
            <div key={name} className="lg lg-prism lg-hover" style={{borderRadius:"12px",padding:isMobile?"10px 12px":"13px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 100% 70% at 0% 0%, rgba(0,212,255,.05), transparent 55%)",pointerEvents:"none"}}/>
              <div style={{fontFamily:"var(--font-rajdhani)",fontSize:isMobile?".8rem":".88rem",fontWeight:700,color:"var(--text)",marginBottom:"2px",position:"relative",zIndex:1}}>{name}</div>
              <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".54rem",color:"var(--dim)",letterSpacing:".08em",textTransform:"uppercase",position:"relative",zIndex:1}}>{role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
