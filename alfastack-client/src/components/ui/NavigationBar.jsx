import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Icon from '../AppIcon';
import Button from './Button';

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { label: 'Who We Are', anchor: 'who-we-are', icon: 'Users' },
    { label: 'Our Model', anchor: 'transformation-model', icon: 'GitBranch' },
    { label: 'Tech Stack', anchor: 'tech-stack', icon: 'Zap' },
    { label: 'Contact', anchor: 'contact', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.anchor);
      sections.unshift('hero');

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) { // Increased offset to account for navbar height
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (anchor) => {
    setIsMenuOpen(false);
    setActiveSection(anchor);
  };

  const handleConsultationClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out ${
        scrolled ? 'glassmorphism backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 z-[101]">
              <Link
                to="hero"
                smooth={true}
                duration={400}
                className="cursor-pointer"
                onClick={() => handleSectionClick('hero')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center">
                    <Icon name="Layers" size={24} color="#020617" strokeWidth={2.5} />
                  </div>
                  <span className="text-2xl font-heading font-bold text-foreground">
                    AlfaStack
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.anchor}
                    to={item.anchor}
                    smooth={true}
                    duration={400}
                    offset={-100} // Increased offset for better positioning
                    className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-250 ease-out cursor-pointer ${
                      activeSection === item.anchor
                        ? 'text-accent bg-accent/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    onClick={() => handleSectionClick(item.anchor)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-shadow"
                onClick={handleConsultationClick}
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden z-[101]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-250"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Icon 
                  name={isMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  strokeWidth={2} 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-400 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible transform translate-y-0' :'opacity-0 invisible transform -translate-y-4'
        }`}>
          <div className="glassmorphism backdrop-blur-xl border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.anchor}
                  to={item.anchor}
                  smooth={true}
                  duration={400}
                  offset={-100}
                  className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-all duration-250 ease-out cursor-pointer ${
                    activeSection === item.anchor
                      ? 'text-accent bg-accent/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={() => handleSectionClick(item.anchor)}
                >
                  <Icon name={item.icon} size={20} className="mr-3" />
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 pb-2">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-shadow"
                  onClick={handleConsultationClick}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavigationBar;