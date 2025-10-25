import React from 'react';
import { Facebook } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-center py-16 md:py-24 px-4 z-10">
      <style>{`
        @keyframes neonPulseGoldRed {
          0%, 100% { box-shadow: 0 0 12px #facc15, 0 0 25px #f97316, 0 0 45px #ef4444; }
          50% { box-shadow: 0 0 25px #f97316, 0 0 55px #ef4444; }
        }
        .neon-goldred {
          animation: neonPulseGoldRed 2s infinite alternate;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Welcome to <span className="text-gold-500">ScamBusters</span> —  
          <span className="text-red-500"> Verified Casino Agents</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-lg">
          Join the elite network of trusted casino agents. Increase your earnings, gain credibility, and protect your players with verified legitimacy.
        </p>

        {/* Glowing Facebook Group Button */}
        <a
          href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-gold-500 to-red-600 hover:from-gold-600 hover:to-red-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base transition-all neon-goldred"
        >
          <Facebook className="h-5 w-5 md:h-6 md:w-6 mr-2" />
          Join Our Facebook Group
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
