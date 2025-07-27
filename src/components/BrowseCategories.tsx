import React from 'react';
import { ArrowRight } from 'lucide-react';

const BrowseCategories = () => {
  const products = [
    {
      id: 1,
      title: "Premium Spa Suites",
      description: "Discover our luxury spa suite designs with premium finishes and wellness amenities",
      image: "/6_Photo - 2 (2).jpg",
      category: "Luxury Spas"
    },
    {
      id: 2,
      title: "Wellness Pods",
      description: "Compact wellness solutions perfect for modern spaces and urban properties",
      image: "/6_Photo - 1 (2).jpg", 
      category: "Compact Solutions"
    },
    {
      id: 3,
      title: "Infinity Pools",
      description: "Stunning infinity pool designs that blend seamlessly with your landscape",
      image: "/6_Photo - 3 (2).jpg",
      category: "Pool Integration"
    },
    {
      id: 4,
      title: "Outdoor Wellness",
      description: "Transform your outdoor spaces into premium wellness retreats",
      image: "/6_Photo - 4 (2).jpg",
      category: "Outdoor Spas"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Products</h2>
            <p className="text-lg text-gray-600 max-w-md">
              Discover our wide range of high-quality spa solutions
            </p>
          </div>
          <button className="flex items-center text-blue-dark hover:text-blue-800 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer bg-white  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-medium text-blue-dark bg-blue-50 px-3 py-1 ">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-dark transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-blue-dark text-white  hover:bg-blue-800 transition-colors font-medium">
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;