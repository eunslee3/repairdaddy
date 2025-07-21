import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { PhoneIcon } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white p-3 rounded-full mb-6">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
              alt="Repair Daddy"
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Repair Daddy</h1>
          <p className="text-xl md:text-2xl font-medium mb-4">We provide quality and honesty</p>
          <p className="text-lg md:text-xl mb-8 opacity-90">Proudly serving the Chicagoland area and suburbs</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+13125551234"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Now
            </a>
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
