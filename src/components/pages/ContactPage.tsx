import { PAGE_INDEX } from "@/lib/pages";
interface Props{id:string;contentH:string;goPage:(n:number)=>void;isMobile:boolean}
export default function ContactPage({id,contentH,goPage,isMobile}:Props){
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:isMobile?"80px 20px 40px":"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div className="orb-field">
        <div className="orb orb-ice" style={{animationDelay:"-6s"}}/>
        <div className="orb orb-fire" style={{animationDelay:"-14s"}}/>
        <div className="orb orb-mid" style={{animationDelay:"-3s"}}/>
      </div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?"32px":"clamp(28px,5vw,80px)",alignItems:"center",height:isMobile?"auto":"100%",position:"relative",zIndex:1}}>
        {/* Left info */}
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#00d4ff",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Get Access</div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:isMobile?"2rem":"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>Work with<br/>PArAsYtE cloud</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".84rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"28px",maxWidth:"400px"}}>Currently in private access. We&apos;re onboarding select organizations for the EDR + RMM + DLP platform.</p>
          <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            {[
              {l:"Status",v:"Private Access",s:"Limited early access for qualifying organizations"},
              {l:"Platform",v:"EDR · RMM · DLP · AWS Scanner",s:"Self-hosted, hardware-bound, bare-metal Kubernetes"},
              {l:"Built by",v:"PArAsYtE cloud",s:"Independent security and infrastructure engineering"},
            ].map(m=>(
              <div key={m.l}>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"3px"}}>{m.l}</div>
                <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1rem",fontWeight:600,color:"var(--text)",letterSpacing:".03em",marginBottom:"2px"}}>{m.v}</div>
                <div style={{fontFamily:"var(--font-inter)",fontSize:".74rem",color:"var(--muted)"}}>{m.s}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right - big glass CTA card */}
        <div className="lg lg-prism" style={{borderRadius:"22px",padding:isMobile?"24px":"clamp(28px,4vh,44px) clamp(28px,3vw,40px)",position:"relative",overflow:"hidden",boxShadow:"0 2px 0 rgba(255,255,255,.14) inset, 0 40px 100px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.10)"}}>
          {/* Subtle colour wash inside card */}
          <div style={{position:"absolute",top:0,left:0,right:0,height:"50%",background:"linear-gradient(180deg,rgba(0,212,255,.04),transparent)",pointerEvents:"none"}}/>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"6px",position:"relative",zIndex:1}}>Direct Contact</div>
          <a href="mailto:infra@parasyte.cloud" style={{fontFamily:"var(--font-jetbrains)",fontSize:isMobile?"0.85rem":"clamp(.85rem,2vw,1.05rem)",letterSpacing:".05em",color:"#00d4ff",display:"block",marginBottom:"14px",transition:"all .25s",wordBreak:"break-all",position:"relative",zIndex:1,textShadow:"0 0 14px rgba(0,212,255,.4)"}}
            onMouseEnter={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.color="#ff6a00";a.style.textShadow="0 0 14px rgba(255,106,0,.45)"}}
            onMouseLeave={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.color="#00d4ff";a.style.textShadow="0 0 14px rgba(0,212,255,.4)"}}>
            infra@parasyte.cloud
          </a>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".82rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"24px",position:"relative",zIndex:1}}>For enterprise deployments, security assessments, early access, browser releases or mobile beta enquiries.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"22px",position:"relative",zIndex:1}}>
            <a href="mailto:infra@parasyte.cloud" className="btn-solid" style={{fontSize:".88rem",color:"#000",textDecoration:"none"}}>Request Access</a>
            <button onClick={()=>goPage(PAGE_INDEX.scanner)} className="btn-fire" style={{fontSize:".88rem"}}>Try Scanner</button>
          </div>
          <div style={{paddingTop:"18px",borderTop:"1px solid rgba(255,255,255,.08)",position:"relative",zIndex:1}}>
            <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",color:"var(--dim)",letterSpacing:".2em",textTransform:"uppercase",marginBottom:"10px"}}>Also available</div>
            <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
              {[["LinkedIn","https://linkedin.com/company/parasyte-cloud"],["GitHub","https://github.com/Parasyte-cloud"],["X / Twitter","https://x.com/parasyte_cloud"]].map(([l,u])=>(
                <a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--font-inter)",fontSize:".75rem",color:"var(--muted)",transition:"color .2s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.color="#00d4ff"}}
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
