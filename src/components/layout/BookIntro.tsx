"use client";
import{useEffect,useState}from"react";
export default function BookIntro(){
  const[phase,setPhase]=useState<"waiting"|"opening"|"done">("waiting");
  const[isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const mob=window.innerWidth<=768;
    setIsMobile(mob);
    if(mob){
      const t1=setTimeout(()=>setPhase("opening"),400);
      const t2=setTimeout(()=>setPhase("done"),1400);
      return()=>{clearTimeout(t1);clearTimeout(t2)};
    }else{
      const t1=setTimeout(()=>setPhase("opening"),700);
      const t2=setTimeout(()=>setPhase("done"),2300);
      return()=>{clearTimeout(t1);clearTimeout(t2)};
    }
  },[]);
  if(phase==="done")return null;
  const isOpen=phase==="opening";
  if(isMobile)return(
    <div style={{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"8px",background:"#060a12",opacity:isOpen?0:1,transition:"opacity .6s ease",pointerEvents:isOpen?"none":"all"}}>
      <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"3rem",fontWeight:700,letterSpacing:".04em",lineHeight:1}}>
        <span style={{color:"#00d4ff",filter:"drop-shadow(0 0 16px rgba(0,212,255,.6))"}}>P</span><span style={{color:"#fff"}}>Ar</span><span style={{color:"#ff6a00",filter:"drop-shadow(0 0 16px rgba(255,106,0,.6))"}}>A</span><span style={{color:"#fff"}}>sYt</span><span style={{color:"#ff6a00"}}>E</span>
      </div>
      <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".65rem",color:"var(--dim)",letterSpacing:".3em",textTransform:"uppercase"}}>cloud</div>
    </div>
  );
  return(
    <div style={{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"#060a12",opacity:isOpen?0:1,transition:"opacity .5s ease 1.3s",pointerEvents:isOpen?"none":"all"}}>
      {/* Left curtain */}
      <div style={{position:"absolute",top:0,left:0,width:"50%",height:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"8vw",background:"linear-gradient(120deg,#020408,#060e1a)",borderRight:"1px solid rgba(0,212,255,0.15)",transformOrigin:"left center",transform:isOpen?"rotateY(-100deg) translateX(-6%)":"none",transition:"transform 1.3s cubic-bezier(.77,0,.175,1)",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 100% 50%,rgba(0,212,255,.09),transparent 65%)"}}/>
        <div style={{position:"relative",textAlign:"right"}}>
          <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.4rem,3.5vw,2.8rem)",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#00d4ff",textShadow:"0 0 30px rgba(0,212,255,.5)",lineHeight:1.1}}>Security<br/>Intelligence</div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".68rem",color:"var(--dim)",letterSpacing:".22em",textTransform:"uppercase",marginTop:"8px"}}>EDR · RMM · DLP</div>
        </div>
      </div>
      {/* Spine */}
      <div style={{position:"absolute",zIndex:10,textAlign:"center",pointerEvents:"none",opacity:isOpen?0:1,transition:"opacity .2s ease"}}>
        <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(2rem,4vw,3.5rem)",fontWeight:700,letterSpacing:".04em",lineHeight:1}}>
          <span style={{color:"#00d4ff",filter:"drop-shadow(0 0 16px rgba(0,212,255,.6))"}}>P</span><span style={{color:"#fff"}}>Ar</span><span style={{color:"#ff6a00",filter:"drop-shadow(0 0 16px rgba(255,106,0,.6))"}}>A</span><span style={{color:"#fff"}}>sYt</span><span style={{color:"#ff6a00"}}>E</span>
        </div>
        <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".65rem",color:"var(--dim)",letterSpacing:".25em",marginTop:"6px"}}>cloud</div>
      </div>
      {/* Right curtain */}
      <div style={{position:"absolute",top:0,right:0,width:"50%",height:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",paddingLeft:"8vw",background:"linear-gradient(240deg,#020408,#120803)",borderLeft:"1px solid rgba(255,106,0,0.15)",transformOrigin:"right center",transform:isOpen?"rotateY(100deg) translateX(6%)":"none",transition:"transform 1.3s cubic-bezier(.77,0,.175,1)",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 0% 50%,rgba(255,106,0,.09),transparent 65%)"}}/>
        <div style={{position:"relative"}}>
          <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.4rem,3.5vw,2.8rem)",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#ff6a00",textShadow:"0 0 30px rgba(255,106,0,.5)",lineHeight:1.1}}>Control<br/>Visibility</div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".68rem",color:"var(--dim)",letterSpacing:".22em",textTransform:"uppercase",marginTop:"8px"}}>Secure Comms · DevOps</div>
        </div>
      </div>
    </div>
  );
}
