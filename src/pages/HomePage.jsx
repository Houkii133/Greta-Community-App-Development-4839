import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers, FiBookOpen, FiShoppingBag, FiStar, FiArrowRight, FiPlay, FiHeart } = FiIcons;

const HomePage = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "AI & Machine Learning Fundamentals",
      creator: "Dr. Sarah Chen",
      rating: 4.9,
      students: 2847,
      price: 79,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      badge: "Trending"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      creator: "Marcus Johnson",
      rating: 4.8,
      students: 1923,
      price: 59,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      badge: "Popular"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      creator: "Emma Rodriguez",
      rating: 4.9,
      students: 3156,
      price: 69,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
      badge: "New"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      title: "Premium Course Bundle",
      description: "Complete AI learning path with 5 courses",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      badge: "Bundle"
    },
    {
      id: 2,
      title: "Design Toolkit Pro",
      description: "Professional design resources & templates",
      price: 49,
      image: "https://images.unsplash.com/photo-1558655146-364adaf25c46?w=300&h=200&fit=crop",
      badge: "Digital"
    }
  ];

  const communityHighlights = [
    {
      id: 1,
      user: "Alex Thompson",
      content: "Just completed the AI course! The community discussions were incredibly helpful. Special thanks to @sarah_mentor for the guidance! 🚀",
      likes: 47,
      comments: 12,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      course: "AI Fundamentals"
    },
    {
      id: 2,
      user: "Maria Garcia",
      content: "Created my first mobile app using techniques from the UX course! The peer feedback in our study group made all the difference. Here's what I learned... 📱",
      likes: 63,
      comments: 18,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face",
      course: "UX Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greta-purple via-greta-blue to-greta-teal text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn, Create & Sell
              <br />
              <span className="text-yellow-300">Together</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Join the most innovative community where learning meets opportunity. 
              Discover courses, products, and connections that transform your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-greta-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Join Community
                </motion.button>
              </Link>
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Explore Courses
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: FiUsers, value: "50K+", label: "Active Members" },
              { icon: FiBookOpen, value: "1,200+", label: "Courses" },
              { icon: FiShoppingBag, value: "500+", label: "Products" },
              { icon: FiTrendingUp, value: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <SafeIcon icon={stat.icon} className="w-8 h-8 mx-auto mb-4 text-greta-blue" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Courses</h2>
              <p className="text-gray-600">Discover what the community is learning right now</p>
            </div>
            <Link to="/courses" className="text-greta-blue hover:text-greta-purple transition-colors font-semibold flex items-center space-x-2">
              <span>View All</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-greta-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.badge}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <SafeIcon icon={FiPlay} className="w-12 h-12 text-white" />
                  </motion.button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">by {course.creator}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students})</span>
                    </div>
                    <div className="text-2xl font-bold text-greta-purple">${course.price}</div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Success Stories</h2>
            <p className="text-gray-600">See how our community members are achieving their goals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {communityHighlights.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{post.user}</h4>
                      <span className="text-sm text-greta-blue bg-greta-blue/10 px-2 py-1 rounded-full">
                        {post.course}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <SafeIcon icon={FiHeart} className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </button>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/community">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-greta-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-greta-purple transition-colors"
              >
                Join the Conversation
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Curated tools and resources to accelerate your learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-greta-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-greta-teal">${product.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-greta-teal text-white px-6 py-2 rounded-lg font-semibold hover:bg-greta-blue transition-colors"
                    >
                      Get Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-greta-purple to-greta-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of learners, creators, and innovators building the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-greta-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Start Learning Today
                </motion.button>
              </Link>
              <Link to="/creator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Become a Creator
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;