import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '../../components/ui/NavigationBar';
import ConversionCTA from '../../components/ui/ConversionCTA';
import ActiveSectionIndicator from '../../components/ui/ActiveSectionIndicator';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/ProblemSection';
import TransformationModelSection from './components/SolutionSection';
import TechStackSection from './components/CapabilitiesSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  const sections = ['hero', 'who-we-are', 'transformation-model', 'tech-stack', 'contact'];

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom styles for better navbar spacing
    const style = document.createElement('style');
    style.textContent = `
      section {
        scroll-margin-top: 100px;
      }
      
      @media (max-width: 1024px) {
        section {
          scroll-margin-top: 120px;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>AlfaStack - Digital Transformation Leaders | Enterprise Technology Solutions</title>
        <meta name="description" content="Transform your business into a digital leader with AlfaStack's proven methodologies, cutting-edge technology, and risk-free implementation. Trusted by Fortune 500 companies." />
        <meta name="keywords" content="digital transformation, enterprise technology, cloud migration, AI implementation, cybersecurity, process automation, business modernization" />
        <meta property="og:title" content="AlfaStack - Digital Transformation Leaders" />
        <meta property="og:description" content="Proven methodologies. Cutting-edge technology. Risk-free implementation. Transform your business with AlfaStack." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alfastack.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlfaStack - Digital Transformation Leaders" />
        <meta name="twitter:description" content="Transform your business into a digital leader with proven enterprise technology solutions." />
        <link rel="canonical" href="https://alfastack.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Enhanced Navigation */}
        <NavigationBar />

        {/* Main Content */}
        <main className="relative">
          {/* 1. Hero Section with Animated Headline & CTA */}
          <HeroSection />

          {/* 2. Who We Are with Motion Storytelling */}
          <WhoWeAreSection />

          {/* 3. Our Transformation Model with Animated Timeline */}
          <TransformationModelSection />

          {/* 4. Tech Stack / Capabilities with Hover Effects */}
          <TechStackSection />

          {/* Success Stories Section */}
          <SuccessStoriesSection />

          {/* 5. Contact / CTA Section with Functional Form */}
          <ContactSection />

          {/* Footer Section */}
          <FooterSection />
        </main>

        {/* Enhanced Floating Elements */}
        <ConversionCTA 
          variant="floating"
          position="bottom-right"
          showOnScroll={true}
          scrollThreshold={300}
        />

        <ActiveSectionIndicator 
          sections={sections}
          showProgress={true}
          className="hidden lg:block"
        />
      </div>
    </>
  );
};

export default LandingPage;