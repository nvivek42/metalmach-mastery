import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import "@/components/Services.css";
import "@/components/Clients.css";
import HomePage from "@/components/HomePage";

const inter = Inter({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ 
  weight: ['300', '400', '700'], 
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Metalmach Mastery",
  description: "MMPL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <HomePage />
      </body>
    </html>
  );
}
