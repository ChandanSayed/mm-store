import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import ProductCard from './ProductCard';
import { Context } from '../context/AppContext';
import Slider from './Slider';

const CategoryProducts = () => {
  const { loading, setLoading } = useContext(Context);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getProductsAccordingToCategory();
  }, []);

  async function getProductsAccordingToCategory() {
    const res = await axios.get(`http://localhost:5500/products/${name}`);
    console.log(res.data);
    setProducts(res.data);
    setLoading(false);
    setCategoryLoading(false);
  }

  if (loading) {
    return <Loader />;
  }

  if (categoryLoading & (products.length === 0)) {
    return <Loader />;
  }

  return (
    <div className="bg-base-200">
      {products.length > 0 ? (
        <>
          <Slider />
          <div className="max-w-[1440px] px-4 mx-auto py-12 flex flex-wrap gap-6">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">No products available in this category right now!</h2>
            <p>We are trying out best to add products to this category. Thank you for visiting!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
