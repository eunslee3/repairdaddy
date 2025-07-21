"use client"

import { useState } from "react"
import Link from "next/link"
import { PhoneIcon, ThermometerIcon, FlameIcon, DropletIcon, CheckIcon } from "lucide-react"

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("ac")

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              High-Quality HVAC Equipment for Every Home & Business
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Explore our selection of premium heating, cooling, and air quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a
                href="tel:+13125551234"
                className="inline-flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Now
              </a> */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "ac" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("ac")}
            >
              Air Conditioning
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "heating"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("heating")}
            >
              Heating
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "iaq" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("iaq")}
            >
              Indoor Air Quality
            </button>
          </div>

          {/* AC Products */}
          {activeTab === "ac" && (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Air Conditioning Units</h2>
                <p className="text-lg text-gray-600">
                  Energy-efficient cooling solutions for homes and businesses of all sizes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Central Air Conditioners",
                    description: "High-efficiency central AC systems for whole-home cooling.",
                    brands: ["Carrier", "Trane", "Lennox", "Rheem"],
                  },
                  {
                    title: "Ductless Mini-Split Systems",
                    description: "Perfect for homes without ductwork or for room additions.",
                    brands: ["Mitsubishi", "Daikin", "Fujitsu", "LG"],
                  },
                  {
                    title: "Heat Pumps",
                    description: "Year-round comfort with both heating and cooling capabilities.",
                    brands: ["Carrier", "Trane", "Bryant", "Goodman"],
                  },
                ].map((product) => (
                  <div key={product.title} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-center h-20 w-20 bg-blue-100 rounded-full mb-6 mx-auto">
                      <ThermometerIcon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{product.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{product.description}</p>
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Popular Brands:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.brands.map((brand) => (
                          <span key={brand} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Heating Products */}
          {activeTab === "heating" && (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Heating Systems</h2>
                <p className="text-lg text-gray-600">
                  Reliable heating solutions to keep you warm during cold Chicago winters.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Gas Furnaces",
                    description: "High-efficiency gas furnaces for reliable winter heating.",
                    brands: ["Carrier", "Trane", "Lennox", "Bryant"],
                  },
                  {
                    title: "Boilers",
                    description: "Hot water and steam boilers for radiator and in-floor heating.",
                    brands: ["Weil-McLain", "Burnham", "Slant/Fin", "Navien"],
                  },
                  {
                    title: "Electric Heating",
                    description: "Electric furnaces and baseboard heaters for homes without gas.",
                    brands: ["Carrier", "Coleman", "Rheem", "Goodman"],
                  },
                ].map((product) => (
                  <div key={product.title} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-center h-20 w-20 bg-orange-100 rounded-full mb-6 mx-auto">
                      <FlameIcon className="h-10 w-10 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{product.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{product.description}</p>
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Popular Brands:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.brands.map((brand) => (
                          <span key={brand} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IAQ Products */}
          {activeTab === "iaq" && (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Indoor Air Quality Products</h2>
                <p className="text-lg text-gray-600">Solutions for cleaner, healthier air in your home or business.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Air Purifiers",
                    description: "Whole-home air purification systems that remove airborne contaminants.",
                    brands: ["Carrier", "Trane", "Aprilaire", "Honeywell"],
                  },
                  {
                    title: "Humidifiers & Dehumidifiers",
                    description: "Maintain optimal humidity levels for comfort and health.",
                    brands: ["Aprilaire", "Honeywell", "GeneralAire", "Carrier"],
                  },
                  {
                    title: "Ventilation Systems",
                    description: "Fresh air exchange systems to improve indoor air quality.",
                    brands: ["Panasonic", "Broan", "Fantech", "RenewAire"],
                  },
                ].map((product) => (
                  <div key={product.title} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-center h-20 w-20 bg-green-100 rounded-full mb-6 mx-auto">
                      <DropletIcon className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{product.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{product.description}</p>
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Popular Brands:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.brands.map((brand) => (
                          <span key={brand} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Installation & Warranty Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certified Installation & Warranty</h2>
            <p className="text-lg text-gray-600">
              Professional installation by licensed technicians, backed by industry-leading warranties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Installation</h3>
              <ul className="space-y-3">
                {[
                  "Factory-trained technicians",
                  "Proper sizing and load calculations",
                  "Code-compliant installations",
                  "Clean and professional work area",
                  "Complete system testing",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Warranty Coverage</h3>
              <ul className="space-y-3">
                {[
                  "Manufacturer parts warranties",
                  "Extended warranty options",
                  "Labor warranties on installations",
                  "Maintenance plans available",
                  "Worry-free guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your HVAC System?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Repair Daddy today for expert advice and a free quote.
          </p>
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
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
