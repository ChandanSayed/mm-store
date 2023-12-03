import React, { useState } from 'react';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    brandName: '',
    type: '',
    price: '',
    shortDescription: '',
    rating: ''
  });

  const UpdateProductHandler = async () => {
    console.log(id);
  };

  return (
    <div className="bg-base-200 py-20">
      <div className="shadow-2xl max-w-2xl bg-white mx-auto px-4 py-10 rounded-lg">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">ProductUpdate</h2>
        <ProductForm productHandler={UpdateProductHandler} formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
};

export default ProductUpdate;
