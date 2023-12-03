import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="px-4 my-12">
      <h2>Available Brands</h2>
      <div className="max-w-[1440px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <Link to={`/products/apple`}>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
