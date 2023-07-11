import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Vetus",
  description: "Explore childhood games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${pressStart2P.className} overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
