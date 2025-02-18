// Site-wide configuration and constants

export const SITE_TITLE = 'Metalmach Mastery';

export const NAV_LINKS = [
  { 
    href: '/', 
    label: 'Home' 
  },
  { 
    href: '/services', 
    label: 'Services',
    subLinks: [
      { href: '/services/casting', label: 'Metal Casting' },
      { href: '/services/machining', label: 'CNC Machining' },
      { href: '/services/prototyping', label: 'Prototyping' }
    ]
  },
  { 
    href: '/about', 
    label: 'About Us' 
  },
  
  { 
    href: '/contact', 
    label: 'Contact' 
  }
];



export const FOOTER_LINKS = {
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/news', label: 'News' }
  ],
  Services: [
    { href: '/services/casting', label: 'Metal Casting' },
    { href: '/services/machining', label: 'CNC Machining' },
    { href: '/services/prototyping', label: 'Prototyping' }
  ],
  
};

export const CONTACT_INFO = {
  phone: "+91 70304 09930",
  email: "srjoshi@metalmach.in",
  address: 'PLOT NO. F-39, CHINCHOLI MIDC, SOLAPUR, MAHARASHTRA, INDIA. PIN CODE: 413255'
};
