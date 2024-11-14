import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
//import '../index.css';

const BlogPage = () => (
  <div className="blog-page">
    <h1>Our Blog</h1>
    <p>Stay updated with the latest in real estate investment, trends, and tips.</p>

    <div className="blog-list">
      {blogPosts.map(post => (
        <div key={post.id} className="blog-post">
          <img 
          src={post.image} 
          alt={post.title} 
          style={{ width: '200px', height: 'auto' }}
          />
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  </div>
);

export default BlogPage;