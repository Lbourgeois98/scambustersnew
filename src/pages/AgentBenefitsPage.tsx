import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Shield, 
  Megaphone, 
  Globe,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Link } from '../components/Link';

const AgentBenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-8 md:pb-16">
      <div className="container mx-auto px-3 md:px-4">

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex justify-center items-center p-2 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mb-4">
            <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Join the <span className="text-gold-500">Elite</span> Network of 
            <span className="text-red-600"> Verified</span> Agents
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-lg px-4">
            Unlock exclusive benefits, increase your revenue by up to 98%, and gain the trust 
            of thousands of players worldwide. Join ScamBusters' verified agent program today.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16">
          {[
            { value: '98%', label: 'Revenue Increase', color: 'gold-500' },
            { value: 'Loyal', label: 'Active Players', color: 'red-500' },
            { value: '98%', label: 'Player Trust Rate', color: 'gold-500' },
            { value: '24/7', label: 'Support Access', color: 'red-500' }
          ].map((item, i) => (
            <div key={i} className="dark-box p-3 md:p-6 rounded-lg text-center">
              <div className={`text-xl md:text-3xl font-bold text-${item.color} mb-1 md:mb-2`}>{item.value}</div>
              <div className="text-xs md:text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {/* Each benefit box */}
          <div className="dark-box p-4 md:p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="bg-green-500/20 p-3 rounded-full inline-block mb-4 border border-green-500/30">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-green-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Massive Revenue Boost</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Verified agents see an average 98% increase in player deposits and more sign-ups 
              within the first 30 days of verification.
            </p>
            <div className="text-green-400 text-sm font-medium">
              ✓ Higher conversion ✓ Premium access ✓ Increased trust
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="bg-blue-500/20 p-3 rounded-full inline-block mb-4 border border-blue-500/30">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Exclusive Player Network</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Get access to our network of active players who specifically seek out 
              verified agents for their gaming needs.
            </p>
            <div className="text-blue-400 text-sm font-medium">
              ✓ High-value players ✓ Regular depositors ✓ Loyal base
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="bg-purple-500/20 p-3 rounded-full inline-block mb-4 border border-purple-500/30">
              <Megaphone className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Marketing & Promotion</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Featured directory placement, social media promotion, and verified marketing support.
            </p>
            <div className="text-purple-400 text-sm font-medium">
              ✓ Directory listing ✓ Social media ✓ Certificate
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="bg-gold-500/20 p-3 rounded-full inline-block mb-4 border border-gold-400/30">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-gold-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Industry Recognition</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Join the elite circle of verified agents recognized for professionalism and trust.
            </p>
            <div className="text-gold-400 text-sm font-medium">
              ✓ Verification ✓ Credibility ✓ Prestige
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="bg-red-500/20 p-3 rounded-full inline-block mb-4 border border-red-500/30">
              <Globe className="h-6 w-6 md:h-8 md:w-8 text-red-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Global Exposure</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Gain recognition across multiple verified gaming networks.
            </p>
            <div className="text-red-400 text-sm font-medium">
              ✓ High reach ✓ Global recognition
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="bg-cyan-500/20 p-3 rounded-full inline-block mb-4 border border-cyan-500/30">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Priority Support</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              24/7 support, dispute resolution, and dedicated account management.
            </p>
            <div className="text-cyan-400 text-sm font-medium">
              ✓ 24/7 help ✓ Admin assistance
            </div>
          </div>
        </div>

        {/* Exclusive Benefits */}
        <div className="dark-box p-6 md:p-8 rounded-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white text-center">
            Exclusive Benefits for <span className="text-gold-500">Verified Agents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              'Priority 24/7 customer support access',
              'Daily access to promote',
              'Networking with other verified agents',
              'Professional Verification Certificate',
              'Industry insights and reports',
              'Referrals from our loyal players',
              'Featured placement in agent directory',
              'Social media promotion and exposure'
            ].map((benefit, i) => (
              <div key={i} className="flex items-center text-gray-300 text-sm md:text-base">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Agent Fees Section */}
        <div className="mb-8 md:mb-16">
          <div className="dark-box p-6 md:p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Trust is <span className="text-gold-500">Everything</span> in Online Gaming
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                In the online casino game, trust is everything—and verified agents are trusted the most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="dark-box-light p-4 md:p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gold-500/20 p-2 md:p-3 rounded-full mr-4 border border-gold-400/30">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">One-Time Verification Fee</h3>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gold-500 mb-3">$100</div>
                <p className="text-gray-300 text-sm md:text-base">
                  Full Scam Busters verification and access to our exclusive groups and chat to prove you're a trusted agent.
                </p>
              </div>

              <div className="dark-box-light p-4 md:p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500/20 p-2 md:p-3 rounded-full mr-4 border border-red-500/30">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-red-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Ongoing Maintenance Fee</h3>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-3">$50/month</div>
                <p className="text-gray-300 text-sm md:text-base">
                  Keeps you listed as a Verified Agent with ongoing credibility checks and support.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-500/10 to-red-500/10 border border-gold-400/30 rounded-lg p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gold-400 mb-4">
                The Scam Busters Guarantee
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                Within 7 days of verification, most agents see a surge in player trust and deposits — 
                often doubling their verification fee in the first week.
              </p>
              <p className="text-white font-medium text-sm md:text-base">
                Players choose verified agents because they know their money’s safe. Be the agent they trust.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="dark-box p-6 md:p-8 rounded-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
              Ready to <span className="text-gold-500">Transform</span> Your Business?
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Join hundreds of successful agents who boosted their revenue through ScamBusters verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply" 
                className="group bg-gradient-to-r from-red-600 to-gold-600 hover:from-red-700 hover:to-gold-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center font-medium text-base shadow-lg shadow-red-500/30"
              >
                Apply for Verification
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/agents" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-8 py-4 rounded-lg transition-all transform hover:scale-105 border border-gold-400/40 flex items-center justify-center font-medium text-base shadow-lg shadow-gold-500/30"
              >
                View Verified Agents
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentBenefitsPage;
