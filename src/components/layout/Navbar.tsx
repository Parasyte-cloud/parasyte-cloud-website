"use client";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const NAV=[
  {label:"Home",page:0},{label:"Products",page:1},{label:"Development",page:2},
  {label:"Scanner",page:3},{label:"Platform",page:4},{label:"PArA PIN",page:5},
  {label:"Infra",page:6},{label:"Contact",page:7},
];
const BROWSER_DOWNLOAD_URL = "https://github.com/Parasyte-cloud/gatehouse/releases/download/v0.1.0-desktop/PArAsYtE.Browser-0.1.0-arm64.dmg";

interface Props{curPage:number;goPage:(n:number)=>void}

export default function Navbar({curPage,goPage}:Props){
  const [open,setOpen]=useState(false);
  const go=(n:number)=>{goPage(n);setOpen(false)};

  return(
    <>
      <nav className="lg lg-dark" style={{
        height:"var(--nav-h)",width:"100%",flexShrink:0,
        display:"flex",alignItems:"center",
        padding:"0 clamp(16px,4vw,56px)",
        borderBottom:"1px solid rgba(255,255,255,0.08)",
        borderRadius:0,position:"relative",zIndex:100,
      }}>
        {/* Logo */}
        <button onClick={()=>go(0)} style={{fontFamily:"var(--font-rajdhani)",fontSize:"1.3rem",fontWeight:700,letterSpacing:".04em",flexShrink:0,background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"baseline",gap:"3px",padding:0,position:"relative",zIndex:1}}>
          <span style={{color:"#00d4ff",filter:"drop-shadow(0 0 8px rgba(0,212,255,.6))"}}>P</span>
          <span style={{color:"#e8edf5"}}>A</span><span style={{color:"var(--muted)"}}>r</span>
          <span style={{color:"#e8edf5"}}>A</span><span style={{color:"var(--muted)"}}>s</span>
          <span style={{color:"#ff6a00",filter:"drop-shadow(0 0 8px rgba(255,106,0,.6))"}}>Y</span>
          <span style={{color:"var(--muted)"}}>t</span><span style={{color:"#e8edf5"}}>E</span>
          <span style={{color:"var(--dim)",fontSize:".7rem",fontWeight:400,marginLeft:"3px"}}>cloud</span>
        </button>

        {/* Desktop nav pill group */}
        <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 12px",position:"relative",zIndex:1}} className="desk-nav">
          <div className="lg" style={{display:"flex",gap:"1px",borderRadius:"12px",padding:"3px",background:"rgba(255,255,255,0.04)"}}>
            {NAV.map(n=>(
              <button key={n.page} onClick={()=>go(n.page)} style={{
                fontFamily:"var(--font-inter)",fontSize:".73rem",fontWeight:500,
                color:curPage===n.page?"#00d4ff":"var(--muted)",
                background:curPage===n.page?"rgba(0,212,255,0.12)":"transparent",
                padding:"5px 12px",borderRadius:"8px",border:"none",cursor:"pointer",
                transition:"all .2s",whiteSpace:"nowrap",
                boxShadow:curPage===n.page?"0 2px 0 rgba(0,212,255,0.15) inset":"none",
                position:"relative",zIndex:1,
              }}>{n.label}</button>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{display:"flex",gap:"8px",flexShrink:0,position:"relative",zIndex:1}} className="desk-ctas">
          <a href={BROWSER_DOWNLOAD_URL} className="btn-ice" style={{fontSize:".72rem",padding:"6px 14px",display:"inline-flex",alignItems:"center",gap:"5px",textDecoration:"none"}}>
            <Download size={13}/> Browser (macOS)
          </a>
          <button onClick={()=>go(3)} className="btn-ice" style={{fontSize:".72rem",padding:"6px 14px"}}>Scanner</button>
          <button onClick={()=>go(7)} className="btn-solid" style={{fontSize:".72rem",padding:"6px 14px",color:"#000"}}>Get Access</button>
        </div>

        <button onClick={()=>setOpen(v=>!v)} style={{marginLeft:"auto",padding:"6px",color:"var(--muted)",background:"none",border:"none",cursor:"pointer",flexShrink:0,position:"relative",zIndex:1}} className="mob-ham">
          {open?<X size={20}/>:<Menu size={20}/>}
        </button>
      </nav>

      {open&&(
        <div className="lg lg-dark" style={{position:"fixed",top:"var(--nav-h)",left:0,right:0,zIndex:99,borderBottom:"1px solid rgba(255,255,255,.08)",display:"flex",flexDirection:"column",gap:"2px",padding:"12px 16px 16px",borderRadius:0}}>
          {NAV.map(n=>(
            <button key={n.page} onClick={()=>go(n.page)} style={{fontFamily:"var(--font-inter)",fontSize:".9rem",color:curPage===n.page?"#00d4ff":"var(--muted)",padding:"11px 14px",borderRadius:"8px",textAlign:"left",background:curPage===n.page?"rgba(0,212,255,.09)":"none",border:"none",cursor:"pointer",transition:"all .18s",position:"relative",zIndex:1}}>{n.label}</button>
          ))}
          <a href={BROWSER_DOWNLOAD_URL} className="btn-ice" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:".85rem",padding:"11px",marginTop:"12px",textDecoration:"none"}}>
            <Download size={15}/> Download Browser (macOS)
          </a>
          <div style={{display:"flex",gap:"8px",paddingTop:"10px",borderTop:"1px solid rgba(255,255,255,.07)",marginTop:"10px"}}>
            <button onClick={()=>go(3)} className="btn-ice" style={{flex:1,fontSize:".8rem",padding:"10px"}}>Scanner</button>
            <button onClick={()=>go(7)} className="btn-solid" style={{flex:1,fontSize:".8rem",padding:"10px",color:"#000"}}>Get Access</button>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:900px){.desk-nav{display:none!important}.desk-ctas{display:none!important}.mob-ham{display:flex!important}}
        @media(min-width:901px){.mob-ham{display:none!important}}
      `}</style>
    </>
  );
}
