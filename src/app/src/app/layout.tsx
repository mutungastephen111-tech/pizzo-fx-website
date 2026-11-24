
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIZZO FX | Professional Forex Education",
  description:
    "Learn, understand and navigate the financial markets with PIZZO FX. Join our trading education community and Storm Market with Pizzo.",
  applicationName: "PIZZO FX",
  keywords: [
    "PIZZO FX",
    "Forex education",
    "Trading education",
    "Storm Market with Pizzo",
    "Forex Kenya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
