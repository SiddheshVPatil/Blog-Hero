import React, { useState } from 'react'

export default function Register() {

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const response =await fetch('http://localhost:5000/user/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({name,password})
    });
    if (response.ok) {
      setName('');
      setPassword('');
  }

  
  }



  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="User Name" className="form-label">Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name"  required/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="password" autoComplete="current-password" required />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
    </form>
</div>
  )
}
