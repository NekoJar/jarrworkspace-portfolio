import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat, pixel, roboto } from "@/components/fonts";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "JarrWorkspace - Front End Developer | UI/UX Designer",
  description:
    "A personal website for my portfolio. Made by Fluiecx using Next JS, TypeScript, Tailwind CSS, Framer Motion, and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} ${inter.variable} ${pixel.variable}  font-roboto bg-neutral-100 overflow-auto md:overflow-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
