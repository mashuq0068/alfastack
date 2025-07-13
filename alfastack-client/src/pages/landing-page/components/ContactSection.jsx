import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [urgencyCounter, setUrgencyCounter] = useState(7);
  const [formData, setFormData] = useState(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { register, handleSubmit, formState: { errors }, watch, reset, trigger } = useForm();

  // Mock urgency counter effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setUrgencyCounter(prev => prev > 1 ? prev - 1 : 7);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with enhanced data structure
      const submissionData = {
        ...data,
        timestamp: new Date().toISOString(),
        step: currentStep,
        source: 'landing_page',
        ip_address: '192.168.1.1', // In real app, get from backend
        user_agent: navigator.userAgent,
        session_id: `session_${Date.now()}`,
        form_version: '2.0'
      };

      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store form data (in real app, send to backend/CMS)
      setFormData(submissionData);
      localStorage.setItem('consultation_request', JSON.stringify(submissionData));
      
      console.log('Form submitted successfully:', submissionData);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();
      setCurrentStep(1);
      
      // Analytics tracking (in real app)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'consultation_request',
          value: 1
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // In real app, show error message
    }
  };

  const nextStep = async () => {
    const isValid = await trigger(['firstName', 'lastName', 'email', 'company', 'jobTitle', 'phone']);
    if (isValid && currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const contactMethods = [
    {
      icon: "Calendar",
      title: "Schedule Consultation",
      description: "Book a strategic discussion with our experts",
      action: "Book Now",
      color: "text-accent",
      bgColor: "bg-accent/10",
      availability: "Next available: Today 3:00 PM"
    },
    {
      icon: "MessageCircle", 
      title: "Live Chat",
      description: "Get immediate answers to your questions",
      action: "Start Chat",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      availability: "Online now"
    },
    {
      icon: "Phone",
      title: "Direct Call", 
      description: "Speak with a transformation specialist",
      action: "Call Now",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      availability: "+1 (555) 123-4567"
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Send us your detailed requirements",
      action: "Send Email", 
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      availability: "hello@alfastack.com"
    }
  ];

  if (submitSuccess) {
    return (
      <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-background to-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center glassmorphism rounded-2xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon name="CheckCircle" size={48} className="text-accent" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Thank You for Your Interest!
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We've received your consultation request and will contact you within 24 hours to schedule your strategic assessment.
            </motion.p>
            
            <motion.div 
              className="glassmorphism rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-4 text-left">
                {[
                  { icon: "Clock", text: "Within 24 hours: Initial contact and consultation scheduling", delay: 1.1 },
                  { icon: "FileText", text: "Pre-consultation: Digital transformation readiness assessment", delay: 1.3 },
                  { icon: "Users", text: "Consultation: Strategic discussion with our experts", delay: 1.5 },
                  { icon: "TrendingUp", text: "Follow-up: Customized transformation roadmap proposal", delay: 1.7 }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: step.delay }}
                  >
                    <Icon name={step.icon} size={16} className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{step.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              <Button
                variant="outline"
                onClick={() => setSubmitSuccess(false)}
                className="border-accent text-accent hover:bg-accent/10"
              >
                Submit Another Request
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-background to-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Start Your Transformation Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a strategic consultation to discuss your digital transformation needs and discover how AlfaStack can accelerate your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-all duration-300 cursor-pointer group border border-border hover:border-accent/30"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={method.icon} size={20} className={method.color} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {method.availability}
                          </span>
                          <span className="text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {method.action} →
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Urgency Element */}
              <motion.div 
                className="bg-accent/10 border border-accent/20 rounded-lg p-4"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(0, 255, 136, 0.1)",
                    "0 0 0 10px rgba(0, 255, 136, 0)",
                    "0 0 0 0 rgba(0, 255, 136, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon name="Clock" size={20} className="text-accent mr-2" />
                    <span className="text-sm font-medium text-foreground">
                      Limited Consultation Slots
                    </span>
                  </div>
                  <motion.span 
                    className="text-lg font-bold text-accent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {urgencyCounter} left
                  </motion.span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Exclusive strategic assessment offer - Book within 48 hours
                </p>
              </motion.div>
            </div>

            {/* Enhanced Company Info */}
            <motion.div 
              className="glassmorphism rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">AlfaStack Headquarters</h3>
              <div className="space-y-4">
                {[
                  { icon: "MapPin", primary: "San Francisco, CA", secondary: "123 Innovation Drive, Suite 500" },
                  { icon: "Phone", primary: "+1 (555) 123-4567", secondary: "24/7 Support Available" },
                  { icon: "Mail", primary: "hello@alfastack.com", secondary: "Response within 2 hours" },
                  { icon: "Globe", primary: "alfastack.com", secondary: "Global offices in 12+ countries" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Icon name={contact.icon} size={16} className="text-accent mr-3 mt-1" />
                    <div>
                      <p className="text-foreground font-medium">{contact.primary}</p>
                      <p className="text-sm text-muted-foreground">{contact.secondary}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Multi-step Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glassmorphism rounded-2xl p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Schedule Strategic Consultation
              </h3>
              <p className="text-muted-foreground">
                Step {currentStep} of 2 - {currentStep === 1 ? 'Basic Information' : 'Project Details'}
              </p>
              
              {/* Enhanced Progress Bar */}
              <div className="w-full bg-muted/20 rounded-full h-3 mt-4 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-accent to-success h-3 rounded-full relative"
                  initial={{ width: '50%' }}
                  animate={{ width: currentStep === 1 ? '50%' : '100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="John"
                      {...register('firstName', { required: 'First name is required' })}
                      error={errors.firstName?.message}
                      required
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Doe"
                      {...register('lastName', { required: 'Last name is required' })}
                      error={errors.lastName?.message}
                      required
                    />
                  </div>
                  
                  <Input
                    label="Business Email"
                    type="email"
                    placeholder="john.doe@company.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    error={errors.email?.message}
                    required
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Company Name"
                      type="text"
                      placeholder="Your Company"
                      {...register('company', { required: 'Company name is required' })}
                      error={errors.company?.message}
                      required
                    />
                    <Input
                      label="Job Title"
                      type="text"
                      placeholder="CTO, IT Director, etc."
                      {...register('jobTitle', { required: 'Job title is required' })}
                      error={errors.jobTitle?.message}
                      required
                    />
                  </div>
                  
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...register('phone', { required: 'Phone number is required' })}
                    error={errors.phone?.message}
                    required
                  />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Size
                      </label>
                      <select
                        {...register('companySize', { required: 'Company size is required' })}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select size</option>
                        <option value="1-50">1-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                      {errors.companySize && (
                        <p className="text-sm text-error mt-1">{errors.companySize.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Industry
                      </label>
                      <select
                        {...register('industry', { required: 'Industry is required' })}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select industry</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="financial">Financial Services</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="retail">Retail</option>
                        <option value="energy">Energy</option>
                        <option value="technology">Technology</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.industry && (
                        <p className="text-sm text-error mt-1">{errors.industry.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Primary Challenge
                    </label>
                    <select
                      {...register('challenge', { required: 'Primary challenge is required' })}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select primary challenge</option>
                      <option value="legacy-systems">Legacy System Modernization</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="security">Cybersecurity & Compliance</option>
                      <option value="automation">Process Automation</option>
                      <option value="data-analytics">Data Analytics & BI</option>
                      <option value="customer-experience">Digital Customer Experience</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.challenge && (
                      <p className="text-sm text-error mt-1">{errors.challenge.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Timeline
                    </label>
                    <select
                      {...register('timeline', { required: 'Timeline is required' })}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="short-term">Short-term (3-6 months)</option>
                      <option value="medium-term">Medium-term (6-12 months)</option>
                      <option value="long-term">Long-term (12+ months)</option>
                    </select>
                    {errors.timeline && (
                      <p className="text-sm text-error mt-1">{errors.timeline.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <textarea
                      {...register('details')}
                      rows={4}
                      placeholder="Tell us more about your specific requirements, challenges, or goals..."
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-200"
                    />
                  </div>
                </motion.div>
              )}

              {/* Enhanced Form Navigation */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-muted-foreground text-muted-foreground hover:bg-muted/50"
                  >
                    <Icon name="ArrowLeft" size={16} className="mr-2" />
                    Previous
                  </Button>
                )}
                
                {currentStep < 2 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground ml-auto transform hover:scale-105 transition-all duration-300"
                    disabled={!watch('firstName') || !watch('lastName') || !watch('email') || !watch('company')}
                  >
                    Next Step
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground cta-shadow ml-auto transform hover:scale-105 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                    <Icon name="Calendar" size={16} className="ml-2" />
                  </Button>
                )}
              </div>
            </form>

            {/* Enhanced Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                {[
                  { icon: "Shield", text: "100% Secure" },
                  { icon: "Clock", text: "24h Response" },
                  { icon: "CheckCircle", text: "No Commitment" }
                ].map((trust, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center group hover:text-accent transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <Icon name={trust.icon} size={16} className="text-accent mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span>{trust.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;