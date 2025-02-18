'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="w-full bg-white px-20 py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-xl text-black/90">
            Let's discuss how we can help bring your ideas to life
          </p>
          <div className="mt-8 flex justify-center">
            <motion.a
              href="#contact"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-black px-8 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background slide effect */}
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              {/* Text layers */}
              <span className="relative text-lg font-medium text-white transition-colors duration-500 group-hover:text-black">
                Contact Us Today
              </span>
              
              {/* Hover text (slides up) */}
              <span className="absolute text-lg font-medium text-black opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}