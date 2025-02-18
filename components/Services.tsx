'use client'
import { motion } from 'framer-motion'
import { CogIcon, CubeIcon, BeakerIcon } from '@heroicons/react/24/outline'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })
export default function Services() {
  const services = [
    {
      title: 'Gravity Die Casting',
      description: 'Specialized in aluminum alloy components ranging from 0.5 to 5 kg',
      bgImage: '/img/gdc.jpg' // Make sure this image exists in your public folder
    },
    {
      title: 'Precision Machining',
      description: 'Advanced component machining with high precision',
      bgImage: '/img/pm.jpg'
    },
    {
      title: 'Custom Development',
      description: 'Customer-specific development and solutions',
      bgImage: '/img/cpd.jpg'
    },
  ]

  return (
    <section className="w-full bg-white px-20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className={`text-3xl font-bold sm:text-3xl lg:text-4xl text-gray-900 tracking-tight ${roboto.className}`}>
            What We Do
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative p-8 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 h-[300px] cursor-pointer font-monospace"
            >
              {/* Background Image with Reduced Blur */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110 font-monospace"
                style={{ 
                  backgroundImage: `url(${service.bgImage})`,
                  filter: 'blur(1px)', // Reduced blur
                  transform: 'scale(1.05)',
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-colors duration-300 font-monospace" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-center">
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 font-monospace ">
                  <button className="w-full py-2 px-4 bg-orange/10 hover:bg-white/20 text-Red rounded-md backdrop-blur-sm transition-all border border-Red/30">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}