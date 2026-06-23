import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "PArAsYtE cloud — Security · Intelligence · Control",
  description: "Self-hosted EDR + RMM + DLP platform on bare-metal Kubernetes. No managed cloud. Full ownership.",
  keywords: ["EDR","RMM","DLP","cybersecurity","endpoint security","AWS scanner","parasyte cloud"],
  authors: [{ name: "Biola Lawal", url: "https://parasyte.cloud" }],
  openGraph: {
    title: "PArAsYtE cloud — Security · Intelligence · Control",
    description: "Self-hosted EDR + RMM + DLP platform built on bare-metal Kubernetes.",
    url: "https://parasyte.cloud",
    siteName: "PArAsYtE cloud",
    type: "website",
  },
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
