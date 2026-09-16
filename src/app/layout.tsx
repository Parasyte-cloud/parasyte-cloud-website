import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e1219",
};

export const metadata: Metadata = {
  title: "PArAsYtE cloud: Security · Intelligence · Control",
  description: "Self-hosted EDR + RMM + DLP platform on bare-metal Kubernetes. Hardware-bound endpoint security with full data sovereignty. No managed cloud.",
  keywords: ["EDR","RMM","DLP","endpoint security","cybersecurity","AWS scanner","parasyte cloud","mTLS","bare-metal Kubernetes"],
  authors: [{ name: "Biola Lawal", url: "https://parasyte.cloud" }],
  metadataBase: new URL("https://parasyte.cloud"),
  openGraph: {
    title: "PArAsYtE cloud: Security · Intelligence · Control",
    description: "Self-hosted EDR + RMM + DLP on bare-metal Kubernetes. No managed cloud. Full ownership.",
    url: "https://parasyte.cloud",
    siteName: "PArAsYtE cloud",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PArAsYtE cloud: Security · Intelligence · Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PArAsYtE cloud",
    description: "Self-hosted EDR + RMM + DLP. Security · Intelligence · Control.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
