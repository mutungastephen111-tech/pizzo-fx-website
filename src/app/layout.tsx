
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "PIZZO FX | Professional Forex Education",
  description:
    "PIZZO FX provides professional Forex education, market analysis, trading mentorship and market intelligence.",
  keywords: [
    "PIZZO FX",
    "Forex Education",
    "Forex Trading",
    "Market Analysis",
    "Trading Mentorship",
    "Storm Market With Pizzo",
  ],
  applicationName: "PIZZO FX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
