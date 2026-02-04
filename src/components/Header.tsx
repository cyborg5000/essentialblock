'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/EBlogo.webp"
            alt="Essential Block - Strategic Marketing and Corporate Gifts"
            width={180}
            height={45}
            priority
            quality={90}
            sizes="(max-width: 768px) 150px, 180px"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#services" className="text-ink hover:text-primary font-medium transition duration-300">
            Services
          </Link>
          <Link href="/#marketing" className="text-ink hover:text-primary font-medium transition duration-300">
            Marketing
          </Link>
          <Link href="/#corporate-gifts" className="text-ink hover:text-primary font-medium transition duration-300">
            Corporate Gifts
          </Link>
          <Link href="/resources" className="text-ink hover:text-primary font-medium transition duration-300">
            Resources
          </Link>
          <Link href="/#about" className="text-ink hover:text-primary font-medium transition duration-300">
            About
          </Link>
          <Link href="/#contact" className="text-ink hover:text-primary font-medium transition duration-300">
            Contact
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/#contact" className="btn-primary px-5 py-2 rounded-full font-medium">
            Get a Quote
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white/95 border-t border-white/60" role="navigation" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="/#services" onClick={toggleMenu} className="text-ink hover:text-primary py-2 font-medium">
              Services
            </Link>
            <Link href="/#marketing" onClick={toggleMenu} className="text-ink hover:text-primary py-2 font-medium">
              Marketing
            </Link>
            <Link href="/#corporate-gifts" onClick={toggleMenu} className="text-ink hover:text-primary py-2 font-medium">
              Corporate Gifts
            </Link>
            <Link href="/resources" onClick={toggleMenu} className="text-ink hover:text-primary py-2 font-medium">
              Resources
            </Link>
            <Link href="/#about" onClick={toggleMenu} className="text-ink hover:text-primary py-2 font-medium">
              About
            </Link>
            <Link href="/#contact" onClick={toggleMenu} className="text-ink hover:text-primary py-2 font-medium">
              Contact
            </Link>
            <Link href="/#contact" onClick={toggleMenu} className="btn-primary inline-block text-center px-5 py-2 rounded-full font-medium">
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 
