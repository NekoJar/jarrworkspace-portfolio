import localFont from "next/font/local";
import {
  Inter,
  Montserrat,
  Pixelify_Sans,
  Roboto_Mono,
} from "next/font/google";

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const avant = localFont({
  src: "../public/fonts/AVGARDD_2.woff",
  weight: "400",
  variable: "--font-avant",
});
