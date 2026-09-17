import { ArrowUpRight, Download, Layers, Monitor, ShieldCheck, Smartphone } from "lucide-react";
import { BROWSER_DOWNLOADS, MOBILE_BETA_MAILTO } from "@/lib/downloads";

interface Props {
  id: string;
  contentH: string;
  isMobile: boolean;
}

const desktopPlatforms = BROWSER_DOWNLOADS.filter((item) => item.status === "available");
const mobilePlatforms = BROWSER_DOWNLOADS.filter((item) => item.status === "coming-soon");

export default function BrowserPage({ id, contentH, isMobile }: Props) {
  return (
    <section
      id={id}
      aria-labelledby="browser-title"
      style={{
        height: contentH,
        minHeight: isMobile ? "100svh" : undefined,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "82px 20px 46px" : "clamp(24px,4vh,48px) clamp(24px,5vw,72px)",
      }}
    >
      <div className="orb-field" aria-hidden="true">
        <div className="orb orb-ice" style={{ animationDelay: "-4s" }} />
        <div className="orb orb-fire" style={{ animationDelay: "-12s" }} />
        <div className="orb orb-mid" style={{ animationDelay: "-8s" }} />
      </div>
      <div className="dot-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(260px,.82fr) minmax(520px,1.5fr)",
          gap: isMobile ? "26px" : "clamp(28px,5vw,72px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <div className="eyebrow eyebrow-ice">
            <span>PArAsYtE Browser</span>
          </div>
          <h2 id="browser-title" className="section-title" style={{ marginBottom: "12px" }}>
            Your web.<br />Your rules.
          </h2>
          <p className="section-copy" style={{ maxWidth: "480px", marginBottom: "20px" }}>
            A focused desktop browser with native tabs, liquid-glass controls, light and dark appearance,
            bookmarks, downloads and explicit session trust. Built to grow into the PArAsYtE security stack.
          </p>

          <div style={{ display: "grid", gap: "9px", marginBottom: "20px" }}>
            {[
              { icon: ShieldCheck, title: "Trust is explicit", text: "Persistent site sessions are granted deliberately, not silently." },
              { icon: Layers, title: "Real native tabs", text: "Independent desktop web contents instead of fragile iframe-only browsing." },
              { icon: Monitor, title: "Desktop first", text: "macOS, Windows and Linux builds are available today." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="feature-line">
                <span className="feature-icon"><Icon size={15} /></span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </div>
            ))}
          </div>

          <a href={MOBILE_BETA_MAILTO} className="btn-fire" style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: ".78rem", textDecoration: "none" }}>
            Join mobile beta <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="browser-download-panel lg lg-prism">
          <div className="browser-download-head">
            <div>
              <div className="browser-kicker">Desktop release</div>
              <div className="browser-panel-title">Download PArAsYtE Browser</div>
            </div>
            <span className="availability-pill"><span className="availability-dot" /> Desktop available</span>
          </div>

          <div className="download-grid download-grid-desktop">
            {desktopPlatforms.map((item) => (
              <a
                key={item.platform}
                href={item.href ?? undefined}
                className="download-card download-card-live"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label}, ${item.format}`}
              >
                <span className="download-card-icon"><Download size={18} /></span>
                <span className="download-card-body">
                  <strong>{item.platform}</strong>
                  <small>{item.format}</small>
                  <em>{item.note}</em>
                </span>
                <ArrowUpRight size={16} className="download-card-arrow" />
              </a>
            ))}
          </div>

          <div className="mobile-release-row">
            <div className="mobile-release-copy">
              <span className="download-card-icon"><Smartphone size={18} /></span>
              <span>
                <strong>Android + iOS</strong>
                <small>Native mobile browsers are in development.</small>
              </span>
            </div>
            <div className="download-grid download-grid-mobile">
              {mobilePlatforms.map((item) => (
                <div key={item.platform} className="download-card download-card-soon" aria-label={`${item.platform} coming soon`}>
                  <span className="download-card-body">
                    <strong>{item.platform}</strong>
                    <small>{item.format}</small>
                  </span>
                  <span className="coming-soon-chip">Coming soon</span>
                </div>
              ))}
            </div>
          </div>

          <p className="download-footnote">
            Mobile buttons will switch to the official Google Play, App Store or TestFlight destinations when those builds are published.
          </p>
        </div>
      </div>
    </section>
  );
}
