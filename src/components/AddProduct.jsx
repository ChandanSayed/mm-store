import React, { useState } from 'react';
import ProductForm from './ProductForm';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    brandName: '',
    type: '',
    price: '',
    shortDescription: '',
    rating: ''
  });

  const addProductHandler = async () => {
    const res = await axios.post('http://localhost:5500/add-product', formData);
    console.log(res);
    if (res.data.acknowledged) {
      Swal.fire({
        title: 'Congrats!',
        text: 'You added the product!',
        icon: 'success'
      });
    }
  };
  return (
    <div>
      <ProductForm productHandler={addProductHandler} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default AddProduct;
