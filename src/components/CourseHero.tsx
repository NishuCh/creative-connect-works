import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Play, 
  Users, 
  Clock, 
  Award, 
  Star,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Target,
  TrendingUp,
  Code,
  PenTool,
  Search,
  Lightbulb,
  Monitor,
  Smartphone
} from 'lucide-react';

const CourseHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courseCategories = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Master modern web technologies',
      courses: 12,
      students: '2.5k+',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Learn content writing & strategy',
      courses: 8,
      students: '1.8k+',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Boost your online visibility',
      courses: 6,
      students: '1.2k+',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20'
    },
    {
      icon: Target,
      title: 'Business Skills',
      description: 'Entrepreneurship & strategy',
      courses: 10,
      students: '3.1k+',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20'
    }
  ];

  const featuredCourses = [
    {
      title: 'Complete React Development Bootcamp',
      instructor: 'Vaibhav',
      duration: '12 hours',
      students: 1250,
      rating: 4.9,
      price: '$99',
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Web Development'
    },
    {
      title: 'SEO Mastery: Rank #1 on Google',
      instructor: 'Vaibhav',
      duration: '8 hours',
      students: 890,
      rating: 4.8,
      price: '$79',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'SEO & Marketing'
    },
    {
      title: 'Content Writing That Converts',
      instructor: 'Vaibhav',
      duration: '6 hours',
      students: 650,
      rating: 4.9,
      price: '$69',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Content Creation'
    }
  ];

  const learningFeatures = [
    {
      icon: Monitor,
      title: 'HD Video Lessons',
      description: 'Crystal clear video content with practical examples'
    },
    {
      icon: BookOpen,
      title: 'Downloadable Resources',
      description: 'Templates, checklists, and reference materials'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Connect with fellow learners and get support'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Earn recognized certificates upon completion'
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'Learn anywhere, anytime on any device'
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'Keep learning at your own pace forever'
    }
  ];

  const stats = [
    { number: '25+', label: 'Expert Courses', icon: BookOpen },
    { number: '8.5k+', label: 'Happy Students', icon: Users },
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '95%', label: 'Completion Rate', icon: TrendingUp }
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
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Online Learning Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-lightText leading-tight mb-6">
              Master New Skills with
              <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent mt-2">
                Expert-Led
              </span>
              <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Online Courses
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-lightText/80 mb-8 max-w-2xl leading-relaxed">
              Transform your career with practical, hands-on courses designed by industry experts. 
              Learn at your own pace and gain skills that matter in today's digital world.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-10">
              {[
                'Learn from industry professionals with real-world experience',
                'Get hands-on practice with real projects and case studies',
                'Join a community of 8,500+ motivated learners',
                'Earn certificates recognized by top companies'
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-lightText/80">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Browse All Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border border-lightText/20 text-lightText hover:bg-lightText/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Preview</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 800}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-lightText/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Course Showcase */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Course Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-white to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-accent to-transparent"></div>
                </div>

                {/* Header */}
                <div className="relative z-10 text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-lightText mb-2">Featured Courses</h3>
                  <p className="text-lightText/70">Hand-picked courses for maximum impact</p>
                </div>

                {/* Course Categories */}
                <div className="relative z-10 grid grid-cols-2 gap-3 mb-8">
                  {courseCategories.map((category, index) => (
                    <div 
                      key={index} 
                      className={`group bg-white/5 hover:bg-white/10 border ${category.borderColor} rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 200 + 600}ms` }}
                      onClick={() => setActiveCategory(index)}
                    >
                      <div className={`${category.bgColor} border ${category.borderColor} rounded-lg w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <h4 className="text-lightText font-semibold text-sm mb-1">{category.title}</h4>
                      <p className="text-lightText/60 text-xs mb-2">{category.description}</p>
                      <div className="flex justify-between text-xs">
                        <span className={`${category.color} font-medium`}>{category.courses} courses</span>
                        <span className="text-lightText/60">{category.students}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured Course Preview */}
                <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={featuredCourses[0].image} 
                      alt={featuredCourses[0].title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-lightText font-semibold text-sm mb-1">{featuredCourses[0].title}</h4>
                      <p className="text-lightText/60 text-xs">by {featuredCourses[0].instructor}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-accent" />
                        <span className="text-lightText/70">{featuredCourses[0].duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-blue-400" />
                        <span className="text-lightText/70">{featuredCourses[0].students}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-lightText/70">{featuredCourses[0].rating}</span>
                      </div>
                      <span className="text-accent font-semibold">{featuredCourses[0].price}</span>
                    </div>
                  </div>
                </div>

                {/* Learning Features */}
                <div className="relative z-10 space-y-3">
                  <h4 className="text-lightText font-semibold text-sm mb-3">What You Get:</h4>
                  {learningFeatures.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <feature.icon className="w-4 h-4 text-accent flex-shrink-0" />
                      <div>
                        <span className="text-lightText/80 text-sm font-medium">{feature.title}</span>
                        <p className="text-lightText/60 text-xs">{feature.description}</p>
                      </div>
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

        {/* Bottom Section - Learning Path Preview */}
        <div className={`mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-5xl mx-auto relative overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  <span className="text-accent font-semibold text-lg">Complete Learning Experience</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-lightText mb-4">
                  Everything You Need to Succeed
                </h3>
                
                <p className="text-lightText/70 text-lg mb-6 max-w-2xl mx-auto">
                  Our comprehensive learning platform provides all the tools, resources, 
                  and support you need to master new skills and advance your career.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {learningFeatures.slice(0, 6).map((feature, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-lightText font-semibold mb-2">{feature.title}</h4>
                    <p className="text-lightText/60 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
                  <span>Start Learning Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-lightText/60 text-sm mt-4">
                  30-day money-back guarantee • No hidden fees • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;