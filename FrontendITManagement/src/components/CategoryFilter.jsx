import React from 'react';

const CategoryFilter = ({ categories, activeCategory, handleCategoryChange, sortOption, handleSortChange }) => (
  <>
    {/* Category Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-6 py-2 rounded-lg transition ${
            activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Sort Options */}
    <div className="flex justify-end mb-6">
      <label className="mr-2 text-gray-600">Sort by:</label>
      <select
        value={sortOption}
        onChange={(e) => handleSortChange(e.target.value)}
        className="p-2 rounded-lg border-gray-300"
      >
        <option value="popularity">Popularity</option>
        <option value="newest">Newest First</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  </>
);

export default CategoryFilter;
