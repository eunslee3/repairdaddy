import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { PhoneIcon } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black/100 to-black/70 text-white py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-90">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/hero-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Text content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Repair Daddy
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-4 text-white">
            We provide quality and honesty
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-white">
            Proudly serving the Chicagoland area and suburbs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
