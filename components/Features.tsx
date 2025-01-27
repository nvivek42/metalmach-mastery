'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRightIcon, CogIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { FC, ComponentType } from 'react';

// Define our own IconProps type
type HeroIconProps = {
  className?: string;
  'aria-hidden'?: boolean;
  [key: string]: any;
};

// Define types for our features
interface Feature {
  icon: ComponentType<HeroIconProps>;
  title: string;
  // description: string;
  benefits: string[];
}

const Features: FC = () => {
  const features: Feature[] = [
    {
      icon: CogIcon as ComponentType<HeroIconProps>,
      title: "Advanced Infrastructure",
      // description: "State-of-the-art die casting and machining facilities equipped with the latest technology for precision manufacturing.",
      benefits: [
        "State-of-the-art die casting & machining facilities",
        "Automated production lines",
        "High-precision machinery",
        "Smart quality control systems"
      ]
    },
    {
      icon: ShieldCheckIcon as ComponentType<HeroIconProps>,
      title: "Quality Assurance",
      // description: "ISO 9001:2015 certified manufacturing processes ensuring consistent quality and reliability.",
      benefits: [
        "ISO 9001:2015 certified manufacturing processes",
        "Rigorous quality testing",
        "International standards compliance",
        "Zero-defect approach"
      ]
    },
    {
      icon: UserGroupIcon as ComponentType<HeroIconProps>,
      title: "Expert Team",
      // description: "Skilled professionals with decades of experience in metal manufacturing and engineering.",
      benefits: [
        "Experienced engineers",
        "Continuous training",
        "Dedicated support team"
      ]
    }
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto px-4 lg:px-6"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900"
          >
            Why Choose MetalMach?
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-20 h-0.5 bg-primary mx-auto my-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-6 rounded-lg 
                          bg-white
                          border border-gray-100
                          shadow-lg hover:shadow-xl
                          hover:border-primary/20
                          transition-all duration-300 ease-out"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-primary/2 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <Icon className="h-10 w-10 text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <ul className="space-y-2.5">
                  {feature.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center group/item"
                    >
                      <ArrowRightIcon className="h-3.5 w-3.5 mr-2 text-primary/60 group-hover/item:text-primary 
                                               transform group-hover/item:translate-x-1 transition-all duration-300" />
                      <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;