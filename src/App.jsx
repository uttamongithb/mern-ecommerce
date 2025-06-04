import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Order from './pages/Order';
import Orders from './pages/Orders'; // <-- Create this page to show all orders
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import Register from './pages/Register';

function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setUser(localStorage.getItem('user') || '');
  }, []);

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} user={user} cart={cart} />
      <Routes>
        <Route path="/" element={
          <Home search={search} cart={cart} setCart={setCart} />
        } />
        <Route path="/home" element={
          <Home search={search} cart={cart} setCart={setCart} />
        } />
        <Route path="/cart" element={
          <Cart cart={cart} setCart={setCart} />
        } />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/order" element={
          <Order cart={cart} setCart={setCart} orders={orders} setOrders={setOrders} />
        } />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;