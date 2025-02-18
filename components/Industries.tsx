'use client'

import Image from 'next/image' // Import Next.js Image component
import { useEffect, useState } from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })

export default function Industries() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section className="w-full bg-white px-20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <div className={`text-3xl font-bold sm:text-3xl lg:text-4xl text-gray-900 tracking-tight ${roboto.className}`}>
            Our Markets
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={industry.priority} // Set true for above-the-fold images
                  loading={industry.priority ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL={industry.blurDataURL} // Add blur placeholder
                  quality={75} // Adjust quality for better performance
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="relative p-8 h-[300px] flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-300 transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Industry data
const industries = [
  {
    title: 'Agriculture',
    description: 'High-performance components for aviation and space exploration.',
    image: '/img/industries/agri.jpg',
    priority: true,
    blurDataURL: '/img/industries/agri.jpg',
  },
  {
    title: 'Automotive',
    description: 'Precision parts for automotive manufacturing and assembly.',
    image: '/img/industries/automotive.jpg',
    priority: true,
    blurDataURL: '/img/industries/automotive.jpg',
  },
  {
    title: 'Infrastructure',
    description: 'Durable components for power generation and distribution.',
    image: '/img/industries/infra.jpg',
    priority: true,
    blurDataURL: '/img/industries/infra.jpg',
  },
  {
    title: 'E-Mobility',
    description: 'Precision components for medical devices and equipment.',
    image: '/img/industries/e-mobility.jpg',
    priority: true,
    blurDataURL: '/img/industries/e-mobility.jpg',
  },
  {
    title: 'Defense',
    description: 'Critical components for defense and military applications.',
    image: '/img/industries/defense.jpg',
    priority: true,
    blurDataURL: '/img/industries/defense.jpg',
  },
  {
    title: 'Energy',
    description: 'Robust solutions for industrial machinery and equipment.',
    image: '/img/industries/energy.jpg',
    priority: true,
    blurDataURL: '/img/industries/energy.jpg',
  },
  {
    title: 'Construction',
    description: 'Precision components for medical devices and equipment.',
    image: '/img/industries/construction.jpg',
    priority: true, // Load first
    blurDataURL: 'data:image/jpeg;base64,/9j...' // Add base64 blur image

  },
  {
    title: 'Oil & Gas',
    description: 'Critical components for defense and military applications.',
    image: '/img/industries/oil.jpg',
    priority: true, // Load first
    blurDataURL: 'data:image/jpeg;base64,/9j...' // Add base64 blur image
  },
  {
    title: 'Communication',
    description: 'Robust solutions for industrial machinery and equipment.',
    image: '/img/industries/communication.jpg',
    priority: true, // Load first
    blurDataURL: 'data:image/jpeg;base64,/9j...' // Add base64 blur image
  }
]
