import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { Locale } from "./i18n";
import { projects } from "./projects";
import type { Project } from "./types";

export const SITE_URL = "https://jarrworkspace.com";

type SocialImage = {
  label?: string;
  title: string;
  subtitle?: string;
  tags?: string;
  meta?: string;
};

export function socialImageUrl({ label, title, subtitle, tags, meta }: SocialImage) {
  const params = new URLSearchParams();
  if (label) params.set("label", label);
  params.set("title", title);
  if (subtitle) params.set("sub", subtitle);
  if (tags) params.set("tags", tags);
  if (meta) params.set("meta", meta);
  return `${SITE_URL}/og?${params.toString()}`;
}

export function getHomeSocialImage(locale: Locale) {
  return socialImageUrl({
    label: locale === "ja" ? "フルスタックエンジニア" : "Full-stack engineer",
    title: "Zharfan Hakim",
    subtitle:
      locale === "ja"
        ? "プロダクション向けWebアプリケーションとAIプロダクトを、企画から実装まで。"
        : "Production web applications and AI-powered products, built end to end.",
    tags: "Next.js · TypeScript · AI",
    meta: locale === "ja" ? "日本" : "Japan",
  });
}

export function getProjectMetadata(project: Project, locale: Locale): Metadata {
  const title = project.title[locale];
  const description = project.description[locale];
  const url = `${SITE_URL}/work/${project.slug}`;
  const image = socialImageUrl({
    label: locale === "ja" ? "ケーススタディ" : "Case study",
    title: project.title[locale],
    subtitle: project.summary[locale],
    tags: project.technologies.slice(0, 3).join(" · "),
  });

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
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${project.title[locale]} case study by Zharfan Hakim`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
