'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Precision Engineering Excellence
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          25+ Years of Manufacturing Excellence in Die-casting and Machining
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg"
        >
          Explore Our Services
        </motion.button>
      </div>
    </section>
  )
} 