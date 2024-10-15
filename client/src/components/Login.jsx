import React, { useState } from 'react'
import { useNavigate, Navigate} from 'react-router-dom';
export default function Login() {



    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlelogin=async (e)=>{
        e.preventDefault();
    
        const response =await fetch('http://localhost:5000/user/login',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({name,password})
        });
        

      const result = await response.json();
      if (response.ok && result.status === 1) {
        // Redirect to the home page on successful login
        localStorage.setItem('username', name);
        
        navigate('/');
      } else {
        window.alert("Login failed.");
      }
      }




    return (
        <div className='container'>
            <form onSubmit={handlelogin}>
                <div className="mb-3">
                    <label htmlFor="User Name" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="name" required />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" required />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
