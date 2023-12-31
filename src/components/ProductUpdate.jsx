import React, { useContext, useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context/AppContext';
import Swal from 'sweetalert2';

const ProductUpdate = () => {
  const { id } = useParams();
  const { loading, setLoading } = useContext(Context);

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
    const res = await axios.put(`/products/product-update/${id}`, formData);
    if (res.data) {
      Swal.fire({
        title: 'Congrats!',
        text: 'You updated the product!',
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

  useEffect(() => {
    getProductDetails();
  }, []);
  async function getProductDetails() {
    const res = await axios.get(`/products/product-details/${id}`);
    setFormData(res.data);
    setLoading(false);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-base-200 py-20">
      <div className="shadow-2xl max-w-2xl bg-white mx-auto px-4 py-10 rounded-lg">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">ProductUpdate</h2>
        <ProductForm productHandler={UpdateProductHandler} formData={formData} setFormData={setFormData} btnText={'Update Product'} />
      </div>
    </div>
  );
};

export default ProductUpdate;
