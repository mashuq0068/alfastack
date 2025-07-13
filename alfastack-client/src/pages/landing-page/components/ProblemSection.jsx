import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const WhoWeAreSection = () => {
  const [activeStory, setActiveStory] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stories = [
    {
      id: 0,
      title: "Our Mission",
      description: "Empowering businesses to thrive in the digital era through transformative technology solutions that drive sustainable growth.",
      image: "Target",
      stats: { number: "500+", label: "Enterprises Transformed" },
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      id: 1,
      title: "Our Vision", 
      description: "To become the world's most trusted partner for digital transformation, making cutting-edge technology accessible to every business.",
      image: "Eye",
      stats: { number: "15+", label: "Years of Innovation" },
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      id: 2,
      title: "Our Values",
      description: "Innovation, integrity, and impact guide everything we do. We believe in building lasting partnerships through transparent collaboration.",
      image: "Heart",
      stats: { number: "98%", label: "Client Satisfaction" },
      color: "text-red-400",
      bgColor: "bg-red-400/10"
    },
    {
      id: 3,
      title: "Our Team",
      description: "World-class experts from leading tech companies, united by a passion for solving complex business challenges through technology.",
      image: "Users",
      stats: { number: "150+", label: "Expert Professionals" },
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    }
  ];

  // Auto-advance stories
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, stories.length]);

  return (
    <section id="who-we-are" ref={ref} className="py-20 bg-gradient-to-b from-background to-primary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6"
            style={{ y }}
          >
            Who We Are
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ opacity }}
          >
            Digital transformation pioneers with a passion for turning visionary ideas into business reality.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Navigation & Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Story Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {stories.map((story, index) => (
                <motion.button
                  key={story.id}
                  onClick={() => setActiveStory(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeStory === index
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {story.title}
                </motion.button>
              ))}
            </div>

            {/* Active Story Content */}
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glassmorphism rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-4 rounded-xl ${stories[activeStory].bgColor}`}>
                  <Icon 
                    name={stories[activeStory].image} 
                    size={32} 
                    className={stories[activeStory].color} 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {stories[activeStory].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {stories[activeStory].description}
                  </p>
                </div>
              </div>

              {/* Story Stats */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${stories[activeStory].color} mb-1`}>
                    {stories[activeStory].stats.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stories[activeStory].stats.label}
                  </div>
                </div>
                <div className="h-8 w-px bg-border mx-6"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-muted/20 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${stories[activeStory].color.replace('text-', 'bg-')}`}
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">Impact Level</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Progress Indicators */}
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeStory ? 'bg-accent w-8' : 'bg-muted/30 w-4'
                  }`}
                  layoutId={`progress-${index}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="glassmorphism rounded-2xl p-8 min-h-[500px] flex flex-col justify-center">
              {/* Layered Image/Visual Reveals */}
              <motion.div
                key={`visual-${activeStory}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <div className={`inline-flex p-8 rounded-full ${stories[activeStory].bgColor} mb-6`}>
                  <Icon 
                    name={stories[activeStory].image} 
                    size={80} 
                    className={stories[activeStory].color} 
                  />
                </div>
                
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {stories[activeStory].title}
                </h4>
                
                <div className="space-y-4">
                  {/* Animated Statistics */}
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className={`text-5xl font-bold ${stories[activeStory].color} mb-2`}>
                      {stories[activeStory].stats.number}
                    </div>
                    <div className="text-muted-foreground">
                      {stories[activeStory].stats.label}
                    </div>
                  </motion.div>

                  {/* Interactive Elements */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {[1, 2, 3].map((item, index) => (
                      <motion.div
                        key={item}
                        className="h-2 bg-muted/20 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                        style={{ transformOrigin: 'left' }}
                      >
                        <motion.div
                          className={`h-full rounded-full ${stories[activeStory].color.replace('text-', 'bg-')}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: Math.random() * 0.7 + 0.3 }}
                          transition={{ duration: 1, delay: 1 + index * 0.3 }}
                          style={{ transformOrigin: 'left' }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`float-${i}`}
                className="absolute w-4 h-4 border border-accent/20 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + i * 15}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Horizontal Storytelling Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Our Journey Through Innovation
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted/20 transform -translate-y-1/2"></div>
              <motion.div
                className="absolute top-1/2 left-0 h-0.5 bg-accent transform -translate-y-1/2"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 2, delay: 1.2 }}
              />

              {/* Timeline Points */}
              <div className="relative flex justify-between items-center">
                {[
                  { year: '2008', milestone: 'Founded', icon: 'Rocket' },
                  { year: '2012', milestone: 'First Fortune 500 Client', icon: 'Building' },
                  { year: '2018', milestone: 'Global Expansion', icon: 'Globe' },
                  { year: '2023', milestone: 'AI Integration Leader', icon: 'Brain' }
                ].map((point, index) => (
                  <motion.div
                    key={point.year}
                    className="flex flex-col items-center z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3 border-4 border-background">
                      <Icon name={point.icon} size={20} className="text-accent-foreground" />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{point.year}</div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap">{point.milestone}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;