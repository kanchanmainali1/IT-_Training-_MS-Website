import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import StudentPortal from "./pages/StudentPortal";
import InstructorPortal from "./pages/InstructorPortal";
import Admissions from "./pages/Admissions";
import JobPlacement from "./pages/JobPlacement";
import LoginSignupPage from "./pages/LoginSignUp";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetails";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/instructor-portal" element={<InstructorPortal />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/job-placement" element={<JobPlacement />} />
          <Route path="/login" element={<LoginSignupPage />} /> 
          <Route path="/aboutus" element={<AboutUs />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
