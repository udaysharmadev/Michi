import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michi - Developer Roadmaps",
  description: "Comprehensive, interactive learning roadmaps for modern software engineering.",
  metadataBase: new URL("https://michi.dev"),
  openGraph: {
    title: "Michi - Developer Roadmaps",
    description: "Comprehensive, interactive learning roadmaps for modern software engineering.",
    url: "https://michi.dev",
    siteName: "Michi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michi - Developer Roadmaps",
    description: "Comprehensive, interactive learning roadmaps for modern software engineering.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
