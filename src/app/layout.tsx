import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className={fontSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
