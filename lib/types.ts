export type LocalizedText = {
  en: string;
  ja: string;
};

export type ProjectMetric = {
  metric: string;
  description: LocalizedText;
};

export type CaseStudyStep = {
  title: LocalizedText;
  body: LocalizedText;
};

export type CaseStudyChapter = {
  id: string;
  title: LocalizedText;
  paragraphs?: LocalizedText[];
  steps?: CaseStudyStep[];
  bullets?: LocalizedText[];
};

export type CaseStudyContent = {
  slug: string;
  outcome: LocalizedText;
  chapters: CaseStudyChapter[];
};

export type ProjectLinks = {
  live?: string;
  repo?: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  type: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  contribution: LocalizedText[];
  technologies: string[];
  results?: ProjectMetric[];
  featured: boolean;
  image: string;
  screenshot?: string;
  links?: ProjectLinks;
};
