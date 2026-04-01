import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stratos — Enterprise Cloud Platform",
  description:
    "Stratos helps teams build, scale, and monitor applications with enterprise-grade cloud infrastructure. From edge computing to real-time analytics.",
  openGraph: {
    title: "Stratos — Enterprise Cloud Platform",
    description:
      "Infrastructure at the Speed of Thought. Build, scale, and monitor with enterprise-grade cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <head>
        <Script
          src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-body antialiased">
        <Navbar />
        <main className="lg:ml-[68px]">{children}</main>
      </body>
    </html>
  );
}
