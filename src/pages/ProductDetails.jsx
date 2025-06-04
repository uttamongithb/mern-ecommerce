import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../assets/itemsData.json';

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const product = itemsData.find(item => String(item.id) === id);

  if (!product) {
    return <div className="text-center mt-10 text-xl">Product not found.</div>;
  }

  const handleAddToCart = () => {
    const exists = cart.find(item => String(item.id) === id);
    if (exists) {
      setCart(cart.map(item =>
        String(item.id) === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded shadow-md w-[400px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-contain mx-auto mb-6 border"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <div className="text-lg font-semibold text-emerald-700 mb-2">₹{product.price}</div>
        <div className="mb-4 text-gray-700">{product.description}</div>
        <button
          className="w-full bg-emerald-600 text-white py-2 rounded font-bold mt-4"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;