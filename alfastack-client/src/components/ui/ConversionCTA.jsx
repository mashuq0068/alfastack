import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const ConversionCTA = ({ 
  variant = 'floating',
  position = 'bottom-right',
  showOnScroll = true,
  scrollThreshold = 300,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(!showOnScroll);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!showOnScroll) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > scrollThreshold;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll, scrollThreshold]);

  const handleConsultationClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'bottom-center':
        return 'bottom-6 left-1/2 transform -translate-x-1/2';
      case 'bottom-right':
      default:
        return 'bottom-6 right-6';
    }
  };

  if (variant === 'floating') {
    return (
      <div className={`fixed ${getPositionClasses()} z-50 transition-all duration-400 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } ${className}`}>
        <div className="relative">
          {/* Floating CTA Button */}
          <Button
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-shadow rounded-full px-6 py-3 group"
            onClick={handleConsultationClick}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <Icon 
              name="Calendar" 
              size={20} 
              className={`transition-transform duration-250 ${isExpanded ? 'scale-110' : ''}`} 
            />
            <span className={`ml-2 transition-all duration-250 ${
              isExpanded ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 overflow-hidden'
            }`}>
              Book Consultation
            </span>
          </Button>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
          
          {/* Tooltip */}
          <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg transition-all duration-250 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            Schedule your free consultation
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'sticky') {
    return (
      <div className={`sticky top-20 z-40 bg-accent/10 border border-accent/20 rounded-lg p-4 backdrop-blur-sm ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
              Ready to Transform?
            </h3>
            <p className="text-sm text-muted-foreground">
              Schedule a consultation to discuss your digital transformation needs.
            </p>
          </div>
          <Button
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold ml-4"
            onClick={handleConsultationClick}
          >
            <Icon name="ArrowRight" size={16} className="ml-1" />
            Book Now
          </Button>
        </div>
      </div>
    );
  }

  // Inline variant
  return (
    <div className={`inline-flex items-center gap-4 ${className}`}>
      <Button
        variant="default"
        size="lg"
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-shadow"
        onClick={handleConsultationClick}
      >
        <Icon name="Calendar" size={20} className="mr-2" />
        Schedule Strategic Consultation
      </Button>
      
      <div className="text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Icon name="Clock" size={16} />
          <span>Limited slots available</span>
        </div>
      </div>
    </div>
  );
};

export default ConversionCTA;