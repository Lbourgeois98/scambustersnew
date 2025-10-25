import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Shield } from 'lucide-react';
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
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-gold-500/20 py-1 md:py-2' : 'bg-black/80 backdrop-blur-sm py-2 md:py-4'
      }`}
    >
      <div className="container mx-auto px-3 md:px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo-Photoroom.png" alt="ScamBusters Logo" className="h-8 md:h-12 mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
          <Link 
            href="/" 
            className="text-white hover:text-gold-400 transition-colors px-3 py-2 rounded-md hover:bg-white/5"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:text-gold-400 transition-colors px-3 py-2 rounded-md hover:bg-white/5"
          >
            About Us
          </Link>
          
          {/* Verified Agents Button - Red & Gold */}
          <Link 
            href="/agents" 
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-md transition-all flex items-center text-sm lg:text-base font-semibold shadow-lg"
          >
            <Shield className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
            Verified Agents
          </Link>
          
          <Link 
            href="/agent-benefits" 
            className="text-white hover:text-gold-400 transition-colors px-3 py-2 rounded-md hover:bg-white/5"
          >
            Agent Benefits
          </Link>
          <Link 
            href="/apply" 
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-3 py-2 lg:px-4 lg:py-2 rounded-md transition-all text-sm lg:text-base font-semibold shadow-lg"
          >
            Apply
          </Link>
          
          {/* Contact Admins Button - Red & Gold */}
          <button 
            onClick={handleContactAdmins}
            className="bg-gradient-to-r from-red-600 to-gold-600 hover:from-red-700 hover:to-gold-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-md transition-all flex items-center text-sm lg:text-base font-semibold shadow-lg"
          >
            <Users className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
            Contact Admins
          </button>
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
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute w-full border-t border-gold-500/20">
          <nav className="container mx-auto px-3 py-3 flex flex-col space-y-2">
            <Link 
              href="/" 
              className="text-white hover:text-gold-400 transition-colors py-2 px-4 rounded-md hover:bg-white/5 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/agents" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-3 rounded-md transition-all flex items-center justify-center text-sm font-semibold shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className="h-4 w-4 mr-2" />
              Verified Agents
            </Link>
            <Link 
              href="/agent-benefits" 
              className="text-white hover:text-gold-400 transition-colors py-2 px-4 rounded-md hover:bg-white/5 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Agent Benefits
            </Link>
            <Link 
              href="/apply" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-4 py-3 rounded-md transition-all text-sm font-semibold shadow-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply for Verification
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gold-400 transition-colors py-2 px-4 rounded-md hover:bg-white/5 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-4 py-3 rounded-lg transition-all flex items-center justify-center text-sm font-semibold shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Join Facebook Group
            </a>
            <button 
              onClick={() => {
                handleContactAdmins();
                setIsMenuOpen(false);
              }}
              className="bg-gradient-to-r from-red-600 to-gold-600 hover:from-red-700 hover:to-gold-700 text-white px-4 py-3 rounded-md transition-all flex items-center justify-center text-sm font-semibold shadow-lg"
            >
              <Users className="h-4 w-4 mr-2" />
              Contact Admins
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
