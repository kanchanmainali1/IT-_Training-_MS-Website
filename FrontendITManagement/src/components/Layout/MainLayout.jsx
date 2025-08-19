// MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Navbar />
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default MainLayout;
