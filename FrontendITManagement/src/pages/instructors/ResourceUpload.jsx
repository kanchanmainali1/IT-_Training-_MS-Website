import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const ResourceUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('resource', file);

    try {
      const response = await axios.post('http://localhost:5000/api/instructor/resources', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading resource:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Upload Resource</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <input type="file" onChange={handleFileChange} className="block" />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Upload
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ResourceUpload;
