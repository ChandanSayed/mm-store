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
    const res = await axios.post('https://mm-store-server.onrender.com/add-product', formData);
    console.log(res);
    if (res.data.acknowledged) {
      Swal.fire({
        title: 'Congrats!',
        text: 'You added the product!',
        icon: 'success'
      });
      setFormData({
        image: '',
        name: '',
        brandName: '',
        type: '',
        price: '',
        shortDescription: '',
        rating: ''
      });
    }
  };
  return (
    <div className="bg-base-200 py-20">
      <div className="shadow-2xl max-w-2xl bg-white mx-auto px-4 py-10 rounded-lg">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">Add Product</h2>
        <ProductForm productHandler={addProductHandler} formData={formData} setFormData={setFormData} btnText={'Add Product'} />
      </div>
    </div>
  );
};

export default AddProduct;
