import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextPageLink from "@/components/NextPageLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Name — Interaction Designer",
    template: "%s — Your Name",
  },
  description: "Interaction designer, 18 years in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
          {children}
          <NextPageLink />
        </main>
        <Footer />
      </body>
    </html>
  );
}
