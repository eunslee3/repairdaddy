import Link from "next/link"
import {
  PhoneIcon,
  CheckIcon,
  FlameIcon,
  DropletIcon,
  ThermometerIcon,
  SplitIcon,
} from 'lucide-react'

export default function HeatingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Keep Warm with Trusted Heating Experts</h1>
            <p className="text-xl opacity-90 mb-8">
              Professional heating services to keep your home comfortable all winter long.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
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
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation & Replacement</h2>
              <p className="text-gray-600 mb-6">
                Expert installation of new heating systems and professional replacement of outdated units.
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
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Repair Services</h2>
              <p className="text-gray-600 mb-6">
                Fast, reliable repair services for all brands and models of heating systems.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 emergency repairs",
                  "Troubleshooting",
                  "Parts replacement",
                  "Gas leak detection",
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
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Maintenance</h2>
              <p className="text-gray-600 mb-6">
                Regular maintenance to keep your heating system running efficiently and prevent costly breakdowns.
              </p>
              <ul className="space-y-3">
                {["Tune-ups", "Filter replacement", "System cleaning", "Safety inspections", "Performance testing"].map(
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

      {/* System Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Heating System Types
            </h2>
            <p className="text-lg text-gray-600">
              We service and install all types of heating systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Furnaces */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <FlameIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Furnaces
              </h3>
              <p className="text-gray-600 text-center">
                Gas, electric, and oil furnaces for efficient home heating.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    <span>High-efficiency models</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    <span>Multi-stage heating</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Boilers */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <DropletIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Boilers
              </h3>
              <p className="text-gray-600 text-center">
                Hot water and steam boilers for radiator and in-floor heating.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Consistent, even heat</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Zone control options</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Heat Pumps */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <ThermometerIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Heat Pumps
              </h3>
              <p className="text-gray-600 text-center">
                Energy-efficient heating and cooling in a single system.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Year-round comfort</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Lower operating costs</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Ductless Systems */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <SplitIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Ductless Systems
              </h3>
              <p className="text-gray-600 text-center">
                Mini-split systems for homes without ductwork.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Individual room control</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-center">
                    <CheckIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Easy installation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Explore Our Heating Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Homeowners Trust Us</h2>
            <p className="text-lg text-gray-600">Repair Daddy is your trusted partner for all heating needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Licensed and insured technicians",
              "24/7 emergency service available",
              "Upfront, transparent pricing",
              "Satisfaction guaranteed on all work",
              "Extensive experience with all heating brands",
              "Flexible financing options",
              "Energy-efficient solutions",
              "Carbon monoxide safety checks",
            ].map((item) => (
              <div key={item} className="flex items-start">
                <CheckIcon className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Heating Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Repair Daddy today for fast, reliable heating solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
