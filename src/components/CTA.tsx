'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-16 border-2 border-black shadow-[0.25rem_0.25rem_#000]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
          Ready to Start Your Project?           </h2>
          <p className="mt-4 text-xl text-black/90">
            Let's discuss how we can help bring your ideas to life
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block font-['Courier_New'] text-base uppercase tracking-wider 
                         px-5 py-2.5 border-2 border-black bg-[#ADD8E6] text-black 
                         hover:bg-[#F0F8FF] active:translate-x-[0.115rem] active:translate-y-[0.115rem] 
                         active:shadow-[0.115rem_0.115rem_#000] 
                         shadow-[0.25rem_0.25rem_#000] transition-all duration-50 
                         rounded-sm cursor-pointer"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
