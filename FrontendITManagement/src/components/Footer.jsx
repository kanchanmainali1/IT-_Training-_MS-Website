import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">IT Training Hub</h2>
          <p className="text-sm leading-relaxed">
            We provide world-class training and workshops in 
            software development, cloud computing, data science, 
            and more — helping you shape your IT career with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Courses</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Events</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Popular Courses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Popular Courses</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">MERN Stack Development</a></li>
            <li><a href="#" className="hover:text-blue-400">Data Science with Python</a></li>
            <li><a href="#" className="hover:text-blue-400">Cloud & DevOps Essentials</a></li>
            <li><a href="#" className="hover:text-blue-400">UI/UX Design Fundamentals</a></li>
            <li><a href="#" className="hover:text-blue-400">Ethical Hacking Basics</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> 
              Kumaripati, Lalitpur, Nepal
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" /> 
              +977 9802302087
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> 
              support@ittraininghub.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} IT Training Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
