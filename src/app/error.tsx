"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("PArAsYtE cloud render error", error);
  }, [error]);

  return (
    <main className="system-page">
      <div className="orb-field" aria-hidden="true">
        <div className="orb orb-fire" />
        <div className="orb orb-mid" />
      </div>
      <section className="lg lg-prism system-card" aria-labelledby="error-title">
        <div className="eyebrow" style={{ color: "var(--fire)" }}><span>Recoverable error</span></div>
        <h1 id="error-title">This view needs a restart.</h1>
        <p>No action was taken on your behalf. Retry the current view or return to the homepage.</p>
        <div className="system-actions">
          <button type="button" className="btn-solid system-action" onClick={reset}>Try again</button>
          <Link href="/" className="btn-fire system-action">Go home</Link>
        </div>
      </section>
    </main>
  );
}
