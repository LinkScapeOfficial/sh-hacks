import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const helvetica = localFont({
  src: [
    {
      path: "../fonts/helveticaneueltproex-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helveticaneueltpromdex-webfont.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SH Hacks",
  description: "A hackathon in Shanghai, China.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${helvetica.variable}`}>
        {children}
      </body>
    </html>
  );
}
