import React from 'react';

const Orders = ({ orders }) => (
  <div className="flex flex-col items-center min-h-screen bg-gray-100">
    <h2 className="text-2xl font-bold my-6">Your Orders</h2>
    {orders.length === 0 ? (
      <div className="text-lg">No orders placed yet.</div>
    ) : (
      orders.map((order, idx) => (
        <div key={idx} className="bg-white p-6 rounded shadow-md w-[500px] mb-6">
          <div className="font-bold mb-2 text-emerald-700">Order #{idx + 1}</div>
          <div className="mt-2">
            <b>Items:</b>
            <div>
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center border-b py-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded mr-4 border"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-gray-600">{item.description}</div>
                    <div className="font-bold text-emerald-700">₹{item.price} x {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <b>Delivery Details:</b>
            <div className="mb-2"><b>Name:</b> {order.name}</div>
            <div className="mb-2"><b>Address:</b> {order.address}, {order.city}, {order.postal}</div>
            <div className="mb-2"><b>Mobile:</b> {order.mobile}</div>
            <div className="mb-2"><b>Payment:</b> {order.payment.toUpperCase()}</div>
          </div>
        </div>
      ))
    )}
  </div>
);

export default Orders;