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
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for navigation changes
    window.addEventListener('popstate', handlePopState);

    // Also listen for custom navigation events
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

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
    <div className="flex flex-col min-h-screen">
      {/* Casino Video Background - More vibrant */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1920&h=1080&fit=crop"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/11/03/137446-766955971_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
