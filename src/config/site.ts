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
  Resources: [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' }
  ]
};

export const CONTACT_INFO = {
  email: 'info@metalmachmastery.com',
  phone: '+1 (555) 123-4567',
  address: '123 Industrial Park, Tech City, State 54321'
};
