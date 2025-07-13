import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechStackSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    { id: 'all', label: 'All Technologies', icon: 'Grid3x3' },
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: 'Cloud' },
    { id: 'ai', label: 'AI & Machine Learning', icon: 'Brain' },
    { id: 'data', label: 'Data & Analytics', icon: 'BarChart3' },
    { id: 'security', label: 'Security & Compliance', icon: 'Shield' },
    { id: 'automation', label: 'Automation & DevOps', icon: 'Cog' }
  ];

  const techStack = [
    {
      id: 1,
      name: "Amazon Web Services",
      category: "cloud",
      description: "Comprehensive cloud computing platform with scalable infrastructure and services.",
      icon: "Cloud",
      proficiency: 95,
      projects: "200+",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    },
    {
      id: 2,
      name: "Microsoft Azure",
      category: "cloud",
      description: "Enterprise-grade cloud platform with hybrid capabilities and AI integration.",
      icon: "CloudSnow",
      proficiency: 90,
      projects: "150+",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30"
    },
    {
      id: 3,
      name: "Google Cloud Platform",
      category: "cloud",
      description: "Advanced cloud infrastructure with powerful AI and machine learning tools.",
      icon: "CloudRain",
      proficiency: 85,
      projects: "120+",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30"
    },
    {
      id: 4,
      name: "TensorFlow",
      category: "ai",
      description: "Open-source machine learning framework for building intelligent applications.",
      icon: "Brain",
      proficiency: 88,
      projects: "80+",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30"
    },
    {
      id: 5,
      name: "PyTorch",
      category: "ai",
      description: "Dynamic neural network framework for research and production AI applications.",
      icon: "Zap",
      proficiency: 85,
      projects: "65+",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/30"
    },
    {
      id: 6,
      name: "Apache Spark",
      category: "data",
      description: "Unified analytics engine for large-scale data processing and machine learning.",
      icon: "Database",
      proficiency: 90,
      projects: "100+",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30"
    },
    {
      id: 7,
      name: "Kubernetes",
      category: "automation",
      description: "Container orchestration platform for automated deployment and scaling.",
      icon: "Package",
      proficiency: 92,
      projects: "180+",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 8,
      name: "Zero Trust Security",
      category: "security",
      description: "Advanced security framework with identity verification and access control.",
      icon: "Shield",
      proficiency: 93,
      projects: "220+",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    },
    {
      id: 9,
      name: "Docker",
      category: "automation",
      description: "Containerization platform for consistent application deployment across environments.",
      icon: "Box",
      proficiency: 94,
      projects: "250+",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: 10,
      name: "React & Next.js",
      category: "frontend",
      description: "Modern web frameworks for building high-performance user interfaces.",
      icon: "Code",
      proficiency: 96,
      projects: "300+",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 11,
      name: "Node.js",
      category: "backend",
      description: "JavaScript runtime for building scalable server-side applications.",
      icon: "Server",
      proficiency: 94,
      projects: "280+",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      id: 12,
      name: "MongoDB",
      category: "data",
      description: "NoSQL database for flexible, scalable data storage and retrieval.",
      icon: "Database",
      proficiency: 89,
      projects: "160+",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/30"
    }
  ];

  const filteredTechStack = selectedCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  return (
    <section id="tech-stack" ref={ref} className="py-20 bg-gradient-to-b from-background to-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks we use to build transformative solutions for your business.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-accent-foreground cta-shadow'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={category.icon} size={20} className="mr-2" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTechStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredCard === tech.id ? 'z-10' : 'z-0'
              }`}
              onMouseEnter={() => setHoveredCard(tech.id)}
              onMouseLeave={() => setHoveredCard(null)}
              layout
            >
              {/* Base Card */}
              <motion.div 
                className={`glassmorphism rounded-xl p-6 h-full border-2 transition-all duration-500 ${
                  hoveredCard === tech.id 
                    ? `${tech.borderColor} card-shadow scale-105 transform` 
                    : 'border-border hover:border-accent/30'
                }`}
                whileHover={{ y: -8 }}
              >
                <div className={`p-4 rounded-xl ${tech.bgColor} mb-4 inline-block`}>
                  <Icon 
                    name={tech.icon} 
                    size={28} 
                    className={tech.color} 
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {tech.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {tech.description}
                </p>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Proficiency</span>
                    <span className="text-xs font-medium text-foreground">{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${tech.color.replace('text-', 'bg-')}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Icon name="FolderOpen" size={14} className="mr-1" />
                    {tech.projects} projects
                  </span>
                  <span className="flex items-center">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    Expert Level
                  </span>
                </div>

                {/* Hover Effects */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={hoveredCard === tech.id ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name="ExternalLink" size={16} className="text-accent" />
                </motion.div>

                {/* Animated Background Elements */}
                {hoveredCard === tech.id && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${tech.color.replace('text-', 'bg-')} opacity-20`}
                        style={{
                          left: `${20 + i * 25}%`,
                          top: `${15 + i * 20}%`
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Technology Expertise Overview
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  category: "Cloud Platforms", 
                  count: "3+", 
                  description: "Major cloud providers with enterprise-grade implementations",
                  icon: "Cloud",
                  color: "text-blue-400"
                },
                { 
                  category: "AI/ML Frameworks", 
                  count: "5+", 
                  description: "Advanced machine learning and artificial intelligence tools",
                  icon: "Brain",
                  color: "text-purple-400"
                },
                { 
                  category: "Development Tools", 
                  count: "15+", 
                  description: "Modern frameworks and tools for full-stack development",
                  icon: "Code",
                  color: "text-green-400"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.category}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-3 border border-border">
                      <Icon name={stat.icon} size={32} className={stat.color} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.count}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {stat.category}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-8 pt-8 border-t border-border">
              <motion.button
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg cta-shadow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Icon name="MessageCircle" size={20} className="inline mr-2" />
                Discuss Your Tech Requirements
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;