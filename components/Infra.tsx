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
} from '@heroicons/react/24/solid'

// Define HeroIcon type
type HeroIconProps = SVGProps<SVGSVGElement> & {
  title?: string;
  titleId?: string;
};

interface IconWrapperProps {
  Icon: ComponentType<HeroIconProps>;
  className?: string;
}

const IconWrapper: FC<IconWrapperProps> = ({ Icon, className = "h-8 w-8 text-primary" }) => {
  return <Icon className={className} />
}

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
  icon: ComponentType<HeroIconProps>;
  description: string;
  trend: string;
  color: string;
}

// Capacity data
const capacityData: CapacityItem[] = [
  { 
    label: "Foundry Utilization",
    percentage: 85,
    icon: BuildingOfficeIcon as ComponentType<HeroIconProps>,
    description: "Maximum utilization of foundry equipment and resources",
    trend: "+5% from last quarter",
    color: "from-blue-500 to-blue-600"
  },
  { 
    label: "Quality Compliance",
    percentage: 99,
    icon: CheckCircleIcon as ComponentType<HeroIconProps>,
    description: "Adherence to international quality standards",
    trend: "Consistently above 98%",
    color: "from-green-500 to-green-600"
  },
  { 
    label: "Production Efficiency",
    percentage: 90,
    icon: CogIcon as ComponentType<HeroIconProps>,
    description: "Optimal production rate with minimal waste",
    trend: "+8% year over year",
    color: "from-purple-500 to-purple-600"
  },
  { 
    label: "On-time Delivery",
    percentage: 95,
    icon: ClockIcon as ComponentType<HeroIconProps>,
    description: "Reliable and punctual delivery performance",
    trend: "Industry-leading rate",
    color: "from-orange-500 to-orange-600"
  }
];

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ label, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-primary">{percentage}%</span>
    </div>
    <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-primary rounded-full"
      />
    </div>
  </div>
);

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

