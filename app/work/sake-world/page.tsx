import { projects } from "@/lib/projects";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyBody } from "@/components/work/CaseStudyBody";

const sake = projects.find((p) => p.slug === "sake-world")!;

export default function SakeWorldPage() {
  const sections = [
    {
      title: "Overview",
      content: "A full-stack e-commerce and Web3 platform combining product catalogs, payments, and blockchain integrations.",
    },
    {
      title: "Problem",
      content: "The platform needed to serve a standard e-commerce storefront while also giving users a Web3-enabled experience for items and communities. The architectural challenge was keeping the frontend fast and accessible while wiring up backend services, a PostgreSQL database, and Web3 on-ramps without creating a fragmented codebase.",
    },
    {
      title: "My Role",
      content: "Role: Full-Stack Engineer. Responsibilities:\n• Frontend development for the storefront, product details, and checkout\n• Backend API development for product, order, and user workflows\n• Database design and management for products, orders, and inventory\n• E-commerce workflow implementation and payment integration\n• Web3 integration for wallet-based actions",
    },
  ];

  const results = [
    { metric: "Multi-step flows", description: "Checkout and wallet actions completed in a single session" },
    { metric: "Unified stack", description: "One shared codebase for web and Web3 experiences" },
  ];

  const technologies = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <CaseStudyHeader
        project={sake}
        subtitle="A full-stack e-commerce and Web3 platform."
      />
      <CaseStudyBody
        project={sake}
        sections={sections}
        results={results}
        technologies={technologies}
      />
    </div>
  );
}
