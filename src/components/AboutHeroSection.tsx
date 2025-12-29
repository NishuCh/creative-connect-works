import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Target, 
  Users, 
  ArrowRight,
  Play,
  CheckCircle,
  Lightbulb,
  Zap
} from 'lucide-react';

const AboutHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      icon: Target,
      title: 'Expertise',
      description: 'Professional excellence',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Collaborative approach',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: Zap,
      title: 'Results',
      description: 'Measurable impact',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    }
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-800 opacity-95"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/10 to-transparent"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">About Creative Connect</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-lightText leading-tight mb-6">
              About Creative Connect —
              <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent mt-2">
                Where Innovation
              </span>
              <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Meets Expertise
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-lightText/80 mb-8 max-w-2xl leading-relaxed">
              Empowering your digital journey through expert-led tutorials, SEO-optimized content, 
              and modern websites that drive real results for your business.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-10">
              {[
                'Expert-led digital solutions tailored to your needs',
                'Proven track record with 500+ successful projects',
                'Comprehensive services from concept to completion',
                'Dedicated support throughout your journey'
              ].map((point, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-lightText/80">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border border-lightText/20 text-lightText hover:bg-lightText/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 800}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-lightText/60">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values Showcase */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Glassmorphism Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-white to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-accent to-transparent"></div>
                </div>

                {/* Header */}
                <div className="relative z-10 text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-lightText mb-2">Our Core Values</h3>
                  <p className="text-lightText/70">What drives us every day</p>
                </div>

                {/* Values Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
                  {values.map((value, index) => (
                    <div 
                      key={index} 
                      className={`group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 200 + 600}ms` }}
                    >
                      <div className={`${value.bgColor} border border-white/10 rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className={`w-6 h-6 ${value.color}`} />
                      </div>
                      <h4 className="text-lightText font-semibold mb-1">{value.title}</h4>
                      <p className="text-lightText/60 text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>

                {/* Mission Statement */}
                <div className="relative z-10 text-center bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Play className="w-5 h-5 text-accent" />
                    <span className="text-accent font-medium">Our Mission</span>
                  </div>
                  <p className="text-lightText/80 leading-relaxed">
                    To bridge the gap between innovative ideas and exceptional digital execution, 
                    empowering businesses to thrive in the digital landscape.
                  </p>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Company Highlights */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold text-lg">Why Choose Creative Connect</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-lightText mb-4">
                Your Success Is Our Priority
              </h3>
              
              <p className="text-lightText/70 text-lg mb-6 max-w-2xl mx-auto">
                We don't just deliver projects; we build lasting partnerships that drive continuous growth 
                and innovation for your business.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {['Innovation-Driven', 'Client-Focused', 'Results-Oriented', 'Always Available'].map((tag, index) => (
                  <div key={index} className="bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                    <span className="text-accent text-sm font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;