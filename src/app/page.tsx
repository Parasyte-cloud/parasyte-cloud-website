"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PAGE_META, PAGES } from "@/lib/pages";
import BookIntro from "@/components/layout/BookIntro";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageIndicator from "@/components/layout/PageIndicator";
import HeroPage from "@/components/pages/HeroPage";
import BrowserPage from "@/components/pages/BrowserPage";
import ProductsPage from "@/components/pages/ProductsPage";
import DevPage from "@/components/pages/DevPage";
import ScannerPage from "@/components/pages/ScannerPage";
import PlatformPage from "@/components/pages/PlatformPage";
import ParaPinPage from "@/components/pages/ParaPinPage";
import InfraPage from "@/components/pages/InfraPage";
import ContactPage from "@/components/pages/ContactPage";

const MOBILE_BREAKPOINT = 768;

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const touchY = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const goPage = useCallback((n: number) => {
    if (n < 0 || n >= PAGES.length) return;

    if (isMobile) {
      setCurPage(n);
      requestAnimationFrame(() => {
        document.getElementById(`pg-${PAGE_META[n].id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    if (isAnimating.current || n === curPage) return;
    isAnimating.current = true;
    setDirection(n > curPage ? "forward" : "back");
    setPrevPage(curPage);
    setFlipping(true);
    window.setTimeout(() => {
      setCurPage(n);
      setFlipping(false);
      setPrevPage(null);
      isAnimating.current = false;
    }, 650);
  }, [curPage, isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.id.replace(/^pg-/, "");
        const index = PAGE_META.findIndex((page) => page.id === id);
        if (index >= 0) setCurPage(index);
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-52px 0px -20% 0px" },
    );

    PAGE_META.forEach((page) => {
      const section = document.getElementById(`pg-${page.id}`);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        goPage(curPage + 1);
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goPage(curPage - 1);
      }
      if (event.key === "Home") {
        event.preventDefault();
        goPage(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        goPage(PAGES.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [curPage, goPage, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    let accumulated = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const onWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [data-native-scroll='true']")) return;
      event.preventDefault();
      accumulated += event.deltaY;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (Math.abs(accumulated) > 42) goPage(accumulated > 0 ? curPage + 1 : curPage - 1);
        accumulated = 0;
      }, 65);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("wheel", onWheel);
    };
  }, [curPage, goPage, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const onStart = (event: TouchEvent) => {
      touchY.current = event.touches[0]?.clientY ?? 0;
    };
    const onEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0]?.clientY ?? touchY.current;
      const distance = touchY.current - endY;
      if (Math.abs(distance) > 50) goPage(distance > 0 ? curPage + 1 : curPage - 1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [curPage, goPage, isMobile]);

  const contentH = isMobile ? "auto" : "calc(100dvh - var(--nav-h) - var(--foot-h))";

  const pages = [
    <HeroPage key="hero" id="pg-hero" contentH={contentH} goPage={goPage} isMobile={isMobile} />,
    <BrowserPage key="browser" id="pg-browser" contentH={contentH} isMobile={isMobile} />,
    <ProductsPage key="products" id="pg-products" contentH={contentH} isMobile={isMobile} />,
    <DevPage key="dev" id="pg-dev" contentH={contentH} goPage={goPage} isMobile={isMobile} />,
    <ScannerPage key="scanner" id="pg-scanner" contentH={contentH} isMobile={isMobile} />,
    <PlatformPage key="platform" id="pg-platform" contentH={contentH} isMobile={isMobile} />,
    <ParaPinPage key="parapin" id="pg-parapin" contentH={contentH} isMobile={isMobile} />,
    <InfraPage key="infra" id="pg-infra" contentH={contentH} isMobile={isMobile} />,
    <ContactPage key="contact" id="pg-contact" contentH={contentH} goPage={goPage} isMobile={isMobile} />,
  ];

  if (isMobile) {
    return (
      <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <BookIntro />
        <div className="site-shell site-shell-mobile">
          <Navbar curPage={curPage} goPage={goPage} />
          <main id="main-content" style={{ flex: 1 }}>{pages}</main>
          <Footer goPage={goPage} />
        </div>
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <BookIntro />
      <PageIndicator curPage={curPage} goPage={goPage} />
      <div className="site-shell site-shell-desktop">
        <Navbar curPage={curPage} goPage={goPage} />
        <main id="main-content" style={{ flex: 1, position: "relative", overflow: "hidden", perspective: "2400px", perspectiveOrigin: "50% 50%" }}>
          <div
            key={`cur-${curPage}`}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              backfaceVisibility: "hidden",
              animation: prevPage !== null
                ? direction === "forward"
                  ? "pageEnterFromRight 0.6s cubic-bezier(0.4,0,0.2,1) forwards"
                  : "pageEnterFromLeft 0.6s cubic-bezier(0.4,0,0.2,1) forwards"
                : "none",
            }}
          >
            {pages[curPage]}
          </div>
          {flipping && prevPage !== null && (
            <div
              key={`prev-${prevPage}`}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                backfaceVisibility: "hidden",
                animation: direction === "forward"
                  ? "pageExitToLeft 0.6s cubic-bezier(0.4,0,0.2,1) forwards"
                  : "pageExitToRight 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
              }}
            >
              {pages[prevPage]}
            </div>
          )}
          {flipping && <div className={`page-turn-shadow page-turn-shadow-${direction}`} aria-hidden="true" />}
        </main>
        <Footer goPage={goPage} />
      </div>
    </>
  );
}
