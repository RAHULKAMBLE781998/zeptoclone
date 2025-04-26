import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    discountPercentage,
    unit,
    image,
    inStock,
  } = product;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <Link to={`/product/${id}`}>
        <div className="relative pb-[100%]">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
            {name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mb-2">{unit}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              ${price.toFixed(2)}
            </p>
            {originalPrice && (
              <p className="text-xs text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </p>
            )}
          </div>

          <button
            className={`p-2 rounded-full ${
              inStock
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!inStock}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 