import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <nav className="sticky top-0 bg-blue-900 text-white flex justify-between p-4 shadow-lg">
      <h1 className="text-2xl font-bold">IT Training</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
        <li><Link to="/admissions" className="hover:text-gray-300">Admissions</Link></li>
        <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
        <li><Link to="/aboutus" className="hover:text-gray-300">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
      </ul>
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl" />
          {cartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartItems}
            </span>
          )}
        </Link>
        <Link
          to="/login"
          className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
        >
          Login/Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
