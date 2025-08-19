import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginSignupPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const switchToSignup = () => {
    setIsLogin(false);
    setMessage("");
    setError("");
  };

  const switchToLogin = () => {
    setIsLogin(true);
    setMessage("");
    setError("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email: formData.email,
        password: formData.password
      });

      setMessage(res.data.message);
      setError("");
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      setMessage("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/user/createUser", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      setMessage(res.data.message);
      setError("");
      setIsLogin(true);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-10">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={switchToLogin}
            className={`px-6 py-2 rounded-l-lg font-medium transition ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={switchToSignup}
            className={`px-6 py-2 rounded-r-lg font-medium transition ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Messages */}
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        {message && <div className="mb-4 text-green-600 text-center">{message}</div>}

        {/* Forms */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Login
            </button>
            <p className="text-center text-gray-600">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={switchToSignup}
                className="text-blue-600 font-medium hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Create Account
            </button>
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={switchToLogin}
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
