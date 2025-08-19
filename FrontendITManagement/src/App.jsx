import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/students/Homepage.jsx";
import Courses from "./pages/students/Courses.jsx";
import Admissions from "./pages/students/Admissions.jsx";
import Cart from "./pages/students/Cart.jsx";
import ContactUs from "./pages/students/ContactUs.jsx"; 
import JobPlacement from "./pages/students/JobPlacement.jsx";
import LoginSignup from "./pages/students/LoginSignUp.jsx";
import AboutUs from "./pages/students/AboutUs.jsx";
import Blog from "./pages/students/Blog.jsx";
import BlogDetail from "./pages/students/BlogDetails.jsx";
import Dashboard from "./pages/instructors/Dashboard.jsx";
import CourseDetail from "./pages/students/CourseDetail.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/job-placement" element={<JobPlacement />} />
          <Route path="/login" element={<LoginSignup />} /> 
          <Route path="/aboutus" element={<AboutUs />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/instructor/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
