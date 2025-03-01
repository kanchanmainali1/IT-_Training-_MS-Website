// src/pages/CoursePage.jsx
import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import CourseFilter from '../components/CourseFilter';
import DemoBooking from '../components/DemoBooking';

const coursesData = [
  {
    id: '1',
    category: 'Programming',
    title: 'Learn Python',
    description: 'Beginner friendly Python course.',
    skillLevel: 'Beginner',
    durationType: 'Short-term',
    price: 10000,
    popularity: 5,
    date: '2025-01-01',
  },
  {
    id: '2',
    category: 'Web Development',
    title: 'Mastering JavaScript',
    description: 'Advanced JavaScript course.',
    skillLevel: 'Advanced',
    durationType: 'Long-term',
    price: 20000,
    popularity: 8,
    date: '2025-02-01',
  },
  {
    id: '3',
    category: 'Data Science & Analytics',
    title: 'Data Analysis with R',
    description: 'Comprehensive R programming course.',
    skillLevel: 'Intermediate',
    durationType: 'Short-term',
    price: 15000,
    popularity: 6,
    date: '2025-03-01',
  },
  {
    id: '4',
    category: 'Graphic Design',
    title: 'Adobe Illustrator Masterclass',
    description: 'Learn professional graphic design skills.',
    skillLevel: 'Intermediate',
    durationType: 'Long-term',
    price: 25000,
    popularity: 7,
    date: '2025-04-01',
  },
];

const CoursePage = () => {
  const [filters, setFilters] = useState({
    category: '',
    skillLevel: '',
    durationType: '',
    priceRange: [0, 25000],
  });
  const [sortOption, setSortOption] = useState('');

  // Filter and sort courses
  const filteredCourses = coursesData
    .filter(course => {
      if (filters.category && course.category !== filters.category) return false;
      if (filters.skillLevel && course.skillLevel !== filters.skillLevel) return false;
      if (filters.durationType && course.durationType !== filters.durationType) return false;
      
      const minPrice = filters.priceRange[0] ?? 0;
      const maxPrice = filters.priceRange[1] ?? Number.MAX_VALUE;
      
      if (course.price < minPrice || course.price > maxPrice) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortOption === 'popularity') {
        return b.popularity - a.popularity;
      } else if (sortOption === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOption === 'priceLowToHigh') {
        return a.price - b.price;
      } else if (sortOption === 'priceHighToLow') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      

      <CourseFilter
        filters={filters}
        setFilters={setFilters}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      
     
      <div className="mt-4">
        <label className="block text-gray-700">Price Range: Rs. {filters.priceRange[0]} - Rs. {filters.priceRange[1]}</label>
        <input
          type="range"
          min="0"
          max="25000"
          step="1000"
          value={filters.priceRange[1]}
          onChange={(e) => setFilters({...filters, priceRange: [0, Number(e.target.value)]})}
          className="w-full mt-2"
        />
      </div>
      
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-gray-600">No courses found in this price range.</p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
