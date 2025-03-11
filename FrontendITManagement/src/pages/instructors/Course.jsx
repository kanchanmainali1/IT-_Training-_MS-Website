import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import CourseCard from '../../components/CourseCard';

const Course = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    axios.get('http://localhost:5000/api/instructor/courses')
      .then(response => {
        // Adjust based on API response structure. Assume response.data.courses exists.
        setCourses(response.data.courses || []);
      })
      .catch(error => console.error('Error fetching courses:', error));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="p-6 bg-white shadow rounded">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Courses</h2>
          <Link
            to="/instructor/courses/new"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create New Course
          </Link>
        </div>
        <div className="grid gap-4">
          {courses.map(course => (
            <CourseCard key={course._id} course={course} refreshCourses={fetchCourses} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
