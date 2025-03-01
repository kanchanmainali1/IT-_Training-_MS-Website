// src/pages/Blog.jsx
import React from 'react';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    id: '1',
    title: "Latest IT Industry Trends",
    excerpt: "Explore cutting-edge trends in the IT industry, including artificial intelligence, cloud computing, and cybersecurity.",
    content: "Full content for IT industry trends blog post goes here. This article delves into AI innovations, cloud technology breakthroughs, and the evolving landscape of cybersecurity.",
    date: "2025-02-01",
    tags: ["IT Trends", "Technology"],
  },
  {
    id: '2',
    title: "Learning Tips for Programming",
    excerpt: "Boost your coding skills with proven learning strategies and practical programming tips.",
    content: "Full content for learning tips for programming blog post goes here. Discover effective study habits, practical exercises, and project-based learning strategies to excel in programming.",
    date: "2025-02-15",
    tags: ["Programming", "Learning Tips"],
  },
  {
    id: '3',
    title: "Career Guidance in Tech Fields",
    excerpt: "Navigate your tech career with expert advice on skill development, interviews, and professional growth.",
    content: "Full content for career guidance in tech fields blog post goes here. Gain insights into career planning, networking strategies, and essential skills for success in the tech industry.",
    date: "2025-03-01",
    tags: ["Career Guidance", "Tech Careers"],
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
      <p className="text-gray-700 mb-8">
        Stay updated with the latest IT industry trends, learn programming tips, and discover career guidance in tech fields. Our keyword-rich articles are designed to boost website traffic and provide valuable insights to potential students.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
