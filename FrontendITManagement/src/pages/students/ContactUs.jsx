import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    purpose: "Course Inquiry",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md p-6 rounded-xl"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Purpose</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Course Inquiry</option>
              <option>Technical Support</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Submit
          </button>
        </form>

        <div>
          <h3 className="text-xl font-semibold mb-4">Location Details</h3>
          <p className="text-gray-700">Kathmandu, Nepal</p>
          <p className="text-gray-700">Phone: +977 1 1234567</p>
          <p className="text-gray-700">Email: contact@example.com</p>

          <div className="mt-4">
            <iframe
              className="w-full h-64 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4824189721126!2d85.31749781506178!3d27.70169278279224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1979a1c45e8b%3A0x55a57b2b6b7a2d5!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1641854074693!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-6">
        <a href="#" className="text-blue-600 text-2xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-blue-500 text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-pink-500 text-2xl">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
