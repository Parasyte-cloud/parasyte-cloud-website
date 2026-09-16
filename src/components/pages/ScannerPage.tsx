"use client";
import{useState,useRef,useCallback}from"react";
interface Props{id:string;contentH:string;isMobile:boolean}
type LC="ice"|"fire"|"amber"|"g"|"d"|"w";
const rn=(a:number,b:number)=>Math.floor(Math.random()*(b-a+1))+a;
const dl=(ms:number)=>new Promise<void>(res=>setTimeout(res,ms));
const LCM:Record<LC,string>={ice:"#00d4ff",fire:"#ff6a00",amber:"#ffb800",g:"#4ade80",d:"var(--dim)",w:"var(--text)"};
function dt(s:string):"ip"|"domain"|"asn"|"aws"|"unknown"{
  if(/^(\d{1,3}\.){3}\d{1,3}$/.test(s))return"ip";
  if(/^as\d+$/i.test(s))return"asn";
  if(/^\d{12}$/.test(s)||/^arn:aws/i.test(s))return"aws";
  if(/^[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z]{2,})+$/.test(s))return"domain";
  return"unknown";
}
export default function ScannerPage({id,contentH,isMobile}:Props){
  const[target,setTarget]=useState("");
  const[scanning,setScanning]=useState(false);
  const[progress,setProgress]=useState(0);
  const[progLabel,setProgLabel]=useState("");
  const[lines,setLines]=useState<[string,LC][]>([
    ["[ PArAsYtE Scanner v2.1 - Passive Recon Engine ]","ice"],
    ["─".repeat(44),"d"],["Enter a target and press Scan.","d"],[" ","d"],
    ["Supported: IP · Domain · ASN · AWS account ID","d"],["⚡ All scans are passive","amber"],
  ]);
  const[result,setResult]=useState<null|{score:number,label:string,cls:string,isp:string,country:string,ports:string}>(null);
  const outRef=useRef<HTMLDivElement>(null);
  const append=useCallback((nl:[string,LC][])=>{
    setLines(p=>[...p,...nl]);
    setTimeout(()=>{if(outRef.current)outRef.current.scrollTop=outRef.current.scrollHeight},30);
  },[]);
  const runScan=useCallback(async()=>{
    const t=target.trim();if(!t||scanning)return;
    const type=dt(t);
    if(type==="unknown"){setLines([["✗ Invalid target.","fire"]]);return;}
    setScanning(true);setResult(null);setProgress(0);
    setLines([[`[ ${type.toUpperCase()} scan: ${t} ]`,"ice"],["─".repeat(44),"d"]]);
    const ip=type==="ip"?t:`104.${rn(1,254)}.${rn(1,254)}.${rn(1,100)}`;
    const cs=["United States","Germany","Netherlands","Singapore","United Kingdom"];
    const is=["Cloudflare Inc","Amazon AWS","Hetzner Online","OVH SAS","DigitalOcean"];
    const country=cs[rn(0,4)],isp=is[rn(0,4)],asn=`AS${rn(10000,99999)}`;
    const ports=["80/HTTP","443/HTTPS","22/SSH","53/DNS","8443/HTTPS-ALT"].slice(0,rn(2,4));
    const score=rn(0,35),label=score<20?"CLEAN":score<60?"SUSPICIOUS":"MALICIOUS",cls=score<20?"safe":score<60?"warn":"danger";
    const steps=type==="aws"?[
      {d:400,l:"Connecting",lines:[[`» Account: ${t}`,"w"],["  IAM → ✓ Assumed","g"],["  Region → us-east-1","ice"]] as [string,LC][]},
      {d:600,l:"Security",lines:[["» Security Groups:","w"],[rn(0,1)?"  ⚠ Port 22 open":"  ✓ No dangerous ports","g"]] as [string,LC][]},
      {d:500,l:"Cost",lines:[["» Cost Explorer:","w"],[`  Spend → $${rn(50,800)}.${rn(10,99)}/mo`,"ice"],[`  EIPs → ${rn(0,3)} unattached`,"amber"]] as [string,LC][]},
      {d:200,l:"Done",lines:[["─".repeat(44),"d"],[`✓ Complete - ${t}`,"g"]] as [string,LC][]},
    ]:[
      {d:350,l:"Resolve",lines:(type==="ip"?[[`» Geo: ${t}`,"w"],[`  Country → ${country}`,"ice"],[`  ISP → ${isp}`,"ice"],[`  ASN → ${asn}`,"ice"]]:[[`» DNS: ${t}`,"w"],[`  A → ${ip}`,"g"],["  NS → ns1.cloudflare.com","ice"]]) as [string,LC][]},
      {d:450,l:"Ports",lines:([[`» Ports on ${ip}:`,"w"],...ports.map((p):[string,LC]=>[`  ✓ ${p}`,"g"]),["  ✗ 3306 - filtered","d"]] as [string,LC][])},
      {d:500,l:"Threat",lines:([["» Threat feeds:","w"],[`  Score → ${score}/100 (${label})`,score<20?"g":score<60?"amber":"fire"],[`  AbuseIPDB → ${score>30?rn(1,5)+" reports":"Clean"}`,"ice"]] as [string,LC][])},
      {d:150,l:"Done",lines:([["─".repeat(44),"d"],[`✓ Complete - ${t}`,"g"],[`  ${country} | ${isp}`,"d"]] as [string,LC][])},
    ];
    for(let i=0;i<steps.length;i++){await dl(steps[i].d);setProgress(Math.round((i+1)/steps.length*100));setProgLabel(steps[i].l);append(steps[i].lines);}
    setResult({score,label,cls,isp,country,ports:ports.join(", ")||"None"});setProgress(0);setScanning(false);
  },[target,scanning,append]);
  const rc:Record<string,string>={safe:"#4ade80",warn:"#ffb800",danger:"#ff6a00",info:"#00d4ff"};
  return(
    <div id={id} style={{height:contentH,minHeight:isMobile?"100svh":undefined,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",padding:isMobile?"80px 20px 40px":"0 clamp(24px,5vw,72px)"}}>
      <div className="orb-field"><div className="orb orb-ice" style={{animationDelay:"-7s"}}/><div className="orb orb-fire" style={{animationDelay:"-2s"}}/></div>
      <div className="dot-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1.3fr",gap:isMobile?"28px":"clamp(28px,4vw,60px)",alignItems:"center",height:isMobile?"auto":"100%",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".62rem",letterSpacing:".22em",textTransform:"uppercase",color:"#ff6a00",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"}}>Live Tool<span style={{display:"block",width:"28px",height:"1px",background:"#ff6a00",opacity:.4}}/></div>
          <h2 style={{fontFamily:"var(--font-rajdhani)",fontSize:isMobile?"2rem":"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"var(--text)",marginBottom:"8px",lineHeight:1.05}}>PArAsYtE<br/>Scanner</h2>
          <p style={{fontFamily:"var(--font-inter)",fontSize:".84rem",color:"var(--muted)",lineHeight:1.65,marginBottom:isMobile?"12px":"22px"}}>Passive recon for IPs, domains, ASNs and AWS security with cost intelligence.</p>
          {!isMobile&&<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {[{ic:"🌐",c:"ice",t:"IP & Domain Intel",d:"Geolocation, ASN, PTR, WHOIS, SSL."},{ic:"⚠️",c:"fire",t:"Threat Reputation",d:"AbuseIPDB, blocklists, VirusTotal."},{ic:"☁️",c:"ice",t:"AWS Security",d:"Dangerous ports, public S3/RDS, IAM."},{ic:"💸",c:"amber",t:"Cost Intelligence",d:"Unattached EIPs, NAT Gateways, EBS."}].map(f=>(
              <div key={f.t} style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                <div className={`lg-${f.c}`} style={{width:"30px",height:"30px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",flexShrink:0,position:"relative",zIndex:1}}>{f.ic}</div>
                <div><div style={{fontFamily:"var(--font-inter)",fontSize:".82rem",fontWeight:600,color:"var(--text)",marginBottom:"2px"}}>{f.t}</div><div style={{fontFamily:"var(--font-inter)",fontSize:".72rem",color:"var(--dim)",lineHeight:1.5}}>{f.d}</div></div>
              </div>
            ))}
          </div>}
        </div>
        {/* Glass terminal */}
        <div className="lg lg-prism" style={{borderRadius:"18px",overflow:"hidden",boxShadow:"0 2px 0 rgba(255,255,255,.14) inset, 0 32px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.10)"}}>
          <div className="lg-dark" style={{padding:"10px 14px",display:"flex",alignItems:"center",gap:"10px",borderBottom:"1px solid rgba(255,255,255,.08)",borderRadius:0}}>
            <div style={{display:"flex",gap:"5px"}}>{["#ff5f57","#febc2e","#28c840"].map((c,i)=><span key={i} style={{width:"10px",height:"10px",borderRadius:"50%",background:c,display:"block",boxShadow:`0 0 6px ${c}80`}}/>)}</div>
            <span style={{fontFamily:"var(--font-jetbrains)",fontSize:".65rem",color:"var(--dim)",letterSpacing:".12em",textTransform:"uppercase",margin:"0 auto",position:"relative",zIndex:1}}>PARASYTE SCANNER v2.1</span>
          </div>
          <div style={{padding:"14px 16px",position:"relative",zIndex:1}}>
            <div style={{display:"flex",gap:"8px",marginBottom:"12px",flexWrap:isMobile?"wrap":"nowrap"}}>
              <input value={target} onChange={e=>setTarget(e.target.value)} onKeyDown={e=>e.key==="Enter"&&runScan()} placeholder="IP, domain, ASN, or AWS account..." className="lg" style={{flex:1,minWidth:0,borderRadius:"8px",padding:"9px 13px",fontFamily:"var(--font-jetbrains)",fontSize:".74rem",color:"var(--text)",outline:"none",border:"1px solid rgba(255,255,255,.12)"}}/>
              <button onClick={runScan} disabled={scanning} className="btn-solid" style={{fontSize:".7rem",padding:"9px 16px",whiteSpace:"nowrap",opacity:scanning?.5:1,color:"#000"}}>{scanning?"…":"Scan →"}</button>
            </div>
            <div ref={outRef} className="term-scroll lg" style={{borderRadius:"10px",padding:"12px",height:isMobile?"140px":"168px",overflowY:"auto",border:"1px solid rgba(255,255,255,.08)"}}>
              {lines.map((l,i)=><div key={i} style={{fontFamily:"var(--font-jetbrains)",fontSize:".7rem",lineHeight:1.65,color:LCM[l[1]]}}>{l[0]}</div>)}
            </div>
            {scanning&&<div style={{marginTop:"10px"}}>
              <div className="lg" style={{borderRadius:"3px",height:"3px",overflow:"hidden",marginBottom:"5px",border:"1px solid rgba(255,255,255,.08)"}}>
                <div style={{height:"100%",background:"linear-gradient(90deg,#00d4ff,#ff6a00)",borderRadius:"3px",width:progress+"%",transition:"width .1s linear",boxShadow:"0 0 10px rgba(0,212,255,.5)"}}/>
              </div>
              <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".58rem",color:"var(--dim)"}}>{progLabel}...</div>
            </div>}
            {result&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"10px"}}>
              {[{l:"Threat Score",v:`${result.score}/100 ${result.label}`,c:result.cls},{l:"ISP / Account",v:result.isp,c:"info"},{l:"Country",v:result.country,c:"w"},{l:"Ports",v:result.ports,c:"ice"}].map(r=>(
                <div key={r.l} className="lg" style={{borderRadius:"9px",padding:"9px 11px",position:"relative",zIndex:1}}>
                  <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".55rem",letterSpacing:".14em",textTransform:"uppercase",color:"var(--dim)",marginBottom:"3px",position:"relative",zIndex:1}}>{r.l}</div>
                  <div style={{fontFamily:"var(--font-jetbrains)",fontSize:".78rem",fontWeight:500,color:rc[r.c]||"var(--text)",position:"relative",zIndex:1}}>{r.v}</div>
                </div>
              ))}
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
