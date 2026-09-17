import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://parasyte.cloud/sitemap.xml",
    host: "https://parasyte.cloud",
  };
}
