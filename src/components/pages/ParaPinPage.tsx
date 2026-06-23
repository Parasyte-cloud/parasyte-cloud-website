interface Props { id: string; contentH: string; }

export default function ParaPinPage({id,contentH}:Props){
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
    <div id={id} style={{height:contentH,background:"var(--bg)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 50% 80% at 8% 50%,rgba(0,212,255,.05),transparent 60%),radial-gradient(ellipse 50% 80% at 92% 50%,rgba(255,106,0,.05),transparent 60%)",pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,4vw,64px)",alignItems:"center",height:"100%",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#ffb800",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Secure Comms<span style={{display:"block",width:"28px",height:"1px",background:"#ffb800",opacity:.4}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"var(--text)",marginBottom:"10px",lineHeight:1.05}}>PArA PIN</h2>
          <p style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(.95rem,1.8vw,1.15rem)",fontStyle:"italic",color:"rgba(0,212,255,.75)",marginBottom:"12px",lineHeight:1.35}}>&quot;Your number is for everyone.<br/>Your PArA PIN is for the ones that matter.&quot;</p>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".84rem",color:"var(--muted)",lineHeight:1.65,marginBottom:"20px",maxWidth:"420px"}}>A 7-digit hardware-bound identifier replaces your phone number as the access key. Share it intentionally. Own who can reach you.</p>
          <div style={{display:"flex",flexDirection:"column",gap:"13px"}}>
            {feats.map(f=>(
              <div key={f.n} style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",color:"var(--dim)",border:"1px solid rgba(255,255,255,.07)",padding:"2px 6px",borderRadius:"4px",flexShrink:0,marginTop:"2px"}}>{f.n}</div>
                <div>
                  <div style={{fontFamily:"var(--font-inter)",fontSize:".83rem",fontWeight:600,color:"var(--text)",marginBottom:"2px"}}>{f.t}</div>
                  <div style={{fontFamily:"var(--font-inter)",fontSize:".73rem",color:"var(--dim)",lineHeight:1.5}}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{width:"210px",background:"var(--s2)",border:"1px solid rgba(255,255,255,.08)",borderRadius:"30px",padding:"14px 10px",boxShadow:"0 0 0 1px rgba(0,212,255,.07),0 30px 70px rgba(0,0,0,.6)"}}>
            <div style={{width:"52px",height:"5px",background:"var(--s3)",borderRadius:"3px",margin:"0 auto 10px"}}/>
            <div style={{background:"var(--bg)",borderRadius:"18px",padding:"12px",minHeight:"320px"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"}}>
                <span style={{fontFamily:"var(--font-rajdhani)",fontSize:".8rem",fontWeight:700,color:"#00d4ff",letterSpacing:".05em"}}>PArA PIN</span>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px rgba(74,222,128,.5)",display:"block"}}/>
              </div>
              <div style={{background:"var(--s1)",border:"1px solid rgba(0,212,255,.15)",borderRadius:"10px",padding:"10px",textAlign:"center",marginBottom:"10px"}}>
                <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".5rem",letterSpacing:".2em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"5px"}}>Your PArA PIN</div>
                <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1.45rem",fontWeight:700,color:"#00d4ff",letterSpacing:".3em",textShadow:"0 0 14px rgba(0,212,255,.4)"}}>4·8·1·9·3·2·7</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                {msgs.map((m,i)=>(
                  <div key={i} style={{display:"flex",flexDirection:"column",alignItems:m.side==="me"?"flex-end":"flex-start"}}>
                    <div style={{maxWidth:"80%",padding:"7px 9px",borderRadius:"9px",fontSize:".62rem",lineHeight:1.45,fontFamily:"var(--font-inter)",background:m.side==="me"?"rgba(0,212,255,.12)":"var(--s3)",color:m.side==="me"?"#00d4ff":"var(--text)",border:m.side==="me"?"1px solid rgba(0,212,255,.14)":"none",borderBottomLeftRadius:m.side==="them"?"2px":"9px",borderBottomRightRadius:m.side==="me"?"2px":"9px"}}>{m.text}</div>
                    <span style={{fontFamily:"var(--font-jetbrains)",fontSize:".48rem",color:"var(--dim)",margin:"2px 4px"}}>{m.time}</span>
                  </div>
                ))}
              </div>
              <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".5rem",color:"#ffb800",textAlign:"center",marginTop:"8px",opacity:.7}}>⏱ Messages disappear in 24h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
