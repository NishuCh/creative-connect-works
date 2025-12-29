import React, { useState, useEffect } from 'react';
import { 
  Code, 
  PenTool, 
  Search, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Mobile-First'],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      hoverBg: 'hover:bg-accent/20'
    },
    {
      icon: PenTool,
      title: 'Blog & Content Writing',
      description: 'Engaging content that connects with your audience and drives results',
      features: ['SEO Content', 'Blog Posts', 'Copywriting', 'Content Strategy'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      hoverBg: 'hover:bg-purple-400/20'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Boost your online visibility and rank higher in search results',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics'],
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
      hoverBg: 'hover:bg-green-400/20'
    },
    {
      icon: GraduationCap,
      title: 'Online Courses & Training',
      description: 'Comprehensive learning experiences tailored to your goals',
      features: ['Custom Curriculum', 'Interactive Content', 'Progress Tracking', '1-on-1 Support'],
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      hoverBg: 'hover:bg-blue-400/20'
    }
  ];

  return (
    <section id="services-section" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-lightText mb-6">
            What We {''}
            <span className=" bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          
          <p className="text-xl text-lightText/70 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we provide comprehensive digital solutions 
            that help your business thrive in the modern marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Card */}
              <div className={`relative bg-white/5 backdrop-blur-sm border ${service.borderColor} rounded-2xl p-8 h-full transition-all duration-500 ${service.hoverBg} hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-white to-transparent"></div>
                </div>

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div className={`${service.bgColor} ${service.borderColor} border rounded-xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  
                  <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.color}`}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-lightText mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-lightText/70 mb-6 leading-relaxed group-hover:text-lightText/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className={`flex items-center space-x-3 transform transition-all duration-300 ${
                          hoveredService === index 
                            ? 'translate-x-2 opacity-100' 
                            : 'translate-x-0 opacity-80'
                        }`}
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <CheckCircle className={`w-4 h-4 ${service.color} flex-shrink-0`} />
                        <span className="text-lightText/80 group-hover:text-lightText transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.bgColor} blur-xl`}></div>
                
                {/* Floating Decoration */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${service.bgColor} rounded-full blur-sm opacity-60 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/3 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </section>
  );
};

export default ServicesSection;