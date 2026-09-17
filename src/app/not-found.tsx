import Link from "next/link";

export default function NotFound() {
  return (
    <main className="system-page">
      <div className="orb-field" aria-hidden="true">
        <div className="orb orb-ice" />
        <div className="orb orb-fire" />
      </div>
      <section className="lg lg-prism system-card" aria-labelledby="not-found-title">
        <div className="eyebrow eyebrow-ice"><span>404</span></div>
        <h1 id="not-found-title">That page is not here.</h1>
        <p>The address may have changed, or the destination may no longer be public.</p>
        <Link href="/" className="btn-solid system-action">Return to PArAsYtE cloud</Link>
      </section>
    </main>
  );
}
