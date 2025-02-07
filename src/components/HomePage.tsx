'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import OurMarkets from './OurMarkets';
import Clients from './Clients';
import {FOOTER_LINKS, SITE_TITLE, CONTACT_INFO } from '@/config/site';
import './HomePage.css';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [cursorClasses, setCursorClasses] = useState({
    first: 'typewriter-text typewriter-1 gradient-text',
    second: 'typewriter-text typewriter-2 gradient-text',
    third: 'typewriter-text typewriter-3 gradient-text'
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCursorClasses(prev => ({
        ...prev,
        first: 'typewriter-text typewriter-1 gradient-text no-cursor'
      }));
    }, 2000);

    const timer2 = setTimeout(() => {
      setCursorClasses(prev => ({
        ...prev,
        second: 'typewriter-text typewriter-2 gradient-text no-cursor'
      }));
    }, 4000);

    const timer3 = setTimeout(() => {
      setCursorClasses(prev => ({
        ...prev,
        third: 'typewriter-text typewriter-3 gradient-text no-cursor'
      }));
      setShowAdditionalContent(true);
    }, 5.5 * 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen brushed-metal-bg aluminum-hero-bg">
      {/* 1. Navbar */}
      <Header />
      {/* 2. Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/image/bg.jpg" 
            alt="Alicon Group Hero" 
            fill
            priority
            quality={90}
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center', 
              opacity: 0.8 
            }}
            className="hero-background-image"
          />
          {/* Additional overlay for better text contrast */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Metallic Overlay */}
          <div className="metallic-overlay absolute inset-0 z-10"></div>
        </div>

        {/* Text Column */}
        <div className="px-4 py-16 md:pr-12 text-white relative z-10 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-inter">
              <div className={cursorClasses.first}>
              Precision Engineering for Global Industries
              </div>
              <br />
              {/* <div className={cursorClasses.second}>
              Elevate.
              </div>
              <br />
              <div className={cursorClasses.third}>
              Sustain.
              </div> */}
            </h1>
            {showAdditionalContent && (
              <>
                <p className="text-xl md:text-2xl mb-8 font-light tracking-wide text-white smooth-fade-in">
                  – Transforming Complex Manufacturing Challenges into Innovative Solutions
                </p>
                <div className="space-x-4 smooth-fade-in-buttons">
                  <Link 
                    href="/services" 
                    className="hero-cta inline-block bg-alicon-red text-white px-8 py-3 rounded-full text-lg transition-all stagger-button-1"
                  >
                    Explore Services
                  </Link>
                  <Link 
                    href="/contact" 
                    className="hero-cta inline-block border-2 border-white text-white px-8 py-3 rounded-full text-lg transition-all stagger-button-2"
                  >
                    Contact Us
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <main className="flex-grow">
        <Services />
        <WhyChooseUs />
        <OurMarkets />
        <Clients />
        <CTA/>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
