import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginSignupPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAnimate(true);
  }, []);

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
      navigate("/"); // Redirect to home after login
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
      setIsLogin(true); // Switch to login after successful registration
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className={`bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-8 transform transition-all duration-500 ease-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="relative mb-8">
          <div className="flex justify-center gap-8">
            <button onClick={switchToLogin} className={`text-xl font-semibold ${isLogin ? "text-blue-600" : "text-slate-400"} transition-colors duration-300`}>
              Login
            </button>
            <button onClick={switchToSignup} className={`text-xl font-semibold ${!isLogin ? "text-blue-600" : "text-slate-400"} transition-colors duration-300`}>
              Sign Up
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 rounded-full">
            <div className={`absolute h-full bg-blue-600 rounded-full transition-all duration-500 ease-out ${
              isLogin ? "w-1/2 left-0" : "w-1/2 left-1/2"
            }`} />
          </div>
        </div>

        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        {message && <div className="mb-4 text-green-500 text-center">{message}</div>}

        <div className="relative overflow-hidden h-96">
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-5">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full p-3 border rounded-lg" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Password" className="w-full p-3 border rounded-lg" />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">Login</button>
              <p className="text-center text-slate-600">Don't have an account? <button type="button" onClick={switchToSignup} className="text-blue-600 underline">Sign Up</button></p>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-5">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="w-full p-3 border rounded-lg" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full p-3 border rounded-lg" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Password" className="w-full p-3 border rounded-lg" />
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="Confirm Password" className="w-full p-3 border rounded-lg" />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">Create Account</button>
              <p className="text-center text-slate-600">Already have an account? <button type="button" onClick={switchToLogin} className="text-blue-600 underline">Login</button></p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
