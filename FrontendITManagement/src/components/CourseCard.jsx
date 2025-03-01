// src/components/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <Link to={`/courses/${course.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
