import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import ProductCard from './ProductCard';
import { Context } from '../context/AppContext';
import Slider from './Slider';

const CategoryProducts = () => {
  const { loading, setLoading } = useContext(Context);
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
  }

  if (loading) {
    return <Loader />;
  }

  console.log(name);
  return (
    <div className="bg-base-200">
      <Slider />
      <div className="max-w-[1440px] px-4 mx-auto py-12">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
