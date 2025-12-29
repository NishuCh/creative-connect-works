import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Target, 
  Heart, 
  Lightbulb,
  Users,
  Award
} from 'lucide-react';
import profilepic from '../assets/profile.png'

const OurStory: React.FC = () => {
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

    const element = document.getElementById('our-story-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'Innovative solutions that stand out in the digital landscape',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20'
    },
    {
      icon: Target,
      title: 'Commitment',
      description: 'Dedicated to delivering excellence in every project',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Premium standards that exceed client expectations',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuine enthusiasm for helping businesses succeed',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/20'
    }
  ];

  // const milestones = [
  //   { year: '2019', event: 'Creative Connect Founded', description: 'Started with a vision to democratize digital success' },
  //   { year: '2020', event: 'First 100 Clients', description: 'Reached our first major milestone during challenging times' },
  //   { year: '2022', event: 'Service Expansion', description: 'Added SEO and online training to our offerings' },
  //   { year: '2024', event: '500+ Projects', description: 'Celebrating over 500 successful project completions' }
  // ];

  return (
    <section id="our-story-section" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Our Story</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-lightText mb-6">
            Who We
            <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Are
            </span>
          </h2>
          
          <p className="text-xl text-lightText/70 max-w-3xl mx-auto leading-relaxed">
            The journey of Creative Connect is a story of passion, innovation, and unwavering commitment 
            to helping businesses and individuals thrive in the digital world.
          </p>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content - Story */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-white to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-accent to-transparent"></div>
              </div>

              <div className="relative z-10">
                {/* Story Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-lightText">Our Journey</h3>
                </div>

                {/* Story Content */}
                <div className="space-y-6 text-lightText/80 leading-relaxed">
                  <p>
                    Creative Connect was born from a simple yet powerful vision: to bridge the gap between 
                    innovative ideas and exceptional digital execution. What started as a passion project 
                    has evolved into a comprehensive digital solutions platform.
                  </p>
                  
                  <p>
                    Our founder recognized that many businesses and individuals had brilliant ideas but 
                    lacked the technical expertise to bring them to life online. This gap inspired the 
                    creation of Creative Connect – a place where creativity meets technical excellence.
                  </p>
                  
                  <p>
                    Today, we're proud to have helped over 500 clients transform their digital presence, 
                    from startups taking their first steps online to established businesses looking to 
                    modernize their approach.
                  </p>
                </div>

                {/* Mission Statement */}
                <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="w-5 h-5 text-accent" />
                    <span className="text-accent font-semibold">Our Mission</span>
                  </div>
                  <p className="text-lightText/90 font-medium">
                    To empower businesses and individuals to thrive online by providing innovative, 
                    high-quality digital solutions that drive real results and lasting success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Founder Photo */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Photo Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                
                <div className="relative z-10 text-center">
                  {/* Founder Photo */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl">
                      <img 
                        src={profilepic}
                        alt="Vaibhav - Founder of Creative Connect"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Founder & CEO
                    </div>
                  </div>

                  {/* Founder Info */}
                  <h4 className="text-2xl font-bold text-lightText mb-2">Vaibhav</h4>
                  <p className="text-accent font-medium mb-4">Creative Connect Founder</p>
                  
                  <p className="text-lightText/70 leading-relaxed mb-6">
                    "Every project is an opportunity to create something extraordinary. 
                    I believe in the power of digital innovation to transform businesses 
                    and help dreams become reality."
                  </p>

                  {/* Founder Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xl font-bold text-accent">5+</div>
                      <div className="text-sm text-lightText/60">Years Experience</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xl font-bold text-accent">500+</div>
                      <div className="text-sm text-lightText/60">Projects Led</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-lightText mb-4">Our Core Values</h3>
            <p className="text-lightText/70 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we approach every project and client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-sm border ${value.borderColor} rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105`}
              >
                <div className={`${value.bgColor} ${value.borderColor} border rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                
                <h4 className="text-lg font-bold text-lightText mb-2">{value.title}</h4>
                <p className="text-lightText/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        {/* <div className={`mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-lightText mb-4">Our Milestones</h3>
            <p className="text-lightText/70 max-w-2xl mx-auto">
              Key moments that have shaped Creative Connect's journey and growth over the years.
            </p>
          </div>

          <div className="relative"> */}
            {/* Timeline Line */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-blue-400 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                      <div className="text-accent font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="text-lightText font-semibold mb-2">{milestone.event}</h4>
                      <p className="text-lightText/70 text-sm">{milestone.description}</p>
                    </div>
                  </div> */}
                  
                  {/* Timeline Dot */}
                  {/* <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-primary flex-shrink-0"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </section>
  );
};

export default OurStory;