import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import OpenPost from './components/OpenPost';

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/CreatePost" element={<CreatePost/>} />
          <Route path="/OpenPost" element={<OpenPost/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
