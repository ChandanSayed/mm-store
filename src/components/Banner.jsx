import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[url('/images/mm-store-hero.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to MM Store</h1>
          <p className="mb-5">We always provide 100 authentic banded products!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
