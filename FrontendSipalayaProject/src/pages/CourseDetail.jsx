import React from "react";
const CourseDetail = () => {
    return (
      <div className="p-8">
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">Course Title</h1>
          <p className="mt-2">An in-depth course on web development.</p>
          <div className="mt-4">
            <button className="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600">Enroll Now</button>
          </div>
        </section>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Course Syllabus</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>Introduction to Web Development</li>
            <li>HTML & CSS Basics</li>
            <li>JavaScript Fundamentals</li>
            <li>React.js Overview</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CourseDetail;