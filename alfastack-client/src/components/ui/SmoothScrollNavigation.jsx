import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const SmoothScrollNavigation = ({ 
  sections = [],
  offset = -80,
  duration = 400,
  onSectionChange = () => {},
  className = ""
}) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].anchor);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i].anchor) {
            setActiveSection(sections[i].anchor);
            onSectionChange(sections[i].anchor);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection, onSectionChange]);

  const scrollToSection = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      const elementPosition = element.offsetTop + offset;
      scroll.scrollTo(elementPosition, {
        duration,
        smooth: 'easeInOutQuart'
      });
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration,
      smooth: 'easeInOutQuart'
    });
  };

  return {
    activeSection,
    scrollToSection,
    scrollToTop,
    isActive: (anchor) => activeSection === anchor
  };
};

export default SmoothScrollNavigation;