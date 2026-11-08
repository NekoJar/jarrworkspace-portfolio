import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ExperienceStack } from "@/components/sections/ExperienceStack";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Hero />
      <SelectedWork />
      <ExperienceStack />
      <About />
      <Contact />
    </main>
  );
}
