import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { Approach } from "@/components/sections/Approach";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] text-neutral-900">
      <Hero />
      <SelectedWork />
      <Experience />
      <Stack />
      <Approach />
      <About />
      <Contact />
    </main>
  );
}

