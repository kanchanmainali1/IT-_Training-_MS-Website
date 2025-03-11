// src/pages/CourseDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DemoBooking from '../../components/DemoBooking';

const courseDetailsData = {
  '1': {
    id: '1',
    title: 'Learn Python',
    description: 'Beginner friendly Python course.',
    syllabus: [
      'Introduction to Python',
      'Variables and Data Types',
      'Control Structures',
      'Functions',
      'Modules and Packages',
    ],
    duration: '8 weeks',
    fee: 'Rs.100',
    instructor: {
      name: 'John Doe',
      photo: 'https://via.placeholder.com/150',
      bio: 'Experienced Python developer with 10 years in the industry.',
      experience: '10 years',
      certifications: ['Certified Python Developer'],
    },
    enrollmentDeadline: '2025-03-31',
    prerequisites: 'Basic programming knowledge',
  },
  '2': {
    id: '2',
    title: 'Mastering JavaScript',
    description: 'Advanced JavaScript course.',
    syllabus: [
      'Advanced Functions',
      'Asynchronous Programming',
      'DOM Manipulation',
      'Frameworks and Libraries',
      'Testing and Debugging',
    ],
    duration: '10 weeks',
    fee: 'Rs.200',
    instructor: {
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/150',
      bio: 'JavaScript expert with 8 years of professional experience.',
      experience: '8 years',
      certifications: ['JavaScript Specialist'],
    },
    enrollmentDeadline: '2025-04-15',
    prerequisites: 'Solid understanding of JavaScript basics',
  },
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseDetailsData[courseId];
  const [cart, setCart] = useState([]);

  if (!course) {
    return <div className="p-4">Course not found</div>;
  }

  const addToCart = () => {
    setCart([...cart, course]);
    alert(`${course.title} has been added to your cart!`);
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Courses
      </Link>
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="mb-4 text-gray-700">{course.description}</p>

      <button
        onClick={addToCart}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Add to Cart
      </button>

      {/* Syllabus and Demo Booking Side by Side */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 bg-gray-50 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Syllabus</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {course.syllabus.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
          <DemoBooking />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded shadow">
          <h3 className="text-xl font-semibold">Duration</h3>
          <p>{course.duration}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded shadow">
          <h3 className="text-xl font-semibold">Fee</h3>
          <p>{course.fee}</p>
        </div>
      </div>

      <div className="flex items-center bg-white p-4 rounded shadow mb-6">
        <img
          src={course.instructor.photo}
          alt={course.instructor.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
          <p className="text-gray-600">{course.instructor.bio}</p>
          <p className="text-sm text-gray-500">Experience: {course.instructor.experience}</p>
          <p className="text-sm text-gray-500">
            Certifications: {course.instructor.certifications.join(', ')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded shadow">
          <h4 className="font-semibold">Enrollment Deadline</h4>
          <p>{course.enrollmentDeadline}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded shadow">
          <h4 className="font-semibold">Prerequisites</h4>
          <p>{course.prerequisites}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
