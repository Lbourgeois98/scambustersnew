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

      {/* 🎃 Multi-Layer Halloween Casino Background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        {/* Casino Neon Base Layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.6) saturate(1.3)',
          }}
        >
          <source src="/videos/halloween-casino-bg.mp4" type="video/mp4" />
        </video>

        {/* Spooky Overlay Layer 1 – Fog / Pumpkins */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mixBlendMode: 'screen',
            opacity: 0.4,
          }}
        >
          <source src="/videos/halloween-fog-overlay.mp4" type="video/mp4" />
        </video>

        {/* Overlay Layer 2 – Bats / Haunted Glow */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mixBlendMode: 'lighten',
            opacity: 0.35,
          }}
        >
          <source src="/videos/halloween-bats-overlay.mp4" type="video/mp4" />
        </video>

        {/* Dark filter for contrast */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
          }}
        ></div>
      </div>

      {/* Layout */}
      <Header />
      <main className="flex-grow relative z-10">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
