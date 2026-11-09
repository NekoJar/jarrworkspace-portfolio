import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ExperienceStack } from "@/components/sections/ExperienceStack";
import { About } from "@/components/sections/About";
import { Credential } from "@/components/sections/Credential";
import { Contact } from "@/components/sections/Contact";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProject = projects.find((p) => p.slug === "blueprint-analysis") ?? projects[0];

  return (
    <main className="bg-[#f5f5f5] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Hero featuredProject={featuredProject} />
      <SelectedWork />
      <ExperienceStack />
      <About />
      <Credential />
      <Contact />
    </main>
  );
}
