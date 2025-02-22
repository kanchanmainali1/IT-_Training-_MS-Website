import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [skillLevel, setSkillLevel] = useState('');

  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-1/3"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-1/4"
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
        </select>
        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-1/4"
        >
          <option value="">All Skill Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-auto">
          Find Courses
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
