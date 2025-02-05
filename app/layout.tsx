import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const cascadiaMono = localFont({
  src: "../src/assets/fonts/Cascadia.woff",
  style: "normal",
  variable: "--font-cascadia-mono",
});

export const metadata: Metadata = {
  title: "Pepino | Code to image",
  description: "Share your code by turning it into a beautiful image.",
  keywords: [
    "code",
    "image",
    "convert",
    "tool",
    "developer",
    "programming",
    "web",
    "app",
    "share",
    "sharing",
  ],
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${cascadiaMono.variable} ${jetBrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
