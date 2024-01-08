import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ dark }) => {
  const brands = [
    {
      name: 'apple',
      image: 'apple.png'
    },
    {
      name: 'walton',
      image: 'walton.png'
    },
    {
      name: 'samsung',
      image: 'samsung.jpg'
    },
    {
      name: 'dell',
      image: 'dell.webp'
    },
    {
      name: 'hp',
      image: 'hp.jpg'
    },
    {
      name: 'accer',
      image: 'accer.png'
    }
  ];
  return (
    <div className={`px-4 py-12 ${dark ? 'bg-black' : ''}`}>
      <h2 data-aos="fade-up" className={`text-2xl lg:text-4xl mb-10 font-bold text-center ${dark ? 'text-white' : ''}`}>
        Available Brands
      </h2>
      <div className="max-w-[1440px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {brands.map((brand, i) => {
          return (
            <Link to={`/products/${brand.name}`} key={i}>
              <div className="card bg-base-100 shadow-xl image-full">
                <figure>
                  <img className="!w-full !h-[256px] lg:!h-[300px] !object-cover" src={`/images/${brand.image}`} alt={brand.name} />
                </figure>
                <div className="card-body items-center justify-center">
                  <h2 data-aos="fade-right" className="card-title text-lg lg:text-3xl capitalize">
                    {brand.name}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
