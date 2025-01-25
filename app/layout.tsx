import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Particles } from "./styles/animations/particles";
import { ThemeProvider } from "./components/providers/theme-provider";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetterPerformance - Optimize Your PC",
  description:
    "International platform for sharing and downloading PC optimization tweaks",
  keywords: ["PC optimization", "tweaks", "performance", "gaming", "windows"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "system"]}
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <Particles quantity={75} />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
