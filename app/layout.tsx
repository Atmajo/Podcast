import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import RightBar from "@/components/modules/RightBar";
import LeftBar from "@/components/modules/LeftBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast",
  description: "AI SAAS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex justify-between`}>
        <LeftBar />
        {children}
        <RightBar />
      </body>
    </html>
  );
}
