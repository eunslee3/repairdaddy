import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Script from "next/script"; // ← IMPORTANT for injecting schema

export const metadata: Metadata = {
  title: "Repair Daddy",
  description:
    "High-efficiency HVAC systems with top brands like Carrier, Trane, and Mitsubishi. Expert installation and service you can trust.",
  openGraph: {
    title: "Repair Daddy - HVAC Experts",
    description:
      "High-efficiency HVAC systems with top brands like Carrier, Trane, and Mitsubishi.",
    url: "https://repairdaddyhvac.com",
    siteName: "Repair Daddy",
    images: [
      {
        url: "https://repairdaddyhvac.com/hero-img.jpg",
        width: 1200,
        height: 630,
        alt: "Repair Daddy",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "Repair Daddy",
              image: "https://repairdaddyhvac.com/logo.svg", // use a valid URL (can be SVG or PNG)
              url: "https://repairdaddyhvac.com",
              telephone: "+1-773-814-2661", // Replace with real number
              address: {
                "@type": "PostalAddress",
                streetAddress: "99 Manchester Dr", // Replace with real address
                addressLocality: "Buffalo Grove",
                addressRegion: "IL", // or your state
                postalCode: "60089",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  opens: "08:00",
                  closes: "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "17:00"
                }
              ],
              priceRange: "$$",
              description:
                "High-efficiency HVAC systems with expert installation and repair services across Kansas.",
              sameAs: [
                "https://www.facebook.com/people/Repair-DADDY/100088979646722/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          <Header />
          {children}
          <Footer />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
