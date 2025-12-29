import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Code, 
  SearchCheck, 
  GraduationCap, 
  ArrowRight, 
  Play,
  Award,
  CheckCircle
} from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: PenTool, name: ' Blog Writing', color: 'text-accent' },
    { icon: Code, name: 'Website Development', color: 'text-blue-400' },
    { icon: SearchCheck, name: 'SEO', color: 'text-purple-400' },
    { icon: GraduationCap, name: 'Online Tutorials', color: 'text-green-400' },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <main className="relative z-10 px-6 pt-12 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Creative Connect – Your Digital Success Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-lightText leading-tight mb-6">
              Connect with
              <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Creative Minds
              </span>
              <span className="block text-4xl lg:text-5xl font-normal text-lightText/80">
                That Build Brands
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-lightText/70 mb-8 max-w-lg leading-relaxed">
              Your one-stop destination for SEO-rich blog writing, responsive web development, result-driven SEO, and expert-led online tutorials.<br/>
Whether you're a business owner looking to scale online or a learner ready to master tech skills, our expert services at Creative Connect deliver results. We build powerful websites, craft high-ranking content, and provide hands-on tutorials to empower your digital journey.
</p>

                

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border border-lightText/20 text-lightText hover:bg-lightText/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="text-sm text-lightText/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Services Showcase */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-lightText">Our Services</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {services.map((service, index) => (
                    <div key={index} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-all duration-300 cursor-pointer">
                      <service.icon className={`w-8 h-8 ${service.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                      <h4 className="text-lightText font-semibold">{service.name}</h4>
                      <p className="text-lightText/60 text-sm mt-1">Professional {service.name.toLowerCase()}</p>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {['100% Satisfaction Guarantee', 'Fast Turnaround Times', 'Transparent Pricing & Expert Support'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-lightText/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default HeroSection;