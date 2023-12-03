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
    <div>
      ProductUpdate
      <ProductForm productHandler={UpdateProductHandler} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default ProductUpdate;
