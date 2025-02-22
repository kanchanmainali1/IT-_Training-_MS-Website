import React from 'react';

const CourseCard = ({ course }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
    <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
    <p className="text-gray-600 mb-4">{course.description}</p>

    <div className="mb-4">
      <strong>Duration:</strong> {course.duration}
    </div>
    <div className="mb-4">
      <strong>Fee:</strong> Rs.{course.fee}
    </div>
    <div className="mb-4">
      <strong>Enrollment Deadline:</strong> {course.enrollmentDeadline}
    </div>

    <h4 className="text-lg font-semibold mb-2">Instructor</h4>
    <div className="flex items-center gap-4 mb-4">
      <img src={course.instructor.photo} alt={course.instructor.name} className="w-12 h-12 rounded-full" />
      <div>
        <p>{course.instructor.name}</p>
        <p className="text-sm text-gray-500">{course.instructor.bio}</p>
      </div>
    </div>

    <button className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
      Enroll Now
    </button>
  </div>
);

export default CourseCard;
