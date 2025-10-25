import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AgentsPage from './pages/AgentsPage';
import ApplyPage from './pages/ApplyPage';
import AboutPage from './pages/AboutPage';
import AgentBenefitsPage from './pages/AgentBenefitsPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    const handleNavigation = () => setCurrentPath(window.location.pathname);
    window.addEventListener('navigation', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigation', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/agents':
        document.title = 'Verified Agents | ScamBusters';
        return <AgentsPage />;
      case '/apply':
        document.title = 'Apply for Verification | ScamBusters';
        return <ApplyPage />;
      case '/about':
        document.title = 'About Us | ScamBusters';
        return <AboutPage />;
      case '/agent-benefits':
        document.title = 'Agent Benefits | ScamBusters';
        return <AgentBenefitsPage />;
      default:
        document.title = 'ScamBusters | Casino Agent Verification';
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">

      {/* 🎃 Single Halloween Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{
          filter: 'brightness(0.7) saturate(1.3)',
          backgroundColor: '#000',
        }}
      >
        <source src="/videos/halloween.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for readability */}
      <div
        className="fixed inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)',
          zIndex: 0,
        }}
      ></div>

      {/* Site Layout */}
      <Header />
      <main className="flex-grow relative z-10 backdrop-blur-[1px]">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
