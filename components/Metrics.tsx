'use client'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import Image from 'next/image'
import { useState, FC, ComponentType, useEffect } from 'react'
import { SVGProps } from 'react'
import { 
  BeakerIcon, 
  CogIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon,
  ChartBarIcon,
  ScaleIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

// Define HeroIcon type
type HeroIconProps = SVGProps<SVGSVGElement> & {
  title?: string;
  titleId?: string;
};

interface IconWrapperProps {
  iconPath: string;  // Path to SVG file
  className?: string;
}

const IconWrapper: FC<IconWrapperProps> = ({ iconPath, className = "" }) => {
  return (
    <div className="p-3 bg-gradient-to-br from-white/80 to-gray-50 rounded-xl shadow-sm">
      <Image 
        src={iconPath}
        alt="icon"
        width={24}
        height={24}
        className={`w-6 h-6 ${className}`}
      />
    </div>
  );
};

interface StatItem {
  label: string;
  value: string;
  unit: string;
  icon: ComponentType<HeroIconProps>;
}

// Stats data
const stats: StatItem[] = [
  { label: "Monthly Output", value: "500+", unit: "Tons", icon: ChartBarIcon as ComponentType<HeroIconProps> },
  { label: "Melting Capacity", value: "800", unit: "Kg/hr", icon: ScaleIcon as ComponentType<HeroIconProps> },
  { label: "Production Time", value: "24/7", unit: "Hours", icon: ClockIcon as ComponentType<HeroIconProps> },
  { label: "Quality Score", value: "99.9", unit: "%", icon: CheckCircleIcon as ComponentType<HeroIconProps> }
];

interface CapacityItem {
  label: string;
  percentage: number;
  iconPath: string;  // Path to SVG file
  description: string;
  trend: string;
  color: string;
}

// Update the capacity data to use SVG paths
const capacityData: CapacityItem[] = [
  { 
    label: "Foundry Utilization",
    percentage: 85,
    iconPath: "/svg/efficiency.png",  // Add your SVG here
    description: "Maximum utilization of foundry equipment and resources",
    trend: "+5% from last quarter",
    color: "from-blue-500 to-blue-600"
  },
  { 
    label: "Quality Compliance",
    percentage: 99,
    iconPath: "/svg/QC.png",  // Add your SVG here
    description: "Adherence to international quality standards",
    trend: "Consistently above 98%",
    color: "from-green-500 to-green-600"
  },
  { 
    label: "Production Efficiency",
    percentage: 90,
    iconPath: "/svg/radar.png",  // Add your SVG here
    description: "Optimal production rate with minimal waste",
    trend: "+8% year over year",
    color: "from-purple-500 to-purple-600"
  },
  { 
    label: "On-time Delivery",
    percentage: 95,
    iconPath: "/svg/delivery.png",  // Add your SVG here
    description: "Reliable and punctual delivery performance",
    trend: "Industry-leading rate",
    color: "from-orange-500 to-orange-600"
  }
];

// interface ProgressBarProps {
//   label: string;
//   percentage: number;
// }

// const ProgressBar: FC<ProgressBarProps> = ({ label, percentage }) => (
//   <div className="mb-4">
//     <div className="flex justify-between mb-1">
//       <span className="text-sm font-medium text-gray-700">{label}</span>
//       <span className="text-sm font-medium text-primary">{percentage}%</span>
//     </div>
//     <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: `${percentage}%` }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="h-full bg-primary rounded-full"
//       />
//     </div>
//   </div>
// );

interface SectionItem {
  title: string;
  details: string[];
}

interface SectionImage {
  src: string;
  alt: string;
  description: string;
}

interface Section {
  title: string;
  icon: ComponentType<HeroIconProps>;
  description: string;
  items: SectionItem[];
  images?: SectionImage[];
}

// Add this after imports
const animations = {
  item: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 }
  }
};

export const Metrics = () => {
    return (
      <section className="w-full bg-white px-20 py-16">
        <div className="container mx-auto">
          {/* Operational Excellence Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Performance Metrics
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Operational Excellence
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary/60 to-primary rounded-full mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our commitment to maintaining the highest standards of manufacturing excellence
                  through continuous monitoring and improvement of key performance indicators.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capacityData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={animations.item}
                  initial="initial"
                  whileInView="whileInView"
                  transition={{ duration: 0.5 }}
                  className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Floating Circles */}
                  {/* <div className="absolute -right-8 -top-8 w-32 h-32 bg-gray-50 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-gray-50 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" /> */}

                  {/* Card Header */}
                  <div className="relative flex items-start justify-between mb-6">
                    <IconWrapper 
                      iconPath={item.iconPath}
                      className={`bg-gradient-to-br ${item.color} bg-clip-text`} 
                    /> </div>
                    {/* Circular Progress Indicator */}
                    {/* <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-full h-full rotate-90 transform"> */}
                        {/* Background Circle */}
                        {/* <circle
                          cx="40"
                          cy="40"
                          r="36"
                          fill="none"
                          className="stroke-gray-100"
                          strokeWidth="6"
                        /> */}
                        {/* Progress Circle */}
                        {/* <motion.circle
                          cx="40"
                          cy="40"
                          r="36"
                          fill="none"
                          className={`stroke-current text-gradient-to-br ${item.color}`}
                          strokeWidth="6"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 100" }}
                          whileInView={{
                            strokeDasharray: `${item.percentage} 100`
                          }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        /> */}
                        {/* Percentage Text */}
                        {/* <text
                          x="40"
                          y="40"
                          dy=".35em"
                          textAnchor="middle"
                          className={`fill-current text-gradient-to-br ${item.color} font-bold text-xl`}
                        >
                          {item.percentage}%
                        </text> */}
                      {/* </svg>
                    </div> */}
                 

                  {/* Card Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {item.description}
                    </p>
                    {/* <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.color}`} />
                      <span className="text-sm font-medium bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        {item.trend}
                      </span>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                variants={animations.item}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-gradient-to-br from-chili-600 via-chili-500 to-chili-400 rounded-xl p-8 text-white group hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Decorative Elements */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="p-3 bg-white/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <IconWrapper 
                      iconPath="/svg/stats1.svg"  // Add your SVG here
                      className="text-white/90 group-hover:text-white transition-colors" 
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Industry Recognition</h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Ranked among top 10 manufacturers for operational efficiency and innovation
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={animations.item}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-xl p-8 text-white group hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Decorative Elements */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="p-3 bg-white/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <IconWrapper 
                      iconPath="/svg/quality5.svg"  // Add your SVG here
                      className="text-white/90 group-hover:text-white transition-colors" 
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Quality Certifications</h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    ISO 9001:2015 certified with zero major non-conformances in last 3 years
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={animations.item}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-green-400 rounded-xl p-8 text-white group hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Decorative Elements */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="p-3 bg-white/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <IconWrapper 
                      iconPath="/svg/user3.svg"  // Add your SVG here
                      className="text-white/90 group-hover:text-white transition-colors" 
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Customer Satisfaction</h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    97% customer satisfaction rate with 85% repeat business rate
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Metrics