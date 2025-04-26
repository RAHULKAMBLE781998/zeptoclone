import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../../components/ui/ProductCard';

// Mock data
const categories = [
  { id: 1, name: 'Fruits & Vegetables', image: '/images/categories/fruits.jpg' },
  { id: 2, name: 'Dairy & Eggs', image: '/images/categories/dairy.jpg' },
  { id: 3, name: 'Bakery', image: '/images/categories/bakery.jpg' },
  { id: 4, name: 'Meat & Seafood', image: '/images/categories/meat.jpg' },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Fresh Red Apples',
    price: 2.99,
    originalPrice: 3.49,
    discountPercentage: 15,
    unit: '500g',
    image: '/images/products/apple.jpg',
    inStock: true,
  },
  {
    id: 2,
    name: 'Organic Milk',
    price: 3.49,
    unit: '1L',
    image: '/images/products/milk.jpg',
    inStock: true,
  },
  {
    id: 3,
    name: 'Whole Wheat Bread',
    price: 2.49,
    originalPrice: 2.99,
    discountPercentage: 17,
    unit: '500g',
    image: '/images/products/bread.jpg',
    inStock: true,
  },
];

const HomePage = () => {
  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Groceries Delivered in 10 Minutes
            </h1>
            <p className="text-xl mb-8">
              Fresh groceries at your doorstep, faster than you can imagine
            </p>
            <Link
              to="/categories"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
            >
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative rounded-lg overflow-hidden"
            >
              <div className="relative pb-[100%]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-200" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link
            to="/products"
            className="text-primary hover:text-primary/80 flex items-center"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Deals of the Day</h2>
          <Link
            to="/deals"
            className="text-primary hover:text-primary/80 flex items-center"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts
            .filter((product) => product.discountPercentage)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 