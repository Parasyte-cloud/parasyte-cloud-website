interface Props { id: string; contentH: string; goPage: (n: number) => void; }
export default function ContactPage({id,contentH,goPage}:Props){
  return(
    <div id={id} className="snap-page" style={{height:contentH,background:"var(--bg)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 50% 80% at 8% 50%,rgba(0,212,255,.05),transparent 60%),radial-gradient(ellipse 50% 80% at 92% 50%,rgba(255,106,0,.05),transparent 60%)",pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,5vw,80px)",alignItems:"center",height:"100%",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"var(--ice)",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Get Access<span style={{display:"block",width:"28px",height:"1px",background:"var(--ice)",opacity:.4}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>Work with<br/>PArAsYtE cloud</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".84rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"24px",maxWidth:"400px"}}>Currently in private access. We're onboarding select organizations for the EDR + RMM + DLP platform.</p>
          <div style={{display:"flex",flexDirection:"column",gap:"18px"}}>
            {[{l:"Status",v:"Private Access",s:"Limited early access for qualifying organizations"},{l:"Platform",v:"EDR · RMM · DLP · AWS Scanner",s:"Self-hosted, hardware-bound, bare-metal Kubernetes"},{l:"Built by",v:"Biola Lawal",s:"parasyte.cloud · Lagos, Nigeria"}].map(m=>(
              <div key={m.l}>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"3px"}}>{m.l}</div>
                <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1rem",fontWeight:600,color:"var(--text)",letterSpacing:".03em",marginBottom:"2px"}}>{m.v}</div>
                <div style={{fontFamily:"var(--font-inter)",fontSize:".74rem",color:"var(--muted)"}}>{m.s}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{background:"var(--s1)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"16px",padding:"clamp(24px,4vh,40px) clamp(24px,3vw,36px)",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,var(--ice),var(--fire),transparent)"}}/>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"6px"}}>Direct Contact</div>
          <a href="mailto:infra@parasyte.cloud" style={{fontFamily:"var(--font-jetbrains)",fontSize:"clamp(.85rem,2vw,1.05rem)",letterSpacing:".05em",color:"var(--ice)",display:"block",marginBottom:"14px",transition:"color .25s"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.color="var(--fire)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.color="var(--ice)"}}>infra@parasyte.cloud</a>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"22px"}}>For enterprise deployments, security assessments, or early access to the full platform. We respond within 24 hours.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"20px"}}>
            <a href="mailto:infra@parasyte.cloud" style={{fontFamily:"var(--font-rajdhani)",fontSize:".88rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",padding:"12px 28px",borderRadius:"8px",background:"linear-gradient(135deg,var(--ice),var(--ice-mid))",color:"#000",transition:"all .22s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLAnchorElement).style.boxShadow="0 6px 24px rgba(0,212,255,.35)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="";(e.currentTarget as HTMLAnchorElement).style.boxShadow=""}}>Request Access</a>
            <button onClick={()=>goPage(2)} style={{fontFamily:"var(--font-rajdhani)",fontSize:".88rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",padding:"12px 28px",borderRadius:"8px",border:"1px solid rgba(255,106,0,.22)",color:"var(--fire)",background:"transparent",cursor:"pointer",transition:"all .22s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.background="rgba(255,106,0,.08)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.background="transparent"}}>Try Scanner</button>
          </div>
          <div style={{paddingTop:"16px",borderTop:"1px solid rgba(255,255,255,.06)"}}>
            <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",color:"var(--dim)",letterSpacing:".2em",textTransform:"uppercase",marginBottom:"8px"}}>Also available</div>
            <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
              {[["LinkedIn","https://linkedin.com/company/parasyte-cloud"],["GitHub","https://github.com/parasyte-cloud"],["X / Twitter","https://x.com/parasyte_cloud"]].map(([l,u])=>(
                <a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--font-inter)",fontSize:".75rem",color:"var(--muted)",transition:"color .2s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.color="var(--ice)"}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.color="var(--muted)"}}>
                  {l} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
