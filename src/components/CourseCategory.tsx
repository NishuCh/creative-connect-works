import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Network, 
  Database, 
  Brain, 
  FileCode, 
  Users,
  Star,
  Clock,
  BookOpen,
  Award,
  Play,
  ChevronRight,
  Filter,
  Search,
  TrendingUp,
  CheckCircle,
  Globe,
  Zap
} from 'lucide-react';

const CourseCategory: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('course-category-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const categories = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      emoji: '💻',
      description: 'Master modern web technologies and frameworks',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      gradientFrom: 'from-accent',
      gradientTo: 'to-orange-400',
      totalCourses: 8,
      totalStudents: '3.2k+',
      avgRating: 4.9,
      courses: [
        {
          title: 'Complete React Development Bootcamp',
          instructor: 'Vaibhav',
          duration: '12 hours',
          students: 1250,
          rating: 4.9,
          price: '$99',
          level: 'Beginner to Advanced',
          image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['React Hooks', 'State Management', 'API Integration', 'Deployment']
        },
        {
          title: 'Modern JavaScript ES6+',
          instructor: 'Vaibhav',
          duration: '8 hours',
          students: 980,
          rating: 4.8,
          price: '$79',
          level: 'Intermediate',
          image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Arrow Functions', 'Promises', 'Async/Await', 'Modules']
        },
        {
          title: 'Full-Stack Web Development',
          instructor: 'Vaibhav',
          duration: '20 hours',
          students: 750,
          rating: 4.9,
          price: '$149',
          level: 'Advanced',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Frontend', 'Backend', 'Database', 'DevOps']
        }
      ]
    },
    {
      id: 'networking',
      icon: Network,
      title: 'Networking (CCNA)',
      emoji: '🌐',
      description: 'Cisco networking fundamentals and certification prep',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-cyan-400',
      totalCourses: 5,
      totalStudents: '1.8k+',
      avgRating: 4.8,
      courses: [
        {
          title: 'CCNA 200-301 Complete Course',
          instructor: 'Vaibhav',
          duration: '25 hours',
          students: 890,
          rating: 4.8,
          price: '$129',
          level: 'Beginner to Intermediate',
          image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['OSI Model', 'Routing', 'Switching', 'Network Security']
        },
        {
          title: 'Network Troubleshooting Mastery',
          instructor: 'Vaibhav',
          duration: '10 hours',
          students: 650,
          rating: 4.7,
          price: '$89',
          level: 'Intermediate',
          image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Diagnostics', 'Tools', 'Best Practices', 'Case Studies']
        },
        {
          title: 'Cisco Packet Tracer Labs',
          instructor: 'Vaibhav',
          duration: '15 hours',
          students: 420,
          rating: 4.9,
          price: '$99',
          level: 'All Levels',
          image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Lab Setup', 'Simulations', 'Real Scenarios', 'Practice Tests']
        }
      ]
    },
    {
      id: 'data-structures',
      icon: Database,
      title: 'Data Structures & Algorithms',
      emoji: '📊',
      description: 'Master problem-solving and coding interview prep',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-emerald-400',
      totalCourses: 6,
      totalStudents: '2.1k+',
      avgRating: 4.9,
      courses: [
        {
          title: 'Complete DSA Bootcamp',
          instructor: 'Vaibhav',
          duration: '30 hours',
          students: 1100,
          rating: 4.9,
          price: '$159',
          level: 'Beginner to Advanced',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming']
        },
        {
          title: 'Coding Interview Preparation',
          instructor: 'Vaibhav',
          duration: '18 hours',
          students: 850,
          rating: 4.8,
          price: '$119',
          level: 'Intermediate',
          image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Problem Solving', 'Time Complexity', 'Mock Interviews', 'Tips']
        },
        {
          title: 'Advanced Algorithms',
          instructor: 'Vaibhav',
          duration: '22 hours',
          students: 520,
          rating: 4.9,
          price: '$139',
          level: 'Advanced',
          image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Graph Algorithms', 'Optimization', 'Machine Learning', 'AI']
        }
      ]
    },
    {
      id: 'microsoft-365',
      icon: Brain,
      title: 'Microsoft 365 Basics',
      emoji: '🧠',
      description: 'Essential productivity tools for modern workplace',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-pink-400',
      totalCourses: 4,
      totalStudents: '1.5k+',
      avgRating: 4.7,
      courses: [
        {
          title: 'Microsoft 365 Complete Guide',
          instructor: 'Vaibhav',
          duration: '14 hours',
          students: 720,
          rating: 4.7,
          price: '$89',
          level: 'Beginner',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Word', 'Excel', 'PowerPoint', 'Teams']
        },
        {
          title: 'Excel Advanced Techniques',
          instructor: 'Vaibhav',
          duration: '12 hours',
          students: 650,
          rating: 4.8,
          price: '$79',
          level: 'Intermediate',
          image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Formulas', 'Pivot Tables', 'Macros', 'Data Analysis']
        },
        {
          title: 'Teams & Collaboration',
          instructor: 'Vaibhav',
          duration: '8 hours',
          students: 480,
          rating: 4.6,
          price: '$69',
          level: 'Beginner',
          image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Video Calls', 'File Sharing', 'Project Management', 'Integration']
        }
      ]
    },
    {
      id: 'php',
      icon: FileCode,
      title: 'PHP (Basic to Advanced)',
      emoji: '🐘',
      description: 'Server-side programming from basics to expert level',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10',
      borderColor: 'border-indigo-400/20',
      gradientFrom: 'from-indigo-400',
      gradientTo: 'to-purple-400',
      totalCourses: 7,
      totalStudents: '2.3k+',
      avgRating: 4.8,
      courses: [
        {
          title: 'PHP Fundamentals',
          instructor: 'Vaibhav',
          duration: '16 hours',
          students: 950,
          rating: 4.8,
          price: '$99',
          level: 'Beginner',
          image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Syntax', 'Variables', 'Functions', 'OOP']
        },
        {
          title: 'Laravel Framework Mastery',
          instructor: 'Vaibhav',
          duration: '24 hours',
          students: 780,
          rating: 4.9,
          price: '$149',
          level: 'Intermediate to Advanced',
          image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['MVC', 'Eloquent', 'Authentication', 'API Development']
        },
        {
          title: 'PHP & MySQL Database',
          instructor: 'Vaibhav',
          duration: '18 hours',
          students: 680,
          rating: 4.7,
          price: '$119',
          level: 'Intermediate',
          image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Database Design', 'CRUD Operations', 'Security', 'Optimization']
        }
      ]
    },
    {
      id: 'personality-development',
      icon: Users,
      title: 'Personality Development (PDP)',
      emoji: '🧑‍💼',
      description: 'Professional growth and personal excellence',
      color: 'text-rose-400',
      bgColor: 'bg-rose-400/10',
      borderColor: 'border-rose-400/20',
      gradientFrom: 'from-rose-400',
      gradientTo: 'to-pink-400',
      totalCourses: 5,
      totalStudents: '1.9k+',
      avgRating: 4.9,
      courses: [
        {
          title: 'Professional Communication Skills',
          instructor: 'Vaibhav',
          duration: '10 hours',
          students: 820,
          rating: 4.9,
          price: '$79',
          level: 'All Levels',
          image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Public Speaking', 'Presentation', 'Body Language', 'Confidence']
        },
        {
          title: 'Leadership & Team Management',
          instructor: 'Vaibhav',
          duration: '12 hours',
          students: 650,
          rating: 4.8,
          price: '$99',
          level: 'Intermediate',
          image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Leadership Styles', 'Motivation', 'Conflict Resolution', 'Decision Making']
        },
        {
          title: 'Career Development Strategy',
          instructor: 'Vaibhav',
          duration: '8 hours',
          students: 580,
          rating: 4.9,
          price: '$69',
          level: 'All Levels',
          image: 'https://images.pexels.com/photos/1181712/pexels-photo-1181712.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
          topics: ['Goal Setting', 'Networking', 'Personal Branding', 'Interview Skills']
        }
      ]
    }
  ];

  const filteredCourses = categories[activeCategory].courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="course-category-section" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Course Categories</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-lightText mb-6">
            Explore Our
            <span className="block bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Course Library
            </span>
          </h2>
          
          <p className="text-xl text-lightText/70 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive collection of expert-led courses designed to advance your 
            career and expand your skillset in today's most in-demand technologies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`group relative p-4 rounded-xl transition-all duration-300 ${
                    activeCategory === index
                      ? `${category.bgColor} ${category.borderColor} border scale-105`
                      : 'hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-2 ${category.bgColor} ${category.borderColor} border rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className={`font-semibold text-sm ${activeCategory === index ? category.color : 'text-lightText'} mb-1`}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-lightText/60">{category.totalCourses} courses</p>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeCategory === index && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 ${category.color.replace('text-', 'bg-')} rounded-full`}></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lightText/50" />
              <input
                type="text"
                placeholder="Search courses or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-4 py-4 text-lightText placeholder-lightText/50 focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lightText/50" />
            </div>
          </div>
        </div>

        {/* Category Overview */}
        <div className={`mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className={`absolute inset-0 bg-gradient-to-r ${categories[activeCategory].gradientFrom}/5 via-transparent ${categories[activeCategory].gradientTo}/5`}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {/* <div className={`${categories[activeCategory].bgColor} ${categories[activeCategory].borderColor} border rounded-2xl w-16 h-16 flex items-center justify-center`}>
                    <categories[activeCategory].icon className={`w-8 h-8 ${categories[activeCategory].color}`} />
                  </div> */}
                  <div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${categories[activeCategory].gradientFrom} ${categories[activeCategory].gradientTo} bg-clip-text text-transparent`}>
                      {categories[activeCategory].title}
                    </h3>
                    <p className="text-lightText/70">{categories[activeCategory].description}</p>
                  </div>
                </div>
                
                <div className="text-4xl">{categories[activeCategory].emoji}</div>
              </div>

              {/* Category Stats */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
                  <BookOpen className={`w-6 h-6 ${categories[activeCategory].color} mx-auto mb-2`} />
                  <div className={`text-xl font-bold ${categories[activeCategory].color}`}>
                    {categories[activeCategory].totalCourses}
                  </div>
                  <div className="text-sm text-lightText/60">Total Courses</div>
                </div>
                <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
                  <Users className={`w-6 h-6 ${categories[activeCategory].color} mx-auto mb-2`} />
                  <div className={`text-xl font-bold ${categories[activeCategory].color}`}>
                    {categories[activeCategory].totalStudents}
                  </div>
                  <div className="text-sm text-lightText/60">Students Enrolled</div>
                </div>
                <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
                  <Star className={`w-6 h-6 ${categories[activeCategory].color} mx-auto mb-2`} />
                  <div className={`text-xl font-bold ${categories[activeCategory].color}`}>
                    {categories[activeCategory].avgRating}
                  </div>
                  <div className="text-sm text-lightText/60">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-accent/90 text-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6" />
                  </div>
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${categories[activeCategory].bgColor} ${categories[activeCategory].borderColor} border text-xs px-3 py-1 rounded-full ${categories[activeCategory].color} font-medium`}>
                    {course.level}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                    {course.price}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-lightText mb-2 group-hover:text-accent transition-colors duration-300">
                  {course.title}
                </h4>
                
                <p className="text-lightText/70 text-sm mb-4">by {course.instructor}</p>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-lightText/60 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Course Topics */}
                <div className="mb-4">
                  <h5 className="text-lightText font-medium text-sm mb-2">What you'll learn:</h5>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.slice(0, 3).map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-white/5 border border-white/10 text-xs px-2 py-1 rounded-full text-lightText/70">
                        {topic}
                      </span>
                    ))}
                    {course.topics.length > 3 && (
                      <span className="text-lightText/60 text-xs px-2 py-1">
                        +{course.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enroll Button */}
                <button className={`w-full ${categories[activeCategory].bgColor} hover:bg-white/10 ${categories[activeCategory].borderColor} border ${categories[activeCategory].color} py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2`}>
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold text-lg">Start Learning Today</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-lightText mb-4">
                Ready to Master New Skills?
              </h3>
              
              <p className="text-lightText/70 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our expert-led courses. 
                Start your learning journey today and unlock your potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2">
                  <span>Browse All Courses</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group border border-lightText/20 text-lightText hover:bg-lightText/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                  <span>Free Trial</span>
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-lightText/70 text-sm">30-day Money Back</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-lightText/70 text-sm">Lifetime Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-lightText/70 text-sm">Certificate Included</span>
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

export default CourseCategory;