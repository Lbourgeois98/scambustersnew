import React from 'react';
import { Facebook, MessagesSquare } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-md text-white border-t border-gold-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo-Photoroom.png" alt="ScamBusters Logo" className="h-12 mr-2" />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in casino agent verification. 
              Ensuring safe and legitimate online gaming experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2 rounded-lg transition-all shadow-lg"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://m.me/j/Aba6iSHafKh901ZD/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2 rounded-lg transition-all shadow-lg"
              >
                <MessagesSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold-500/20 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ScamBusters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
