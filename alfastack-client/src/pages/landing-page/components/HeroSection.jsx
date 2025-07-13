import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const texts = [
    'Transform Your Business Into a Digital Leader',
    'Accelerate Your Digital Transformation', 
    'Modernize Legacy Systems Seamlessly',
    'Unlock Your Digital Potential Today'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(prev => 
          isDeleting 
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  const handleScrollToNext = () => {
    const nextElement = document.getElementById('who-we-are');
    // if (nextElement) {
    //   nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
  };

  const handleConsultationClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSuccessStoriesClick = () => {
    const techStackElement = document.getElementById('tech-stack');
    if (techStackElement) {
      techStackElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section  className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0  bg-gradient-to-br from-background via-primary to-background">
        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-accent/20 rounded-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + i * 10}%`
            }}
          />
        ))}
        
        {/* Enhanced Particle Effects */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [-100, -300, -500],
              x: [0, Math.random() * 150 - 75, Math.random() * 300 - 150]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0
            }}
          />
        ))}

        {/* Interactive Background Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-accent/10 to-success/10 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 mt-[200px]"
        >
          {/* Enhanced Animated Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="block relative">
              {currentText}
              <motion.span
                className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-accent ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl sm:text-2xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Proven methodologies. Cutting-edge technology. Risk-free implementation.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              variant="default"
              size="xl"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-shadow px-10 py-5 text-lg transform hover:scale-105 transition-all duration-300"
              onClick={handleConsultationClick}
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Strategic Consultation
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="border-accent/50 text-accent hover:bg-accent/10 px-10 py-5 text-lg transform hover:scale-105 transition-all duration-300"
              onClick={handleSuccessStoriesClick}
              iconName="TrendingUp"
              iconPosition="left"
            >
              View Our Capabilities
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="glassmorphism rounded-2xl p-8 backdrop-blur-xl"
        >
          <motion.p 
            className="text-sm text-muted-foreground mb-6 uppercase tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Trusted by Fortune 500 Companies
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: 'Microsoft', logo: 'Building' },
              { name: 'Amazon', logo: 'ShoppingCart' },
              { name: 'Google', logo: 'Search' },
              { name: 'IBM', logo: 'Cpu' }
            ].map((client, index) => (
              <motion.div
                key={client.name}
                className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
              >
                <div className="w-16 h-16 bg-muted/20 rounded-lg flex items-center justify-center mb-2 border border-accent/20">
                  <Icon name={client.logo} size={24} className="text-accent" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-border">
            {[
              { label: 'Years of Experience', value: '15+', icon: 'Award' },
              { label: 'Successful Transformations', value: '500+', icon: 'TrendingUp' },
              { label: 'Efficiency Gains Achieved', value: '85%', icon: 'Zap' }
            ].map((metric, index) => (
              <motion.div
              
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg mr-3">
                    <Icon name={metric.icon} size={20} className="text-accent" />
                  </div>
                  <span style={{paddingTop:"300px"}} className="text-3xl  font-bold text-foreground">
                    {metric.value}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleScrollToNext}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm text-muted-foreground mb-3 group-hover:text-accent transition-colors duration-300">
            Scroll to explore
          </span>
          <div className="p-2 border border-accent/30 rounded-full group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
            <Icon name="ChevronDown" size={20} className="text-accent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;