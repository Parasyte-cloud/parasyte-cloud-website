interface Props{id:string;contentH:string;isMobile:boolean}
export default function ParaPinPage({id,contentH,isMobile}:Props){
  const msgs=[
    {side:"them",text:"Hey — sending you my PIN",time:"09:41"},
    {side:"me",text:"Got it. Added.",time:"09:42"},
    {side:"them",text:"Nobody else has this",time:"09:42"},
    {side:"me",text:"That's the point 🔒",time:"09:43"},
  ];
  const feats=[
    {n:"01",t:"Hardware-Bound Identity",d:"Generated from MAC, CPU ID, disk serial. Lives on hardware, not in a database."},
    {n:"02",t:"PIN-Gated Access",d:"Phone number grants nothing. Only explicit PIN share grants messaging access."},
    {n:"03",t:"E2E over mTLS",d:"Same mTLS layer as the EDR fleet. Zero plaintext. Zero metadata leakage."},
  ];
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:isMobile?"80px 20px 40px":"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div className="orb-field"><div className="orb orb-fire" style={{animationDelay:"-8s"}}/><div className="orb orb-mid" style={{animationDelay:"-1s"}}/></div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?"32px":"clamp(28px,4vw,64px)",alignItems:"center",height:isMobile?"auto":"100%",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#ffb800",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Secure Comms<span style={{display:"block",width:"28px",height:"1px",background:"#ffb800",opacity:.5}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:isMobile?"2rem":"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>PArA PIN</h2>
          <p style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(.95rem,1.8vw,1.15rem)",fontStyle:"italic",color:"rgba(0,212,255,.85)",marginBottom:"14px",lineHeight:1.35}}>&quot;Your number is for everyone.<br/>Your PArA PIN is for the ones that matter.&quot;</p>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".84rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"22px"}}>A 7-digit hardware-bound identifier replaces your phone number as the access key.</p>
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            {feats.map(f=>(
              <div key={f.n} className="lg lg-prism" style={{display:"flex",gap:"12px",alignItems:"flex-start",borderRadius:"12px",padding:"12px 14px"}}>
                <div className="lg" style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",color:"var(--dim)",padding:"3px 8px",borderRadius:"6px",flexShrink:0,marginTop:"2px",position:"relative",zIndex:1}}>{f.n}</div>
                <div style={{position:"relative",zIndex:1}}>
                  <div style={{fontFamily:"var(--font-inter)",fontSize:".83rem",fontWeight:600,color:"var(--text)",marginBottom:"3px"}}>{f.t}</div>
                  <div style={{fontFamily:"var(--font-inter)",fontSize:".73rem",color:"var(--dim)",lineHeight:1.5}}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="https://chat.parasyte.cloud" target="_blank" rel="noopener noreferrer" className="lg-ice" style={{marginTop:"18px",display:"inline-flex",alignItems:"center",gap:"8px",padding:"11px 18px",borderRadius:"12px",textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:".82rem",fontWeight:600,color:"#00d4ff",position:"relative",zIndex:1}}>
            Open PArA PIN <span style={{fontSize:"1rem"}}>&rarr;</span>
          </a>
          <div style={{fontFamily:"var(--font-inter)",fontSize:".67rem",color:"var(--dim)",marginTop:"7px"}}>Runs at chat.parasyte.cloud &mdash; install it to your home screen for the full app experience.</div>
        </div>
        {/* Glass phone mockup */}
        <div style={{display:"flex",justifyContent:"center"}}>
          <div className="lg lg-prism" style={{
            width:isMobile?"190px":"215px",borderRadius:"34px",padding:"14px 10px",
            boxShadow:"0 2px 0 rgba(255,255,255,.16) inset, 0 0 0 1px rgba(0,212,255,.15), 0 40px 100px rgba(0,0,0,.65), 0 0 60px rgba(0,212,255,.06)",
          }}>
            <div className="lg" style={{width:"52px",height:"5px",borderRadius:"3px",margin:"0 auto 12px",border:"none",boxShadow:"none"}}/>
            {/* Screen */}
            <div style={{background:"rgba(0,0,0,.55)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderRadius:"22px",padding:"12px",minHeight:isMobile?"280px":"320px",border:"1px solid rgba(255,255,255,.08)",boxShadow:"inset 0 1px 0 rgba(255,255,255,.06)"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"}}>
                <span style={{fontFamily:"var(--font-rajdhani)",fontSize:".8rem",fontWeight:700,color:"#00d4ff",letterSpacing:".05em",textShadow:"0 0 12px rgba(0,212,255,.5)"}}>PArA PIN</span>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 10px rgba(74,222,128,.7)",display:"block"}}/>
              </div>
              {/* PIN display */}
              <div className="lg-ice" style={{borderRadius:"12px",padding:"10px",textAlign:"center",marginBottom:"10px",boxShadow:"0 2px 0 rgba(0,212,255,.15) inset, 0 0 20px rgba(0,212,255,.08)"}}>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".5rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"5px",position:"relative",zIndex:1}}>Your PArA PIN</div>
                <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1.45rem",fontWeight:700,color:"#00d4ff",letterSpacing:".3em",textShadow:"0 0 20px rgba(0,212,255,.7)",position:"relative",zIndex:1}}>4·8·1·9·3·2·7</div>
              </div>
              {/* Messages */}
              <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                {msgs.map((m,i)=>(
                  <div key={i} style={{display:"flex",flexDirection:"column",alignItems:m.side==="me"?"flex-end":"flex-start"}}>
                    <div className={m.side==="me"?"lg-ice":"lg"} style={{maxWidth:"82%",padding:"7px 10px",borderRadius:"10px",fontSize:".62rem",lineHeight:1.45,fontFamily:"var(--font-inter)",color:m.side==="me"?"#00d4ff":"var(--text)",borderBottomLeftRadius:m.side==="them"?"2px":"10px",borderBottomRightRadius:m.side==="me"?"2px":"10px",position:"relative",zIndex:1}}>{m.text}</div>
                    <span style={{fontFamily:"var(--font-jetbrains)",fontSize:".48rem",color:"var(--dim)",margin:"2px 4px"}}>{m.time}</span>
                  </div>
                ))}
              </div>
              <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".5rem",color:"#ffb800",textAlign:"center",marginTop:"10px",opacity:.75}}>⏱ Messages disappear in 24h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
