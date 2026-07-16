"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { PAGES } from "@/lib/pages";
import BookIntro from "@/components/layout/BookIntro";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageIndicator from "@/components/layout/PageIndicator";
import HeroPage from "@/components/pages/HeroPage";
import ProductsPage from "@/components/pages/ProductsPage";
import DevPage from "@/components/pages/DevPage";
import ScannerPage from "@/components/pages/ScannerPage";
import PlatformPage from "@/components/pages/PlatformPage";
import ParaPinPage from "@/components/pages/ParaPinPage";
import InfraPage from "@/components/pages/InfraPage";
import ContactPage from "@/components/pages/ContactPage";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const touchY = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goPage = useCallback((n: number) => {
    if (n < 0 || n >= PAGES.length || isAnimating.current) return;
    if (n === curPage) return;
    if (isMobile) { setCurPage(n); return; }
    isAnimating.current = true;
    setDirection(n > curPage ? "forward" : "back");
    setPrevPage(curPage);
    setFlipping(true);
    setTimeout(() => {
      setCurPage(n);
      setFlipping(false);
      setPrevPage(null);
      isAnimating.current = false;
    }, 700);
  }, [curPage, isMobile]);

  useEffect(() => {
    if (!mounted || isMobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); goPage(curPage + 1); }
      if (e.key === "ArrowUp"   || e.key === "PageUp")   { e.preventDefault(); goPage(curPage - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [curPage, goPage, mounted, isMobile]);

  useEffect(() => {
    if (!mounted || isMobile) return;
    let acc = 0, timer: ReturnType<typeof setTimeout> | null = null;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      acc += e.deltaY;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (Math.abs(acc) > 40) goPage(acc > 0 ? curPage + 1 : curPage - 1);
        acc = 0;
      }, 60);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [curPage, goPage, mounted, isMobile]);

  useEffect(() => {
    if (!mounted || isMobile) return;
    const onStart = (e: TouchEvent) => { touchY.current = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      const dy = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) goPage(dy > 0 ? curPage + 1 : curPage - 1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd); };
  }, [curPage, goPage, mounted, isMobile]);

  if (!mounted) return null;

  const contentH = isMobile ? "auto" : "calc(70vh - var(--nav-h) - var(--foot-h))";

  const pages = [
    <HeroPage     key="hero"     id="pg-hero"     contentH={contentH} goPage={goPage} isMobile={isMobile} />,
    <ProductsPage key="products" id="pg-products" contentH={contentH} isMobile={isMobile} />,
    <DevPage      key="dev"      id="pg-dev"      contentH={contentH} goPage={goPage} isMobile={isMobile} />,
    <ScannerPage  key="scanner"  id="pg-scanner"  contentH={contentH} isMobile={isMobile} />,
    <PlatformPage key="platform" id="pg-platform" contentH={contentH} isMobile={isMobile} />,
    <ParaPinPage  key="parapin"  id="pg-parapin"  contentH={contentH} isMobile={isMobile} />,
    <InfraPage    key="infra"    id="pg-infra"    contentH={contentH} isMobile={isMobile} />,
    <ContactPage  key="contact"  id="pg-contact"  contentH={contentH} goPage={goPage} isMobile={isMobile} />,
  ];

  if (isMobile) {
    return (
      <>
        <BookIntro />
        <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh", width:"100vw" }}>
          <Navbar curPage={curPage} goPage={goPage} />
          <main style={{ flex:1 }}>{pages}</main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <BookIntro />
      <PageIndicator curPage={curPage} goPage={goPage} />
      <div style={{ position:"fixed", top:0, left:0, width:"100vw", height:"70vh", display:"flex", flexDirection:"column", zIndex:1 }}>
        <Navbar curPage={curPage} goPage={goPage} />
        <div style={{ flex:1, position:"relative", overflow:"hidden", perspective:"2400px", perspectiveOrigin:"50% 50%" }}>
          <div key={`cur-${curPage}`} style={{ position:"absolute", inset:0, zIndex:2, backfaceVisibility:"hidden", animation: prevPage !== null ? direction==="forward" ? "pageEnterFromRight 0.65s cubic-bezier(0.4,0,0.2,1) forwards" : "pageEnterFromLeft 0.65s cubic-bezier(0.4,0,0.2,1) forwards" : "none" }}>
            {pages[curPage]}
          </div>
          {flipping && prevPage !== null && (
            <div key={`prev-${prevPage}`} style={{ position:"absolute", inset:0, zIndex:3, backfaceVisibility:"hidden", animation: direction==="forward" ? "pageExitToLeft 0.65s cubic-bezier(0.4,0,0.2,1) forwards" : "pageExitToRight 0.65s cubic-bezier(0.4,0,0.2,1) forwards" }}>
              {pages[prevPage]}
            </div>
          )}
          {flipping && (
            <div style={{ position:"absolute", inset:0, zIndex:10, pointerEvents:"none", background:direction==="forward" ? "linear-gradient(90deg,transparent 35%,rgba(0,0,0,0.3) 55%,rgba(0,0,0,0.55) 70%,rgba(0,0,0,0.3) 85%,transparent)" : "linear-gradient(90deg,transparent 15%,rgba(0,0,0,0.3) 30%,rgba(0,0,0,0.55) 45%,transparent 65%)", animation:"shadowSweep 0.65s ease forwards" }} />
          )}
        </div>
        <Footer />
      </div>
      <style>{`
        @keyframes pageEnterFromRight { from{transform:rotateY(28deg) translateX(10%) scale(0.96);opacity:0.5} to{transform:rotateY(0deg) translateX(0%) scale(1);opacity:1} }
        @keyframes pageEnterFromLeft  { from{transform:rotateY(-28deg) translateX(-10%) scale(0.96);opacity:0.5} to{transform:rotateY(0deg) translateX(0%) scale(1);opacity:1} }
        @keyframes pageExitToLeft     { from{transform:rotateY(0deg) translateX(0%) scale(1);opacity:1} to{transform:rotateY(-32deg) translateX(-12%) scale(0.95);opacity:0} }
        @keyframes pageExitToRight    { from{transform:rotateY(0deg) translateX(0%) scale(1);opacity:1} to{transform:rotateY(32deg) translateX(12%) scale(0.95);opacity:0} }
        @keyframes shadowSweep        { from{opacity:0} 40%{opacity:1} to{opacity:0} }
      `}</style>
    </>
  );
}
