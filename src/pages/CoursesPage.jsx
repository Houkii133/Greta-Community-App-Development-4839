import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiSearch, FiStar, FiClock, FiUsers, FiPlay, FiBookmark, FiTrendingUp } = FiIcons;

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Courses', count: 1247 },
    { id: 'tech', name: 'Technology', count: 423 },
    { id: 'design', name: 'Design', count: 298 },
    { id: 'business', name: 'Business', count: 356 },
    { id: 'marketing', name: 'Marketing', count: 170 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete AI & Machine Learning Bootcamp",
      instructor: "Dr. Sarah Chen",
      instructorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      reviews: 2847,
      students: 15432,
      duration: "24h 30m",
      level: "Intermediate",
      price: 89,
      originalPrice: 149,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      category: "tech",
      badge: "Bestseller",
      description: "Master AI and ML from fundamentals to advanced applications with hands-on projects.",
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
      communityRating: 4.8,
      trending: true
    },
    {
      id: 2,
      title: "Modern UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      instructorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      reviews: 1923,
      students: 8765,
      duration: "18h 45m",
      level: "Beginner",
      price: 69,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
      category: "design",
      badge: "New",
      description: "Create stunning user experiences with modern design principles and tools.",
      skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
      communityRating: 4.9,
      trending: false
    },
    {
      id: 3,
      title: "Digital Marketing Strategy 2024",
      instructor: "Marcus Johnson",
      instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.7,
      reviews: 3156,
      students: 12890,
      duration: "22h 15m",
      level: "Intermediate",
      price: 79,
      originalPrice: 129,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "marketing",
      badge: "Updated",
      description: "Build comprehensive marketing strategies that drive real business results.",
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
      communityRating: 4.6,
      trending: true
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      instructor: "Alex Thompson",
      instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      reviews: 4523,
      students: 18234,
      duration: "45h 20m",
      level: "Beginner",
      price: 99,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "tech",
      badge: "Complete",
      description: "Learn to build modern web applications from frontend to backend.",
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      communityRating: 4.8,
      trending: true
    },
    {
      id: 5,
      title: "Business Strategy & Leadership",
      instructor: "Jennifer Park",
      instructorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face",
      rating: 4.6,
      reviews: 1567,
      students: 6789,
      duration: "16h 30m",
      level: "Advanced",
      price: 119,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      category: "business",
      badge: "Premium",
      description: "Develop strategic thinking and leadership skills for business success.",
      skills: ["Strategy", "Leadership", "Decision Making", "Team Management"],
      communityRating: 4.7,
      trending: false
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "David Kim",
      instructorAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      reviews: 2341,
      students: 9876,
      duration: "32h 10m",
      level: "Intermediate",
      price: 89,
      originalPrice: 139,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      category: "tech",
      badge: "Popular",
      description: "Build cross-platform mobile apps with React Native and modern tools.",
      skills: ["React Native", "Mobile UI", "API Integration", "App Store"],
      communityRating: 4.9,
      trending: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    if (selectedCategory !== 'all' && course.category !== selectedCategory) return false;
    if (selectedLevel !== 'all' && course.level.toLowerCase() !== selectedLevel) return false;
    return true;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending - a.trending || b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price_low':
        return a.price - b.price;
      case 'price_high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const renderCourseCard = (course) => (
    <motion.div
      key={course.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
            course.badge === 'Bestseller' ? 'bg-orange-500' :
            course.badge === 'New' ? 'bg-green-500' :
            course.badge === 'Updated' ? 'bg-blue-500' :
            course.badge === 'Complete' ? 'bg-purple-500' :
            course.badge === 'Premium' ? 'bg-yellow-500' :
            'bg-pink-500'
          }`}>
            {course.badge}
          </span>
        </div>
        {course.trending && (
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white p-2 rounded-full">
              <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
            </div>
          </div>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
        >
          <SafeIcon icon={FiPlay} className="w-12 h-12 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
        >
          <SafeIcon icon={FiBookmark} className="w-4 h-4 text-gray-700" />
        </motion.button>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <img src={course.instructorAvatar} alt={course.instructor} className="w-6 h-6 rounded-full" />
          <span className="text-sm text-gray-600">{course.instructor}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {course.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
          {course.skills.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{course.skills.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{course.rating}</span>
              <span>({course.reviews})</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiUsers} className="w-4 h-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiClock} className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-sm text-gray-500">Community Rating:</span>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiStar} className="w-4 h-4 text-greta-blue fill-current" />
              <span className="font-medium text-greta-blue">{course.communityRating}</span>
            </div>
          </div>
          <div className="text-right">
            {course.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
            )}
            <div className="text-2xl font-bold text-greta-purple">${course.price}</div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-greta-purple to-greta-blue text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Courses</h1>
          <p className="text-xl text-gray-600">Learn from the best instructors and community experts</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <SafeIcon
              icon={FiSearch}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search courses, instructors, or skills..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-greta-blue focus:border-transparent text-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <SafeIcon icon={FiFilter} className="w-5 h-5 text-greta-blue" />
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-greta-blue text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm opacity-75">{category.count}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Level</h4>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <motion.button
                      key={level.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedLevel === level.id
                          ? 'bg-greta-blue text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {level.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                Showing {sortedCourses.length} courses
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-greta-blue"
              >
                <option value="trending">Trending</option>
                <option value="rating">Highest Rated</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedCourses.map(renderCourseCard)}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-greta-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-greta-purple transition-colors"
              >
                Load More Courses
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;