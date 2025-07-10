import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import CommunityFeed from './pages/CommunityFeed';
import CoursesPage from './pages/CoursesPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CreatorDashboard from './pages/CreatorDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/community" element={<CommunityFeed />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/creator" element={<CreatorDashboard />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;