interface Props{id:string;contentH:string;isMobile:boolean}
const AC:Record<string,string>={ice:"2px solid rgba(0,212,255,.55)",fire:"2px solid rgba(255,106,0,.55)",amber:"2px solid rgba(255,184,0,.45)","":"1px solid rgba(255,255,255,.10)"};
const AG:Record<string,string>={ice:"rgba(0,212,255,.09)",fire:"rgba(255,106,0,.09)",amber:"rgba(255,184,0,.08)","":"rgba(255,255,255,.04)"};
export default function PlatformPage({id,contentH,isMobile}:Props){
  const layers=[
    {label:"Agents",cards:[{name:"🪟 Windows",desc:"Service + kernel hooks",v:"ice"},{name:"🍎 macOS",desc:"LaunchDaemon + Sys Ext",v:"ice"},{name:"🐧 Linux",desc:"systemd + eBPF probes",v:"ice"},{name:"🌐 Chrome",desc:"Browser DLP extension",v:"ice"}],conn:"mTLS · Hardware PIN · WebSocket"},
    {label:"Backend",cards:[{name:"⚡ FastAPI",desc:"Python · PostgreSQL · JWT",v:"fire"},{name:"🔑 Vault",desc:"Secrets & mTLS PKI",v:"fire"},{name:"📡 WebSocket",desc:"Real-time alert streaming",v:"fire"}],conn:"RKE2 Kubernetes · Cilium CNI · ArgoCD"},
    {label:"Portals",cards:[{name:"🏢 Org Admin",desc:"Per-org devices, alerts, policies",v:"amber"},{name:"👁️ Master",desc:"Cross-org · all clients · all agents",v:"amber"}],conn:"Prometheus · Grafana · Loki · Falco · MinIO"},
    {label:"Infra",cards:[{name:"🖥️ Proxmox",desc:"6 nodes · pve-01→05+pbs",v:""},{name:"🔀 MikroTik",desc:"BGP AS65000 · Dual WAN",v:""},{name:"☁️ Cloudflare",desc:"DNS · CDN · DDoS",v:""}],conn:null},
  ];
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:isMobile?"80px 20px 40px":"0 clamp(24px,5vw,72px)"}}>
      <div className="orb-field"><div className="orb orb-ice" style={{animationDelay:"-11s"}}/><div className="orb orb-mid" style={{animationDelay:"-4s"}}/></div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"220px 1fr",gap:isMobile?"24px":"clamp(20px,4vw,48px)",height:isMobile?"auto":"100%",alignItems:"center",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#00d4ff",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Architecture</div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:isMobile?"2rem":"clamp(1.6rem,3vw,2.4rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>Three-Tier<br/>Platform</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)",lineHeight:1.65}}>Bare-metal to browser. GitOps-managed, mTLS agent comms, real-time WebSocket alerting.</p>
        </div>
        {/* Main glass diagram panel */}
        <div className="lg lg-prism" style={{borderRadius:"20px",padding:isMobile?"16px":"clamp(14px,2.5vh,22px) clamp(14px,2vw,20px)",display:"flex",flexDirection:"column",gap:"10px",boxShadow:"0 2px 0 rgba(255,255,255,.12) inset, 0 32px 80px rgba(0,0,0,.5)"}}>
          {layers.map(layer=>(
            <div key={layer.label}>
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".55rem",letterSpacing:".18em",textTransform:"uppercase",color:"var(--dim)",width:isMobile?"38px":"50px",flexShrink:0,textAlign:"right",position:"relative",zIndex:1}}>{layer.label}</div>
                <div style={{flex:1,display:"flex",gap:"6px",flexWrap:"wrap",position:"relative",zIndex:1}}>
                  {layer.cards.map(c=>(
                    <div key={c.name} style={{background:AG[c.v],border:"1px solid rgba(255,255,255,.09)",borderLeft:AC[c.v],borderRadius:"9px",padding:"8px 12px",flex:"1 1 auto",minWidth:isMobile?"calc(50% - 6px)":"0",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",boxShadow:"0 1px 0 rgba(255,255,255,.08) inset, 0 4px 12px rgba(0,0,0,.25)"}}>
                      <div style={{fontFamily:"var(--font-rajdhani)",fontSize:".82rem",fontWeight:600,color:"var(--text)",marginBottom:"1px"}}>{c.name}</div>
                      <div style={{fontFamily:"var(--font-inter)",fontSize:".6rem",color:"var(--dim)"}}>{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              {layer.conn&&<div style={{display:"flex",alignItems:"center",gap:"8px",paddingLeft:isMobile?"46px":"60px",marginTop:"6px",position:"relative",zIndex:1}}>
                <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"rgba(255,255,255,.15)",flexShrink:0,display:"block",boxShadow:"0 0 4px rgba(255,255,255,.2)"}}/>
                <div className="lg" style={{fontFamily:"var(--font-jetbrains)",fontSize:".54rem",letterSpacing:".1em",textTransform:"uppercase",color:"var(--dim)",padding:"3px 10px",borderRadius:"20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",position:"relative",zIndex:1}}>{layer.conn}</div>
                <span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(255,255,255,.08),transparent)"}}/>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
