import React from 'react';

const Footer = () => (
  <footer className="bg-emerald-600 text-white mt-12">
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
      {/* About */}
      <div>
        <h3 className="font-bold text-lg mb-2">SHOPNOW</h3>
        <p className="text-sm">
          Your one-stop shop for all your needs. Fast delivery, best prices, and a wide selection of products.
        </p>
      </div>
      {/* Useful Links */}
      <div>
        <h4 className="font-semibold mb-2">Useful Links</h4>
        <ul className="text-sm space-y-1">
          <li><a href="/home" className="hover:underline">Home</a></li>
          <li><a href="/orders" className="hover:underline">My Orders</a></li>
          <li><a href="/cart" className="hover:underline">Cart</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
        </ul>
      </div>
      {/* Customer Care */}
      <div>
        <h4 className="font-semibold mb-2">Customer Care</h4>
        <ul className="text-sm space-y-1">
          <li><a href="mailto:support@shopnow.com" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">FAQs</a></li>
          <li><a href="#" className="hover:underline">Return Policy</a></li>
          <li><a href="#" className="hover:underline">Shipping Info</a></li>
        </ul>
      </div>
      {/* Social & Copyright */}
      <div>
        <h4 className="font-semibold mb-2">Connect With Us</h4>
        <div className="flex justify-center md:justify-start space-x-4 mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook text-xl hover:text-gray-200"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-xl hover:text-gray-200"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa-brands fa-twitter text-xl hover:text-gray-200"></i>
          </a>
        </div>
        <div className="text-xs mt-4 text-gray-200">
          &copy; {new Date().getFullYear()} SHOPNOW. All rights reserved.<br />
          Made with <span className="text-red-400">&hearts;</span> by Uttam
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;