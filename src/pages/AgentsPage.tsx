import React from 'react';
import AgentDirectory from '../components/AgentDirectory';

const AgentsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <style>{`
        @keyframes neonPulseGoldRed {
          0%, 100% { box-shadow: 0 0 10px #facc15, 0 0 25px #f97316, 0 0 45px #ef4444; }
          50% { box-shadow: 0 0 25px #f97316, 0 0 55px #ef4444; }
        }
        .neon-goldred { animation: neonPulseGoldRed 2s infinite alternate; }
        .gradient-text {
          background: linear-gradient(to right, #facc15, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-3 md:mb-4">
            Verified Agents
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            Browse our trusted, ScamBusters-approved agents verified for legitimacy, fairness, and reliability.
          </p>
        </div>

        {/* VERIFIED AGENTS DIRECTORY */}
        <div className="dark-box rounded-lg p-6 md:p-8 bg-gradient-to-r from-red-600/10 via-black/40 to-gold-500/10 border border-gold-400/30 backdrop-blur-md neon-goldred">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">
            Verified Agents Directory
          </h2>
          <AgentDirectory />
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
