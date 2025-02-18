"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './Hero.css';
import { useEffect, useRef } from "react"


const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
      ref={heroRef}
       className="absolute inset-0 animate-subtle-zoom"
       style={{
         backgroundImage: `url('/image/background.jpg')`,
         backgroundSize: "cover",
         backgroundPosition: "top center"
       }}
      >
        <div className="absolute inset-0 animate-water-reflection" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Text Column */}
      <div className="px-4 md:px-8 lg:px-12 py-16 text-white relative z-10 text-left max-w-[1400px] w-full">
        <div className="space-y-6 ml-0 md:ml-4 lg:ml-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Outfit'] mb-6 py-10 leading-tight">
             <div>
              Built on Precision,
            <br />
              Driven by Innovation.
            </div>            
          </h1>

          <p className="text-xl md:text-2xl mb-8  font-light tracking-wide text-white smooth-fade-in">
            <br/><br/><br/>            
            Transforming Complex Manufacturing Challenges into Innovative Solutions
          </p>
          <div className="space-x-4 smooth-fade-in-buttons">
            <Link
              href="/Services"
              className="hero-cta inline-block bg-[#CD1C18] text-white px-8 py-3  rounded-full text-lg transition-all stagger-button-1"
            >
              Explore Services
            </Link>
            <Link
              href="/CTA"
              className="hero-cta inline-block border-2 border-white text-white px-8 py-2 rounded-full text-lg transition-all stagger-button-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}