import type { Project } from "./types";
import { siteCopy } from "./site";

const BASE_URL = "https://jarrworkspace.com";

export function getBaseMetadata(locale: "en" | "ja") {
  const copy = locale === "ja" ? siteCopy : siteCopy;
  return {
    title: "Zharfan Hakim | Full-Stack Engineer",
    description:
      "Portfolio of Zharfan Hakim, a Full-Stack Engineer building production web applications and AI-powered products.",
    keywords: [
      "Zharfan Hakim",
      "Full-Stack Engineer",
      "Software Engineer",
      "AI Engineer",
      "Next.js",
      "React",
      "TypeScript",
      "Japan",
    ],
  };
}

export function getProjectMetadata(project: Project, locale: "en" | "ja") {
  const title = project.title.ja ?? project.title.en;
  const description = project.description.ja ?? project.description.en;
  return {
    title,
    description,
    keywords: [...(project.technologies || []), "Zharfan Hakim", "Full-Stack Engineer"],
    openGraph: {
      type: "website",
      locale,
      title,
      description,
      url: `${BASE_URL}/work/${project.slug}`,
      siteName: "Zharfan Hakim",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}
