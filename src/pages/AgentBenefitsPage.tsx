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
      <style>{`
        /* Neon pulse animation for gold/red buttons */
        @keyframes neonPulseGoldRed {
          0%, 100% { box-shadow: 0 0 12px #facc15, 0 0 25px #f97316, 0 0 45px #ef4444; }
          50% { box-shadow: 0 0 25px #f97316, 0 0 55px #ef4444; }
        }
        .neon-goldred {
          animation: neonPulseGoldRed 2s infinite alternate;
        }
      `}</style>

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

          {/* CTA Button at top */}
          <div className="mt-6">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center bg-gradient-to-r from-gold-500 to-red-600 hover:from-gold-600 hover:to-red-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base transition-all transform hover:scale-105 neon-goldred"
            >
              Apply Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
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

        {/* Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {[ 
            { icon: TrendingUp, title: 'Massive Revenue Boost', color: 'green', desc: 'Verified agents see an average 98% increase in player deposits and more sign-ups within the first 30 days of verification.' },
            { icon: Users, title: 'Exclusive Player Network', color: 'blue', desc: 'Access our network of active players who specifically seek verified agents for their gaming needs.' },
            { icon: Megaphone, title: 'Marketing & Promotion', color: 'purple', desc: 'Featured directory placement, social media promotion, and verified marketing support.' },
            { icon: Shield, title: 'Industry Recognition', color: 'gold', desc: 'Join the elite circle of verified agents recognized for professionalism and trust.' },
            { icon: Globe, title: 'Global Exposure', color: 'red', desc: 'Gain recognition across multiple verified gaming networks and grow your audience.' },
            { icon: Zap, title: 'Priority Support', color: 'cyan', desc: '24/7 support, dispute resolution, and dedicated account management.' }
          ].map(({ icon: Icon, title, color, desc }, i) => (
            <div key={i} className="dark-box p-4 md:p-6 rounded-lg hover:scale-105 transition-transform text-center">
              <div className={`bg-${color}-500/20 p-3 rounded-full inline-block mb-4 border border-${color}-500/30`}>
                <Icon className={`h-6 w-6 md:h-8 md:w-8 text-${color}-400`} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">{desc}</p>
            </div>
          ))}
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

        {/* Agent Fees */}
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
                className="group bg-gradient-to-r from-gold-500 to-red-600 hover:from-gold-600 hover:to-red-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center font-medium text-base neon-goldred"
              >
                Apply for Verification
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/agents" 
                className="bg-gradient-to-r from-gold-500 to-red-600 hover:from-gold-600 hover:to-red-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center font-medium text-base neon-goldred"
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
