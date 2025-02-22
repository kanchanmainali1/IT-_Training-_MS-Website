import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-blue-900 text-white flex justify-between p-4 shadow-lg">
      <h1 className="text-2xl font-bold">IT Training</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
        <li><Link to="/admissions" className="hover:text-gray-300">Admissions</Link></li>
        <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
      </ul>
      <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">Login/Signup</button>
    </nav>
  );
};

export default Navbar;
