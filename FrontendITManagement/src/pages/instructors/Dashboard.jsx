import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="p-6 bg-white shadow rounded">
        <h1 className="text-3xl font-bold mb-4">Instructor Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/instructor/courses"
            className="block p-4 bg-blue-100 rounded hover:bg-blue-200 text-center"
          >
            Manage Courses
          </Link>
          <Link
            to="/instructor/student-progress"
            className="block p-4 bg-green-100 rounded hover:bg-green-200 text-center"
          >
            View Student Progress
          </Link>
          <Link
            to="/instructor/resource-upload"
            className="block p-4 bg-yellow-100 rounded hover:bg-yellow-200 text-center"
          >
            Upload Resources
          </Link>
          <Link
            to="/instructor/assignment-grading"
            className="block p-4 bg-red-100 rounded hover:bg-red-200 text-center"
          >
            Grade Assignments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
