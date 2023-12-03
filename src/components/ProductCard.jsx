import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, image, name, brandName, type, price, shortDescription, rating } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-white pt-5">
      <img src={image} alt={name} className="w-full h-64 object-contain" />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2">Price: {price}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-base mb-2">Brand: {brandName}</p>
          <p className="text-gray-700 text-base mb-2">Type: {type}</p>
        </div>
        <p className="text-gray-700 text-base mb-2">Rating: {rating}</p>
        <p className="text-gray-700 text-base mb-2">{shortDescription}</p>
        <div className="flex justify-between">
          <Link to={`/products/product-update/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </Link>
          <Link to={`/products/product-details/${_id}`} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
