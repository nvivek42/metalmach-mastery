import Link from 'next/link';
import Image from 'next/image';
import { SITE_TITLE, FOOTER_LINKS, CONTACT_INFO, NAV_LINKS } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-[#1A2238] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Image 
                src="/image/logo1.jpg" 
                alt={`${SITE_TITLE} Logo`} 
                width={50} 
                height={50} 
                className="mr-3"
              />
              <span className="text-xl font-bold">{SITE_TITLE}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Pioneering precision manufacturing with innovative technologies and cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['linkedin', 'twitter', 'instagram'].map((platform) => (
                <Link 
                  key={platform} 
                  href="#" 
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Add appropriate SVG paths for each platform */}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            {new Date().getFullYear()} {SITE_TITLE}. All Rights Reserved. 
            <span className="ml-4 hidden md:inline-block">
              <Link href="/privacy" className="hover:text-white mr-4">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
