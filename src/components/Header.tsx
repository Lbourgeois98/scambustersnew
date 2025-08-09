import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Search } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactAdmins = () => {
    const adminSection = document.querySelector('#admin-contacts');
    if (adminSection) {
      adminSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#admin-contacts';
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md py-1 md:py-2' : 'bg-black py-2 md:py-4'
      }`}
    >
      {/* Solid black background — no transparency */}
      <div className="container mx-auto px-3 md:px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo-Photoroom.png" alt="ScamBusters Logo" className="h-8 md:h-12 mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <Link href="/" className="text-white hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="/verify" className="text-white hover:text-yellow-400 transition-colors">Verify Agent</Link>
          <Link href="/agents" className="text-white hover:text-yellow-400 transition-colors">Verified Agents</Link>
          <Link href="/agent-benefits" className="text-white hover:text-yellow-400 transition-colors">Agent Benefits</Link>
          <Link href="/apply" className="text-white hover:text-yellow-400 transition-colors">Apply for Verification</Link>
          <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">About Us</Link>
          
          {/* Contact Admins Button */}
          <button 
            onClick={handleContactAdmins}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-1 lg:px-4 lg:py-2 rounded-md transition-colors flex items-center text-sm lg:text-base"
          >
            <Users className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
            Contact Admins
          </button>
          
          {/* Verify Now Button */}
          <Link 
            href="/verify" 
            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md transition-colors flex items-center text-sm lg:text-base"
          >
            <Search className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
            Verify Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black absolute w-full">
          {/* Removed backdrop-blur-sm and /98 transparency */}
          <nav className="container mx-auto px-3 py-3 flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-gray-800 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/verify" 
              className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-gray-800 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Verify Agent
            </Link>
            <Link 
              href="/agents" 
              className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-gray-800 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Verified Agents
            </Link>
            <Link 
              href="/agent-benefits" 
              className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-gray-800 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Agent Benefits
            </Link>
            <Link 
              href="/apply" 
              className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-gray-800 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply for Verification
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-gray-800 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button 
              onClick={() => {
                handleContactAdmins();
                setIsMenuOpen(false);
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md transition-colors flex items-center justify-center text-sm"
            >
              <Users className="h-4 w-4 mr-2" />
              Contact Admins
            </button>
            <Link 
              href="/verify" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-4 w-4 mr-2" />
              Verify Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;