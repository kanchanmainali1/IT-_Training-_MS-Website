import React, { useState, useEffect } from 'react';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    setAnimate(true);
  }, []);

  const switchToSignup = () => {
    setIsLogin(false);
    setFormMessage("Create a new account to get started");
  };

  const switchToLogin = () => {
    setIsLogin(true);
    setFormMessage("Welcome back! Please login to continue");
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className={`bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-8 transform transition-all duration-500 ease-out ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="relative mb-8">
          <div className="flex justify-center gap-8">
            <button
              onClick={switchToLogin}
              className={`text-xl font-semibold z-10 ${
                isLogin ? 'text-blue-600' : 'text-slate-400'
              } transition-colors duration-300`}
            >
              Login
            </button>
            <button
              onClick={switchToSignup}
              className={`text-xl font-semibold z-10 ${
                !isLogin ? 'text-blue-600' : 'text-slate-400'
              } transition-colors duration-300`}
            >
              Sign Up
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 rounded-full">
            <div
              className={`absolute h-full bg-blue-600 rounded-full transition-all duration-500 ease-out ${
                isLogin ? 'w-1/2 left-0' : 'w-1/2 left-1/2'
              }`}
            />
          </div>
        </div>

        {formMessage && (
          <div className="mb-6 text-center text-slate-600">
            {formMessage}
          </div>
        )}

        <div className="relative overflow-hidden h-96">
          {/* Login Form */}
          <form
            className={`absolute w-full space-y-6 transition-all duration-700 ease-in-out ${
              isLogin
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="space-y-5">
              <div className="group relative">
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-3 top-3 text-slate-500 bg-slate-50 px-1 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                  Email
                </label>
              </div>

              <div className="group relative">
                <input
                  type="password"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-3 top-3 text-slate-500 bg-slate-50 px-1 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                  Password
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Login
            </button>

            <div className="text-center text-slate-600 mt-4">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={switchToSignup}
                className="text-blue-600 hover:text-blue-700 font-medium underline transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Signup Form */}
          <form
            className={`absolute w-full space-y-6 transition-all duration-700 ease-in-out ${
              !isLogin
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="space-y-5">
              <div className="group relative">
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-3 top-3 text-slate-500 bg-slate-50 px-1 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                  Email
                </label>
              </div>

              <div className="group relative">
                <input
                  type="password"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-3 top-3 text-slate-500 bg-slate-50 px-1 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                  Password
                </label>
              </div>

              <div className="group relative">
                <input
                  type="password"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-3 top-3 text-slate-500 bg-slate-50 px-1 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                  Confirm Password
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Create Account
            </button>

            <div className="text-center text-slate-600 mt-4">
              Already have an account?{' '}
              <button
                type="button"
                onClick={switchToLogin}
                className="text-blue-600 hover:text-blue-700 font-medium underline transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;