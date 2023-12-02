import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Error from './components/Error.jsx';
import Login from './components/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AddProduct from './components/AddProduct.jsx';
import MyCart from './components/MyCart.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import CategoryProducts from './components/CategoryProducts.jsx';
import Home from './components/Home.jsx';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppContext from './context/AppContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/add-product',
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        )
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        )
      },
      {
        path: `/category-products/product-details/:id`,
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        )
      },
      {
        path: `/category-products/:name`,
        element: (
          <PrivateRoute>
            <CategoryProducts />
          </PrivateRoute>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>
);
