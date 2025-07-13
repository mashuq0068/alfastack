import React, { useEffect, useState } from 'react';

const ActiveSectionIndicator = ({ 
  sections = [],
  className = "",
  showProgress = false 
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Determine active section
      const scrollPosition = scrollTop + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const getSectionProgress = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    if (rect.top > viewportHeight) return 0;
    if (rect.bottom < 0) return 100;
    
    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    return (visibleHeight / elementHeight) * 100;
  };

  return (
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
      {/* Progress Bar */}
      {showProgress && (
        <div className="w-1 h-32 bg-muted/30 rounded-full mb-4 overflow-hidden">
          <div 
            className="w-full bg-accent transition-all duration-250 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      )}
      
      {/* Section Indicators */}
      <div className="space-y-3">
        {sections.map((section, index) => {
          const isActive = activeSection === section;
          const progress = getSectionProgress(section);
          
          return (
            <div
              key={section}
              className={`relative w-3 h-3 rounded-full border-2 transition-all duration-250 ease-out cursor-pointer ${
                isActive 
                  ? 'border-accent bg-accent scale-125' :'border-muted-foreground/50 bg-transparent hover:border-accent/70'
              }`}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              title={`Go to ${section.replace('-', ' ')}`}
            >
              {/* Progress ring for active section */}
              {isActive && (
                <div 
                  className="absolute inset-0 rounded-full border-2 border-accent/30"
                  style={{
                    background: `conic-gradient(from 0deg, var(--color-accent) ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveSectionIndicator;