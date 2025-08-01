'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Determine active section based on scroll position
      const sections = ['intro', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EAE8E8]/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-[#D6D3CD] dark:border-gray-700">
      <div 
        className="h-1 bg-gradient-to-r from-[#548AB7] to-[#AEC6CE] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#intro" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#intro'); }}
              className="text-2xl font-bold text-[#548AB7] dark:text-white hover:text-[#6FA2CD] dark:hover:text-[#6FA2CD] transition-colors duration-300 cursor-pointer"
            >
              Laurenz Bilek
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer relative group ${
                      isActive 
                        ? 'text-[#548AB7] dark:text-[#6FA2CD] bg-[#548AB7]/10 dark:bg-[#548AB7]/20' 
                        : 'text-[#548AB7] dark:text-gray-300 hover:text-[#6FA2CD] dark:hover:text-[#6FA2CD] hover:bg-[#548AB7]/5 dark:hover:bg-[#548AB7]/10'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#548AB7] rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-50 group-hover:scale-100'
                    }`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button - Desktop only */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="bg-[#548AB7] hover:bg-[#6FA2CD] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#548AB7] dark:text-gray-300 hover:text-[#6FA2CD] dark:hover:text-[#6FA2CD] hover:bg-[#548AB7]/10 dark:hover:bg-[#548AB7]/20 focus:outline-none transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#EAE8E8]/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-[#D6D3CD] dark:border-gray-700">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className={`block px-4 py-3 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'text-[#548AB7] dark:text-[#6FA2CD] bg-[#548AB7]/15 dark:bg-[#548AB7]/25 border-l-4 border-[#548AB7]' 
                    : 'text-[#548AB7] dark:text-gray-300 hover:text-[#6FA2CD] dark:hover:text-[#6FA2CD] hover:bg-[#548AB7]/10 dark:hover:bg-[#548AB7]/20'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          
          {/* Mobile CTA */}
          <div className="pt-4 pb-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="block w-full bg-[#548AB7] hover:bg-[#6FA2CD] text-white text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}