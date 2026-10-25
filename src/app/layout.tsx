import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prajjwal Devkota — Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, TypeScript, Node.js, and Python. View portfolio, explore projects, and get in touch.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Python",
    "Web Development",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Prajjwal Devkota" }],
  creator: "Prajjwal Devkota",
  publisher: "Prajjwal Devkota",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devkotaprajjwal.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devkotaprajjwal.com.np",
    title: "Prajjwal Devkota — Full-Stack Developer",
    description: "Full-stack developer and IT systems analyst based in Toronto. Projects, experience, and contact information.",
    siteName: "Prajjwal Devkota Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
