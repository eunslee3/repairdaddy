import {
  PhoneIcon,
  ThermometerIcon,
  FlameIcon,
  PackageIcon,
  DropletIcon,
  ClockIcon,
  BadgeCheckIcon,
  DollarSignIcon,
  AwardIcon,
  MapPinIcon,
} from "lucide-react"
import Hero from "@/components/hero"
import ServiceCard from "@/components/service-card"
import FeatureCard from "@/components/feature-card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional HVAC services for your home and business needs in the Chicagoland area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<ThermometerIcon className="w-10 h-10 text-blue-500" />}
              title="Air Conditioning"
              description="Installation, repair, and maintenance services to keep you cool."
              link="/air-conditioning"
            />
            <ServiceCard
              icon={<FlameIcon className="w-10 h-10 text-orange-500" />}
              title="Heating"
              description="Expert heating solutions for the cold Chicago winters."
              link="/heating"
            />
            <ServiceCard
              icon={<PackageIcon className="w-10 h-10 text-blue-500" />}
              title="Products"
              description="High-quality HVAC equipment for every home and business."
              link="/products"
            />
            <ServiceCard
              icon={<DropletIcon className="w-10 h-10 text-blue-500" />}
              title="Indoor Air Quality"
              description="Solutions for cleaner, healthier air in your home or office."
              link="/products"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Repair Daddy is committed to providing exceptional service with every visit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BadgeCheckIcon className="w-8 h-8 text-blue-500" />}
              title="Licensed Technicians"
              description="Our team consists of certified professionals with years of experience."
            />
            <FeatureCard
              icon={<ClockIcon className="w-8 h-8 text-blue-500" />}
              title="Fast Emergency Repairs"
              description="24/7 emergency service to address urgent HVAC issues."
            />
            <FeatureCard
              icon={<DollarSignIcon className="w-8 h-8 text-blue-500" />}
              title="Transparent Pricing"
              description="No hidden fees or surprise costs. Get clear pricing upfront."
            />
            <FeatureCard
              icon={<AwardIcon className="w-8 h-8 text-blue-500" />}
              title="Satisfaction Guarantee"
              description="We're not happy until you're completely satisfied with our work."
            />
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proudly serving the following communities in the Chicagoland area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
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
            ].map((city) => (
              <div key={city} className="bg-white rounded-full px-4 py-2 shadow-sm flex items-center">
                <MapPinIcon className="w-4 h-4 text-blue-500 mr-2" />
                <span>{city}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/service-area"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              View all service areas
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional HVAC Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Repair Daddy today for all your heating and cooling needs.
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
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
