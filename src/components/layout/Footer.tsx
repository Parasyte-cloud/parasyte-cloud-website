"use client";
const links=["Home","Products","Development","Scanner","Platform","PArA PIN","Infra","Contact"];
export default function Footer(){
  const go=(i:number)=>{
    const ids=["hero","products","dev","scanner","platform","parapin","infra","contact"];
    document.getElementById(`pg-${ids[i]}`)?.scrollIntoView({behavior:"smooth",block:"start"});
  };
  return(
    <footer className="lg lg-dark" style={{height:"var(--foot-h)",flexShrink:0,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderTop:"1px solid rgba(255,255,255,.07)",position:"relative",zIndex:100,borderRadius:0}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,rgba(0,212,255,.5),rgba(255,255,255,.6),rgba(255,106,0,.5),transparent)",zIndex:1}}/>
      <div style={{width:"min(720px,92vw)",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",position:"relative",zIndex:1}}>
        <div style={{display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap",justifyContent:"center"}}>
          <div style={{fontFamily:"var(--font-rajdhani)",fontSize:"1rem",fontWeight:700,letterSpacing:".06em"}}>
            <span style={{color:"#00d4ff"}}>PA</span><span style={{color:"var(--muted)"}}>rAs</span><span style={{color:"#ff6a00"}}>Yt</span><span style={{color:"var(--muted)"}}>E</span>
            <span style={{color:"var(--dim)",fontWeight:400,fontSize:".75rem",marginLeft:"3px"}}>cloud</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",justifyContent:"center"}}>
            {links.map((l,i)=>(
              <span key={l} style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <button onClick={()=>go(i)} style={{fontFamily:"var(--font-inter)",fontSize:".7rem",color:"var(--dim)",background:"none",border:"none",cursor:"pointer",transition:"color .2s",padding:0}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.color="var(--muted)"}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.color="var(--dim)"}}>{l}</button>
                {i<links.length-1&&<span style={{color:"var(--dim)",opacity:.3,fontSize:".5rem"}}>·</span>}
              </span>
            ))}
          </div>
        </div>
        <p style={{fontFamily:"var(--font-jetbrains)",fontSize:".57rem",color:"var(--dim)",letterSpacing:".12em",textTransform:"uppercase",textAlign:"center"}}>
          © 2026 PArAsYtE cloud · Security · Intelligence · Control · infra@parasyte.cloud
        </p>
      </div>
    </footer>
  );
}
