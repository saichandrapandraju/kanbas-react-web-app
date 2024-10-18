import React from "react";
import { Link } from "react-router-dom";
import './index.css'
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Kanbas/Dashboard');
  };
    return (
      <div className="signin-container">
      <h2>Signin</h2>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={handleClick}>Signin</button>
      </form>
    </div>
    
    );}
    