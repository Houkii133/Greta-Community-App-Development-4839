import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiMoreHorizontal, FiTrendingUp, FiUsers, FiStar, FiPlay } = FiIcons;

const CommunityFeed = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const feedPosts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face",
        badge: "AI Expert",
        verified: true
      },
      content: "Just launched my new course on Advanced Machine Learning! 🚀 The community feedback during beta testing was incredible. Special thanks to everyone who contributed to making this the best learning experience possible!",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      course: {
        title: "Advanced ML Techniques",
        price: 89,
        rating: 4.9,
        students: 234
      },
      timestamp: "2 hours ago",
      likes: 127,
      comments: 43,
      shares: 12,
      type: "course_launch"
    },
    {
      id: 2,
      user: {
        name: "Marcus Johnson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        badge: "Marketing Pro",
        verified: true
      },
      content: "Amazing success story from our community! 📈 @jenny_k just landed her dream job using skills from our Digital Marketing course. This is why I love creating content - seeing real transformations!",
      achievement: {
        title: "Career Breakthrough",
        description: "From course completion to dream job in 3 months",
        icon: FiTrendingUp
      },
      timestamp: "4 hours ago",
      likes: 89,
      comments: 28,
      shares: 15,
      type: "success_story"
    },
    {
      id: 3,
      user: {
        name: "Community",
        avatar: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=40&h=40&fit=crop&crop=face",
        badge: "Official",
        verified: true
      },
      content: "🔥 Flash Sale Alert! Limited time offer on our most popular course bundles. Community members get an additional 20% off with code COMMUNITY20. Only 48 hours left!",
      products: [
        {
          title: "Complete Web Dev Bundle",
          originalPrice: 299,
          salePrice: 149,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=120&fit=crop"
        },
        {
          title: "Design Master Bundle",
          originalPrice: 199,
          salePrice: 99,
          image: "https://images.unsplash.com/photo-1558655146-364adaf25c46?w=200&h=120&fit=crop"
        }
      ],
      timestamp: "6 hours ago",
      likes: 203,
      comments: 67,
      shares: 45,
      type: "promotion"
    },
    {
      id: 4,
      user: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        badge: "UX Designer",
        verified: false
      },
      content: "Just finished week 3 of the UX Design course and I'm blown away! 🎨 The peer review system here is incredible - getting feedback from other learners has improved my work so much. Here's my latest project...",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
      project: {
        title: "Mobile Banking App Redesign",
        tools: ["Figma", "Principle", "After Effects"]
      },
      timestamp: "8 hours ago",
      likes: 156,
      comments: 34,
      shares: 8,
      type: "project_share"
    }
  ];

  const tabs = [
    { id: 'trending', label: 'Trending', icon: FiTrendingUp },
    { id: 'following', label: 'Following', icon: FiUsers },
    { id: 'courses', label: 'Courses', icon: FiPlay },
    { id: 'products', label: 'Products', icon: FiStar }
  ];

  const renderPost = (post) => {
    return (
      <motion.div
        key={post.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        {/* Post Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={post.user.avatar} alt={post.user.name} className="w-12 h-12 rounded-full" />
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                  {post.user.verified && (
                    <span className="text-blue-500">✓</span>
                  )}
                  <span className="text-sm text-greta-blue bg-greta-blue/10 px-2 py-1 rounded-full">
                    {post.user.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <SafeIcon icon={FiMoreHorizontal} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Post Content */}
        <div className="px-6 pb-4">
          <p className="text-gray-800 leading-relaxed">{post.content}</p>
        </div>

        {/* Post Media/Content */}
        {post.image && (
          <div className="px-6 pb-4">
            <img src={post.image} alt="Post content" className="w-full rounded-lg" />
          </div>
        )}

        {/* Course Card */}
        {post.course && (
          <div className="mx-6 mb-4 bg-gradient-to-r from-greta-purple/10 to-greta-blue/10 rounded-lg p-4 border border-greta-blue/20">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-gray-900">{post.course.title}</h5>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
                    <span>{post.course.rating}</span>
                  </span>
                  <span>{post.course.students} students</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-greta-purple">${post.course.price}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-greta-purple text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </div>
        )}

        {/* Achievement Card */}
        {post.achievement && (
          <div className="mx-6 mb-4 bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 text-white p-2 rounded-full">
                <SafeIcon icon={post.achievement.icon} className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-green-800">{post.achievement.title}</h5>
                <p className="text-sm text-green-600">{post.achievement.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {post.products && (
          <div className="mx-6 mb-4">
            <div className="grid grid-cols-2 gap-4">
              {post.products.map((product, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 border">
                  <img src={product.image} alt={product.title} className="w-full h-20 object-cover rounded mb-2" />
                  <h6 className="font-medium text-sm text-gray-900 mb-1">{product.title}</h6>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-greta-teal">${product.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Details */}
        {post.project && (
          <div className="mx-6 mb-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-2">{post.project.title}</h5>
            <div className="flex flex-wrap gap-2">
              {post.project.tools.map((tool, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Post Actions */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <SafeIcon icon={FiHeart} className="w-5 h-5" />
                <span className="text-sm font-medium">{post.likes}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
                <span className="text-sm font-medium">{post.comments}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors"
              >
                <SafeIcon icon={FiShare2} className="w-5 h-5" />
                <span className="text-sm font-medium">{post.shares}</span>
              </motion.button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-yellow-500 transition-colors"
            >
              <SafeIcon icon={FiBookmark} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Community Feed</h1>
          <p className="text-gray-600">Stay connected with learners, creators, and innovators</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-greta-blue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <SafeIcon icon={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {feedPosts.map(renderPost)}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-greta-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-greta-purple transition-colors"
          >
            Load More Posts
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeed;