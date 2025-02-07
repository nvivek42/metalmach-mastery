import React, { useState } from 'react';
import './Clients.css';

const clientLogos = [
  '/image/logo/logo1.svg',
  '/image/logo/logo2.svg',
  '/image/logo/logo3.svg',
  '/image/logo/logo4.svg',
  '/image/logo/logo5.svg',
];

const Clients: React.FC = () => {
  const [isReverse, setIsReverse] = useState(false);

  const toggleDirection = () => {
    setIsReverse(!isReverse);
  };

  // Duplicate logos to create seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Clients</h2>
        
        <button 
          onClick={toggleDirection} 
          className="toggle-direction"
        >
          {isReverse ? 'Scroll Forward' : 'Scroll Reverse'}
        </button>

        <div className="marquee-container">
          <div className={`marquee-content ${isReverse ? 'reverse' : ''}`}>
            <div className="marquee-wrapper">
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="marquee-item">
                  <img src={logo} alt={`Client logo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;