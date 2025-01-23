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

  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6
        }
      }
    }
  };

  const MotionDiv = motion.div as ComponentType<HTMLMotionProps<"div">>;
  const Icon = ArrowRightIcon as ComponentType<HeroIconProps>;

  return (
    <section className="py-24 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">
            Why Choose MetalMach?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience excellence in metal manufacturing with our cutting-edge technology and expert team.
          </p>
        </div>

        {/* Features Grid */}
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <MotionDiv
              key={feature.title}
              variants={animations.item}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-[#333] mb-4">
                  {feature.title}
                </h3>
                {/* <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p> */}

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start text-gray-600 group"
                    >
                      <Icon className="w-5 h-5 text-primary mr-3 mt-0.5 transform group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default Features;