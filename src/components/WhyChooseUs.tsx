import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Heart, 
  Zap, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('why-choose-us');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      icon: Globe,
      title: '360° Freelancing Services',
      description: 'under one brand',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      icon: Heart,
      title: 'Personalized & high-quality',
      description: 'solutions',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/20'
    },
    {
      icon: Zap,
      title: 'Fast turnaround &',
      description: 'dedicated support',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20'
    },
    {
      icon: Shield,
      title: 'Trusted by individuals &',
      description: 'startups alike',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20'
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-18 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Why Choose Creative Connect</span>
          </div>
          
         <h2 className="text-4xl lg:text-6xl font-bold text-lightText mb-6">
  Why Choose{' '}
  <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
    Us
  </span>
</h2>

          
          <p className="text-xl text-lightText/70 max-w-3xl mx-auto leading-relaxed">
            We're not just another freelancing platform. We're your creative partners, 
            committed to delivering exceptional results that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Feature Card */}
              <div className={`relative bg-white/5 backdrop-blur-sm border ${feature.borderColor} rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl cursor-pointer`}>
                {/* Icon */}
                <div className={`${feature.bgColor} ${feature.borderColor} border rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-lightText mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className={`${feature.color} font-medium text-lg`}>
                  {feature.description}
                </p>

                {/* Check Mark */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${feature.bgColor} blur-xl`}></div>
              </div>

              {/* Floating Decoration */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 ${feature.bgColor} rounded-full blur-sm opacity-60 animate-pulse`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-lightText mb-4">
              Ready to experience the Creative Connect difference?
            </h3>
            <p className="text-lightText/70 mb-6">
              Join thousands of satisfied clients who've transformed their ideas into reality with our expert team.
            </p>
            <button className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Get Started Today</span>
              <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default WhyChooseUs;