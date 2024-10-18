import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Kanbas/Account/Profile');
  };
  return (
    <div className="signup-container">
  <h2>Signup</h2>
  <form>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button type="submit" onClick={handleClick}>Signup</button>
  </form>
</div>
);}
