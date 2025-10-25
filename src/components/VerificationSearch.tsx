import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import { verifyAgent } from '../utils/verificationUtils';
import VerificationResult from './VerificationResult';
import { VerificationResult as VerificationResultType } from '../types';

const VerificationSearch: React.FC = () => {
  const [verificationId, setVerificationId] = useState('');
  const [result, setResult] = useState<VerificationResultType | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationId.trim()) {
      setError('Please enter a verification ID or agent name');
      return;
    }
    setError('');
    setIsSearching(true);

    setTimeout(() => {
      const verificationResult = verifyAgent(verificationId);
      setResult(verificationResult);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <style>{`
        @keyframes neonPulseGoldRed {
          0%, 100% { box-shadow: 0 0 10px #facc15, 0 0 25px #f97316, 0 0 45px #ef4444; }
          50% { box-shadow: 0 0 25px #f97316, 0 0 55px #ef4444; }
        }
        .neon-goldred {
          animation: neonPulseGoldRed 2s infinite alternate;
        }
        .gradient-text {
          background: linear-gradient(to right, #facc15, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="dark-box rounded-lg overflow-hidden bg-black/40 backdrop-blur-md border border-gold-400/30 neon-goldred">
        {/* Header */}
        <div className="p-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
            Verify Casino Agent
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Enter a verification ID or agent name to confirm legitimacy
          </p>
        </div>

        {/* Search Form */}
        <div className="p-5">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                placeholder="Enter verification ID (e.g., SB-12345)"
                className={`w-full px-4 py-3 pl-12 pr-4 rounded-lg text-sm md:text-base text-white placeholder-gray-400 bg-black/30 border ${
                  error ? 'border-red-500' : 'border-gold-400/40'
                } focus:ring-2 focus:ring-red-500 outline-none transition-all neon-goldred`}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {error && (
              <div className="mt-2 text-red-400 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSearching}
              className={`mt-4 w-full bg-gradient-to-r from-gold-500 to-red-600 hover:from-gold-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg neon-goldred ${
                isSearching ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSearching ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                         5.291A7.962 7.962 0 014 12H0c0 3.042 
                         1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Verify Agent'
              )}
            </button>
          </form>

          {/* Results */}
          {result && <VerificationResult result={result} />}

          {/* Default Info */}
          {!result && !isSearching && (
            <div className="dark-box-light p-4 rounded-lg mt-2">
              <h3 className="font-medium text-white mb-2">
                How to verify an agent
              </h3>
              <ol className="list-decimal pl-5 text-gray-300 space-y-2 text-sm md:text-base">
                <li>Ask the agent for their ScamBusters ID.</li>
                <li>Enter the ID or name in the box above.</li>
                <li>Check their current verification status.</li>
                <li>Only transact with verified agents.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationSearch;
