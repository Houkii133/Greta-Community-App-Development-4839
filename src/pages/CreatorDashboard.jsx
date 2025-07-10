import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiDollarSign, FiUsers, FiTrendingUp, FiBookOpen, FiShoppingBag, FiEye, FiHeart, FiMessageCircle, FiEdit, FiBarChart3 } = FiIcons;

const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalRevenue: 45670,
    totalStudents: 18234,
    activeCourses: 3,
    totalProducts: 5,
    monthlyGrowth: 23.5,
    communityEngagement: 87
  };

  const recentSales = [
    { course: "Full-Stack Web Development", student: "Maria Garcia", amount: 99, date: "2 hours ago" },
    { course: "React Native Mobile Apps", student: "John Smith", amount: 89, date: "5 hours ago" },
    { course: "JavaScript Fundamentals", student: "Sarah Johnson", amount: 79, date: "1 day ago" },
    { course: "Design Toolkit Pro", student: "Mike Chen", amount: 49, date: "1 day ago" }
  ];

  const coursePerformance = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      students: 18234,
      rating: 4.9,
      revenue: 25670,
      views: 45230,
      engagement: 92,
      trend: "up"
    },
    {
      id: 2,
      title: "React Native Mobile Apps",
      students: 9876,
      rating: 4.8,
      revenue: 15450,
      views: 28940,
      engagement: 88,
      trend: "up"
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      students: 6543,
      rating: 4.7,
      revenue: 8900,
      views: 18760,
      engagement: 85,
      trend: "stable"
    }
  ];

  const communityMetrics = {
    followers: 2847,
    totalLikes: 12456,
    comments: 3421,
    shares: 892,
    weeklyGrowth: 15.2
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'courses', label: 'My Courses' },
    { id: 'products', label: 'Products' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'community', label: 'Community' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, icon: FiDollarSign, color: "text-green-500", bg: "bg-green-50" },
          { label: "Total Students", value: stats.totalStudents.toLocaleString(), icon: FiUsers, color: "text-blue-500", bg: "bg-blue-50" },
          { label: "Active Courses", value: stats.activeCourses, icon: FiBookOpen, color: "text-purple-500", bg: "bg-purple-50" },
          { label: "Products", value: stats.totalProducts, icon: FiShoppingBag, color: "text-orange-500", bg: "bg-orange-50" },
          { label: "Monthly Growth", value: `+${stats.monthlyGrowth}%`, icon: FiTrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
          { label: "Engagement", value: `${stats.communityEngagement}%`, icon: FiHeart, color: "text-pink-500", bg: "bg-pink-50" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.bg} rounded-xl p-6 border border-gray-200`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full bg-white`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Create Course", icon: FiBookOpen, color: "bg-blue-500" },
            { label: "Add Product", icon: FiShoppingBag, color: "bg-green-500" },
            { label: "Community Post", icon: FiMessageCircle, color: "bg-purple-500" },
            { label: "View Analytics", icon: FiBarChart3, color: "bg-orange-500" }
          ].map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${action.color} text-white p-4 rounded-lg font-medium flex items-center space-x-3 hover:shadow-lg transition-shadow`}
            >
              <SafeIcon icon={action.icon} className="w-5 h-5" />
              <span>{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Sales</h3>
          <button className="text-greta-blue hover:text-greta-purple transition-colors font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-medium text-gray-900">{sale.course}</p>
                <p className="text-sm text-gray-600">Purchased by {sale.student}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">${sale.amount}</p>
                <p className="text-sm text-gray-500">{sale.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900">Course Performance</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-greta-blue text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
        >
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>Create Course</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {coursePerformance.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">{course.title}</h4>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-gray-900 p-2"
                >
                  <SafeIcon icon={FiEdit} className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-gray-900 p-2"
                >
                  <SafeIcon icon={FiBarChart3} className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{course.students.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{course.rating}</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">${course.revenue.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{course.views.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{course.engagement}%</div>
                <div className="text-sm text-gray-600">Engagement</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Trend:</span>
                <div className={`flex items-center space-x-1 ${
                  course.trend === 'up' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                  <span className="text-sm font-medium capitalize">{course.trend}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-8">
      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Followers", value: communityMetrics.followers.toLocaleString(), icon: FiUsers, color: "text-blue-500" },
          { label: "Total Likes", value: communityMetrics.totalLikes.toLocaleString(), icon: FiHeart, color: "text-red-500" },
          { label: "Comments", value: communityMetrics.comments.toLocaleString(), icon: FiMessageCircle, color: "text-green-500" },
          { label: "Weekly Growth", value: `+${communityMetrics.weeklyGrowth}%`, icon: FiTrendingUp, color: "text-purple-500" }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
              <SafeIcon icon={metric.icon} className={`w-8 h-8 ${metric.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engagement Tools */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Engagement Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-greta-purple to-greta-blue text-white p-4 rounded-lg font-medium flex items-center space-x-3"
          >
            <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
            <span>Create Post</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-greta-blue to-greta-teal text-white p-4 rounded-lg font-medium flex items-center space-x-3"
          >
            <SafeIcon icon={FiUsers} className="w-5 h-5" />
            <span>Host Live Q&A</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-greta-teal to-greta-purple text-white p-4 rounded-lg font-medium flex items-center space-x-3"
          >
            <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
            <span>Start Challenge</span>
          </motion.button>
        </div>
      </div>

      {/* Recent Community Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Community Activity</h3>
        <div className="space-y-4">
          {[
            { action: "New follower", detail: "Sarah Johnson started following you", time: "2 hours ago", type: "follow" },
            { action: "Course comment", detail: "Great explanation in lesson 3!", time: "5 hours ago", type: "comment" },
            { action: "Post liked", detail: "Your latest post got 47 likes", time: "1 day ago", type: "like" },
            { action: "Community mention", detail: "You were mentioned in a success story", time: "2 days ago", type: "mention" }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-0">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'follow' ? 'bg-blue-500' :
                activity.type === 'comment' ? 'bg-green-500' :
                activity.type === 'like' ? 'bg-red-500' : 'bg-purple-500'
              }`}></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.detail}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900">Product Performance</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-greta-teal text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
        >
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>Add Product</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "Design Toolkit Pro", sales: 450, revenue: 22050, rating: 4.8, type: "Digital" },
          { name: "Web Dev Bundle", sales: 234, revenue: 18486, rating: 4.9, type: "Bundle" },
          { name: "UI Templates Pack", sales: 189, revenue: 7371, rating: 4.7, type: "Digital" },
          { name: "Course Workbook", sales: 156, revenue: 4524, rating: 4.6, type: "Digital" }
        ].map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                <span className="text-sm text-greta-teal bg-greta-teal/10 px-2 py-1 rounded-full">
                  {product.type}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                <SafeIcon icon={FiEdit} className="w-4 h-4" />
              </motion.button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-blue-600">{product.sales}</div>
                <div className="text-sm text-gray-600">Sales</div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-600">${product.revenue.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Revenue</div>
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-600">{product.rating}</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-gray-900">Analytics Overview</h3>
      
      {/* Revenue Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h4>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <SafeIcon icon={FiBarChart3} className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Revenue chart would be displayed here</p>
          </div>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Content</h4>
          <div className="space-y-3">
            {[
              { title: "Full-Stack Web Development", metric: "45K views", change: "+15%" },
              { title: "React Native Course", metric: "28K views", change: "+8%" },
              { title: "Design Toolkit Pro", metric: "12K downloads", change: "+23%" }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.metric}</p>
                </div>
                <span className="text-sm font-medium text-green-600">{item.change}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Audience Insights</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Top Countries</p>
              <div className="space-y-2">
                {[
                  { country: "United States", percentage: 45 },
                  { country: "United Kingdom", percentage: 18 },
                  { country: "Canada", percentage: 12 }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">{item.country}</span>
                    <span className="text-sm font-medium">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Creator Dashboard</h1>
          <p className="text-gray-600">Manage your courses, products, and community engagement</p>
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
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-greta-blue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'products' && renderProducts()}
          {activeTab === 'analytics' && renderAnalytics()}
          {activeTab === 'community' && renderCommunity()}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;