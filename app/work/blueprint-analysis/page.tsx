import type { Metadata } from "next";
import { CaseStudy } from "@/components/work/CaseStudy";
import { getCaseStudyMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getCaseStudyMetadata("blueprint-analysis");
}

export default function BlueprintAnalysisPage() {
  return (
    <main>
      <CaseStudy slug="blueprint-analysis" />
    </main>
  );
}
