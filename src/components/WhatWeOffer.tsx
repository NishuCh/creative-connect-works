import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Code, 
  TrendingUp, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
  Zap,
  Target,
  Globe,
  Users
} from 'lucide-react';

const WhatWeOffer: React.FC = () => {
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

    const element = document.getElementById('what-we-offer-section');
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
      icon: PenTool,
      title: 'Blog Writing',
      subtitle: 'SEO-rich, audience-driven content that ranks',
      description: 'Transform your content strategy with expertly crafted blog posts that not only engage your audience but also climb search engine rankings. Our writers combine storytelling with SEO best practices.',
      features: [
        'SEO-optimized content strategy',
        'Audience research & targeting',
        'Keyword integration & optimization',
        'Content calendar planning',
        'Performance tracking & analytics'
      ],
      benefits: [
        'Increased organic traffic',
        'Higher search rankings',
        'Enhanced brand authority',
        'Better audience engagement'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      hoverBg: 'hover:bg-purple-400/20',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-pink-400'
    },
    {
      icon: Code,
      title: 'Website Development',
      subtitle: 'Responsive, modern, and user-friendly designs',
      description: 'Create stunning, high-performance websites that captivate visitors and convert them into customers. Our development approach combines cutting-edge technology with intuitive user experience.',
      features: [
        'Responsive mobile-first design',
        'Fast loading & optimized performance',
        'Modern UI/UX principles',
        'Cross-browser compatibility',
        'SEO-friendly architecture'
      ],
      benefits: [
        'Professional online presence',
        'Improved user experience',
        'Higher conversion rates',
        'Mobile-ready design'
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      hoverBg: 'hover:bg-accent/20',
      gradientFrom: 'from-accent',
      gradientTo: 'to-orange-400'
    },
    {
      icon: TrendingUp,
      title: 'SEO Services',
      subtitle: 'Result-driven SEO strategies for higher visibility',
      description: 'Boost your online visibility with comprehensive SEO strategies that drive organic traffic and improve search rankings. Our data-driven approach ensures measurable results.',
      features: [
        'Comprehensive SEO audits',
        'Keyword research & strategy',
        'On-page & technical optimization',
        'Link building campaigns',
        'Monthly performance reports'
      ],
      benefits: [
        'Higher search rankings',
        'Increased organic traffic',
        'Better ROI on marketing',
        'Long-term growth strategy'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
      hoverBg: 'hover:bg-green-400/20',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-emerald-400'
    },
    {
      icon: GraduationCap,
      title: 'Online Tutorials',
      subtitle: 'Practical, expert-led tech and business learning',
      description: 'Master new skills with comprehensive online tutorials designed by industry experts. Our courses combine theoretical knowledge with hands-on practical experience.',
      features: [
        'Expert-led video tutorials',
        'Hands-on practical projects',
        'Interactive learning modules',
        'Progress tracking & certificates',
        'Community support & Q&A'
      ],
      benefits: [
        'Skill development & growth',
        'Career advancement opportunities',
        'Practical industry knowledge',
        'Flexible learning schedule'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      hoverBg: 'hover:bg-blue-400/20',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-cyan-400'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Users },
    { number: '50+', label: 'Industries Served', icon: Globe }
  ];

  return (
    <section id="what-we-offer-section" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-lightText mb-6">
            What We
            <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          
          <p className="text-xl text-lightText/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your online presence, 
            drive growth, and help you achieve your business goals with measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
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
              <div className={`relative bg-white/5 backdrop-blur-sm border ${service.borderColor} rounded-3xl p-8 h-full transition-all duration-500 ${service.hoverBg} hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-white to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-current to-transparent"></div>
                </div>

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div className={`${service.bgColor} ${service.borderColor} border rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-10 h-10 ${service.color}`} />
                  </div>
                  
                  <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.color}`}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-lightText/80 font-medium mb-4 text-lg">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-lightText/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lightText font-semibold text-sm uppercase tracking-wide">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
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
                        <span className="text-lightText/80 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-lightText font-semibold text-sm uppercase tracking-wide mb-3">Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <Zap className={`w-3 h-3 ${service.color} flex-shrink-0`} />
                          <span className="text-lightText/70 text-xs">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.bgColor} blur-xl`}></div>
                
                {/* Floating Decoration */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 ${service.bgColor} rounded-full blur-sm opacity-60 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-lightText mb-2">Our Track Record</h3>
                <p className="text-lightText/70">Numbers that speak to our commitment and expertise</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <stat.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                      <div className="text-lightText/70 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className={`mb-16 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-lightText mb-4">Our Process</h3>
            <p className="text-lightText/70 max-w-2xl mx-auto">
              A streamlined approach that ensures quality results and client satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a customized action plan' },
              { step: '03', title: 'Execution', description: 'Implementing solutions with precision' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <div className="text-accent text-2xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h4 className="text-lightText font-semibold mb-2">{process.title}</h4>
                  <p className="text-lightText/70 text-sm">{process.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold text-lg">Ready to Get Started?</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-lightText mb-4">
                Let's Bring Your Vision to Life
              </h3>
              
              <p className="text-lightText/70 text-lg mb-8 max-w-2xl mx-auto">
                Choose the service that fits your needs, or let us create a custom solution 
                that combines multiple services for maximum impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group border border-lightText/20 text-lightText hover:bg-lightText/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                  <span>View Our Work</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
};

export default WhatWeOffer;