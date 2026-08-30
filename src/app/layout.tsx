import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Preloader from "@/components/layout/Preloader";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clubx.pk"),
  title: {
    default: `${site.name} — Gym, Snooker & Lounge in H-13 Islamabad`,
    template: `%s | ${site.name} H-13`,
  },
  description: site.description,
  keywords: [
    "gym in H-13 Islamabad",
    "Club X gym",
    "NUST gym",
    "personal trainer Islamabad",
    "snooker H-13",
    "fitness club Islamabad",
  ],
  openGraph: {
    title: `${site.name} — Gym, Snooker & Lounge in H-13 Islamabad`,
    description: site.description,
    type: "website",
    locale: "en_PK",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <head>
        {/*
          Flags JS before first paint so `[data-anim]` elements can start hidden
          without a flash. Without JS the rule never applies and content shows.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-ready')`,
          }}
        />
      </head>
      <body className="min-h-screen bg-ink antialiased">
        <Preloader />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
