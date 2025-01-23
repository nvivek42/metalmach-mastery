'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
         
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Let's discuss how we can help bring your ideas to life
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}