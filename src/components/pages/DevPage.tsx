interface Props{id:string;contentH:string;goPage:(n:number)=>void;isMobile:boolean}
const CX:Record<string,string>={ice:"lg-ice",fire:"lg-fire",amber:"lg-amber"};
const CC:Record<string,string>={ice:"#00d4ff",fire:"#ff6a00",amber:"#ffb800"};

export default function DevPage({id,contentH,goPage,isMobile}:Props){
  const services=[
    {icon:"\u{1F4F1}",name:"Mobile Applications",tag:"iOS & Android",v:"ice",desc:"Native and cross-platform apps with React Native. Concept to App Store.",feats:["React Native cross-platform","Native iOS & Android","Offline-first architecture","Push notifications & auth"]},
    {icon:"\u{1F310}",name:"Web Applications",tag:"Full-Stack",v:"fire",desc:"Production-grade web apps with Next.js, React, and FastAPI.",feats:["Next.js 14 App Router","FastAPI Python backends","PostgreSQL & REST APIs","Auth, payments, dashboards"]},
    {icon:"\u{1F3A8}",name:"Website Design",tag:"UI/UX & Brand",v:"amber",desc:"High-impact marketing sites crafted to your brand. Not templates.",feats:["Custom design from scratch","Vercel / Cloudflare deploy","SEO optimized & fast","Responsive on all devices"]},
    {icon:"\u{1F50C}",name:"API & Integrations",tag:"Backend Engineering",v:"ice",desc:"RESTful and WebSocket APIs, third-party integrations, automation pipelines.",feats:["REST & WebSocket APIs","Third-party integrations","Webhook pipelines","Stripe, Twilio, AWS & more"]},
    {icon:"\u{2601}",name:"Cloud & DevOps",tag:"Infrastructure",v:"fire",desc:"AWS architecture, Kubernetes, CI/CD. The stack that powers PArAsYtE.",feats:["AWS CDK & Terraform","Kubernetes bare-metal","ArgoCD GitOps pipelines","Monitoring & alerting"]},
    {icon:"\u{1F6E1}",name:"Security Consulting",tag:"Assessments",v:"amber",desc:"Security architecture reviews and threat modelling from real EDR builders.",feats:["Architecture review","Threat modelling","Code & infra audits","Compliance guidance"]},
  ];
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",padding:isMobile?"80px 20px 40px":"clamp(20px,3.5vh,40px) clamp(24px,5vw,72px) clamp(16px,2.5vh,28px)"}}>
      <div className="orb-field"><div className="orb orb-fire" style={{animationDelay:"-5s"}}/><div className="orb orb-mid" style={{animationDelay:"-2s"}}/></div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,marginBottom:"clamp(14px,2.2vh,22px)",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"12px"}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#ff6a00",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}>Development Services<span style={{width:"28px",height:"1px",background:"#ff6a00",opacity:.5,display:"block"}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:700,color:"var(--text)",marginBottom:"3px"}}>We build what you need.</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)"}}>Apps, websites, APIs, infrastructure — end-to-end delivery from the team behind PArAsYtE.</p>
        </div>
        <button onClick={()=>goPage(7)} className="btn-fire" style={{fontSize:".82rem",flexShrink:0}}>Start a Project \u2192</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:"12px",position:"relative",zIndex:1,flex:1,minHeight:0,overflowY:isMobile?"auto":"hidden"}}>
        {services.map(s=>(
          <div key={s.name} className={`${CX[s.v]} lg-prism lg-hover`} style={{borderRadius:"16px",padding:isMobile?"16px":"clamp(14px,2vh,20px) clamp(14px,1.8vw,20px)",display:"flex",flexDirection:"column"}}>
            <div style={{width:"38px",height:"38px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",marginBottom:"10px",border:`1px solid ${CC[s.v]}40`,background:`${CC[s.v]}12`,boxShadow:`0 4px 14px ${CC[s.v]}25`,flexShrink:0,position:"relative",zIndex:1}}>{s.icon}</div>
            <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1rem",fontWeight:700,color:"var(--text)",marginBottom:"3px",position:"relative",zIndex:1}}>{s.name}</div>
            <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".52rem",letterSpacing:".14em",textTransform:"uppercase",padding:"2px 8px",borderRadius:"20px",marginBottom:"9px",display:"inline-block",color:CC[s.v],background:`${CC[s.v]}15`,border:`1px solid ${CC[s.v]}35`,flexShrink:0,position:"relative",zIndex:1}}>{s.tag}</div>
            <p style={{fontFamily:"var(--font-inter)",fontSize:".72rem",color:"var(--muted)",lineHeight:1.6,marginBottom:"9px",flex:1,position:"relative",zIndex:1}}>{s.desc}</p>
            <ul style={{display:"flex",flexDirection:"column",gap:"5px",position:"relative",zIndex:1}}>
              {s.feats.map(f=>(
                <li key={f} style={{fontFamily:"var(--font-inter)",fontSize:".67rem",color:"var(--dim)",display:"flex",alignItems:"flex-start",gap:"6px"}}>
                  <span style={{color:CC[s.v],flexShrink:0,fontSize:".6rem",marginTop:"1px"}}>\u2192</span>{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
