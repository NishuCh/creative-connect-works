import React from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Heart,
  ExternalLink,
  Clock,
  Globe
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Development', href: '#services' },
    { name: 'Blog Writing', href: '#services' },
    { name: 'SEO Services', href: '#services' },
    { name: 'Online Tutorials', href: '#services' },
    { name: 'Content Strategy', href: '#services' },
    { name: 'Digital Marketing', href: '#services' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Story', href: '#story' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Free Resources', href: '#resources' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Support Center', href: '#support' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-primary/95 backdrop-blur-sm border-t border-white/10">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-900 opacity-95"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-orange-400 to-accent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-lightText">Creative Connect</h3>
                  <p className="text-accent text-sm font-medium">Digital Excellence</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lightText/70 mb-6 leading-relaxed">
                Empowering businesses and individuals to thrive online through innovative digital solutions, 
                expert content creation, and cutting-edge web development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-lightText/80">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">hello@creativeconnect.com</span>
                </div>
                <div className="flex items-center space-x-3 text-lightText/80">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-lightText/80">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Global Remote Services</span>
                </div>
                <div className="flex items-center space-x-3 text-lightText/80">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-lightText mb-6 flex items-center">
                <Globe className="w-5 h-5 text-accent mr-2" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="group flex items-center text-lightText/70 hover:text-accent transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {service.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-lightText mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-lightText/70 hover:text-accent transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Newsletter */}
            <div>
              <h4 className="text-lg font-bold text-lightText mb-6">Resources</h4>
              <ul className="space-y-3 mb-8">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href} 
                      className="group flex items-center text-lightText/70 hover:text-accent transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {resource.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <h5 className="text-lightText font-semibold mb-2 flex items-center">
                  <Mail className="w-4 h-4 text-accent mr-2" />
                  Stay Updated
                </h5>
                <p className="text-lightText/60 text-sm mb-3">
                  Get the latest tips and insights delivered to your inbox.
                </p>
                <div className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-lightText placeholder-lightText/50 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                  <button className="bg-accent hover:bg-accent/90 text-white px-3 py-2 rounded-lg transition-colors duration-300 flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Stats Section */}
        <div className="border-t border-white/10 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Social Links */}
            <div>
              <h4 className="text-lightText font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-lightText/70 group-hover:text-current transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '500+', label: 'Projects' },
                { number: '98%', label: 'Satisfaction' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="text-xl font-bold text-accent">{stat.number}</div>
                  <div className="text-xs text-lightText/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-lightText/60 text-sm">
              <span>© {currentYear} Creative Connect. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className=" md:inline flex items-center">
                Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> for digital excellence
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-lightText/60 hover:text-accent transition-colors duration-300 flex items-center">
                Privacy Policy
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a href="#terms" className="text-lightText/60 hover:text-accent transition-colors duration-300 flex items-center">
                Terms of Service
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a href="#cookies" className="text-lightText/60 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-8 right-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group bg-accent hover:bg-accent/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowRight className="w-5 h-5 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default Footer;