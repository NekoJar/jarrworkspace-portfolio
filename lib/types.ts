export type LocalizedText = {
  en: string;
  ja: string;
};

export type ProjectMetric = {
  metric: string;
  description: LocalizedText;
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
};
