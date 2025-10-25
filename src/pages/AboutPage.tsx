import React from 'react';
import { Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <style>{`
        @keyframes neonPulseGoldRed {
          0%, 100% { box-shadow: 0 0 10px #facc15, 0 0 25px #f97316, 0 0 45px #ef4444; }
          50% { box-shadow: 0 0 25px #f97316, 0 0 55px #ef4444; }
        }
        @keyframes neonPulseGold {
          0%, 100% { box-shadow: 0 0 12px #facc15, 0 0 25px #fde047, 0 0 45px #fbbf24; }
          50% { box-shadow: 0 0 25px #fbbf24, 0 0 55px #fde047; }
        }
        .neon-goldred { animation: neonPulseGoldRed 2s infinite alternate; }
        .neon-gold { animation: neonPulseGold 2.5s infinite alternate; }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="dark-box rounded-lg overflow-hidden bg-black/40 backdrop-blur-md border border-gold-400/30 neon-goldred">
            
            {/* Header with Shield Icon */}
            <div className="bg-gradient-to-r from-gold-500 to-red-600 p-8 flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-full bg-black/40 border border-gold-400/40 neon-goldred mb-4">
                <Shield className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                About <span className="text-gold-500">ScamBusters</span>
              </h1>
            </div>
            
            {/* Content Section */}
            <div className="p-8 md:p-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gold-500 mb-3">Our Mission</h2>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                  Protect players, expose fraud, and build a verified network of trustworthy casino agents.
                </p>
              </div>

              <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  Welcome to <span className="text-gold-500 font-semibold">ScamBusters</span>, a powerful
                  community dedicated to identifying, exposing, and stopping scammers across online gaming
                  and casino networks. We’re committed to building transparency and trust in the sweepstakes
                  and casino community.
                </p>

                <p>
                  Our network of <span className="text-red-500 font-semibold">Verified Agents</span> has helped
                  thousands of players safely connect with legitimate operators, reducing fraud and increasing
                  confidence in the gaming space. Through education, collaboration, and advanced verification,
                  we stand at the forefront of digital safety.
                </p>

                <p>
                  Join us in our mission to make gaming safer for everyone — stay informed, stay protected, and
                  help us bust scams before they spread. Together, we are <span className="text-gold-500 font-semibold">ScamBusters</span>.
                </p>
              </div>
            </div>

            {/* Glow Footer Accent */}
            <div className="bg-gradient-to-r from-red-600 to-gold-600 h-2 neon-goldred"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
