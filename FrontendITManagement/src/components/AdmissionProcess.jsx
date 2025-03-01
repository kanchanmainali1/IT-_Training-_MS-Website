// src/components/AdmissionProcess.jsx
import React from 'react';

const AdmissionProcess = () => {
  return (
    <div className="bg-gray-50 p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Steps to Enroll</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Browse and select a course.</li>
        <li>Register online.</li>
        <li>Make payment.</li>
        <li>Start the course.</li>
      </ol>
    </div>
  );
};

export default AdmissionProcess;
