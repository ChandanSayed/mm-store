import React, { useState } from 'react';

const ProductForm = ({ productHandler, formData, setFormData, btnText }) => {
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let formErrors = {};
    if (formData.image.trim() === '') {
      formErrors.image = 'Image url is required';
    }
    if (formData.name.trim() === '') {
      formErrors.name = 'Name is required';
    }
    if (formData.brandName.trim() === '') {
      formErrors.brandName = 'Brand Name is required';
    }
    if (formData.type.trim() === '') {
      formErrors.type = 'Select a type';
    }
    if (formData.shortDescription.trim() === '') {
      formErrors.shortDescription = 'Write a short description';
    }
    if (formData.price.trim() === '' || isNaN(parseFloat(formData.price))) {
      formErrors.price = 'Price must be a number';
    }
    if (formData.rating.trim() === '' || isNaN(parseFloat(formData.rating)) || 1 > formData.rating || formData.rating > 5) {
      formErrors.rating = 'Rating must be a number and not more than 5 and less than 1';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      productHandler();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
          Image Link
        </label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />

        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="brandName" className="block text-gray-700 text-sm font-bold mb-2">
          Brand Name
        </label>
        <select id="brandName" name="brandName" value={formData.brandName.toLowerCase()} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500">
          <option value="">Select Brand Name</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="accer">Accer</option>
          <option value="walton">Walton</option>
          <option value="hp">HP</option>
          <option value="dell">Dell</option>
        </select>
        {/* <input type="text" id="brandName" name="brandName" value={formData.brandName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" /> */}
        {errors.brandName && <p className="text-red-500 text-xs mt-1">{errors.brandName}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">
          Type
        </label>
        <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500">
          <option value="">Select product type</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
        </select>
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
          Price
        </label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="shortDescription" className="block text-gray-700 text-sm font-bold mb-2">
          Short Description
        </label>
        <textarea id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
        {errors.shortDescription && <p className="text-red-500 text-xs mt-1">{errors.shortDescription}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
          Rating
        </label>
        <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
        {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
      </div>

      <div className="mb-4">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
