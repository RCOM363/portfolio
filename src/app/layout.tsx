import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import SwipeNavigationProvider from "@/components/SwipeNavigationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Lankeppanavar",
  description: "Software developer building modern applications.",
  openGraph: {
    title: "Rahul Lankeppanavar",
    description: "Software developer building modern applications.",
    type: "website",
  },
  icons: {
    icon: [{ url: "./favicon.ico" }],
  },
  authors: [{ name: "Rahul Lankeppanavar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-2xl font-sans">
            <header>
              <Navbar />
            </header>
            <SwipeNavigationProvider>
              <main className="w-full px-4">{children}</main>
            </SwipeNavigationProvider>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
