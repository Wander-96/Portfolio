import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundCanvas } from "@/components/layout/BackgroundCanvas";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Modern high-performance personal portfolio website built with Next.js and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark scroll-smooth scroll-pt-[5.5rem]`}>
      <body className="min-h-full flex flex-col relative text-slate-50 cursor-none">
        <LanguageProvider>
          <CustomCursor />
          <BackgroundCanvas />
          <Navbar />
          <main className="flex-1 w-full pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
