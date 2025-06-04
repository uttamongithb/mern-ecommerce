import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  if (!cart.length) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-2xl font-bold">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className='flex justify-center mt-10 flex-wrap m-3'>
      {cart.map((item) => (
        <div key={item.id} className='w-300 border-1 flex m-3'>
          <div className='h-35 w-35 border-0 m-5'>
            <img src={item.image} alt={item.name} />
          </div>
          <div className='border-0 mt-1 flex justify-between flex-wrap'>
            <div className='flex justify-between w-full mr-1'>
              <div className='mx-2 mt-3'>
                <div className='font-bold'>{item.name}</div>
                <div>{item.description}</div>
                <div className='font-semibold'>₹{item.price}</div>
              </div>
              <div className='mx-1 my-3'>Delivery by Monday June 2</div>
            </div>
            <div className='flex justify-between items-center mr-1 mb-1 w-full'>
              <div className='flex items-center'>
                <div className="flex items-center gap-2 ml-5 mr-3">
                  <button
                    className="px-2 py-1 bg-emerald-600 text-white rounded"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-emerald-600 text-white rounded"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >+</button>
                </div>
                <button
                  className='bg-white-600 font-bold h-9 mx-2 px-3 border-1 text-emerald-600'
                  onClick={() => handleRemove(item.id)}
                >
                  Remove Item
                </button>
              </div>
              <button
                className='bg-white-600 font-bold h-9 mx-1 mr-1 px-3 border-1 text-emerald-600'
                onClick={() => navigate('/order')}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;