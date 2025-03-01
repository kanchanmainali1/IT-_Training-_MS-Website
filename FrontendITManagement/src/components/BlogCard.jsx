// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="border rounded p-4 bg-white shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-2">{post.excerpt}</p>
      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
      <Link to={`/blog/${post.id}`} className="text-blue-500 underline">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
