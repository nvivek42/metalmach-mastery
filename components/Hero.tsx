export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/img/diecast.mp4" type="video/mp4" />
      </video>

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto lg:ml-[10%]">
          <h1 className="mb-6">
            <span className="block text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] 
              font-bold text-white leading-[1.1] mb-4 tracking-tight font-serif">
              Precision Die Casting
              <span className="block mt-2 text-primary-400">
                Excellence
              </span>
            </span>
            <span className="block text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] 
              font-medium text-gray-200 leading-tight font-candara">
              Engineering the Future of Manufacturing
            </span>
          </h1>
          
          <p className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] 
            text-gray-300 mt-8 mb-12 max-w-2xl font-light leading-relaxed">
            Delivering world-class die casting solutions with unmatched precision, 
            quality, and innovation for industries worldwide.
          </p>

          <div className="flex gap-6">
            <a
              href="/contact"
              className="inline-block bg-primary-500 text-white px-8 py-4 
                text-lg font-medium rounded-md hover:bg-primary-600 
                transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/capabilities"
              className="inline-block border-2 border-white text-white px-8 py-4 
                text-lg font-medium rounded-md hover:bg-white/10
                transition-all duration-300"
            >
              Our Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}