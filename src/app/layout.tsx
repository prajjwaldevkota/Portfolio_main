import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

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
    description: "Full-Stack Developer crafting exceptional digital experiences with modern technologies.",
    siteName: "Prajjwal Devkota Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prajjwal Devkota — Full-Stack Developer",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} ${GeistMono.variable} font-sans antialiased bg-black text-zinc-100`}>
        {children}
      </body>
    </html>
  )
}
