import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Loginpage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle login logic here
  };

  return (
    <div className='login-wide'>
    <div className="login-container p-5">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        
        <input
          type="text"
          id="username"placeholder='Username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="login-input"
        />        
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="login-input"
        />
        
        <button type="submit" className="login-button" onClick={handleSubmit}>Sign in</button>
      </form>
      <p className="login-forgot-password">
        Forgot password? <Link to="/sendotp" className='text-black font-bold'>Click here</Link>
      </p>
      <p className="login-register">
  New to RouteMate? <Link to="/register" className='text-black font-bold'>Register</Link>
</p>
    </div>
    </div>
  );
};

export default Login;