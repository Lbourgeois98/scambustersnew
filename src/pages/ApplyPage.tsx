import React from 'react';
import { ExternalLink } from 'lucide-react';

const ApplyPage = () => {
  const handleApplyClick = () => {
    // Open Google Form in new tab
    window.open('https://forms.gle/jTMRhvr62NMz27u7A', '_blank');
  };

  return (
    <div className="min-h-screen pt-16 pb-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center p-3 bg-red-600 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Join the <span className="text-yellow-400">Elite</span> Network of Verified Agents
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Boost your revenue by up to 98% and gain access to premium players. Start your application today.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Revenue Boost", value: "98%", color: "text-yellow-400" },
              { label: "Support", value: "24/7", color: "text-yellow-400" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-3 rounded-lg text-center border border-gray-700">
                <div className={`text-xl font-bold mb-1 ${item.color}`}>{item.value}</div>
                <div className="text-gray-300 text-xs">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Main Apply Button Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-2xl text-center border border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6 text-sm">
              Complete a quick application to join our verified network of top agents.
            </p>

            {/* 🔴 RED & BLACK APPLY BUTTON */}
            <button
              type="button"
              onClick={handleApplyClick}
              className="w-full bg-red-600 hover:bg-red-700 text-black font-extrabold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              aria-label="Apply now via Google Form"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              APPLY
            </button>
          </div>

          {/* Process Steps */}
          <div className="mt-8 bg-gray-800 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-center text-white">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-red-600 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white text-sm">1. Apply</h4>
                <p className="text-gray-400 text-xs mt-1">Fill out the form in 2 minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white text-sm">2. Review</h4>
                <p className="text-gray-400 text-xs mt-1">We respond in 1-24 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h4 className="font-medium text-white text-sm">3. Verified</h4>
                <p className="text-gray-400 text-xs mt-1">Start earning more today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
