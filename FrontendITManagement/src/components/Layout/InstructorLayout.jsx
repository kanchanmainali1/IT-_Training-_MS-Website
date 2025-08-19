// InstructorLayout.jsx
import React from "react";
// Optionally use a different Navbar if needed
import InstructorNavbar from "../components/InstructorNavbar.jsx";
import { Outlet } from "react-router-dom";

const InstructorLayout = () => (
  <>
    <InstructorNavbar />
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
  </>
);

export default InstructorLayout;
