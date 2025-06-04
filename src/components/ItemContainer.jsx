import React from 'react';
import { useNavigate } from 'react-router-dom';
import itemsData from '../assets/itemsData.json';

const ItemContainer = ({ search = '', cart, setCart }) => {
  const navigate = useNavigate();

  const filteredItems = itemsData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (item) => {
    const exists = cart.find(cartItem => cartItem.id === item.id);
    if (exists) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleBuyNow = (item) => {
    handleAddToCart(item);
    navigate('/order');
  };

  return (
    <div className="mt-10 flex flex-wrap gap-6 justify-center px-2 sm:px-10">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="mb-8 w-full max-w-xs sm:w-72 border-b-2 cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <div className="h-56 w-full flex items-center justify-center bg-gray-100 rounded-t-lg">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-48 max-w-full object-contain"
            />
          </div>
          <div className="flex flex-col px-4 py-2 font-bold">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
          <div className="flex justify-between items-center px-4 pb-3">
            <button
              className="bg-emerald-600 text-white font-bold px-2 py-1 rounded hover:bg-emerald-700 transition w-1/2 mr-2"
              onClick={e => { e.stopPropagation(); handleAddToCart(item); }}
            >
              Add To Cart
            </button>
            <button
              className="bg-emerald-600 text-white font-bold px-2 py-1 rounded hover:bg-emerald-700 transition w-1/2"
              onClick={e => { e.stopPropagation(); handleBuyNow(item); }}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemContainer;