import React from 'react';
import AgentDirectory from '../components/AgentDirectory';
import VerificationSearch from '../components/VerificationSearch';

const AgentsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <style>{`
        @keyframes neonPulseGoldRed {
          0%, 100% { box-shadow: 0 0 10px #facc15, 0 0 25px #f97316, 0 0 45px #ef4444; }
          50% { box-shadow: 0 0 25px #f97316, 0 0 55px #ef4444; }
        }
        @keyframes neonPulseGold {
          0%, 100% { box-shadow: 0 0 10px #facc15, 0 0 25px #facc15, 0 0 35px #fde047; }
          50% { box-shadow: 0 0 25px #fde047, 0 0 45px #facc15; }
        }
        .neon-goldred { animation: neonPulseGoldRed 2s infinite alternate; }
        .neon-gold { animation: neonPulseGold 2.5s infinite alternate; }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white neon-goldred inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-gold-500/10 to-red-600/10 border border-gold-400/30">
            Verified Agents Directory
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mt-3">
            Search for an agent by verification ID or browse our comprehensive directory of trusted, verified casino agents.
          </p>
        </div>

        {/* Verification Search */}
        <div className="mb-12 neon-goldred rounded-lg p-6 bg-black/30 border border-gold-400/30 backdrop-blur-md">
          <VerificationSearch />
        </div>

        {/* Agent Directory */}
        <div className="dark-box rounded-lg p-6 md:p-8 neon-gold border border-gold-400/30 bg-black/40 backdrop-blur-md">
          <AgentDirectory />
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
