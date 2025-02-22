import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const DemoClass = () => (
  <div className="mt-12 text-center">
    <h3 className="text-3xl font-semibold mb-4">Book a Free Demo Class</h3>
    <p className="mb-4 text-gray-600">Schedule a demo to explore our teaching style.</p>
    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
      <FaCalendarAlt className="inline mr-2" />
      Schedule a Demo
    </button>
  </div>
);

export default DemoClass;
