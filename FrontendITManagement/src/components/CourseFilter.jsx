import React from 'react';

const CourseFilter = ({ filters, setFilters, sortOption, setSortOption }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="bg-gray-50 p-4 rounded flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-4">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science & Analytics">Data Science & Analytics</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>

        <select
          name="skillLevel"
          value={filters.skillLevel}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Skill Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          name="durationType"
          value={filters.durationType}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Durations</option>
          <option value="Short-term">Short-term</option>
          <option value="Long-term">Long-term</option>
        </select>

        {/* Fixed Price Range Selection */}
        <select
          name="priceRange"
          value={filters.priceRange[1]}
          onChange={(e) => {
            const maxPrice = Number(e.target.value);
            setFilters({ ...filters, priceRange: [0, maxPrice] });
          }}
          className="border p-2 rounded"
        >
          <option value="25000">Up to Rs. 25000</option>
          <option value="10000">Up to Rs. 10000</option>
          <option value="15000">Up to Rs. 15000</option>
          <option value="20000">Up to Rs. 20000</option>
        </select>
      </div>

      <div className="mt-4 md:mt-0">
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="popularity">Popularity</option>
          <option value="newest">Newest First</option>
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CourseFilter;
