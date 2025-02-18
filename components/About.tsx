'use client'
import { motion } from 'framer-motion'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

const About = () => {
  const animations = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="w-full bg-white px-20 py-16">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl font-bold sm:text-3xl lg:text-4xl text-gray-900 tracking-tight ${roboto.className}`}
          >
            Who We Are?
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-0.5 bg-primary mx-auto my-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A leading manufacturer specializing in precision aluminum die casting and machining solutions for diverse industries.
          </motion.p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Vision Card */}
          <motion.div
            {...animations}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the industry leader in innovative metal manufacturing solutions, 
                setting new standards in quality, precision, and customer satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            {...animations}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver excellence through cutting-edge technology, sustainable practices, 
                and unwavering commitment to quality, while fostering innovation and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 