import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/AppContext';
import Swal from 'sweetalert2';

const MyCart = () => {
  const { uId } = useContext(Context);
  const [items, setItems] = useState([]);
  const [updateCart, setUpdateCart] = useState(0);

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    getCartItems();
  }, [updateCart]);

  async function getCartItems() {
    const res = await axios.get(`https://mm-store-server.vercel.app/cartItems/${uId}`);
    setItems(res.data);
  }

  async function handleDelete(id) {
    const res = await axios.delete(`https://mm-store-server.vercel.app/cartItems/${id}`);
    if (res.data.deletedCount) {
      Swal.fire({
        title: 'Congrats!',
        text: 'You deleted the product from the cart!',
        icon: 'success'
      });
      setUpdateCart(prev => prev + 1);
    }
  }

  return (
    <div className="bg-base-200 py-20">
      <div className="overflow-x-auto max-w-3xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="text-right">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item, i) => {
                return (
                  <tr key={item._id} className="bg-base-200">
                    <th>{i + 1}</th>
                    <td className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img className="w-12 h-12 rounded-full" src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">$ {item.price}</td>
                    <td>
                      <button onClick={() => handleDelete(item._id)} className="btn">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No Items available
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className={`${items.length > 0 ? '' : 'hidden'}`}>
            <tr>
              <td className="font-bold">Total</td>
              <td className="font-bold text-right text-lg text-black" colSpan="2">
                ${parseInt(items.reduce((accumulator, item) => accumulator + item.price, 0))}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
