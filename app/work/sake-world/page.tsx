import type { Metadata } from "next";
import { CaseStudy } from "@/components/work/CaseStudy";
import { getCaseStudyMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getCaseStudyMetadata("sake-world");
}

export default function SakeWorldPage() {
  return (
    <main>
      <CaseStudy slug="sake-world" />
    </main>
  );
}
