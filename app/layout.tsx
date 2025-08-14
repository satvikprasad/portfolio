import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const crimsonText = Crimson_Text({
  weight: "400",
  variable: "--font-crimson-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satvik Prasad",
  description: "A Little More About Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} antialiased text-2xl`}>
        <div className="bg-white dark:bg-black h-screen text-slate-700 dark:text-slate-100 overflow-hidden flex flex-col">
          <Navbar />
          <div className="py-12 flex flex-col h-full">
              <div className="m-auto">
                  {children}
              </div>
          </div>
        </div>
      </body>
    </html>
  );
}
