import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.icetei2027.org";
  const routes = ["", "/about", "/topics", "/speakers", "/dates", "/submission", "/registration", "/program", "/committee", "/sponsors", "/contact"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 }));
}
