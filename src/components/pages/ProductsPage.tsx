interface Props{id:string;contentH:string;isMobile:boolean}
const CX:Record<string,string>={ice:"lg-ice",fire:"lg-fire",amber:"lg-amber"};
const CC:Record<string,string>={ice:"#00d4ff",fire:"#ff6a00",amber:"#ffb800"};

export default function ProductsPage({id,contentH,isMobile}:Props){
  const cards:{icon:string;name:string;tag:string;v:string;desc:string;feats:string[];link?:string}[]=[
    {icon:"\u{1F6E1}",name:"EDR Agent",tag:"Endpoint Detection",v:"ice",desc:"Hardware-bound agent for Win, Mac, Linux, Chrome. Real-time WebSocket alerts.",feats:["Hardware fingerprint device identity","USB blocking with approval workflows","Process & file execution alerts"]},
    {icon:"\u{1F5A5}",name:"RMM Platform",tag:"Remote Management",v:"fire",desc:"Full fleet visibility. Three-tier: endpoint → org admin → master.",feats:["Live device status across all orgs","Remote policy push & enforcement","Multi-org master dashboard"]},
    {icon:"\u{1F510}",name:"Secure Comms",tag:"PArA PIN",v:"amber",desc:"Hardware-bound 7-digit PIN replaces your phone number as the access key.",feats:["Hardware-bound device identifier","PIN-gated contact access","Disappearing messages over mTLS"],link:"https://chat.parasyte.cloud"},
    {icon:"\u{2601}",name:"AWS Scanner",tag:"Cloud Security",v:"ice",desc:"Serverless Step Functions scanner. Daily Telegram reports on AWS security.",feats:["Dangerous port & public S3/RDS detection","Cost leaks: EIPs, NAT GWs, EBS","CDK-deployed, EventBridge cron"]},
    {icon:"\u{1F4CA}",name:"DevOps Monitor",tag:"Observability",v:"fire",desc:"Full-stack observability on Prometheus, Grafana, and Loki.",feats:["Prometheus + Grafana dashboards","Falco runtime security monitoring","ArgoCD GitOps deploy tracking"]},
    {icon:"\u{1F512}",name:"DLP Engine",tag:"Data Protection",v:"amber",desc:"Endpoint-level data policies. Prevent USB exfiltration and transfers.",feats:["USB write blocking & approval gates","Sensitive file extension enforcement","Full forensic audit log"]},
  ];
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",padding:isMobile?"80px 20px 40px":"clamp(20px,3.5vh,40px) clamp(24px,5vw,72px) clamp(16px,2.5vh,28px)"}}>
      <div className="orb-field"><div className="orb orb-ice" style={{animationDelay:"-3s"}}/><div className="orb orb-fire" style={{animationDelay:"-9s"}}/></div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,marginBottom:"clamp(14px,2.2vh,22px)",flexShrink:0}}>
        <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#00d4ff",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}>Core Products<span style={{width:"28px",height:"1px",background:"#00d4ff",opacity:.5,display:"block"}}/></div>
        <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:700,color:"var(--text)",marginBottom:"3px"}}>Six tools. One platform.</h2>
        <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)"}}>Self-hosted on your infrastructure. Zero third-party cloud. Full data sovereignty.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:"12px",position:"relative",zIndex:1,flex:1,minHeight:0,overflowY:isMobile?"auto":"hidden"}}>
        {cards.map(c=>(
          <div key={c.name} className={`${CX[c.v]} lg-prism lg-hover`} style={{borderRadius:"16px",padding:isMobile?"16px":"clamp(14px,2vh,20px) clamp(14px,1.8vw,20px)",display:"flex",flexDirection:"column"}}>
            <div style={{width:"38px",height:"38px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",marginBottom:"10px",border:`1px solid ${CC[c.v]}40`,background:`${CC[c.v]}12`,boxShadow:`0 4px 14px ${CC[c.v]}25`,flexShrink:0,position:"relative",zIndex:1}}>{c.icon}</div>
            <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1rem",fontWeight:700,color:"var(--text)",marginBottom:"3px",position:"relative",zIndex:1}}>{c.name}</div>
            <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".52rem",letterSpacing:".14em",textTransform:"uppercase",padding:"2px 8px",borderRadius:"20px",marginBottom:"9px",display:"inline-block",color:CC[c.v],background:`${CC[c.v]}15`,border:`1px solid ${CC[c.v]}35`,flexShrink:0,position:"relative",zIndex:1}}>{c.tag}</div>
            <p style={{fontFamily:"var(--font-inter)",fontSize:".72rem",color:"var(--muted)",lineHeight:1.6,marginBottom:"9px",flex:1,position:"relative",zIndex:1}}>{c.desc}</p>
            <ul style={{display:"flex",flexDirection:"column",gap:"5px",position:"relative",zIndex:1}}>
              {c.feats.map(f=>(
                <li key={f} style={{fontFamily:"var(--font-inter)",fontSize:".67rem",color:"var(--dim)",display:"flex",alignItems:"flex-start",gap:"6px"}}>
                  <span style={{color:CC[c.v],flexShrink:0,fontSize:".6rem",marginTop:"1px"}}>→</span>{f}
                </li>
              ))}
            </ul>
            {c.link && (
              <a href={c.link} target="_blank" rel="noopener noreferrer" style={{marginTop:"10px",display:"inline-flex",alignItems:"center",gap:"5px",fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".08em",textTransform:"uppercase",color:CC[c.v],textDecoration:"none",position:"relative",zIndex:1}}>
                Open app &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
