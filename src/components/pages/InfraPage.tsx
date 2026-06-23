interface Props { id: string; contentH: string; }

export default function InfraPage({id,contentH}:Props){
  const stack=[
    ["Proxmox VE","6-Node Bare-Metal"],["RKE2","Kubernetes Engine"],["Cilium","CNI + eBPF"],["ArgoCD","GitOps Deploy"],
    ["HashiCorp Vault","Secrets & PKI"],["Falco","Runtime Security"],["Prometheus","Metrics & Alerts"],["Grafana","Dashboards"],
    ["Loki","Log Aggregation"],["MinIO","Object Storage"],["MikroTik RB5009","BGP AS65000 · Dual WAN"],["Cloudflare","DNS · CDN · DDoS"],
    ["FastAPI","Python Backend"],["PostgreSQL","Primary Database"],["AWS CDK","Scanner Infra"],["Step Functions","Scan Orchestration"],
  ];

  return(
    <div id={id} style={{height:contentH,background:"var(--s1)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 45% 80% at 8% 50%,rgba(0,212,255,.04),transparent 60%)",pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:"220px 1fr",gap:"clamp(24px,4vw,56px)",height:"100%",alignItems:"center",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#00d4ff",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Self-Hosted<span style={{display:"block",width:"28px",height:"1px",background:"#00d4ff",opacity:.4}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.6rem,3vw,2.4rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>Full-Stack<br/>Ownership</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"20px"}}>No managed cloud for the platform. Every component runs on bare-metal Kubernetes — owned end-to-end.</p>
          <div style={{display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"var(--font-jetbrains)",fontSize:".6rem",letterSpacing:".14em",textTransform:"uppercase",padding:"4px 10px",borderRadius:"20px",background:"rgba(74,222,128,.08)",border:"1px solid rgba(74,222,128,.18)",color:"#4ade80"}}>
            <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#4ade80",display:"block"}}/>
            Systems operational
          </div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".6rem",color:"var(--dim)",marginTop:"10px",letterSpacing:".1em"}}>BGP AS65000 · Dual WAN · 6-node cluster</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"8px"}}>
          {stack.map(([name,role])=>(
            <div key={name} style={{background:"var(--bg)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"9px",padding:"13px",transition:"all .2s",cursor:"default"}}
              onMouseEnter={e=>{
                const el=e.currentTarget as HTMLDivElement;
                el.style.transform="translateY(-2px)";
                el.style.borderColor="rgba(255,255,255,.12)";
                const nm = el.querySelector(".ic-name") as HTMLElement;
                if(nm) nm.style.color="#00d4ff";
              }}
              onMouseLeave={e=>{
                const el=e.currentTarget as HTMLDivElement;
                el.style.transform="";
                el.style.borderColor="rgba(255,255,255,.07)";
                const nm = el.querySelector(".ic-name") as HTMLElement;
                if(nm) nm.style.color="var(--text)";
              }}>
              <div className="ic-name" style={{fontFamily:"var(--font-rajdhani)",fontSize:".88rem",fontWeight:700,color:"var(--text)",marginBottom:"2px",transition:"color .2s"}}>{name}</div>
              <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".57rem",color:"var(--dim)",letterSpacing:".08em",textTransform:"uppercase"}}>{role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
