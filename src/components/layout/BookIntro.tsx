"use client";

import { useEffect, useState } from "react";

const INTRO_KEY = "parasyte-intro-seen";

export default function BookIntro() {
  const [phase, setPhase] = useState<"waiting" | "opening" | "done">("waiting");

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let shouldSkip = reducedMotion;
    try {
      shouldSkip = shouldSkip || window.sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      // Session storage may be unavailable in strict privacy modes; the intro can still run safely.
    }

    if (shouldSkip) {
      // Schedule the state transition instead of setting state synchronously inside the effect.
      const skipTimer = window.setTimeout(() => setPhase("done"), 0);
      return () => window.clearTimeout(skipTimer);
    }

    const openingDelay = mobile ? 260 : 520;
    const doneDelay = mobile ? 1000 : 1900;
    const openTimer = window.setTimeout(() => setPhase("opening"), openingDelay);
    const doneTimer = window.setTimeout(() => {
      setPhase("done");
      try {
        window.sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        // Non-essential preference only.
      }
    }, doneDelay);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;
  const isOpen = phase === "opening";

  return (
    <>
      <div className={`intro-mobile ${isOpen ? "intro-opening" : ""}`} aria-hidden="true">
        <div className="intro-mark">
          <span className="brand-ice">P</span><span>Ar</span><span className="brand-fire">A</span><span>sYt</span><span className="brand-fire">E</span>
        </div>
        <div className="intro-cloud">cloud</div>
      </div>

      <div className={`intro-desktop ${isOpen ? "intro-opening" : ""}`} aria-hidden="true">
        <div className="intro-curtain intro-curtain-left">
          <div className="intro-curtain-copy intro-copy-left">
            <strong>Security<br />Intelligence</strong>
            <small>EDR · RMM · DLP</small>
          </div>
        </div>
        <div className="intro-spine">
          <div className="intro-mark">
            <span className="brand-ice">P</span><span>Ar</span><span className="brand-fire">A</span><span>sYt</span><span className="brand-fire">E</span>
          </div>
          <div className="intro-cloud">cloud</div>
        </div>
        <div className="intro-curtain intro-curtain-right">
          <div className="intro-curtain-copy intro-copy-right">
            <strong>Control<br />Visibility</strong>
            <small>Secure Comms · DevOps</small>
          </div>
        </div>
      </div>
    </>
  );
}
