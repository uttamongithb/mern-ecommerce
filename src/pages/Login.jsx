import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('user', username);
      setUser(username);
      navigate('/home');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-3 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;