// src/components/OnlineRegistration.jsx
import React, { useState } from 'react';

const OnlineRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    paymentPreference: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can integrate with an API to process the registration
    alert("Registration submitted:\n" + JSON.stringify(formData, null, 2));
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: '',
      paymentPreference: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Online Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Your email address"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Your phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="course" className="block font-semibold mb-1">Selected Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select a course</option>
            <option value="python">Learn Python</option>
            <option value="javascript">Mastering JavaScript</option>
            {/* Add more courses as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="paymentPreference" className="block font-semibold mb-1">Payment Preference</label>
          <select
            id="paymentPreference"
            name="paymentPreference"
            value={formData.paymentPreference}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select payment method</option>
            <option value="esewa">eSewa</option>
            <option value="khalti">Khalti</option>
            <option value="stripe">Stripe</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default OnlineRegistration;
