'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

const tourSpots = [
  {
    id: 1,
    name: "Foundry Unit",
    image: "/images/foundry.jpg", // You'll need to add these images
    description: "Our state-of-the-art foundry unit featuring Melting cum Holding Furnaces and Gravity Die Casting Machines.",
    hotspots: [
      {
        x: 30,
        y: 40,
        title: "Melting Furnace",
        description: "300 kg and 500 kg capacity furnaces"
      },
      {
        x: 60,
        y: 70,
        title: "Die Casting Machine",
        description: "1250 mm x 800 mm Die mounting area"
      }
    ]
  },
  // Add more tour spots as needed
]

const IconWrapper = ({ Icon }: { Icon: any }) => {
  return <Icon className="w-6 h-6 text-white" />
}

export default function VirtualTour() {
  const [currentSpot, setCurrentSpot] = useState(0)
  const [showInfo, setShowInfo] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">Virtual Factory Tour</h2>
          <p className="mt-4 text-xl text-gray-300">
            Explore our manufacturing facility virtually
          </p>
        </motion.div>

        <div className="relative h-[600px] rounded-lg overflow-hidden">
          {/* Main Image */}
          <img
            src={tourSpots[currentSpot].image}
            alt={tourSpots[currentSpot].name}
            className="w-full h-full object-cover"
          />

          {/* Hotspots */}
          {tourSpots[currentSpot].hotspots.map((hotspot, index) => (
            <button
              key={index}
              className="absolute w-8 h-8 bg-primary rounded-full pulse-animation"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onClick={() => setShowInfo(index)}
            >
              <IconWrapper Icon={InformationCircleIcon} />
            </button>
          ))}

          {/* Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 flex justify-between items-center">
            <button
              onClick={() => setCurrentSpot(prev => (prev > 0 ? prev - 1 : tourSpots.length - 1))}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <IconWrapper Icon={ArrowLeftIcon} />
            </button>
            <span className="text-white">{tourSpots[currentSpot].name}</span>
            <button
              onClick={() => setCurrentSpot(prev => (prev < tourSpots.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <IconWrapper Icon={ArrowRightIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}