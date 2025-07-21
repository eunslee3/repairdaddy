import Link from "next/link"
import { PhoneIcon, MapPinIcon, CheckIcon, HomeIcon } from "lucide-react"

export default function ServiceAreaPage() {
  const serviceAreas = [
    "Chicago",
    "Evanston",
    "Skokie",
    "Oak Park",
    "Cicero",
    "Berwyn",
    "Elmhurst",
    "Schaumburg",
    "Arlington Heights",
    "Des Plaines",
    "Park Ridge",
    "Niles",
    "Morton Grove",
    "Lincolnwood",
    "Wilmette",
    "Winnetka",
    "Glencoe",
    "Highland Park",
    "Deerfield",
    "Northbrook",
    "Glenview",
    "Northfield",
    "Wheeling",
    "Mount Prospect",
    "Elk Grove Village",
    "Itasca",
    "Bensenville",
    "Franklin Park",
    "Melrose Park",
    "River Forest",
    "Forest Park",
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Proudly Serving the North Suburbs of Chicago</h1>
            <p className="text-xl opacity-90 mb-8">
              Reliable HVAC services throughout Chicagoland and surrounding communities.
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

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Communities We Serve</h2>
            <p className="text-lg text-gray-600">
              Repair Daddy provides HVAC services to the following cities and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((city) => (
              <div key={city} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center">
                <MapPinIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{city}</span>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-gray-600 italic">
              {"Don't see your city listed? Call us at (312) 555-1234 — we may still cover your area!"}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Repair Daddy</h2>
            <p className="text-lg text-gray-600">Your local, family-owned HVAC company serving the Chicagoland area.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Expertise</h3>
              <ul className="space-y-3">
                {[
                  "Family-owned and operated in Chicagoland",
                  "Deep understanding of local climate challenges",
                  "Familiar with local building codes and regulations",
                  "Fast response times throughout our service area",
                  "Active in the community we serve",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <HomeIcon className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitments</h3>
              <ul className="space-y-3">
                {[
                  "On-time arrivals within scheduled window",
                  "Clean, professional technicians",
                  "Transparent pricing with no hidden fees",
                  "Financing options available for new installations",
                  "100% satisfaction guarantee on all services",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need HVAC Service in Your Area?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact Repair Daddy today for prompt, professional service.</p>
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
