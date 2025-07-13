import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Cloud Migration", href: "#solutions" },
        { name: "AI & Machine Learning", href: "#solutions" },
        { name: "Data Analytics", href: "#solutions" },
        { name: "Cybersecurity", href: "#solutions" },
        { name: "Process Automation", href: "#solutions" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Manufacturing", href: "#success-stories" },
        { name: "Financial Services", href: "#success-stories" },
        { name: "Healthcare", href: "#success-stories" },
        { name: "Retail", href: "#success-stories" },
        { name: "Energy", href: "#success-stories" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Success Stories", href: "#success-stories" },
        { name: "Careers", href: "#contact" },
        { name: "Partners", href: "#contact" },
        { name: "News & Insights", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "Documentation", href: "#contact" },
        { name: "Help Center", href: "#contact" },
        { name: "System Status", href: "#contact" },
        { name: "Security", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "GitHub", icon: "Github", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" }
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: "Shield" },
    { name: "ISO 27001", icon: "Award" },
    { name: "GDPR Compliant", icon: "Lock" },
    { name: "AWS Partner", icon: "Cloud" }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary/20 to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center">
                  <Icon name="Layers" size={24} color="#020617" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-heading font-bold text-foreground">
                  AlfaStack
                </span>
              </div>

              <p className="text-muted-foreground mb-6 max-w-md">
                Transforming businesses into digital leaders through proven methodologies, cutting-edge technology, and risk-free implementation approaches that deliver measurable results.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="text-accent mr-3" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="text-accent mr-3" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="text-accent mr-3" />
                  <span className="text-muted-foreground">hello@alfastack.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-card hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon 
                      name={social.icon} 
                      size={18} 
                      className="text-muted-foreground group-hover:text-accent transition-colors duration-200" 
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-muted-foreground hover:text-accent transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Security & Compliance
              </h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-center px-3 py-2 bg-card/50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon name={cert.icon} size={16} className="text-accent mr-2" />
                    <span className="text-sm text-muted-foreground">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                Trusted by 500+ enterprises worldwide
              </p>
              <div className="flex items-center justify-center lg:justify-end space-x-4">
                <div className="flex items-center">
                  <Icon name="Award" size={16} className="text-accent mr-2" />
                  <span className="text-sm text-muted-foreground">15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={16} className="text-accent mr-2" />
                  <span className="text-sm text-muted-foreground">24/7 Global Support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>© {currentYear} AlfaStack. All rights reserved.</span>
              <button className="hover:text-accent transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-accent transition-colors duration-200">
                Terms of Service
              </button>
              <button className="hover:text-accent transition-colors duration-200">
                Cookie Policy
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                <span className="text-sm text-muted-foreground">All systems operational</span>
              </div>
              <button
                onClick={() => {
                  const heroElement = document.getElementById('hero');
                  if (heroElement) {
                    heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-8 h-8 bg-accent hover:bg-accent/90 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Icon name="ArrowUp" size={16} className="text-accent-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;