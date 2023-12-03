import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { name } = useParams();
  console.log(name);
  return <div>CategoryProducts</div>;
};

export default CategoryProducts;
