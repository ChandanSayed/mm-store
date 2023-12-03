import React, { useContext } from 'react';
import { Context } from '../context/AppContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Context);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
