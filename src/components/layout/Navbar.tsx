"use client";
import { useState } from "react";
import { Menu, X, Download, Info, Car } from "lucide-react";

const NAV=[
  {label:"Home",page:0},{label:"Products",page:1},{label:"Development",page:2},
  {label:"Scanner",page:3},{label:"Platform",page:4},{label:"PArA PIN",page:5},
  {label:"Infra",page:6},{label:"Contact",page:7},
];
const DOWNLOAD_URLS = {
  mac: "https://github.com/Parasyte-cloud/gatehouse/releases/download/desktop-v0.1.1/PArAsYtE.Browser-0.1.0-arm64.dmg",
  win: "https://github.com/Parasyte-cloud/gatehouse/releases/download/desktop-v0.1.1/PArAsYtE.Browser.Setup.0.1.0.exe",
  linux: "https://github.com/Parasyte-cloud/gatehouse/releases/download/desktop-v0.1.1/PArAsYtE.Browser-0.1.0.AppImage",
};
const ROOM7_DESCRIPTION = "Room 7 is a white-label virtual event room inside RideArrivo's internal workspace, used for investor calls, town halls, and product launches - invitation- or passcode-gated, for guests outside the company. Built by Parasyte as part of RideArrivo's platform. It only opens with a specific event link, so there's no general app to open here.";
const ROOM7_URL = "https://room7.ridearrivo.com/r/WPWVK5XT"; // RideArrivo Official Launch event page - update if RideArrivo issues a new event link
const RIDEARRIVO_URL = "https://ridearrivo.com";

interface Props{curPage:number;goPage:(n:number)=>void}

export default function Navbar({curPage,goPage}:Props){
  const [open,setOpen]=useState(false);
  const [downloadOpen,setDownloadOpen]=useState(false);
  const go=(n:number)=>{goPage(n);setOpen(false)};

  return(
    <>
      <nav className="lg lg-dark" style={{
        height:"var(--nav-h)",width:"100%",flexShrink:0,
        display:"flex",alignItems:"center",
        padding:"0 clamp(16px,4vw,56px)",
        borderBottom:"1px solid rgba(255,255,255,0.08)",
        borderRadius:0,position:"relative",zIndex:100,overflow:"visible",
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
          <div style={{position:"relative"}}>
            <button onClick={()=>setDownloadOpen(v=>!v)} className="btn-ice" style={{fontSize:".72rem",padding:"6px 14px",display:"inline-flex",alignItems:"center",gap:"5px",border:"none",cursor:"pointer"}}>
              <Download size={13}/> Download Browser
            </button>
            {downloadOpen&&(
              <div className="lg lg-dark" style={{position:"absolute",top:"calc(100% + 8px)",right:0,width:"190px",padding:"6px",borderRadius:"12px",zIndex:200,boxShadow:"0 20px 50px rgba(0,0,0,.5)",display:"flex",flexDirection:"column",gap:"2px"}}>
                <a href={DOWNLOAD_URLS.mac} onClick={()=>setDownloadOpen(false)} className="lg-hover" style={{display:"flex",alignItems:"center",gap:"8px",padding:"9px 10px",borderRadius:"8px",fontFamily:"var(--font-inter)",fontSize:".78rem",color:"var(--muted)",textDecoration:"none"}}>macOS (.dmg)</a>
                <a href={DOWNLOAD_URLS.win} onClick={()=>setDownloadOpen(false)} className="lg-hover" style={{display:"flex",alignItems:"center",gap:"8px",padding:"9px 10px",borderRadius:"8px",fontFamily:"var(--font-inter)",fontSize:".78rem",color:"var(--muted)",textDecoration:"none"}}>Windows (.exe)</a>
                <a href={DOWNLOAD_URLS.linux} onClick={()=>setDownloadOpen(false)} className="lg-hover" style={{display:"flex",alignItems:"center",gap:"8px",padding:"9px 10px",borderRadius:"8px",fontFamily:"var(--font-inter)",fontSize:".78rem",color:"var(--muted)",textDecoration:"none"}}>Linux (.AppImage)</a>
              </div>
            )}
          </div>
          <a href={ROOM7_URL} target="_blank" rel="noopener noreferrer" title={ROOM7_DESCRIPTION} className="lg" style={{fontSize:".72rem",padding:"6px 14px",display:"inline-flex",alignItems:"center",gap:"5px",color:"var(--muted)",cursor:"pointer",border:"none",textDecoration:"none"}}>
            <Info size={13}/> Room 7
          </a>
          <a href={RIDEARRIVO_URL} target="_blank" rel="noopener noreferrer" className="lg" style={{fontSize:".72rem",padding:"6px 14px",display:"inline-flex",alignItems:"center",gap:"5px",color:"var(--muted)",cursor:"pointer",border:"none",textDecoration:"none"}}>
            <Car size={13}/> RideArrivo
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
          <div style={{fontSize:".7rem",color:"var(--dim)",textTransform:"uppercase",letterSpacing:".04em",padding:"12px 4px 6px"}}>Download Browser</div>
          <a href={DOWNLOAD_URLS.mac} className="btn-ice" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:".85rem",padding:"11px",textDecoration:"none"}}>
            <Download size={15}/> macOS (.dmg)
          </a>
          <a href={DOWNLOAD_URLS.win} className="btn-ice" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:".85rem",padding:"11px",marginTop:"6px",textDecoration:"none"}}>
            <Download size={15}/> Windows (.exe)
          </a>
          <a href={DOWNLOAD_URLS.linux} className="btn-ice" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:".85rem",padding:"11px",marginTop:"6px",textDecoration:"none"}}>
            <Download size={15}/> Linux (.AppImage)
          </a>
          <a href={ROOM7_URL} target="_blank" rel="noopener noreferrer" className="lg" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:".85rem",padding:"11px",marginTop:"8px",color:"var(--muted)",border:"none",cursor:"pointer",textDecoration:"none"}}>
            <Info size={15}/> Room 7
          </a>
          <div style={{fontFamily:"var(--font-inter)",fontSize:".72rem",lineHeight:1.5,color:"var(--dim)",padding:"6px 4px 2px"}}>
            {ROOM7_DESCRIPTION}
          </div>
          <a href={RIDEARRIVO_URL} target="_blank" rel="noopener noreferrer" className="lg" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:".85rem",padding:"11px",marginTop:"8px",color:"var(--muted)",border:"none",cursor:"pointer",textDecoration:"none"}}>
            <Car size={15}/> RideArrivo
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
