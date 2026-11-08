import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ExperienceStack } from "@/components/sections/ExperienceStack";
import { About } from "@/components/sections/About";
import { Credential } from "@/components/sections/Credential";
import { ResumeZip } from "@/components/sections/ResumeZip";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Hero />
      <SelectedWork />
      <ExperienceStack />
      <About />
      <Credential />
      <div className="-mt-12" />
      <ResumeZip />
      <div className="-mt-12" />
      <Contact />
    </main>
  );
}
