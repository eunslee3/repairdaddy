import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ReCaptchaProvider } from "next-recaptcha-v3"

export const metadata: Metadata = {
  title: "Repair Daddy",
  description: "HVAC Repair and Service in Chicago",
  generator: "v0.dev",
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
