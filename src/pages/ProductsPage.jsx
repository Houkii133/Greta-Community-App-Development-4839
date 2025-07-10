import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiSearch, FiStar, FiShoppingCart, FiHeart, FiEye, FiDownload, FiPackage } = FiIcons;

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Products', count: 456 },
    { id: 'bundles', name: 'Course Bundles', count: 89 },
    { id: 'tools', name: 'Design Tools', count: 123 },
    { id: 'templates', name: 'Templates', count: 167 },
    { id: 'ebooks', name: 'E-books', count: 77 }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'digital', name: 'Digital' },
    { id: 'bundle', name: 'Bundle' },
    { id: 'subscription', name: 'Subscription' }
  ];

  const products = [
    {
      id: 1,
      title: "Complete AI Learning Bundle",
      creator: "Dr. Sarah Chen",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      reviews: 1247,
      price: 199,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      category: "bundles",
      type: "bundle",
      badge: "Best Value",
      description: "Master AI with 5 comprehensive courses, hands-on projects, and lifetime access.",
      features: ["5 Premium Courses", "50+ Projects", "Certificate", "Lifetime Access"],
      downloads: 3420,
      communityRating: 4.8,
      isNew: false,
      discount: 50
    },
    {
      id: 2,
      title: "UI/UX Design Toolkit Pro",
      creator: "Emma Rodriguez",
      creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      reviews: 892,
      price: 49,
      originalPrice: 89,
      image: "https://images.unsplash.com/photo-1558655146-364adaf25c46?w=400&h=300&fit=crop",
      category: "tools",
      type: "digital",
      badge: "Popular",
      description: "Professional design resources, templates, and tools for modern UX designers.",
      features: ["200+ Components", "50+ Templates", "Design System", "Figma Files"],
      downloads: 8950,
      communityRating: 4.9,
      isNew: false,
      discount: 45
    },
    {
      id: 3,
      title: "Marketing Mastery E-book Collection",
      creator: "Marcus Johnson",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.7,
      reviews: 1156,
      price: 29,
      originalPrice: 59,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "ebooks",
      type: "digital",
      badge: "New",
      description: "Complete guide to digital marketing with proven strategies and case studies.",
      features: ["3 E-books", "Case Studies", "Templates", "Bonus Worksheets"],
      downloads: 2340,
      communityRating: 4.6,
      isNew: true,
      discount: 51
    },
    {
      id: 4,
      title: "Web Development Starter Pack",
      creator: "Alex Thompson",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      reviews: 2341,
      price: 79,
      originalPrice: 149,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "bundles",
      type: "bundle",
      badge: "Bestseller",
      description: "Everything you need to start your web development journey with modern tools.",
      features: ["3 Courses", "Code Templates", "Project Files", "Community Access"],
      downloads: 5670,
      communityRating: 4.8,
      isNew: false,
      discount: 47
    },
    {
      id: 5,
      title: "Business Presentation Templates",
      creator: "Jennifer Park",
      creatorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face",
      rating: 4.6,
      reviews: 567,
      price: 39,
      originalPrice: 69,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      category: "templates",
      type: "digital",
      badge: "Premium",
      description: "Professional presentation templates for business, pitch decks, and reports.",
      features: ["50+ Templates", "PowerPoint & Keynote", "Vector Icons", "Color Variations"],
      downloads: 1890,
      communityRating: 4.7,
      isNew: false,
      discount: 43
    },
    {
      id: 6,
      title: "Mobile App Design System",
      creator: "David Kim",
      creatorAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      reviews: 1023,
      price: 59,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      category: "tools",
      type: "digital",
      badge: "Updated",
      description: "Complete mobile design system with components, patterns, and guidelines.",
      features: ["Design System", "100+ Components", "Style Guide", "Sketch & Figma"],
      downloads: 3450,
      communityRating: 4.9,
      isNew: false,
      discount: 40
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedType !== 'all' && product.type !== selectedType) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'price_low':
        return a.price - b.price;
      case 'price_high':
        return b.price - a.price;
      case 'newest':
        return b.isNew - a.isNew || b.id - a.id;
      default:
        return 0;
    }
  });

  const renderProductCard = (product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
            product.badge === 'Best Value' ? 'bg-green-500' :
            product.badge === 'Popular' ? 'bg-blue-500' :
            product.badge === 'New' ? 'bg-purple-500' :
            product.badge === 'Bestseller' ? 'bg-orange-500' :
            product.badge === 'Premium' ? 'bg-yellow-500' :
            'bg-pink-500'
          }`}>
            {product.badge}
          </span>
        </div>
        {product.discount > 0 && (
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
              -{product.discount}%
            </div>
          </div>
        )}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <SafeIcon icon={FiHeart} className="w-4 h-4 text-gray-700" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <SafeIcon icon={FiEye} className="w-4 h-4 text-gray-700" />
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <img src={product.creatorAvatar} alt={product.creator} className="w-6 h-6 rounded-full" />
          <span className="text-sm text-gray-600">{product.creator}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>

        <div className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-greta-blue rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
          {product.features.length > 3 && (
            <div className="text-sm text-greta-blue font-medium">
              +{product.features.length - 3} more features
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{product.rating}</span>
              <span>({product.reviews})</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiDownload} className="w-4 h-4" />
              <span>{product.downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-sm text-gray-500">Community Rating:</span>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiStar} className="w-4 h-4 text-greta-blue fill-current" />
              <span className="font-medium text-greta-blue">{product.communityRating}</span>
            </div>
          </div>
          <div className="text-right">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
            <div className="text-2xl font-bold text-greta-teal">${product.price}</div>
          </div>
        </div>

        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-gradient-to-r from-greta-teal to-greta-blue text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
          >
            <SafeIcon icon={FiShoppingCart} className="w-4 h-4" />
            <span>Add to Cart</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <SafeIcon icon={FiPackage} className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Marketplace</h1>
          <p className="text-xl text-gray-600">Discover premium tools, bundles, and resources created by the community</p>
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
              placeholder="Search products, bundles, or creators..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-greta-teal focus:border-transparent text-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <SafeIcon icon={FiFilter} className="w-5 h-5 text-greta-teal" />
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
                          ? 'bg-greta-teal text-white'
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

              {/* Types */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Type</h4>
                <div className="space-y-2">
                  {types.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedType === type.id
                          ? 'bg-greta-teal text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {type.name}
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
                Showing {sortedProducts.length} products
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-greta-teal"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedProducts.map(renderProductCard)}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-greta-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-greta-blue transition-colors"
              >
                Load More Products
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;