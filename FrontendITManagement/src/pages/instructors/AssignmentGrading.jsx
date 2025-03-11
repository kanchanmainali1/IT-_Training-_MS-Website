import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const AssignmentGrading = () => {
  const [assignmentId, setAssignmentId] = useState('');
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleGradeAssignment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/instructor/assignments/${assignmentId}/grade`,
        { grade, feedback }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error grading assignment:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Grade Assignment</h2>
        <form onSubmit={handleGradeAssignment} className="space-y-4">
          <div>
            <label className="block text-gray-700">Assignment ID</label>
            <input
              type="text"
              value={assignmentId}
              onChange={(e) => setAssignmentId(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Grade</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit Grade
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default AssignmentGrading;
