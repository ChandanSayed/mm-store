import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/AppContext';
import Swal from 'sweetalert2';

const ProductDetails = () => {
  const { loading, setLoading, uId } = useContext(Context);
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProductDetails();
  }, []);
  async function getProductDetails() {
    const res = await axios.get(`/products/product-details/${id}`);
    setProductDetails(res.data);
    setLoading(false);
  }

  if (loading) {
    return <Loader />;
  }

  async function handleAddToCart() {
    const { image, price, name } = productDetails;
    const res = await axios.post('/cartItems', { uId, image, price, name });
    if (res.data.acknowledged) {
      Swal.fire({
        title: 'Congrats!',
        text: 'You added the product to the cart!',
        icon: 'success'
      });
    }
  }

  return (
    <div className="max-w-5xl mx-auto pt-24 px-[15px] pb-32 flex flex-col lg:flex-row gap-5">
      <div className="img-container relative lg:w-1/3" data-aos="fade-up">
        <img src={productDetails.image} alt={productDetails.name} className="w-full rounded-lg h-[350px] lg:h-[250px] object-contain" />
        <div className="overlay bg-[#0B0B0B] bg-opacity-20 absolute bottom-0 left-0 right-0 top-0 rounded-lg p-[37px]"></div>
      </div>
      <div className="w-2/3" data-aos="fade-up">
        <h2 className="mb-6 text-4xl text-[#0b0b0b] font-bold">{productDetails.name}</h2>
        <div className="flex gap-6 py-2">
          <p className="text-base text-[#0b0b0b] text-opacity-70">Type:{productDetails.type}</p>
          <p className="text-base text-[#0b0b0b] text-opacity-70">Brand:{productDetails.brandName}</p>
        </div>
        <p className="text-base text-[#0b0b0b] text-opacity-70 my-2">
          Rating: <span className="text-yellow-400 font-bold">{productDetails.rating}</span>
        </p>
        <p className="text-base text-[#0b0b0b] text-opacity-70">{productDetails.shortDescription}</p>
        <button className={`inline-flex text-lg rounded-[4px] py-2 w-fit text-black my-2`}>Price ${productDetails.price}</button>
        <button onClick={handleAddToCart} className="btn btn-primary text-white block">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
