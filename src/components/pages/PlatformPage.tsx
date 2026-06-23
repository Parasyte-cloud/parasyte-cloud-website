interface Props { id: string; contentH: string; }

const AC:Record<string,string>={ice:"2px solid #00d4ff",fire:"2px solid #ff6a00",amber:"2px solid #ffb800","":"1px solid rgba(255,255,255,.07)"};

export default function PlatformPage({id,contentH}:Props){
  const layers=[
    {label:"Agents",cards:[{name:"🪟 Windows",desc:"Service + kernel hooks",v:"ice"},{name:"🍎 macOS",desc:"LaunchDaemon + Sys Ext",v:"ice"},{name:"🐧 Linux",desc:"systemd + eBPF probes",v:"ice"},{name:"🌐 Chrome",desc:"Browser DLP extension",v:"ice"}],conn:"mTLS · Hardware PIN identity · WebSocket alerts"},
    {label:"Backend",cards:[{name:"⚡ FastAPI",desc:"Python · PostgreSQL · JWT",v:"fire"},{name:"🔑 Vault",desc:"Secrets & mTLS PKI",v:"fire"},{name:"📡 WebSocket Hub",desc:"Real-time alert streaming",v:"fire"}],conn:"RKE2 Kubernetes · Cilium CNI · ArgoCD GitOps"},
    {label:"Portals",cards:[{name:"🏢 Org Admin Portal",desc:"Per-org devices, alerts, policies",v:"amber"},{name:"👁️ Master Portal",desc:"Cross-org · all clients · all agents",v:"amber"}],conn:"Prometheus · Grafana · Loki · Falco · MinIO"},
    {label:"Infra",cards:[{name:"🖥️ Proxmox Cluster",desc:"6 nodes · pve-01→pve-05+pbs",v:""},{name:"🔀 MikroTik RB5009",desc:"BGP AS65000 · Dual WAN",v:""},{name:"☁️ Cloudflare",desc:"DNS · CDN · DDoS",v:""}],conn:null},
  ];

  return(
    <div id={id} style={{height:contentH,background:"var(--s1)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 45% 80% at 8% 50%,rgba(0,212,255,.04),transparent 60%)",pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:"220px 1fr",gap:"clamp(20px,4vw,48px)",height:"100%",alignItems:"center",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#00d4ff",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Architecture<span style={{display:"block",width:"28px",height:"1px",background:"#00d4ff",opacity:.4}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.6rem,3vw,2.4rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>Three-Tier<br/>Platform</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)",lineHeight:1.65}}>Bare-metal to browser. GitOps-managed, mTLS agent comms, real-time WebSocket alerting across all org tiers.</p>
        </div>
        <div style={{background:"var(--bg)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"clamp(14px,2.5vh,22px) clamp(14px,2vw,20px)",display:"flex",flexDirection:"column",gap:"9px"}}>
          {layers.map(layer=>(
            <div key={layer.label}>
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".55rem",letterSpacing:".18em",textTransform:"uppercase",color:"var(--dim)",width:"50px",flexShrink:0,textAlign:"right"}}>{layer.label}</div>
                <div style={{flex:1,display:"flex",gap:"8px",flexWrap:"wrap"}}>
                  {layer.cards.map(c=>(
                    <div key={c.name} style={{background:"var(--s1)",border:"1px solid rgba(255,255,255,.07)",borderLeft:AC[c.v],borderRadius:"8px",padding:"8px 12px",flex:1,minWidth:0,transition:"border-color .2s"}}>
                      <div style={{fontFamily:"var(--font-rajdhani)",fontSize:".82rem",fontWeight:600,color:"var(--text)",marginBottom:"1px"}}>{c.name}</div>
                      <div style={{fontFamily:"var(--font-inter)",fontSize:".63rem",color:"var(--dim)"}}>{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              {layer.conn&&<div style={{display:"flex",alignItems:"center",gap:"8px",paddingLeft:"60px",marginTop:"5px",fontFamily:"var(--font-jetbrains)",fontSize:".56rem",letterSpacing:".1em",textTransform:"uppercase",color:"var(--dim)"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"rgba(255,255,255,.07)",flexShrink:0,display:"block"}}/>
                <span style={{background:"var(--s1)",border:"1px solid rgba(255,255,255,.07)",padding:"3px 10px",borderRadius:"20px"}}>{layer.conn}</span>
                <span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(255,255,255,.05),transparent)"}}/>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
