"use client"

import type React from "react"

import { useState } from "react"
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckIcon } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log(formData)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">Get in touch with our team for all your HVAC needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                {/* <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <PhoneIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+13125551234" className="hover:text-blue-600">
                        (312) 555-1234
                      </a>
                    </p>
                  </div>
                </div> */}
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MailIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@repairdaddy.com" className="hover:text-blue-600">
                        info@repairdaddy.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      123 HVAC Lane
                      <br />
                      Chicago, IL 60601
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <ClockIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Hours of Operation</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 8am - 7pm
                      <br />
                      Saturday: 9am - 5pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Emergency Service</h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency service is available for urgent HVAC issues. Call our emergency line for immediate
                  assistance.
                </p>
                <a
                  href="tel:+13125551234"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Emergency Service
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-2 mb-4">
                    <CheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="ac-repair">AC Repair</option>
                        <option value="heating-installation">Heating Installation</option>
                        <option value="heating-repair">Heating Repair</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="indoor-air-quality">Indoor Air Quality</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
