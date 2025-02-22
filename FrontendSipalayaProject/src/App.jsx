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

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/instructor-portal" element={<InstructorPortal />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/job-placement" element={<JobPlacement />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
