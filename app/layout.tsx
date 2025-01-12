import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pepino | Code to image",
  description: "Pepino is a tool that converts code to images.",
  keywords: [
    "code",
    "image",
    "convert",
    "tool",
    "developer",
    "programming",
    "web",
    "app",
  ],
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${jetBrainsMono.className}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
