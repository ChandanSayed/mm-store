import React, { useContext } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { Context } from '../context/AppContext';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';

const NavItems = () => {
  const { user, userPhoto, setUser } = useContext(Context);
  const auth = getAuth(app);

  function handleLogout() {
    signOut(auth)
      .then(() => {
        setUser('');
        return <Navigate to={'/'} />;
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/add-product'}>Add Product</NavLink>
      </li>
      <li className={`${user ? '' : 'hidden'}`}>
        <NavLink to={'/cart'}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={'/login'} className={`${!user ? '' : 'hidden'}`}>
          Login
        </NavLink>
      </li>
      <li>
        <button className={`${user ? '' : 'hidden'}`} onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  );
};

export default NavItems;
