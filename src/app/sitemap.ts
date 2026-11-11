import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mes-solutions.dev";

  const routes = [
    "",
    "/services",
    "/about",
    "/work",
    "/work/constructflow",
    "/work/compass-crm",
    "/work/elite-ball-co",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
