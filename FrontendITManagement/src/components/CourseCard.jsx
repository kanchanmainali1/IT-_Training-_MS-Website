import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CourseCard = ({ course, refreshCourses }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/instructor/courses/${course._id}`);
      refreshCourses(); // refresh list after deletion
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="border p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p>{course.description}</p>
      </div>
      <div className="space-x-2">
        <Link
          to={`/instructor/courses/${course._id}/edit`}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
