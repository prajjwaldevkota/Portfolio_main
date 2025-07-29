import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prajjwal Devkota - Portfolio",
  description: "Full Stack Developer crafting exceptional digital experiences with modern technologies. Specializing in React, TypeScript, Node.js, and Python.",
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
    title: "Prajjwal Devkota - Full Stack Developer Portfolio",
    description: "Full Stack Developer crafting exceptional digital experiences with modern technologies.",
    siteName: "Prajjwal Devkota Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prajjwal Devkota - Full Stack Developer",
      },
    ],
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
  verification: {
    google: "your-google-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
