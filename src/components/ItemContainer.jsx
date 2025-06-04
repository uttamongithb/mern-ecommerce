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
    <div className="mt-10 flex flex-wrap gap-10 justify-center ml-20 mr-20 ">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="mb-8 h-100 w-75 border-b-3 cursor-pointer shadow"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <div className="h-65 w-65 bg-grey-600 m-auto mt-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-65 object-contain"
            />
          </div>
          <div className="flex flex-col ml-5 mt-3 font-bold">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
          <div className="flex justify-between items-center px-5 mt-1.5">
            <button
              className="bg-emerald-600 text-white font-bold px-2 py-1 hover:bg-emerald-700 transition"
              onClick={e => { e.stopPropagation(); handleAddToCart(item); }}
            >
              Add To Cart
            </button>
            <button
              className="bg-emerald-600 text-white font-bold px-2 py-1 hover:bg-emerald-700 transition"
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