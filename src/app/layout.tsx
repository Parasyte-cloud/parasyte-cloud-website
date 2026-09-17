import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Rajdhani } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-loaded",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani-loaded",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-loaded",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060a12",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://parasyte.cloud"),
  applicationName: "PArAsYtE cloud",
  title: {
    default: "PArAsYtE cloud | Security · Intelligence · Control",
    template: "%s · PArAsYtE cloud",
  },
  description: "PArAsYtE builds self-hosted security, infrastructure and browser technology with an emphasis on explicit trust, ownership and operational control.",
  keywords: [
    "PArAsYtE",
    "endpoint security",
    "EDR",
    "RMM",
    "DLP",
    "cybersecurity",
    "self-hosted security",
    "browser",
    "bare-metal Kubernetes",
  ],
  authors: [{ name: "PArAsYtE cloud", url: "https://parasyte.cloud" }],
  creator: "PArAsYtE cloud",
  publisher: "PArAsYtE cloud",
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PArAsYtE cloud | Security · Intelligence · Control",
    description: "Self-hosted security, infrastructure and browser technology built around explicit trust and operational ownership.",
    url: "https://parasyte.cloud",
    siteName: "PArAsYtE cloud",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PArAsYtE cloud | Security · Intelligence · Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PArAsYtE cloud",
    description: "Security · Intelligence · Control.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rajdhani.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
