import type React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link href={link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 mt-auto">
        Learn More
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </Link>
    </div>
  )
}

export default ServiceCard
