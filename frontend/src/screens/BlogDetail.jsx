import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import '../index.css';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id, 10));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail">
        <h1>{post.title}</h1>
        <p><em>By {post.author} on {post.date} | Category: {post.category}</em></p>
        <img 
          src={post.image} 
          alt={post.title} 
          className="blog-image"
        />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default BlogDetail;
