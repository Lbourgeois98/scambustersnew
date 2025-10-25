import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from './Link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 md:pt-24 md:pb-16">
      {/* Background Pattern with subtle glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/5 via-transparent to-red-900/5"></div>
      </div>
      
      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/logo-Photoroom.png" 
            alt="ScamBusters Logo" 
            className="w-48 md:w-64 lg:w-96 mb-4 md:mb-8 animate-float drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 text-white leading-tight animate-slideUp px-2">
              <span className="text-red-500">Verify</span> Casino Agents. 
              <span className="text-gold-400"> Protect</span> Players.
            </h1>
            
            <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-8 animate-slideUp animation-delay-200 px-4">
              ScamBusters provides reliable verification services for online casino agents.
              Search for agent verification IDs and play with confidence.
            </p>
            
            <div className="animate-slideUp animation-delay-400 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
              <Link 
                href="/agents" 
                className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-md transition-all transform hover:scale-105 flex items-center justify-center text-sm md:text-base font-semibold shadow-lg shadow-red-500/50"
              >
                <Shield className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Verified Agents
              </Link>
            </div>
            
            <div className="mt-6 md:mt-8 animate-slideUp animation-delay-600">
              <a 
                href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base font-semibold shadow-lg shadow-gold-500/50"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Join Our Facebook Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
