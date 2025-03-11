import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const StudentProgress = () => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/instructor/student-progress')
      .then(response => {
        setProgress(response.data.progress);
      })
      .catch(error => console.error('Error fetching student progress:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Student Progress & Performance</h2>
        {progress ? (
          <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(progress, null, 2)}</pre>
        ) : (
          <p>No progress data available.</p>
        )}
      </div>
    </div>
  );
};

export default StudentProgress;
