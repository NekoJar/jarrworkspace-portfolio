import { projects } from "@/lib/projects";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyBody } from "@/components/work/CaseStudyBody";

const blueprint = projects.find((p) => p.slug === "blueprint-analysis")!;

export default function BlueprintAnalysisPage() {
  const sections = [
    {
      title: "Overview",
      content: "An AI-powered system for analyzing engineering drawings and verifying requirements against information extracted from technical documents.",
    },
    {
      title: "Problem",
      content: "Engineering drawings contain evidence across dimensions, notes, symbols, tables, and visual references. The system needed to determine whether specific requirements were supported by the available drawing evidence while avoiding unsupported conclusions. The early version fed each requirement and its drawing artifacts into a single large language model call, which produced verbose reasoning, unstable costs, and inconsistent evaluations as the document set grew.",
    },
    {
      title: "My Role",
      content: "Role: Full-Stack Engineer. Responsibilities:\n• Frontend implementation for the evaluation dashboard and annotation workflow\n• AI workflow integration across OCR, document understanding, retrieval, and verification\n• Evaluation design and failure investigation\n• Retrieval and verification improvements\n• Workflow optimization to reduce API calls and cost",
    },
  ];

  const results = [
    { metric: "420 → 106", description: "AI calls per evaluation" },
    { metric: "$22.96 → $10.83", description: "Processing cost per run" },
    { metric: "$1.44 → $0.72", description: "Cost per requirement" },
  ];

  const technologies = [
    "Next.js",
    "TypeScript",
    "OpenAI",
    "Gemini",
    "OCR",
    "AWS",
    "PostgreSQL",
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <CaseStudyHeader project={blueprint} subtitle="An AI-powered system for analyzing engineering drawings and verifying requirements." />
      <CaseStudyBody
        project={blueprint}
        sections={sections}
        results={results}
        technologies={technologies}
      />
    </div>
  );
}
