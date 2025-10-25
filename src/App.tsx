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

      {/* 🎃 Optimized Multi-Layer Halloween Casino Background */}
      <div
        className="fixed top-0 left-0 w-full h-full overflow-hidden"
        style={{
          zIndex: -1,
          backgroundColor: '#000',
        }}
      >
        {/* Base Casino Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.7) saturate(1.4)',
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <source src="/videos/halloween-casino-bg.mp4" type="video/mp4" />
        </video>

        {/* Fog Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            objectFit: 'contain',
            opacity: 0.35,
            mixBlendMode: 'screen',
            filter: 'blur(1px)',
            transform: 'translate(-50%, -50%) scale(1.05)',
          }}
        >
          <source src="/videos/halloween-fog-overlay.mp4" type="video/mp4" />
        </video>

        {/* Bats / Glow Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            objectFit: 'contain',
            opacity: 0.4,
            mixBlendMode: 'lighten',
            transform: 'translate(-50%, -50%) scale(1.1)',
          }}
        >
          <source src="/videos/halloween-bats-overlay.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)',
          }}
        ></div>
      </div>

      {/* Page Layout */}
      <Header />
      <main className="flex-grow relative z-10 backdrop-blur-[1px]">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
