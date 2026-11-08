import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { themeInitScript } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Zharfan Hakim | Full-Stack Engineer",
  description:
    "Portfolio of Zharfan Hakim, a Full-Stack Engineer building production web applications and AI-powered products.",
  keywords: [
    "Zharfan Hakim",
    "Full-Stack Engineer",
    "Software Engineer",
    "AI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Japan",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zharfan Hakim | Full-Stack Engineer",
    description:
      "Portfolio of Zharfan Hakim, a Full-Stack Engineer building production web applications and AI-powered products.",
    url: "https://jarrworkspace.com",
    siteName: "Zharfan Hakim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zharfan Hakim | Full-Stack Engineer",
    description:
      "Portfolio of Zharfan Hakim, a Full-Stack Engineer building production web applications and AI-powered products.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let locale: "en" | "ja" = "en";
  try {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get("locale");
    if (localeCookie?.value === "ja") {
      locale = "ja";
    }
  } catch {
    locale = "en";
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${roboto.variable} antialiased`}>
        <LocaleProvider locale={locale}>
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}



