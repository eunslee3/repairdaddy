import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ReCaptchaProvider } from "next-recaptcha-v3"

export const metadata: Metadata = {
  title: "Repair Daddy",
  description: 'High-efficiency HVAC systems with top brands like Carrier, Trane, and Mitsubishi. Expert installation and service you can trust.',
  openGraph: {
    title: 'Your Site Title - HVAC Experts',
    description: 'High-efficiency HVAC systems with top brands like Carrier, Trane, and Mitsubishi.',
    url: 'https://repairdaddyhvac.com',
    siteName: 'Repair Daddy',
    images: [
      {
        url: 'https://repairdaddy.com/hero-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Repair Daddy',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          <Header />
          {children}
          <Footer />
        </ReCaptchaProvider>
      </body>
    </html>
  )
}
