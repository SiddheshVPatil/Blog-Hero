import React from 'react'
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import "./OpenPost.css"
export default function OpenPost() {

    const location = useLocation();

    const {post}=location.state;
    // const navigate = useNavigate();

  return (
    <div className="open-post">
      <img src={post.image} />
      <div className='text-content'>
        <p className="post-title">{post.title}</p>
      <p className="post-author"><span>Author: </span>{post.author}</p>
      <p className="post-summary"><span>Summary: </span>{post.summary}</p>
      <p className="post-content"><span>Content: </span>{post.content}</p>
      </div>
      
    </div>
  )
}
