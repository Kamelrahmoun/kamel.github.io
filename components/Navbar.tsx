import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const navItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Effect for background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for Intersection Observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-40% 0px -60% 0px', // Sets an activation "line" 40% from the top
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    const sections = navLinks.map(link => document.querySelector(link.href));
    sections.forEach(sec => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach(sec => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  // Effect to update sliding indicator position
  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => link.href === activeSection);
    const activeNavItem = navItemRefs.current[activeIndex];

    if (activeNavItem) {
      setIndicatorStyle({
        left: activeNavItem.offsetLeft,
        top: activeNavItem.offsetTop,
        width: activeNavItem.offsetWidth,
        height: activeNavItem.offsetHeight,
        opacity: 1,
      });
    }
  }, [activeSection, isMenuOpen]); // Rerun when menu opens/closes


  // Effect to handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);


  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(href); // Immediately set active for better UX
    setIsMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-secondary/70 backdrop-blur-md shadow-lg border-b border-light/10' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} aria-label="Kamel Rahmoun homepage">
            <img 
              src="https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947032/logo_efqvot.png" 
              alt="Kamel Rahmoun Logo" 
              className="h-8 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="relative flex items-center space-x-2">
              <div
                className="absolute bg-light/10 rounded-lg -z-10"
                style={{
                  ...indicatorStyle,
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              />
              {navLinks.map((link, index) => (
                <li key={link.href} ref={el => { navItemRefs.current[index] = el; }}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block font-medium transition-colors py-2 px-4 rounded-lg ${activeSection === link.href ? 'text-light' : 'text-light/70 hover:text-light'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="text-light focus:outline-none p-2"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-secondary/90 backdrop-blur-md transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          {navLinks.map(link => (
            <li key={link.href} className="w-full">
              <a 
                href={link.href} 
                className={`block text-center text-2xl font-semibold py-4 transition-colors w-full ${activeSection === link.href ? 'text-accent' : 'text-light hover:text-accent'}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;