'use client'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import Image from 'next/image'
import { useState, FC, ComponentType, useEffect } from 'react'
import { SVGProps } from 'react'

interface CapacityItem {
  label: string;
  description: string;
  trend: string;
  color: string;
}

// Capacity data
const capacityData: CapacityItem[] = [
  { 
    label: "Industry Leadership",
    description: "Leveraging cutting-edge manufacturing technologies for superior results",
    trend: "Setting Standards",
    color: "from-blue-500 to-blue-600"
  },
  { 
    label: "Innovative Solutions",
    description: "Pioneering advanced manufacturing techniques for efficiency and quality",
    trend: "Innovating Beyond",
    color: "from-purple-500 to-purple-600"
  },
  { 
    label: "Sustainability",
    description: "Committed to green practices and global impact",
    trend: "Global Impact",
    color: "from-green-500 to-green-600"
  }
];

const WhyChooseUs: FC = () => {
  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
          delayChildren: 0.5
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    }
  };

  const MotionDiv = motion.div as ComponentType<HTMLMotionProps<"div">>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose MMPL</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique advantages that set us apart
          </p>
        </div>

        {/* Two Sections in Single Block */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* First Section: Operational Capabilities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.container}
              className="p-8 space-y-8 bg-white"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Operational Excellence
                </h2>
                <p className="text-gray-600 mt-4">
                  Driving innovation, quality, and global impact
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capacityData.map((item, index) => (
                  <MotionDiv
                    key={index}
                    variants={animations.item}
                    className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 hover:border-primary/20"
                  >
                    {/* Card Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {item.label}
                      </h3>
                    </div>

                    {/* Card Content */}
                    <div className="relative">
                      <p className="text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium text-gray-600">
                          {item.trend}
                        </span>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </motion.div>

            {/* Second Section: Achievements */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.container}
              className="p-8 space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Achievements
                </h2>
                <p className="text-gray-600 mt-4">
                  Recognitions, certifications, and customer satisfaction metrics
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-xl p-6 text-white"
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold">Industry Recognition</h3>
                  </div>
                  <p className="text-sm">
                    Ranked among top 10 manufacturers for operational efficiency and innovation
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-xl p-6 text-white"
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold">Quality Certifications</h3>
                  </div>
                  <p className="text-sm">
                    ISO 9001:2015 certified with zero major non-conformances in last 3 years
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 rounded-xl p-6 text-white"
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                  </div>
                  <p className="text-sm">
                    97% customer satisfaction rate with 85% repeat business rate
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
