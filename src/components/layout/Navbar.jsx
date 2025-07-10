import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiUsers, FiBookOpen, FiShoppingBag, FiUser, FiPlusCircle, FiBell, FiSearch } = FiIcons;

const Navbar = () => {
  const location = useLocation();
  const [notifications, setNotifications] = useState(3);

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/community', icon: FiUsers, label: 'Community' },
    { path: '/courses', icon: FiBookOpen, label: 'Courses' },
    { path: '/products', icon: FiShoppingBag, label: 'Products' },
    { path: '/profile', icon: FiUser, label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 bg-gradient-to-r from-greta-purple to-greta-blue rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">G</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-greta-purple to-greta-blue bg-clip-text text-transparent">
              Greta
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <SafeIcon
                icon={FiSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search courses, products, or community..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="w-5 h-5" />
                </motion.div>
              </Link>
            ))}

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <SafeIcon icon={FiBell} className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </motion.button>

            {/* Creator Button */}
            <Link to="/creator">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-gradient-to-r from-greta-purple to-greta-blue text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-shadow"
              >
                <SafeIcon icon={FiPlusCircle} className="w-4 h-4" />
                <span className="font-medium">Create</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600"
            >
              <SafeIcon icon={FiSearch} className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-600"
            >
              <SafeIcon icon={FiBell} className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200 bg-white">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 ${
                location.pathname === item.path
                  ? 'text-primary-600'
                  : 'text-gray-600'
              }`}
            >
              <SafeIcon icon={item.icon} className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;