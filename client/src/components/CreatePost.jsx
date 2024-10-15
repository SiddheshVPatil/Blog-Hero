import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function CreatePost() {


    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const author = localStorage.getItem('username');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { title, summary, image, content, author };
        const response = await fetch('https://blog-hero.onrender.com/user/createpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        });
        if (response.ok)
        {
            setTitle('');
            setSummary('');
            setImage('');
            setContent('');
        }

        if (response.ok) {
            window.alert('Post created successfully!');
            navigate('/'); // Redirect to homepage or blog listing page after post creation
        } else {
            window.alert('Error creating post');
        }


    }


    return (
        <div className="container">
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="summary" className="form-label">Summary</label>
                    <textarea
                        className="form-control"
                        id="summary"
                        rows="3"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Blog Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Post</button>
            </form>
        </div>
    )
}
