import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, User, FileText,
  CheckCircle, Star, Globe, Linkedin, Twitter, Instagram, Youtube, Facebook,
  ArrowRight, Sparkles, Zap, Shield, Award
} from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);
    return () => element && observer.unobserve(element);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          budget: ''
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactMethods = [
    { icon: Mail, title: 'Email Us', description: 'Send us a detailed message', value: 'hello@creativeconnect.com', action: 'mailto:hello@creativeconnect.com', color: 'text-accent', bgColor: 'bg-accent/10', borderColor: 'border-accent/20' },
    { icon: Phone, title: 'Call Us', description: 'Speak directly with our team', value: '+1 (555) 123-4567', action: 'tel:+15551234567', color: 'text-green-400', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/20' },
    { icon: MessageCircle, title: 'Live Chat', description: 'Get instant support', value: 'Available 24/7', action: '#', color: 'text-blue-400', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/20' },
    { icon: Calendar, title: 'Schedule Meeting', description: 'Book a consultation', value: 'Free 30-min call', action: '#', color: 'text-purple-400', bgColor: 'bg-purple-400/10', borderColor: 'border-purple-400/20' }
  ];

  const services = ['Website Development', 'Blog & Content Writing', 'SEO Services', 'Online Courses', 'Full Service Package', 'Consultation Only', 'Other'];
  const budgetRanges = ['Under $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000 - $10,000', '$10,000+', 'Let\'s discuss'];
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' }
  ];
  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];
  const responseStats = [
    { icon: Clock, label: 'Response Time', value: '< 2 hours', color: 'text-green-400' },
    { icon: Star, label: 'Client Satisfaction', value: '98%', color: 'text-yellow-400' },
    { icon: Globe, label: 'Projects Completed', value: '500+', color: 'text-blue-400' },
    { icon: Award, label: 'Years Experience', value: '5+', color: 'text-purple-400' }
  ];

  return (
    <section id="contact-section" className="py-20 bg-gray-50">
       <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-lightText mb-6">
            Let's Start Your {' '}
            <span className=" bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Project Together
            </span>
          </h2>
          
          <p className="text-xl text-lightText/70 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? We're here to help you every step of the way. 
            Choose your preferred method of communication and let's discuss your project.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className={`group bg-white/5 backdrop-blur-sm border ${method.borderColor} rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer block`}
            >
              <div className={`${method.bgColor} ${method.borderColor} border rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`w-7 h-7 ${method.color}`} />
              </div>
              
              <h3 className="text-lg font-bold text-lightText mb-2">{method.title}</h3>
              <p className="text-lightText/70 text-sm mb-3">{method.description}</p>
              <p className={`${method.color} font-semibold text-sm`}>{method.value}</p>
              
              {/* Hover Arrow */}
              <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3`}>
                <ArrowRight className={`w-5 h-5 ${method.color} group-hover:translate-x-1 transition-transform duration-300`} />
              </div>
            </a>
          ))}
        </div>

        {/* Main Contact Form & Info */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Form */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-white to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-accent to-transparent"></div>
              </div>

              <div className="relative z-10">
                {/* Form Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-lightText">Send Us a Message</h3>
                    <p className="text-lightText/70">We'll get back to you within 2 hours</p>
                  </div>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-4 mb-6 flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <h4 className="text-green-400 font-semibold">Message Sent Successfully!</h4>
                      <p className="text-lightText/70 text-sm">We'll get back to you within 2 hours.</p>
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-lightText font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lightText placeholder-lightText/50 focus:outline-none focus:border-accent transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lightText font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lightText placeholder-lightText/50 focus:outline-none focus:border-accent transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Service Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-lightText font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lightText placeholder-lightText/50 focus:outline-none focus:border-accent transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-lightText font-medium mb-2">
                        <Sparkles className="w-4 h-4 inline mr-2" />
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lightText focus:outline-none focus:border-accent transition-colors duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-primary text-lightText">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-lightText font-medium mb-2">
                      <Award className="w-4 h-4 inline mr-2" />
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lightText focus:outline-none focus:border-accent transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-primary text-lightText">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-lightText font-medium mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lightText placeholder-lightText/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  {/* Form Footer */}
                  <p className="text-lightText/60 text-sm text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              
              {/* Office Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-lightText">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-lightText/70 text-sm">{schedule.day}</span>
                      <span className="text-lightText text-sm font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Stats */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-lightText mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  {responseStats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-lightText/70 text-sm">{stat.label}</span>
                          <span className={`${stat.color} font-semibold text-sm`}>{stat.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-lightText mb-4">Follow Us</h3>
                <div className="flex space-x-3">
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

              {/* Location */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-lightText">Location</h3>
                </div>
                <p className="text-lightText/70 text-sm leading-relaxed">
                  We're a global remote team providing services worldwide. 
                  Based in multiple time zones to serve you better.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">Serving Clients Globally</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold text-lg">Ready to Get Started?</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-lightText mb-4">
                Let's Turn Your Vision Into Reality
              </h3>
              
              <p className="text-lightText/70 text-lg mb-8 max-w-2xl mx-auto">
                Don't wait any longer. Contact us today and let's discuss how we can help 
                you achieve your digital goals with our expert services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href="mailto:hello@creativeconnect.com"
                  className="group border border-lightText/20 text-lightText hover:bg-lightText/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-lightText/70 text-sm">100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-lightText/70 text-sm">Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-lightText/70 text-sm">Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Contact;
