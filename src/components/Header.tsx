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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/EBlogo.webp"
            alt="Essential Block"
            width={180}
            height={45}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-800 hover:text-primary font-medium transition duration-300">
            Services
          </Link>
          <Link href="#marketing" className="text-gray-800 hover:text-primary font-medium transition duration-300">
            Marketing
          </Link>
          <Link href="#corporate-gifts" className="text-gray-800 hover:text-primary font-medium transition duration-300">
            Corporate Gifts
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-primary font-medium transition duration-300">
            About
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-primary font-medium transition duration-300">
            Contact
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#contact" className="btn-primary px-5 py-2 rounded-full font-medium">
            Get a Quote
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="#services" onClick={toggleMenu} className="text-gray-800 hover:text-primary py-2 font-medium">
              Services
            </Link>
            <Link href="#marketing" onClick={toggleMenu} className="text-gray-800 hover:text-primary py-2 font-medium">
              Marketing
            </Link>
            <Link href="#corporate-gifts" onClick={toggleMenu} className="text-gray-800 hover:text-primary py-2 font-medium">
              Corporate Gifts
            </Link>
            <Link href="#about" onClick={toggleMenu} className="text-gray-800 hover:text-primary py-2 font-medium">
              About
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="text-gray-800 hover:text-primary py-2 font-medium">
              Contact
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="btn-primary inline-block text-center px-5 py-2 rounded-full font-medium">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 