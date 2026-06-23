"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { PAGES } from "@/lib/pages";
import BookIntro from "@/components/layout/BookIntro";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageIndicator from "@/components/layout/PageIndicator";
import HeroPage from "@/components/pages/HeroPage";
import ProductsPage from "@/components/pages/ProductsPage";
import ScannerPage from "@/components/pages/ScannerPage";
import PlatformPage from "@/components/pages/PlatformPage";
import ParaPinPage from "@/components/pages/ParaPinPage";
import InfraPage from "@/components/pages/InfraPage";
import ContactPage from "@/components/pages/ContactPage";

export default function Home() {
  const [curPage, setCurPage] = useState(0);
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const touchY = useRef(0);
  const isAnimating = useRef(false);

  const goPage = useCallback((n: number) => {
    if (n < 0 || n >= PAGES.length || isAnimating.current) return;
    if (n === curPage) return;
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
  }, [curPage]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === "ArrowRight") { e.preventDefault(); goPage(curPage + 1); }
      if (e.key === "ArrowUp"   || e.key === "PageUp"   || e.key === "ArrowLeft")  { e.preventDefault(); goPage(curPage - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [curPage, goPage]);

  // Wheel
  useEffect(() => {
    let acc = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
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
  }, [curPage, goPage]);

  // Touch
  useEffect(() => {
    const onStart = (e: TouchEvent) => { touchY.current = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      const dy = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) goPage(dy > 0 ? curPage + 1 : curPage - 1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd); };
  }, [curPage, goPage]);

  const contentH = "calc(70vh - var(--nav-h) - var(--foot-h))";

  const pages = [
    <HeroPage     key="hero"     id="pg-hero"     contentH={contentH} goPage={goPage} />,
    <ProductsPage key="products" id="pg-products" contentH={contentH} />,
    <ScannerPage  key="scanner"  id="pg-scanner"  contentH={contentH} />,
    <PlatformPage key="platform" id="pg-platform" contentH={contentH} />,
    <ParaPinPage  key="parapin"  id="pg-parapin"  contentH={contentH} />,
    <InfraPage    key="infra"    id="pg-infra"    contentH={contentH} />,
    <ContactPage  key="contact"  id="pg-contact"  contentH={contentH} goPage={goPage} />,
  ];

  return (
    <>
      <BookIntro />
      <PageIndicator curPage={curPage} goPage={goPage} />

      <div style={{
        position: "fixed", top: 0, left: 0,
        width: "100vw", height: "70vh",
        display: "flex", flexDirection: "column",
        zIndex: 1,
      }}>
        <Navbar curPage={curPage} goPage={goPage} />

        {/* Book flip stage */}
        <div style={{
          flex: 1, position: "relative",
          overflow: "hidden",
          perspective: "2400px",
          perspectiveOrigin: "50% 50%",
        }}>
          {/* Current page — slides in */}
          <div
            key={`cur-${curPage}`}
            style={{
              position: "absolute", inset: 0,
              transformOrigin: direction === "forward" ? "left center" : "right center",
              animation: flipping
                ? "none"
                : prevPage !== null
                  ? direction === "forward"
                    ? "pageEnterFromRight 0.65s cubic-bezier(0.4,0,0.2,1) forwards"
                    : "pageEnterFromLeft 0.65s cubic-bezier(0.4,0,0.2,1) forwards"
                  : "none",
              zIndex: 2,
              backfaceVisibility: "hidden",
            }}
          >
            {pages[curPage]}
          </div>

          {/* Outgoing page — flips away */}
          {flipping && prevPage !== null && (
            <div
              key={`prev-${prevPage}`}
              style={{
                position: "absolute", inset: 0,
                transformOrigin: direction === "forward" ? "right center" : "left center",
                animation: direction === "forward"
                  ? "pageExitToLeft 0.65s cubic-bezier(0.4,0,0.2,1) forwards"
                  : "pageExitToRight 0.65s cubic-bezier(0.4,0,0.2,1) forwards",
                zIndex: 3,
                backfaceVisibility: "hidden",
              }}
            >
              {pages[prevPage]}
            </div>
          )}

          {/* Page turn shadow overlay */}
          {flipping && (
            <div style={{
              position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none",
              background: direction === "forward"
                ? "linear-gradient(90deg, transparent 40%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.35) 90%, transparent)"
                : "linear-gradient(90deg, transparent 10%, rgba(0,0,0,0.35) 25%, rgba(0,0,0,0.6) 40%, transparent 60%)",
              animation: direction === "forward" ? "shadowSweepFwd 0.65s ease forwards" : "shadowSweepBack 0.65s ease forwards",
            }} />
          )}
        </div>

        <Footer />
      </div>

      <style>{`
        @keyframes pageEnterFromRight {
          from { transform: rotateY(25deg) translateX(8%) scale(0.97); opacity: 0.6; }
          to   { transform: rotateY(0deg)  translateX(0%)  scale(1);    opacity: 1; }
        }
        @keyframes pageEnterFromLeft {
          from { transform: rotateY(-25deg) translateX(-8%) scale(0.97); opacity: 0.6; }
          to   { transform: rotateY(0deg)   translateX(0%)   scale(1);    opacity: 1; }
        }
        @keyframes pageExitToLeft {
          from { transform: rotateY(0deg)   translateX(0%)   scale(1);    opacity: 1; }
          to   { transform: rotateY(-35deg) translateX(-12%) scale(0.95); opacity: 0; }
        }
        @keyframes pageExitToRight {
          from { transform: rotateY(0deg)  translateX(0%)  scale(1);    opacity: 1; }
          to   { transform: rotateY(35deg) translateX(12%) scale(0.95); opacity: 0; }
        }
        @keyframes shadowSweepFwd {
          from { opacity: 0; }
          40%  { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes shadowSweepBack {
          from { opacity: 0; }
          40%  { opacity: 1; }
          to   { opacity: 0; }
        }
      `}</style>
    </>
  );
}
