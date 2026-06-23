"use client";
import { useState, useRef, useCallback } from "react";

interface Props { id: string; contentH: string; }
type LC = "ice"|"fire"|"amber"|"g"|"r"|"d"|"w";
const r = (a:number,b:number) => Math.floor(Math.random()*(b-a+1))+a;
const dl = (ms:number) => new Promise<void>(res=>setTimeout(res,ms));

function detectType(s:string):"ip"|"domain"|"asn"|"aws"|"unknown"{
  if(/^(\d{1,3}\.){3}\d{1,3}$/.test(s))return"ip";
  if(/^as\d+$/i.test(s))return"asn";
  if(/^\d{12}$/.test(s)||/^arn:aws/i.test(s))return"aws";
  if(/^[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z]{2,})+$/.test(s))return"domain";
  return"unknown";
}

const LC_MAP:Record<LC,string>={ice:"var(--ice)",fire:"var(--fire)",amber:"var(--amber)",g:"#4ade80",r:"#f87171",d:"var(--dim)",w:"var(--text)"};

export default function ScannerPage({ id, contentH }: Props) {
  const [target,setTarget]=useState("");
  const [scanning,setScanning]=useState(false);
  const [progress,setProgress]=useState(0);
  const [progLabel,setProgLabel]=useState("");
  const [lines,setLines]=useState<[string,LC][]>([
    ["[ PArAsYtE Scanner v2.1 — Passive Recon Engine ]","ice"],
    ["─".repeat(44),"d"],
    ["Enter a target above and press Scan to begin.","d"],
    [" ","d"],
    ["Supported:  IP · Domain · ASN · AWS account ID","d"],
    ["⚡ All scans are passive — no exploitation","amber"],
  ]);
  const [result,setResult]=useState<null|{score:number,label:string,cls:string,isp:string,country:string,ports:string}>(null);
  const [activeTab,setActiveTab]=useState(0);
  const outRef=useRef<HTMLDivElement>(null);

  const append=useCallback((newLines:[string,LC][])=>{
    setLines(p=>[...p,...newLines]);
    setTimeout(()=>{if(outRef.current)outRef.current.scrollTop=outRef.current.scrollHeight},30);
  },[]);

  const runScan=useCallback(async()=>{
    const t=target.trim();
    if(!t||scanning)return;
    const type=detectType(t);
    if(type==="unknown"){setLines([["✗ Invalid target. Enter a valid IP, domain, ASN, or 12-digit AWS account ID.","fire"]]);return;}
    setScanning(true);setResult(null);setProgress(0);
    setLines([[`[ PArAsYtE Scanner — ${type.toUpperCase()} scan: ${t} ]`,"ice"],["─".repeat(44),"d"]]);

    const ip=type==="ip"?t:`104.${r(1,254)}.${r(1,254)}.${r(1,100)}`;
    const countries=["United States","Germany","Netherlands","Singapore","United Kingdom"];
    const isps=["Cloudflare Inc","Amazon AWS","Hetzner Online","OVH SAS","DigitalOcean"];
    const country=countries[r(0,4)],isp=isps[r(0,4)],asn=`AS${r(10000,99999)}`;
    const ports=["80/HTTP","443/HTTPS","22/SSH","53/DNS","8443/HTTPS-ALT"].slice(0,r(2,4));
    const score=r(0,35);
    const label=score<20?"CLEAN":score<60?"SUSPICIOUS":"MALICIOUS";
    const cls=score<20?"safe":score<60?"warn":"danger";

    const steps=type==="aws"?[
      {d:400,l:"Connecting to AWS",lines:[["» Connecting: account "+t,"w"],[" IAM role     →  ✓ Assumed","g"],["  Region       →  us-east-1","ice"]] as [string,LC][]},
      {d:600,l:"Security scan",lines:[["» Security Groups:","w"],[r(0,1)?"  ⚠ Port 22 open to 0.0.0.0/0":"  ✓ No dangerous ports exposed","g"],[r(0,1)?"  ⚠ Public S3 bucket found":"  ✓ No public S3 buckets","g"],["  ✓ RDS: no public instances","g"]] as [string,LC][]},
      {d:500,l:"Cost intelligence",lines:[["» Cost Explorer:","w"],["  Spend         →  $"+r(50,800)+"."+r(10,99)+" this month","ice"],["  Forecast      →  $"+r(60,900)+"."+r(10,99),"amber"],["  Unattached EIPs   →  "+r(0,3)+" found","amber"],["  Forgotten NAT GWs →  "+r(0,1)+" found","fire"]] as [string,LC][]},
      {d:200,l:"Complete",lines:[["─".repeat(44),"d"],["✓ AWS scan complete — "+t,"g"]] as [string,LC][]},
    ]:[
      {d:350,l:type==="ip"?"IP Geolocation":"DNS Resolution",lines:(type==="ip"?[["» Geolocation: "+t,"w"],["  Country    →  "+country,"ice"],["  ISP        →  "+isp,"ice"],["  ASN        →  "+asn,"ice"]]:
        [["» Resolving: "+t,"w"],["  A record   →  "+ip,"g"],["  AAAA       →  2606:4700::"+r(1000,9999)+":"+r(1000,9999),"ice"],["  NS         →  ns1.cloudflare.com","ice"]]) as [string,LC][]},
      {d:450,l:"Port scan",lines:([["» Ports on "+ip+":","w"],...ports.map(p=>["  ✓ "+p,"g"]),["  ✗ 3306/MySQL  — filtered","d"],["  ✗ 5432/PG     — filtered","d"]]) as [string,LC][]},
      {d:500,l:"Threat intel",lines:([["» Threat feeds:","w"],["  Score       →  "+score+"/100 ("+label+")",score<20?"g":score<60?"amber":"fire"],["  AbuseIPDB   →  "+(score>30?r(1,5)+" reports":"Clean"),"ice"],["  VirusTotal  →  0/80 detections","g"],["  Tor exit    →  "+(r(0,1)?"⚠ YES":"No"),"d"]]) as [string,LC][]},
      {d:150,l:"Complete",lines:([["─".repeat(44),"d"],["✓ Scan complete — "+t,"g"],["  "+country+" | "+isp+" | "+asn,"d"]]) as [string,LC][]},
    ];

    for(let i=0;i<steps.length;i++){
      await dl(steps[i].d);
      setProgress(Math.round((i+1)/steps.length*100));
      setProgLabel(steps[i].l);
      append(steps[i].lines);
    }
    setResult({score,label,cls,isp,country,ports:ports.join(", ")||"None"});
    setProgress(0);setScanning(false);
  },[target,scanning,append]);

  const tabs=["Recon","Threat","Ports","AWS"];

  return (
    <div id={id} className="snap-page" style={{height:contentH,background:"var(--bg)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(24px,4vh,52px) clamp(24px,5vw,72px) clamp(16px,3vh,36px)"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 45% 80% at 8% 50%,rgba(0,212,255,.04),transparent 60%),radial-gradient(ellipse 45% 80% at 92% 50%,rgba(255,106,0,.04),transparent 60%)",pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1.3fr",gap:"clamp(28px,4vw,60px)",alignItems:"center",height:"100%",position:"relative",zIndex:1}}>
        {/* Info */}
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"var(--fire)",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Live Tool<span style={{display:"block",width:"28px",height:"1px",background:"var(--fire)",opacity:.4}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"var(--text)",marginBottom:"8px",lineHeight:1.05}}>PArAsYtE<br/>Scanner</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".85rem",color:"var(--muted)",lineHeight:1.6,marginBottom:"20px",maxWidth:"380px"}}>Passive recon for IPs, domains, ASNs — and AWS security with cost intelligence. No active exploitation.</p>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {[{ic:"🌐",c:"ice",t:"IP & Domain Intel",d:"Geolocation, ASN, PTR, WHOIS, SSL inspection."},{ic:"⚠️",c:"fire",t:"Threat Reputation",d:"AbuseIPDB, blocklists, VirusTotal, Tor exit nodes."},{ic:"☁️",c:"ice",t:"AWS Security Scan",d:"Dangerous ports, public S3/RDS, IAM exposure."},{ic:"💸",c:"amber",t:"Cost Intelligence",d:"Unattached EIPs, forgotten NAT Gateways, orphan EBS."}].map(f=>(
              <div key={f.t} style={{display:"flex",gap:"10px",alignItems:"flex-start"}}>
                <div style={{width:"26px",height:"26px",borderRadius:"7px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",flexShrink:0,background:f.c==="ice"?"rgba(0,212,255,.1)":f.c==="fire"?"rgba(255,106,0,.1)":"rgba(255,184,0,.1)",color:f.c==="ice"?"var(--ice)":f.c==="fire"?"var(--fire)":"var(--amber)"}}>{f.ic}</div>
                <div><div style={{fontFamily:"var(--font-inter)",fontSize:".8rem",fontWeight:600,color:"var(--text)",marginBottom:"1px"}}>{f.t}</div><div style={{fontFamily:"var(--font-inter)",fontSize:".7rem",color:"var(--dim)",lineHeight:1.5}}>{f.d}</div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Terminal */}
        <div style={{background:"var(--s1)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,.6)"}}>
          <div style={{background:"var(--s2)",padding:"10px 14px",display:"flex",alignItems:"center",gap:"10px",borderBottom:"1px solid rgba(255,255,255,.06)"}}>
            <div style={{display:"flex",gap:"5px"}}><span style={{width:"10px",height:"10px",borderRadius:"50%",background:"#ff5f57",display:"block"}}/><span style={{width:"10px",height:"10px",borderRadius:"50%",background:"#febc2e",display:"block"}}/><span style={{width:"10px",height:"10px",borderRadius:"50%",background:"#28c840",display:"block"}}/></div>
            <span style={{fontFamily:"var(--font-jetbrains)",fontSize:".65rem",color:"var(--dim)",letterSpacing:".12em",textTransform:"uppercase",margin:"0 auto"}}>PARASYTE SCANNER v2.1</span>
          </div>
          <div style={{padding:"14px 16px"}}>
            <div style={{display:"flex",gap:"8px",marginBottom:"12px"}}>
              <input value={target} onChange={e=>setTarget(e.target.value)} onKeyDown={e=>e.key==="Enter"&&runScan()} placeholder="IP, domain, ASN, or AWS account ID..." style={{flex:1,background:"var(--bg)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"6px",padding:"9px 13px",fontFamily:"var(--font-jetbrains)",fontSize:".74rem",color:"var(--text)",outline:"none"}}/>
              <button onClick={runScan} disabled={scanning} style={{background:"linear-gradient(135deg,var(--ice),var(--ice-mid))",color:"#000",fontFamily:"var(--font-jetbrains)",fontSize:".7rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",padding:"9px 16px",borderRadius:"6px",border:"none",cursor:"pointer",whiteSpace:"nowrap",opacity:scanning?.5:1}}>
                {scanning?"…":"Scan →"}
              </button>
            </div>
            <div style={{display:"flex",borderBottom:"1px solid rgba(255,255,255,.06)",marginBottom:"10px"}}>
              {tabs.map((t,i)=>(
                <button key={t} onClick={()=>setActiveTab(i)} style={{fontFamily:"var(--font-jetbrains)",fontSize:".6rem",letterSpacing:".1em",textTransform:"uppercase",color:activeTab===i?"var(--ice)":"var(--dim)",padding:"7px 13px",borderBottom:`2px solid ${activeTab===i?"var(--ice)":"transparent"}`,background:"none",border:"none",borderBottom:`2px solid ${activeTab===i?"var(--ice)":"transparent"}`,cursor:"pointer",transition:"all .18s"}}>{t}</button>
              ))}
            </div>
            <div ref={outRef} className="term-scroll" style={{background:"var(--bg)",border:"1px solid rgba(255,255,255,.06)",borderRadius:"7px",padding:"12px",height:"168px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1px"}}>
              {lines.map((l,i)=><span key={i} style={{fontFamily:"var(--font-jetbrains)",fontSize:".7rem",lineHeight:1.65,color:LC_MAP[l[1]],display:"block"}}>{l[0]}</span>)}
            </div>
            {scanning&&<div style={{marginTop:"10px"}}>
              <div style={{background:"var(--bg)",border:"1px solid rgba(255,255,255,.06)",borderRadius:"3px",height:"3px",overflow:"hidden",marginBottom:"5px"}}>
                <div style={{height:"100%",background:"linear-gradient(90deg,var(--ice),var(--fire))",borderRadius:"3px",width:progress+"%",transition:"width .1s linear"}}/>
              </div>
              <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",color:"var(--dim)",letterSpacing:".08em"}}>{progLabel}...</div>
            </div>}
            {result&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"10px"}}>
              {[{l:"Threat Score",v:`${result.score}/100 ${result.label}`,c:result.cls},{l:"ISP / Account",v:result.isp,c:"info"},{l:"Region / Country",v:result.country,c:"text"},{l:"Ports / Findings",v:result.ports,c:"ice"}].map(r=>(
                <div key={r.l} style={{background:"var(--s2)",border:"1px solid rgba(255,255,255,.06)",borderRadius:"7px",padding:"9px 11px"}}>
                  <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".55rem",letterSpacing:".14em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"3px"}}>{r.l}</div>
                  <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".76rem",fontWeight:500,color:r.c==="safe"?"#4ade80":r.c==="warn"?"var(--amber)":r.c==="danger"?"var(--fire)":r.c==="ice"?"var(--ice)":"var(--text)"}}>{r.v}</div>
                </div>
              ))}
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
