import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./post.css"


export default function Post() {


  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://blog-heros.onrender.com/user/getposts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const openPost = (post) => {
    navigate('/OpenPost', { state: { post } }); // Navigate and pass the post data
  };

  return (

    <div className='post-body'>
      <h1>Blog Posts</h1>
      <div className="post-container">
        <div className="posts">
          {posts.map(post => (
            <div key={post._id} className="post">
              <div className="post-image">

                {post.image && <img src={post.image} alt={post.title} />}

              </div>
              <div className='post-text'>

                <h2 className='text-truncate'>{post.title}</h2>
                <p className='text-truncate'><strong>Author:</strong> {post.author}</p>
                <p ><strong>Summary:</strong> {post.summary}</p>
                <p>{post.content}</p>
                <button
                  style={{ border: 'none', color: 'blue', backgroundColor: 'transparent' }}
                  onClick={() => openPost(post)}>Open</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  )
}
