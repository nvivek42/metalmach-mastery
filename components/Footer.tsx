export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Metalmach Mastery</h3>
              <p className="text-gray-400">
                Precision Engineering Excellence with 25+ years of manufacturing expertise
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#industries" className="text-gray-400 hover:text-white">Industries</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <address className="text-gray-400 not-italic">
                Plot No. F-39, Chincholi MIDC,<br />
                Solapur, Maharashtra, India<br />
                PIN Code: 413255<br /><br />
                <a href="tel:+917030409930" className="hover:text-white">+91 70304 09930</a><br />
                <a href="mailto:srjoshi@metalmach.in" className="hover:text-white">srjoshi@metalmach.in</a>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Metalmach Mastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }