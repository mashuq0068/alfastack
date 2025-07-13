import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy ERP system causing 40% operational delays",
      solution: "Cloud-native ERP migration with AI-powered analytics",
      results: {
        efficiency: "+65%",
        cost_savings: "$12.5M",
        timeline: "8 months",
        satisfaction: "98%"
      },
      metrics: [
        { label: "Operational Efficiency", before: "60%", after: "98%", improvement: "+65%" },
        { label: "Cost Reduction", before: "$20M", after: "$7.5M", improvement: "$12.5M saved" },
        { label: "Processing Time", before: "48 hours", after: "2 hours", improvement: "96% faster" },
        { label: "Error Rate", before: "15%", after: "0.5%", improvement: "97% reduction" }
      ],
      testimonial: {
        quote: `AlfaStack transformed our entire operation. The migration was seamless, and we're seeing results that exceeded our most optimistic projections. Their team's expertise in manufacturing processes made all the difference.`,
        author: "Sarah Chen",
        position: "CTO",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
      },
      timeline: [
        { phase: "Assessment", duration: "2 weeks", status: "completed" },
        { phase: "Planning", duration: "4 weeks", status: "completed" },
        { phase: "Migration", duration: "20 weeks", status: "completed" },
        { phase: "Optimization", duration: "6 weeks", status: "completed" }
      ],
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      company: "FinTech Innovations Ltd",
      industry: "Financial Services",
      challenge: "Regulatory compliance and security vulnerabilities",
      solution: "Zero-trust security framework with automated compliance",
      results: {
        security: "+99.9%",
        compliance: "100%",
        timeline: "6 months",
        satisfaction: "96%"
      },
      metrics: [
        { label: "Security Score", before: "72%", after: "99.9%", improvement: "+27.9%" },
        { label: "Compliance Rate", before: "85%", after: "100%", improvement: "15% increase" },
        { label: "Incident Response", before: "24 hours", after: "5 minutes", improvement: "99.7% faster" },
        { label: "Audit Preparation", before: "3 months", after: "1 week", improvement: "92% reduction" }
      ],
      testimonial: {
        quote: `The security transformation was exactly what we needed. AlfaStack's zero-trust implementation not only solved our compliance issues but positioned us as a security leader in our industry.`,
        author: "Michael Rodriguez",
        position: "CISO",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
      },
      timeline: [
        { phase: "Security Audit", duration: "1 week", status: "completed" },
        { phase: "Framework Design", duration: "3 weeks", status: "completed" },
        { phase: "Implementation", duration: "16 weeks", status: "completed" },
        { phase: "Certification", duration: "4 weeks", status: "completed" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      company: "Healthcare Systems Network",
      industry: "Healthcare",
      challenge: "Disconnected systems affecting patient care quality",
      solution: "Integrated healthcare platform with AI diagnostics",
      results: {
        patient_satisfaction: "+45%",
        efficiency: "+78%",
        timeline: "10 months",
        satisfaction: "99%"
      },
      metrics: [
        { label: "Patient Wait Time", before: "45 minutes", after: "12 minutes", improvement: "73% reduction" },
        { label: "Diagnostic Accuracy", before: "87%", after: "96%", improvement: "+9%" },
        { label: "Staff Productivity", before: "65%", after: "92%", improvement: "+27%" },
        { label: "System Uptime", before: "94%", after: "99.8%", improvement: "+5.8%" }
      ],
      testimonial: {
        quote: `Patient care has improved dramatically since the platform integration. Our staff can focus on what matters most - providing excellent healthcare - while the system handles the complexity seamlessly.`,
        author: "Dr. Emily Watson",
        position: "Chief Medical Officer",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face"
      },
      timeline: [
        { phase: "System Analysis", duration: "3 weeks", status: "completed" },
        { phase: "Integration Design", duration: "5 weeks", status: "completed" },
        { phase: "Platform Development", duration: "28 weeks", status: "completed" },
        { phase: "Staff Training", duration: "4 weeks", status: "completed" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      company: "Retail Excellence Group",
      industry: "Retail",
      challenge: "Poor customer experience across multiple channels",
      solution: "Omnichannel platform with personalization engine",
      results: {
        customer_satisfaction: "+52%",
        revenue: "+34%",
        timeline: "7 months",
        satisfaction: "97%"
      },
      metrics: [
        { label: "Customer Retention", before: "68%", after: "89%", improvement: "+21%" },
        { label: "Average Order Value", before: "$85", after: "$127", improvement: "+49%" },
        { label: "Conversion Rate", before: "2.3%", after: "4.1%", improvement: "+78%" },
        { label: "Customer Lifetime Value", before: "$450", after: "$720", improvement: "+60%" }
      ],
      testimonial: {
        quote: `The omnichannel transformation revolutionized our customer relationships. We now deliver personalized experiences that our customers love, and our revenue growth reflects that success.`,
        author: "James Thompson",
        position: "VP of Digital Experience",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
      },
      timeline: [
        { phase: "Customer Journey Mapping", duration: "2 weeks", status: "completed" },
        { phase: "Platform Architecture", duration: "4 weeks", status: "completed" },
        { phase: "Development & Integration", duration: "20 weeks", status: "completed" },
        { phase: "Launch & Optimization", duration: "2 weeks", status: "completed" }
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      company: "Energy Solutions International",
      industry: "Energy",
      challenge: "Inefficient asset monitoring and predictive maintenance",
      solution: "IoT-enabled smart grid with AI-powered analytics",
      results: {
        efficiency: "+71%",
        downtime: "-89%",
        timeline: "12 months",
        satisfaction: "95%"
      },
      metrics: [
        { label: "Equipment Uptime", before: "87%", after: "98.5%", improvement: "+11.5%" },
        { label: "Maintenance Costs", before: "$2.8M", after: "$850K", improvement: "$1.95M saved" },
        { label: "Energy Efficiency", before: "74%", after: "94%", improvement: "+20%" },
        { label: "Predictive Accuracy", before: "45%", after: "92%", improvement: "+47%" }
      ],
      testimonial: {
        quote: `The IoT transformation gave us unprecedented visibility into our operations. We can now predict and prevent issues before they impact our customers, resulting in significant cost savings and improved reliability.`,
        author: "Robert Kim",
        position: "Director of Operations",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face"
      },
      timeline: [
        { phase: "Infrastructure Assessment", duration: "4 weeks", status: "completed" },
        { phase: "IoT Deployment", duration: "16 weeks", status: "completed" },
        { phase: "Analytics Integration", duration: "20 weeks", status: "completed" },
        { phase: "Optimization", duration: "8 weeks", status: "completed" }
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, successStories.length]);

  const currentStory = successStories[activeStory];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-b from-primary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations, measurable results. See how we've helped industry leaders achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => {
                setActiveStory(index);
                setIsAutoPlaying(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {story.company}
            </button>
          ))}
        </div>

        {/* Main Story Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Story Content */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="glassmorphism rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Building" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentStory.company}
                    </h3>
                    <p className="text-muted-foreground">
                      {currentStory.industry}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">Challenge</h4>
                    <p className="text-muted-foreground">{currentStory.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">Solution</h4>
                    <p className="text-muted-foreground">{currentStory.solution}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="glassmorphism rounded-2xl p-8">
                <div className="flex items-start mb-4">
                  <Image
                    src={currentStory.testimonial.avatar}
                    alt={currentStory.testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {currentStory.testimonial.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {currentStory.testimonial.position}
                    </p>
                  </div>
                  <Icon name="Quote" size={24} className="text-accent ml-auto" />
                </div>
                <p className="text-muted-foreground italic">
                  "{currentStory.testimonial.quote}"
                </p>
              </div>
            </div>

            {/* Metrics and Timeline */}
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="glassmorphism rounded-2xl p-8">
                <h4 className="text-xl font-bold text-foreground mb-6">Key Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  {currentStory.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center p-4 bg-card/50 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-accent mb-1">
                        {metric.improvement}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {metric.before} → {metric.after}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="glassmorphism rounded-2xl p-8">
                <h4 className="text-xl font-bold text-foreground mb-6">Implementation Timeline</h4>
                <div className="space-y-4">
                  {currentStory.timeline.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4">
                        <Icon name="Check" size={16} className="text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">{phase.phase}</span>
                          <span className="text-sm text-muted-foreground">{phase.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Auto-play Controls */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center px-4 py-2 bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground rounded-lg transition-colors duration-200"
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} className="mr-2" />
            {isAutoPlaying ? "Pause" : "Play"}
          </button>
          
          <div className="flex gap-2">
            {successStories.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStory === index ? 'bg-accent w-8' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center glassmorphism rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join these industry leaders who transformed their businesses with AlfaStack. Let's discuss how we can achieve similar results for your organization.
          </p>
          <motion.button
            className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg cta-shadow transition-colors duration-200"
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
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;