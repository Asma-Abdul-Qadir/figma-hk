import type { Metadata } from "next";

import "./globals.css";

import { Poppins, Josefin_Sans, Lato } from "next/font/google";
import TopBar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const josefin = Josefin_Sans({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-josefin",
});

const lato = Lato({
  style: "normal",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`font-poppin ${poppins.variable} ${josefin.variable} ${lato.variable}`}
    >
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}