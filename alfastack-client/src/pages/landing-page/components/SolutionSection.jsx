import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import Icon from '../../../components/AppIcon';

const TransformationModelSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const phases = [
    {
      id: 0,
      title: "Discovery & Assessment",
      duration: "Week 1-2",
      description: "Comprehensive analysis of current systems, processes, and digital maturity to identify transformation opportunities.",
      deliverables: ["Digital Readiness Audit", "Gap Analysis Report", "Technology Assessment", "Risk Evaluation"],
      icon: "Search",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30"
    },
    {
      id: 1,
      title: "Strategy & Planning",
      duration: "Week 3-4",
      description: "Design a comprehensive transformation roadmap aligned with business objectives and technology capabilities.",
      deliverables: ["Transformation Roadmap", "Architecture Blueprint", "Implementation Plan", "Success Metrics"],
      icon: "FileText",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30"
    },
    {
      id: 2,
      title: "Rapid Prototyping",
      duration: "Week 5-6",
      description: "Build and validate proof-of-concepts to demonstrate value and refine the transformation approach.",
      deliverables: ["Working Prototypes", "Validation Results", "User Feedback", "Refined Specifications"],
      icon: "Zap",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30"
    },
    {
      id: 3,
      title: "Implementation",
      duration: "Month 2-8",
      description: "Execute the transformation plan using agile methodologies with continuous monitoring and optimization.",
      deliverables: ["System Implementations", "Process Automation", "Staff Training", "Performance Monitoring"],
      icon: "Cog",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    },
    {
      id: 4,
      title: "Optimization & Scale",
      duration: "Month 9-12",
      description: "Fine-tune performance, scale successful implementations, and establish continuous improvement processes.",
      deliverables: ["Performance Optimization", "Scaling Plans", "Continuous Monitoring", "Future Roadmap"],
      icon: "TrendingUp",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30"
    }
  ];

  // GSAP Timeline Animation
  useEffect(() => {
    if (!isInView || !timelineRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate timeline container
    tl.from(timelineRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Animate each phase sequentially
    phases.forEach((_, index) => {
      tl.from(`.phase-${index}`, {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.3");

      // Animate connecting lines
      if (index < phases.length - 1) {
        tl.from(`.connection-${index}`, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.2");
      }
    });

    // Auto-advance active phase
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, phases.length]);

  return (
    <section id="transformation-model" ref={ref} className="py-20 bg-gradient-to-b from-primary/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Transformation Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven 5-phase methodology that delivers rapid, measurable results while minimizing risk and disruption.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className="relative mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute top-32 left-0 right-0 h-1 bg-muted/20 rounded-full"></div>
              <motion.div
                className="absolute top-32 left-0 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${((activePhase + 1) / phases.length) * 100}%` } : { width: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Phase Cards */}
              <div className="grid grid-cols-5 gap-4">
                {phases.map((phase, index) => (
                  <div key={phase.id} className="relative">
                    {/* Timeline Dot */}
                    <motion.div
                      className={`absolute top-28 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background z-10 transition-all duration-500 ${
                        index <= activePhase ? 'bg-accent' : 'bg-muted/30'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />

                    {/* Phase Card */}
                    <motion.div
                      className={`phase-${index} glassmorphism rounded-xl p-6 cursor-pointer transition-all duration-500 border-2 ${
                        activePhase === index 
                          ? `${phase.borderColor} card-shadow scale-105` 
                          : 'border-border hover:border-accent/30'
                      }`}
                      onClick={() => setActivePhase(index)}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`p-3 rounded-lg ${phase.bgColor} mb-4 inline-block`}>
                        <Icon name={phase.icon} size={24} className={phase.color} />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {phase.title}
                      </h3>
                      
                      <div className={`text-sm font-medium mb-3 ${phase.color}`}>
                        {phase.duration}
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Progress Indicator */}
                      {activePhase === index && (
                        <motion.div
                          className="mt-4 pt-4 border-t border-border"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-muted/20 rounded-full h-1">
                              <motion.div
                                className={`h-1 rounded-full ${phase.color.replace('text-', 'bg-')}`}
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 3, ease: "linear" }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">Active</span>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Connection Line */}
                    {index < phases.length - 1 && (
                      <div className={`connection-${index} absolute top-32 right-0 w-full h-1 bg-accent origin-left transform translate-x-6`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full border-4 border-background flex items-center justify-center ${
                    index <= activePhase ? 'bg-accent' : 'bg-muted/30'
                  }`}>
                    <Icon name={phase.icon} size={16} className={index <= activePhase ? 'text-accent-foreground' : 'text-muted-foreground'} />
                  </div>
                  {index < phases.length - 1 && (
                    <div className={`w-0.5 h-20 mt-2 ${index < activePhase ? 'bg-accent' : 'bg-muted/20'}`} />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 glassmorphism rounded-xl p-6 border-2 ${
                  activePhase === index ? `${phase.borderColor} card-shadow` : 'border-border'
                }`}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <div className={`text-sm font-medium mb-3 ${phase.color}`}>
                    {phase.duration}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Phase Details */}
        <motion.div
          key={`details-${activePhase}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phase Overview */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl ${phases[activePhase].bgColor}`}>
                  <Icon name={phases[activePhase].icon} size={32} className={phases[activePhase].color} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {phases[activePhase].title}
                  </h3>
                  <p className={`text-lg font-medium ${phases[activePhase].color}`}>
                    {phases[activePhase].duration}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {phases[activePhase].description}
              </p>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Key Deliverables
              </h4>
              <div className="space-y-3">
                {phases[activePhase].deliverables.map((deliverable, index) => (
                  <motion.div
                    key={deliverable}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={`w-2 h-2 rounded-full ${phases[activePhase].color.replace('text-', 'bg-')}`} />
                    <span className="text-foreground">{deliverable}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* SVG Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Transformation Flow
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {phases.map((phase, index) => (
                <React.Fragment key={phase.id}>
                  <motion.div
                    className="flex flex-col items-center text-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  >
                    <div className={`w-16 h-16 rounded-full ${phase.bgColor} flex items-center justify-center mb-3 border-2 ${phase.borderColor}`}>
                      <Icon name={phase.icon} size={24} className={phase.color} />
                    </div>
                    <div className="text-sm font-medium text-foreground">{phase.title}</div>
                    <div className="text-xs text-muted-foreground">{phase.duration}</div>
                  </motion.div>
                  
                  {index < phases.length - 1 && (
                    <motion.div
                      className="hidden sm:block"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.5, delay: 2 + index * 0.2 }}
                    >
                      <Icon name="ArrowRight" size={20} className="text-accent" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationModelSection;