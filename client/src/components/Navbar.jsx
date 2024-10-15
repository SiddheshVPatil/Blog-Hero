import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        setLoggedIn(false);
        navigate('/');  // Redirect to the home page after logout
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Blog Hero</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            
                            {!loggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/CreatePost">Create Post</Link>
                                    </li>

                                    <li>
                                        <button className='btn btn-danger btn-md' onClick={handleLogout}>Logout</button>
                                    </li>
                                </>
                            )}

                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}
