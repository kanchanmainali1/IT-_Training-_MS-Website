// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto p-6">
        <p>Blog post not found</p>
        <Link to="/blog" className="text-blue-500 underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/blog" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      <div>
        <h4 className="font-semibold">Tags:</h4>
        <ul className="flex space-x-2">
          {post.tags.map((tag, index) => (
            <li key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
