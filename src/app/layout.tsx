import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PerformanceMonitor from "@/components/common/PerformanceMonitor";
import ScrollToTop from "@/components/common/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AirPower USA | Revolutionary Clean Energy Technology",
  description: "Zero-emission compressed air engine systems powering the future. Available in 20-foot (0.5MW) and 40-foot (1.5MW) containerized platforms.",
  keywords: ["clean energy", "compressed air engine", "zero emissions", "mobile power", "sustainable technology"],
  authors: [{ name: "AirPower USA" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <ScrollToTop />
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
