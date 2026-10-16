import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/mammaprint", priority: 0.9 },
  { path: "/blueprint", priority: 0.9 },
  { path: "/iletisim", priority: 0.5 },
  { path: "/gizlilik", priority: 0.2 },
  { path: "/cerez-politikasi", priority: 0.2 },
  { path: "/kullanim-kosullari", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    priority,
  }));
}
