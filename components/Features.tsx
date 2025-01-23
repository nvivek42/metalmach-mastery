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
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
          >
            Why Choose MetalMach?
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mx-auto my-6"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
                className="group relative p-8 rounded-2xl 
                          bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50
                          backdrop-blur-sm border border-gray-700/50 
                          shadow-[0_0_15px_rgba(0,0,0,0.2)]
                          hover:border-primary/30 hover:shadow-primary/20 
                          transition-all duration-300 ease-out"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with Glow */}
                <div className="relative">
                  <Icon className="h-12 w-12 text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300
                                 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-primary/90 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Benefits List */}
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center group/item"
                    >
                      <ArrowRightIcon className="h-4 w-4 mr-3 text-primary/70 group-hover/item:text-primary 
                                               transform group-hover/item:translate-x-1 transition-all duration-300" />
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
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