import type { Metadata } from "next";
import { EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Portfolio | Architecture & Engineering",
  description: "High-performance software architecture portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} ${spaceMono.variable} h-full antialiased dark scroll-smooth scroll-pt-[5.5rem]`}>
      <body className="min-h-full flex flex-col relative font-mono text-[var(--color-offwhite)]" suppressHydrationWarning>
        <LanguageProvider>
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
