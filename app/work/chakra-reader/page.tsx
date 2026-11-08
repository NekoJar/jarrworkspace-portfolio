import type { Metadata } from "next";
import { CaseStudy } from "@/components/work/CaseStudy";
import { getCaseStudyMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getCaseStudyMetadata("chakra-reader");
}

export default function ChakraReaderPage() {
  return (
    <main>
      <CaseStudy slug="chakra-reader" />
    </main>
  );
}
