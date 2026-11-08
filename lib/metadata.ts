import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { Locale } from "./i18n";
import { projects } from "./projects";
import type { Project } from "./types";

export const SITE_URL = "https://jarrworkspace.com";

export function getProjectMetadata(project: Project, locale: Locale): Metadata {
  const title = project.title[locale];
  const description = project.description[locale];
  const url = `${SITE_URL}/work/${project.slug}`;

  return {
    title: `${title} | Zharfan Hakim`,
    description,
    keywords: [...project.technologies, "Zharfan Hakim", "Full-Stack Engineer"],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      title,
      description,
      url,
      siteName: "Zharfan Hakim",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export async function getCaseStudyMetadata(slug: string): Promise<Metadata> {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const cookieStore = await cookies();
  const locale: Locale = cookieStore.get("locale")?.value === "ja" ? "ja" : "en";

  return getProjectMetadata(project, locale);
}
