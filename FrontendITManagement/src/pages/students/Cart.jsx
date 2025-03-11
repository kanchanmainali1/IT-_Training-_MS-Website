// src/pages/Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: '1',
      title: 'Learn Python',
      description: 'Beginner friendly Python course.',
      duration: '8 weeks',
      fee: 'Rs.100',
    },
    {
      id: '2',
      title: 'Mastering JavaScript',
      description: 'Advanced JavaScript course.',
      duration: '10 weeks',
      fee: 'Rs.200',
    },
  ]);

  const removeFromCart = (id) => {
    setCart(cart.filter((course) => course.id !== id));
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 text-center">My Courses</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">You have not enrolled in any courses.</p>
      ) : (
        <div className="bg-white shadow-md p-6 rounded-xl">
          {cart.map((course) => (
            <div key={course.id} className="flex justify-between items-center mb-4 border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
                <p className="text-gray-500 text-sm">Duration: {course.duration}</p>
                <p className="text-gray-500 text-sm">Fee: {course.fee}</p>
              </div>
              <button 
                onClick={() => removeFromCart(course.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Unenroll
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Proceed to Learning Portal
            </button>
          </div>
        </div>
      )}
      <div className="text-center mt-6">
        <Link to="/courses" className="text-blue-500 underline">Browse More Courses</Link>
      </div>
    </div>
  );
};

export default Cart;
