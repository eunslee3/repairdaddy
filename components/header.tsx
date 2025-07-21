"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { PhoneIcon, MailIcon, MenuIcon, XIcon } from "lucide-react"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Repair Daddy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/air-conditioning" className="text-gray-700 hover:text-blue-600 font-medium">
              Air Conditioning
            </Link>
            <Link href="/heating" className="text-gray-700 hover:text-blue-600 font-medium">
              Heating
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              Products
            </Link>
            <Link href="/service-area" className="text-gray-700 hover:text-blue-600 font-medium">
              Service Area
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+13125551234" className="flex items-center text-gray-700 hover:text-blue-600">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span>(312) 555-1234</span>
            </a>
            <a href="mailto:info@repairdaddy.com" className="flex items-center text-gray-700 hover:text-blue-600">
              <MailIcon className="w-5 h-5 mr-2" />
              <span>info@repairdaddy.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link
                href="/air-conditioning"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Air Conditioning
              </Link>
              <Link href="/heating" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
                Heating
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
                Products
              </Link>
              <Link href="/service-area" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
                Service Area
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+13125551234" className="flex items-center text-gray-700 hover:text-blue-600 mb-3">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <span>(312) 555-1234</span>
                </a>
                <a href="mailto:info@repairdaddy.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <MailIcon className="w-5 h-5 mr-2" />
                  <span>info@repairdaddy.com</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
