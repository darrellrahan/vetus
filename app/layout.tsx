import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import Script from "next/script";

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
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7804133063729413"
        crossOrigin="anonymous"
      ></Script>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-XVR4HFJ5WE`}
      ></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XVR4HFJ5WE');
        `}
      </Script>
    </html>
  );
}
