import { projects } from "@/lib/projects";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyBody } from "@/components/work/CaseStudyBody";

const chakra = projects.find((p) => p.slug === "chakra-reader")!;

export default function ChakraReaderPage() {
  const sections = [
    {
      title: "Overview",
      content: "An AI-powered reading assistant that listens, responds, and adapts to the reader in real time.",
    },
    {
      title: "Problem",
      content: "Reading assistants often treat the reader as a passive consumer. They present content without adapting to the reader's pace, or they require manual input that breaks the flow of reading. The goal was to build a reading experience that listens, responds when asked, and feels natural in a single continuous interaction.",
    },
    {
      title: "My Role",
      content: "Role: Full-Stack Engineer. Responsibilities:\n• AI product UX design for the reading assistant interface\n• Real-time interaction using WebSockets and streaming responses\n• Speech recognition integration via Amazon Transcribe\n• Frontend implementation and component architecture\n• Backend and API integration for the assistant service",
    },
  ];

  const results = [
    { metric: "Real-time", description: "Voice and text responses within ~800ms" },
    { metric: "Streaming", description: "Server-sent events for incremental UI updates" },
  ];

  const technologies = [
    "Next.js",
    "TypeScript",
    "OpenAI",
    "Vercel AI SDK",
    "Amazon Transcribe",
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <CaseStudyHeader
        project={chakra}
        subtitle="An AI-powered reading assistant combining generative AI, real-time interaction, and speech recognition."
      />
      <CaseStudyBody
        project={chakra}
        sections={sections}
        results={results}
        technologies={technologies}
      />
    </div>
  );
}
