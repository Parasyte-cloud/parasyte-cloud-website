export type DownloadPlatform = "macOS" | "Windows" | "Linux" | "Android" | "iOS";

export type DownloadItem = {
  platform: DownloadPlatform;
  label: string;
  format: string;
  href: string | null;
  status: "available" | "coming-soon";
  note: string;
};

export const BROWSER_DOWNLOADS: DownloadItem[] = [
  {
    platform: "macOS",
    label: "Download for macOS",
    format: ".dmg · Apple silicon",
    href: "https://github.com/Parasyte-cloud/gatehouse/releases/download/desktop-v0.1.1/PArAsYtE.Browser-0.1.0-arm64.dmg",
    status: "available",
    note: "Native PArAsYtE desktop build for Apple silicon.",
  },
  {
    platform: "Windows",
    label: "Download for Windows",
    format: ".exe · Windows 10/11",
    href: "https://github.com/Parasyte-cloud/gatehouse/releases/download/desktop-v0.1.1/PArAsYtE.Browser.Setup.0.1.0.exe",
    status: "available",
    note: "Desktop installer for supported Windows systems.",
  },
  {
    platform: "Linux",
    label: "Download for Linux",
    format: ".AppImage",
    href: "https://github.com/Parasyte-cloud/gatehouse/releases/download/desktop-v0.1.1/PArAsYtE.Browser-0.1.0.AppImage",
    status: "available",
    note: "Portable AppImage for supported Linux distributions.",
  },
  {
    platform: "Android",
    label: "Android app",
    format: "Google Play / APK",
    href: null,
    status: "coming-soon",
    note: "Native Android browser is in development.",
  },
  {
    platform: "iOS",
    label: "iPhone & iPad",
    format: "App Store / TestFlight",
    href: null,
    status: "coming-soon",
    note: "Native iOS browser is in development.",
  },
];

export const MOBILE_BETA_MAILTO =
  "mailto:infra@parasyte.cloud?subject=PArAsYtE%20Browser%20mobile%20beta";
