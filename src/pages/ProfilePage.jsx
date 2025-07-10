import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit, FiStar, FiBookOpen, FiShoppingBag, FiUsers, FiTrendingUp, FiAward, FiCalendar, FiMapPin, FiLink } = FiIcons;

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: "Alex Thompson",
    username: "@alexthompson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=200&fit=crop",
    bio: "Full-stack developer passionate about AI and modern web technologies. Creating courses to help others learn and grow in tech.",
    location: "San Francisco, CA",
    website: "alexthompson.dev",
    joinDate: "March 2023",
    stats: {
      coursesCompleted: 24,
      coursesCreated: 3,
      productsCreated: 5,
      followers: 2847,
      following: 156,
      communityPoints: 8950
    },
    badges: [
      { name: "Course Creator", icon: FiBookOpen, color: "bg-blue-500" },
      { name: "Top Contributor", icon: FiTrendingUp, color: "bg-green-500" },
      { name: "Community Leader", icon: FiUsers, color: "bg-purple-500" },
      { name: "Expert", icon: FiAward, color: "bg-yellow-500" }
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "AI/ML", "UI/UX Design"]
  };

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      progress: 75,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=120&fit=crop",
      rating: 4.8,
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "David Kim",
      progress: 45,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=120&fit=crop",
      rating: 4.9,
      lastAccessed: "1 week ago"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Emma Rodriguez",
      progress: 100,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=120&fit=crop",
      rating: 4.7,
      lastAccessed: "Completed",
      completed: true
    }
  ];

  const createdCourses = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      students: 18234,
      rating: 4.9,
      revenue: 45670,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=120&fit=crop",
      status: "Published"
    },
    {
      id: 2,
      title: "React Native Mobile Apps",
      students: 9876,
      rating: 4.8,
      revenue: 23450,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=120&fit=crop",
      status: "Published"
    },
    {
      id: 3,
      title: "Advanced JavaScript Concepts",
      students: 0,
      rating: 0,
      revenue: 0,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=120&fit=crop",
      status: "Draft"
    }
  ];

  const achievements = [
    {
      title: "First Course Published",
      description: "Published your first course on the platform",
      date: "April 2023",
      icon: FiBookOpen,
      color: "bg-blue-500"
    },
    {
      title: "10K Students Milestone",
      description: "Reached 10,000 students across all courses",
      date: "October 2023",
      icon: FiUsers,
      color: "bg-green-500"
    },
    {
      title: "Top Rated Instructor",
      description: "Achieved 4.8+ average rating across all courses",
      date: "November 2023",
      icon: FiStar,
      color: "bg-yellow-500"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'courses', label: 'My Courses' },
    { id: 'created', label: 'Created Content' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Stats Cards */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Statistics</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Courses Completed", value: userProfile.stats.coursesCompleted, icon: FiBookOpen, color: "text-blue-500" },
            { label: "Courses Created", value: userProfile.stats.coursesCreated, icon: FiEdit, color: "text-green-500" },
            { label: "Products Created", value: userProfile.stats.productsCreated, icon: FiShoppingBag, color: "text-purple-500" },
            { label: "Community Points", value: userProfile.stats.communityPoints, icon: FiTrendingUp, color: "text-orange-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <SafeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color}`} />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {userProfile.skills.map((skill, index) => (
              <span key={index} className="bg-greta-blue/10 text-greta-blue px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            {[
              { action: "Completed", item: "Digital Marketing Strategy", time: "2 days ago" },
              { action: "Started", item: "Advanced React Patterns", time: "1 week ago" },
              { action: "Published", item: "JavaScript Fundamentals", time: "2 weeks ago" },
              { action: "Earned", item: "Top Contributor Badge", time: "1 month ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 py-2">
                <div className="w-2 h-2 bg-greta-blue rounded-full"></div>
                <div className="flex-1">
                  <span className="font-medium text-gray-900">{activity.action}</span>
                  <span className="text-gray-600"> {activity.item}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Enrolled Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
              <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
              
              {!course.completed ? (
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-greta-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="mb-3 flex items-center space-x-2 text-green-600">
                  <SafeIcon icon={FiAward} className="w-4 h-4" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <span className="text-gray-500">{course.lastAccessed}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCreated = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900">Created Courses</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-greta-blue text-white px-4 py-2 rounded-lg font-medium"
        >
          Create New Course
        </motion.button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {createdCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{course.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  course.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.status}
                </span>
              </div>
              
              {course.status === 'Published' && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-3 h-3 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-medium text-green-600">${course.revenue.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center space-x-4">
              <div className={`${achievement.color} p-3 rounded-full text-white`}>
                <SafeIcon icon={achievement.icon} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
                <p className="text-gray-500 text-xs mt-1">{achievement.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-r from-greta-purple to-greta-blue">
        <img src={userProfile.coverImage} alt="Cover" className="w-full h-full object-cover mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-24 pb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-2 right-2 bg-greta-blue text-white p-2 rounded-full shadow-lg"
                >
                  <SafeIcon icon={FiEdit} className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">{userProfile.name}</h1>
                    <p className="text-greta-blue font-medium">{userProfile.username}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-greta-blue text-white px-6 py-2 rounded-lg font-medium mt-4 md:mt-0"
                  >
                    Edit Profile
                  </motion.button>
                </div>

                <p className="text-gray-700 mb-4">{userProfile.bio}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiLink} className="w-4 h-4" />
                    <span>{userProfile.website}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>Joined {userProfile.joinDate}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex space-x-8 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{userProfile.stats.followers}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{userProfile.stats.following}</div>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{userProfile.stats.communityPoints}</div>
                    <div className="text-sm text-gray-600">Points</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {userProfile.badges.map((badge, index) => (
                    <div key={index} className={`${badge.color} text-white px-3 py-1 rounded-full flex items-center space-x-2 text-sm`}>
                      <SafeIcon icon={badge.icon} className="w-4 h-4" />
                      <span>{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
        <div className="pb-12">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'created' && renderCreated()}
          {activeTab === 'achievements' && renderAchievements()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;