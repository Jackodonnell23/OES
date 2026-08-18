import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://odonnelledu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${BASE_URL}/school-acceptances`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${BASE_URL}/testimonials`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