const Infrastructure: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full border-primary border-t-transparent h-8 w-8 border-2"></div>
        </div>
      </div>
    );
  }

  const sections: Section[] = [
    {
      title: "Foundry Infrastructure",
      icon: BuildingOfficeIcon as ComponentType<HeroIconProps>,
      description: "State-of-the-art foundry equipped with advanced melting and casting facilities",
      items: [
        {
          title: "Melting Facilities",
          details: [
            "Melting cum Holding Furnace - 300 kg capacity",
            "Secondary Furnace - 500 kg capacity",
            "Temperature control systems",
            "Energy-efficient operation"
          ]
        },
        {
          title: "Casting Equipment",
          details: [
            "Stationary GDC Machine (1250 x 800 mm)",
            "Tilting GDC Machine (1250 x 1000 mm)",
            "Shell Core Shooter - Vertical parted rollover",
            "Advanced cooling systems"
          ]
        }
      ],
      images: [
        { 
          src: "/img/mh furnace.png", 
          alt: "M/H Furnace",
          description: "High-capacity Melting & Holding Furnace"
        },
        { 
          src: "/img/Tilting GDC.png", 
          alt: "Tilting GDC",
          description: "Advanced Tilting Gravity Die Casting Machine"
        },
        { 
          src: "/img/stationary gdc.png", 
          alt: "Stationary GDC",
          description: "Precision Stationary Die Casting Unit"
        },
        { 
          src: "/img/core shooter.png", 
          alt: "Core Shooter",
          description: "Automated Core Shooting System"
        }
      ]
    },
    {
      title: "Quality Infrastructure",
      icon: BeakerIcon as ComponentType<HeroIconProps>,
      description: "Comprehensive quality control lab with advanced testing equipment",
      items: [
        {
          title: "Material Testing",
          details: [
            "Optical Emission Spectrometer for composition analysis",
            "Density Analyzer with digital precision",
            "Advanced Hardness Testing equipment",
            "High-resolution Microscopy facility"
          ]
        },
        {
          title: "Quality Control",
          details: [
            "Millipore test setup for contamination analysis",
            "Surface quality measurement tools",
            "Precision measurement with Trimos instruments",
            "Real-time quality monitoring systems"
          ]
        }
      ]
    },
    {
      title: "Post Casting Process Setup",
      icon: CogIcon as ComponentType<HeroIconProps>,
      description: "Complete post-casting treatment and finishing facilities",
      items: [
        {
          title: "Surface Treatment",
          details: [
            "350kg Hanger-Type Shot Blasting machine",
            "Advanced Fettling Setup with automation",
            "Manual & Vibro Deburring stations",
            "Specialized cleaning systems"
          ]
        },
        {
          title: "Heat Treatment",
          details: [
            "1000kg capacity Heat Treatment Unit",
            "Precipitation Hardening facility",
            "Solution Annealing Furnace",
            "Temperature-controlled cooling systems"
          ]
        }
      ]
    },
    {
      title: "Machining Setup",
      icon: WrenchScrewdriverIcon as ComponentType<HeroIconProps>,
      description: "Versatile machining capabilities with high precision equipment",
      items: [
        {
          title: "CNC Operations",
          details: [
            "CNC Turning - Up to 250mm diameter",
            "VMC - 600/600mm capacity",
            "Horizontal Milling capabilities",
            "Vertical Broaching facility"
          ]
        },
        {
          title: "Precision Machining",
          details: [
            "Surface Grinding equipment",
            "General Purpose Milling",
            "Custom machining solutions",
            "Automated tool management"
          ]
        }
      ]
    }
  ];

  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    },
    expand: {
      hidden: { height: 0, opacity: 0 },
      visible: { 
        height: "auto", 
        opacity: 1,
        transition: {
          height: {
            type: "spring",
            stiffness: 100,
            damping: 20
          },
          opacity: {
            duration: 0.2
          }
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
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Always visible */}
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.container}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Infrastructure
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto my-6 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities and equipment for precision manufacturing
          </p>
        </MotionDiv>

        {/* Stats Grid - Always visible */}
       

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
              {/* <div className="w-20 h-1.5 bg-gradient-to-r from-primary/60 to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our commitment to maintaining the highest standards of manufacturing excellence
                through continuous monitoring and improvement of key performance indicators.
              </p> */}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capacityData.map((item, index) => (
              <MotionDiv
                key={index}
                variants={animations.item}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating Circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gray-50 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-gray-50 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />

                {/* Card Header */}
                <div className="relative flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-6 h-6 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
                  </div>
                  {/* Circular Progress Indicator */}
                  <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-full h-full rotate-90 transform">
                      {/* Background Circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        className="stroke-gray-100"
                        strokeWidth="6"
                      />
                      {/* Progress Circle */}
                      <motion.circle
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
                      />
                      {/* Percentage Text */}
                      <text
                        x="40"
                        y="40"
                        dy=".35em"
                        textAnchor="middle"
                        className={`fill-current text-gradient-to-br ${item.color} font-bold text-xl`}
                      >
                        {item.percentage}%
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.color}`} />
                    <span className="text-sm font-medium bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {item.trend}
                    </span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <MotionDiv
              variants={animations.item}
              className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-xl p-8 text-white group hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Decorative Elements */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="p-3 bg-white/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Industry Recognition</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  Ranked among top 10 manufacturers for operational efficiency and innovation
                </p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={animations.item}
              className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-xl p-8 text-white group hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Decorative Elements */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="p-3 bg-white/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Quality Certifications</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  ISO 9001:2015 certified with zero major non-conformances in last 3 years
                </p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={animations.item}
              className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-green-400 rounded-xl p-8 text-white group hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Decorative Elements */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="p-3 bg-white/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <UserGroupIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Customer Satisfaction</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  97% customer satisfaction rate with 85% repeat business rate
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Read More Button */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowFullContent(!showFullContent)}
            className="group inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            {showFullContent ? 'Show Less' : 'Read More'}
            <ChevronDownIcon 
              className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                showFullContent ? 'rotate-180' : ''
              }`}
            />
          </button>
        </MotionDiv>

        {/* Expandable Content */}
        <AnimatePresence>
          {showFullContent && (
            <MotionDiv
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animations.expand}
            >
              {/* Main Sections */}
              <div className="space-y-16 mt-16">
                {sections.map((section, index) => (
                  <MotionDiv
                    key={section.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={animations.item}
                    className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconWrapper Icon={section.icon} />
                      </div>
                      <div className="ml-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h2>
                        <p className="text-gray-600 mt-1">{section.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {section.items.map((item, i) => (
                        <MotionDiv
                          key={i}
                          className="bg-gray-50 rounded-lg p-6"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: i * 0.1 } 
                            }
                          }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                          <ul className="space-y-3">
                            {item.details.map((detail, j) => (
                              <li key={j} className="flex items-start group">
                                <span className="text-primary mr-3">•</span>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </MotionDiv>
                      ))}
                    </div>

                    {section.images && (
                      <MotionDiv 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { 
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                          }
                        }}
                      >
                        {section.images.map((image, i) => (
                          <MotionDiv 
                            key={i} 
                            className="relative h-48 rounded-xl overflow-hidden group"
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: { 
                                opacity: 1, 
                                scale: 1,
                                transition: { type: "spring", stiffness: 100 }
                              }
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm font-medium backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="font-semibold">{image.alt}</p>
                              <p className="text-xs text-gray-200 mt-1">{image.description}</p>
                            </div>
                          </MotionDiv>
                        ))}
                      </MotionDiv>
                    )}
                  </MotionDiv>
                ))}
              </div>

              {/* Materials & Capabilities Section */}
              <MotionDiv
                variants={animations.item}
                className="mt-16 bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Materials & Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Aluminum Alloy Standards</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start group">
                        <span className="text-primary mr-3">•</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          DIN Standards Compliance
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <span className="text-primary mr-3">•</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          ASTM Specifications
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <span className="text-primary mr-3">•</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          JIS Standard Requirements
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Production Capabilities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start group">
                        <span className="text-primary mr-3">•</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          Weight Range: 0.5 to 5 Kg
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <span className="text-primary mr-3">•</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          High-precision tolerances
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <span className="text-primary mr-3">•</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          Complex geometries handling
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </MotionDiv>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Infrastructure;