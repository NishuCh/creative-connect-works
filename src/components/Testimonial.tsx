import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Users
} from 'lucide-react';

const Testimonial: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Creative Connect transformed our vision into a stunning website that perfectly captures our brand. The attention to detail and professional approach exceeded all expectations. Our conversion rates increased by 40% within the first month!",
      service: "Website Development"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthLab Agency",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The content writing team at Creative Connect is phenomenal. They created engaging blog posts that not only rank well on Google but also resonate with our audience. Our organic traffic doubled in just 3 months!",
      service: "Content Writing"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Owner",
      company: "Boutique Bliss",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Their SEO expertise is unmatched. Within 6 months, we went from page 3 to ranking #1 for our main keywords. The ROI has been incredible, and their ongoing support is exceptional.",
      service: "SEO Optimization"
    },
    {
      name: "David Thompson",
      role: "Business Coach",
      company: "Success Mentors",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The online course they developed for us is outstanding. The interactive content and user experience are top-notch. Our student engagement rates increased by 60%, and completion rates are at an all-time high.",
      service: "Online Courses"
    },
    {
      name: "Lisa Park",
      role: "Creative Director",
      company: "Design Studio Pro",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with Creative Connect has been a game-changer for our agency. Their comprehensive approach and creative solutions helped us streamline our processes and deliver better results to our own clients.",
      service: "Full Service"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials-section" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-lightText mb-6">
            What Our {''}
            <span className=" bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-xl text-lightText/70 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Creative Connect.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`relative mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto relative overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent"></div>
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-accent" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-lightText text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                />
                <div className="text-center">
                  <h4 className="text-lightText font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-lightText/70">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-accent text-sm font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Service Badge */}
              <div className="flex justify-center mt-6">
                <div className="bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                  <span className="text-accent text-sm font-medium">
                    {testimonials[currentTestimonial].service}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-lightText group-hover:text-accent transition-colors duration-300" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-lightText group-hover:text-accent transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className={`flex justify-center space-x-3 mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Testimonial;