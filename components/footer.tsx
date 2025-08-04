import type React from "react"
import Link from "next/link"
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, FacebookIcon } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Repair Daddy</h3>
            <p className="text-gray-300 mb-4">
              Your trusted HVAC service provider in the Chicagoland area. Quality work, honest pricing, and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100088979646722" target="_blank" className="text-gray-300 hover:text-white">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/air-conditioning" className="text-gray-300 hover:text-white">
                  Air Conditioning
                </Link>
              </li>
              <li>
                <Link href="/heating" className="text-gray-300 hover:text-white">
                  Heating
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/service-area" className="text-gray-300 hover:text-white">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/air-conditioning" className="text-gray-300 hover:text-white">
                  AC Installation
                </Link>
              </li>
              <li>
                <Link href="/air-conditioning" className="text-gray-300 hover:text-white">
                  AC Repair
                </Link>
              </li>
              <li>
                <Link href="/heating" className="text-gray-300 hover:text-white">
                  Furnace Installation
                </Link>
              </li>
              <li>
                <Link href="/heating" className="text-gray-300 hover:text-white">
                  Heating Repair
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  HVAC Products
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Maintenance Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                <span>
                  <a href="tel:+13125551234" className="text-gray-300 hover:text-white">
                    (312) 555-1234
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MailIcon className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                <span>
                  <a href="mailto:info@repairdaddy.com" className="text-gray-300 hover:text-white">
                    info@repairdaddy.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                <span className="text-gray-300">123 HVAC Lane, Chicago, IL 60601</span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                <span className="text-gray-300">
                  Mon-Fri: 8am-7pm
                  <br />
                  Sat: 9am-5pm
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Repair Daddy HVAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
