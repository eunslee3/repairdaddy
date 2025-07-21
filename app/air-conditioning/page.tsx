import Link from "next/link"
import { PhoneIcon, CheckIcon } from "lucide-react"

export default function AirConditioningPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Stay Cool with Expert Air Conditioning Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Professional AC services to keep your home comfortable all summer long.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Installation & Replacement */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation & Replacement</h2>
              <p className="text-gray-600 mb-6">
                Expert installation of new air conditioning systems and professional replacement of outdated units.
              </p>
              <ul className="space-y-3">
                {[
                  "New system installation",
                  "System upgrades",
                  "Energy-efficient options",
                  "Professional sizing",
                  "Complete ductwork",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repair Services */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Repair Services</h2>
              <p className="text-gray-600 mb-6">
                Fast, reliable repair services for all brands and models of air conditioning systems.
              </p>
              <ul className="space-y-3">
                {[
                  "Emergency repairs",
                  "Troubleshooting",
                  "Parts replacement",
                  "Refrigerant leaks",
                  "Electrical issues",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Maintenance</h2>
              <p className="text-gray-600 mb-6">
                Regular maintenance to keep your AC running efficiently and prevent costly breakdowns.
              </p>
              <ul className="space-y-3">
                {["Tune-ups", "Filter replacement", "Coil cleaning", "System inspection", "Performance testing"].map(
                  (item) => (
                    <li key={item} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              Repair Daddy is your trusted partner for all air conditioning needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Licensed and insured technicians",
              "24/7 emergency service available",
              "Upfront, transparent pricing",
              "Satisfaction guaranteed on all work",
              "Extensive experience with all AC brands",
              "Flexible financing options",
              "Energy-efficient solutions",
              "Respectful of your home and property",
            ].map((item) => (
              <div key={item} className="flex items-start">
                <CheckIcon className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Brands We Service</h2>
            <p className="text-lg text-gray-600">We work with all major air conditioning brands and models.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {["Carrier", "Trane", "Lennox", "Rheem", "American Standard", "Bryant", "Goodman", "York"].map((brand) => (
              <div key={brand} className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-gray-500 font-medium">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Air Conditioning Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact Repair Daddy today for fast, reliable AC solutions.</p>
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
      </section>
    </div>
  )
}
