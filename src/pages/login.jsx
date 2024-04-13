import React, { useState } from 'react';
import './login.scss';
import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import classes from "/.module.scss";
import data from "bootstrap/js/src/dom/data";
import {apiService} from "../api/api.axios";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const {isAuth,setIsAuth}=useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    const dataUser = {
      username: data.username,
      password: data.password
    }
    console.log(dataUser)
    try {
      const res = await apiService.post('/api/v1/auth/authenticate', dataUser)
      localStorage.setItem('token',res.data.access_token)
      setIsAuth(res.data.access_token)
      console.log(isAuth)
      console.log(res);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };


  return (
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-heading">Login</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="input-container">
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {error.username?.type === 'required' && (
                <p className={'error'} role="alert">
                  Email Address is required
                </p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error.password?.type === 'required' && (
                <p role="alert" className={'error'}>
                  Passwords is required
                </p>
            )}
          </div>
          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
      </div>
  );
};

export default LoginPage;
