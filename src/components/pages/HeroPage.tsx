"use client";
interface Props{id:string;contentH:string;goPage:(n:number)=>void;isMobile:boolean}
export default function HeroPage({id,contentH,goPage,isMobile}:Props){
  const stats=[
    {val:"EDR",  label:"Endpoint Detection",  desc:"Hardware-bound agents for Win, Mac, Linux, Chrome", color:"#00d4ff", cls:"lg-ice"},
    {val:"RMM",  label:"Remote Management",   desc:"3-tier portal: agent → org admin → master view",    color:"#ff6a00", cls:"lg-fire"},
    {val:"DLP",  label:"Data Loss Prevention",desc:"USB blocking, site restriction, file monitoring",   color:"#ffb800", cls:"lg-amber"},
    {val:"mTLS", label:"Agent Security",      desc:"Mutual TLS + hardware PIN for all agent comms",     color:"#00d4ff", cls:"lg-ice"},
  ];
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:isMobile?"80px 20px 40px":"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      {/* Orbs bleed through the glass */}
      <div className="orb-field">
        <div className="orb orb-ice"/>
        <div className="orb orb-fire"/>
        <div className="orb orb-mid"/>
      </div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      {!isMobile&&<div style={{position:"absolute",left:"50%",top:"8%",bottom:"8%",width:"1px",background:"linear-gradient(180deg,transparent,rgba(255,255,255,.07) 30%,rgba(255,255,255,.07) 70%,transparent)",pointerEvents:"none"}}/>}

      {isMobile?(
        <div style={{position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:"28px"}}>
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-jetbrains)",fontSize:".6rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"18px"}}>
              <span className="pulse" style={{width:"5px",height:"5px",borderRadius:"50%",background:"#00d4ff",flexShrink:0,display:"block"}}/>
              Private access · Now available
            </div>
            <h1 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(2.8rem,14vw,5rem)",fontWeight:700,lineHeight:".95",marginBottom:"6px"}}>
              <span style={{color:"#00d4ff",filter:"drop-shadow(0 0 14px rgba(0,212,255,.5))"}}>P</span><span style={{color:"var(--text)"}}>A</span><span style={{color:"var(--muted)"}}>r</span><span style={{color:"var(--text)"}}>A</span><span style={{color:"var(--muted)"}}>s</span><span style={{color:"#ff6a00",filter:"drop-shadow(0 0 14px rgba(255,106,0,.5))"}}>Y</span><span style={{color:"var(--muted)"}}>t</span><span style={{color:"var(--text)"}}>E</span>
            </h1>
            <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1.4rem",fontWeight:300,letterSpacing:".18em",color:"var(--dim)",marginBottom:"16px"}}>cloud</div>
            <div style={{width:"120px",height:"1px",background:"linear-gradient(90deg,#00d4ff,rgba(255,255,255,.5),#ff6a00)",opacity:.6,marginBottom:"12px"}}/>
            <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".6rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"22px"}}>
              <span style={{color:"#00d4ff"}}>Security</span>&nbsp;·&nbsp;Intelligence&nbsp;·&nbsp;<span style={{color:"#ff6a00"}}>Control</span>
            </div>
            <p style={{fontFamily:"var(--font-inter)",fontSize:".9rem",color:"var(--muted)",lineHeight:1.7,marginBottom:"24px"}}>Self-hosted endpoint security combining EDR, RMM, and DLP on bare-metal Kubernetes. No managed cloud. Full ownership.</p>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
              <button onClick={()=>goPage(7)} className="btn-solid" style={{fontSize:".88rem",color:"#000"}}>Request Access</button>
              <button onClick={()=>goPage(3)} className="btn-fire" style={{fontSize:".88rem"}}>Try Scanner →</button>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
            {stats.map(s=>(
              <div key={s.val} className={`${s.cls} lg-prism lg-hover`} style={{borderRadius:"16px",padding:"16px"}}>
                <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1.8rem",fontWeight:700,lineHeight:1,color:s.color,filter:`drop-shadow(0 0 10px ${s.color}80)`,marginBottom:"3px",position:"relative",zIndex:1}}>{s.val}</div>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".54rem",letterSpacing:".15em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"5px",position:"relative",zIndex:1}}>{s.label}</div>
                <div style={{fontFamily:"var(--font-inter)",fontSize:".72rem",color:"var(--muted)",lineHeight:1.4,position:"relative",zIndex:1}}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ):(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,height:"100%",alignItems:"center",position:"relative",zIndex:1}}>
          <div style={{paddingRight:"clamp(24px,4vw,64px)",borderRight:"1px solid rgba(255,255,255,.07)",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"22px"}}>
              <span className="pulse" style={{width:"5px",height:"5px",borderRadius:"50%",background:"#00d4ff",flexShrink:0,display:"block"}}/>
              Private access · Now available
            </div>
            <h1 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(3.5rem,8vw,7rem)",fontWeight:700,lineHeight:".95",letterSpacing:"-.01em",marginBottom:"6px"}}>
              <span style={{color:"#00d4ff",filter:"drop-shadow(0 0 18px rgba(0,212,255,.55))"}}>P</span><span style={{color:"var(--text)"}}>A</span><span style={{color:"var(--muted)"}}>r</span><span style={{color:"var(--text)"}}>A</span><span style={{color:"var(--muted)"}}>s</span><span style={{color:"#ff6a00",filter:"drop-shadow(0 0 18px rgba(255,106,0,.55))"}}>Y</span><span style={{color:"var(--muted)"}}>t</span><span style={{color:"var(--text)"}}>E</span>
            </h1>
            <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1rem,2.5vw,1.8rem)",fontWeight:300,letterSpacing:".18em",color:"var(--dim)",marginBottom:"22px"}}>cloud</div>
            <div style={{width:"160px",height:"1px",background:"linear-gradient(90deg,#00d4ff,rgba(255,255,255,.5),#ff6a00)",opacity:.6,marginBottom:"18px"}}/>
            <div style={{fontFamily:"var(--font-jetbrains)",fontSize:"clamp(.6rem,1.2vw,.78rem)",letterSpacing:".28em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"28px"}}>
              <span style={{color:"#00d4ff"}}>Security</span>&nbsp;·&nbsp;Intelligence&nbsp;·&nbsp;<span style={{color:"#ff6a00"}}>Control</span>
            </div>
            <p style={{fontFamily:"var(--font-inter)",fontSize:"clamp(.82rem,1.5vw,.92rem)",color:"var(--muted)",lineHeight:1.75,maxWidth:"420px",marginBottom:"28px"}}>Self-hosted endpoint security combining EDR, RMM, and DLP on bare-metal Kubernetes. No managed cloud. Full ownership.</p>
            <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
              <button onClick={()=>goPage(7)} className="btn-solid" style={{fontSize:".88rem",color:"#000"}}>Request Access</button>
              <button onClick={()=>goPage(3)} className="btn-fire" style={{fontSize:".88rem"}}>Try Scanner →</button>
            </div>
          </div>
          <div style={{paddingLeft:"clamp(24px,4vw,64px)",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
            {stats.map(s=>(
              <div key={s.val} className={`${s.cls} lg-prism lg-hover`} style={{borderRadius:"18px",padding:"clamp(14px,2vh,22px) clamp(14px,2vw,20px)"}}>
                <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:700,lineHeight:1,color:s.color,filter:`drop-shadow(0 0 12px ${s.color}70)`,marginBottom:"5px",position:"relative",zIndex:1}}>{s.val}</div>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",letterSpacing:".18em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"7px",position:"relative",zIndex:1}}>{s.label}</div>
                <div style={{fontFamily:"var(--font-inter)",fontSize:".75rem",color:"var(--muted)",lineHeight:1.45,position:"relative",zIndex:1}}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
