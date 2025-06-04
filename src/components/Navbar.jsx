import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ search, setSearch, user, cart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setDropdownOpen(false);
    window.location.reload();
  };

  const handleProfileClick = () => setDropdownOpen(open => !open);
  const handleLogin = () => { setDropdownOpen(false); navigate('/login'); };
  const handleRegister = () => { setDropdownOpen(false); navigate('/register'); };

  return (
    <nav className="bg-emerald-500 w-full">
      <div className=" w-full mx-auto px-4 flex items-center justify-between h-16">
        <Link className="flex items-center" to="/home">
          <i className="fa-solid fa-house mr-1 text-xl text-white"></i>
          <h1 className="text-white text-2xl font-bold">SHOPNOW</h1>
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* Nav links */}
        <div className={`flex-col sm:flex-row sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-8 absolute sm:static top-16 left-0 w-full sm:w-auto bg-emerald-500 sm:bg-transparent z-20 transition-all duration-200 ${menuOpen ? 'flex' : 'hidden sm:flex'}`}>
          <div id='search' className='flex items-center justify-center sm:justify-start px-4 sm:px-0'>
            <input
              type="text"
              placeholder="Search Products......"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="m-2 text-white font-medium placeholder-white outline-none border-b-2 focus:border-white bg-transparent w-full sm:w-auto"
            />
            <i className="fa-solid fa-magnifying-glass text-2xl text-white"></i>
          </div>
          <div id='order' className='text-white font-semibold relative px-4 sm:px-0'>
            <Link to="/orders" className="flex items-center">
              <i className="fa-solid fa-box text-xl mr-1"></i>
              Orders
            </Link>
          </div>
          <div id='cart' className='text-white font-semibold relative px-4 sm:px-0'>
            <Link to="/cart" className="flex items-center">
              <i className="fa-solid fa-cart-shopping text-xl mr-1"></i>
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          <div id='profile' className="relative px-4 sm:px-0" ref={dropdownRef}>
            <button
              type="button"
              className='font-semibold text-white cursor-pointer flex items-center bg-transparent border-none focus:outline-none'
              onClick={handleProfileClick}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <i className="fa-solid fa-user text-xl mr-2"></i>
              {user || 'Login'}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-30">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleLogin}
                      className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleRegister}
                      className="block w-full text-left px-4 py-2 text-green-600 hover:bg-gray-100"
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;