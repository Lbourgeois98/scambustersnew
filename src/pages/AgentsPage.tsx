import React from 'react';
import AgentDirectory from '../components/AgentDirectory';
import VerificationSearch from '../components/VerificationSearch';

const AgentsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4 text-white">Verified Agents Directory</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Search for an agent by verification ID or browse our comprehensive directory of verified casino agents.
          </p>
        </div>
        
        {/* Verification Search Section */}
        <div className="mb-12">
          <VerificationSearch />
        </div>
        
        {/* Agent Directory Section */}
        <div className="dark-box rounded-lg p-6">
          <AgentDirectory />
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
