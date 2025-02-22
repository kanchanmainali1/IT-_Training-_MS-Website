import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import CourseCard from './CourseCard';
import DemoClass from './DemoClass';

// Sample Course Data
const courses = [
  {
    id: 1,
    category: 'Programming',
    title: 'Python for Beginners',
    description: 'Learn Python from scratch with hands-on projects.',
    syllabus: ['Introduction', 'Data Types', 'Loops & Functions', 'Final Project'],
    duration: '8 weeks',
    fee: 250,
    instructor: {
      name: 'John Doe',
      photo: 'https://via.placeholder.com/80',
      bio: 'Senior Python Developer with 10+ years of experience.',
    },
    skillLevel: 'Beginner',
    enrollmentDeadline: 'March 15, 2025',
    popularity: 5,
  },
  {
    id: 2,
    category: 'Web Development',
    title: 'Full-Stack Web Development',
    description: 'Master HTML, CSS, JS, React, and Node.js.',
    syllabus: ['HTML/CSS', 'JavaScript', 'React Basics', 'Node.js'],
    duration: '12 weeks',
    fee: 400,
    instructor: {
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/80',
      bio: 'Full-Stack Engineer with 7+ years in tech.',
    },
    skillLevel: 'Intermediate',
    enrollmentDeadline: 'April 1, 2025',
    popularity: 8,
  },
];

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [sortOption, setSortOption] = useState('popularity');

  const categories = ['All', 'Programming', 'Web Development', 'Data Science & Analytics', 'Graphic Design'];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilteredCourses(category === 'All' ? courses : courses.filter((course) => course.category === category));
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    const sortedCourses = [...filteredCourses].sort((a, b) => {
      if (option === 'popularity') return b.popularity - a.popularity;
      if (option === 'newest') return b.id - a.id;
      if (option === 'priceLowToHigh') return a.fee - b.fee;
      if (option === 'priceHighToLow') return b.fee - a.fee;
      return 0;
    });
    setFilteredCourses(sortedCourses);
  };

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">Explore Our Courses</h2>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />

      {/* Course Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <DemoClass />
    </section>
  );
};

export default CourseSection;
