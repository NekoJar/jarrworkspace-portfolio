import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { themeInitScript } from "@/lib/theme";
import { getHomeSocialImage } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto" });

async function readLocale(): Promise<"en" | "ja"> {
  try {
    const cookieStore = await cookies();
    return cookieStore.get("locale")?.value === "ja" ? "ja" : "en";
  } catch {
    return "en";
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await readLocale();
  const socialImage = getHomeSocialImage(locale);
  const title = "Zharfan Hakim | Full-Stack Engineer";
  const description =
    "Portfolio of Zharfan Hakim, a Full-Stack Engineer building production web applications and AI-powered products.";

  return {
    title,
    description,
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
      locale: locale === "ja" ? "ja_JP" : "en_US",
      title,
      description,
      url: "https://jarrworkspace.com",
      siteName: "Zharfan Hakim",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Zharfan Hakim, full-stack engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await readLocale();

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



