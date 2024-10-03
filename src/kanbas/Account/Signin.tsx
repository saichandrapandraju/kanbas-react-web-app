import React from "react";
import { Link } from "react-router-dom";
import './index.css'
export default function Signin() {
    return (
      <div className="signin-container">
      <h2>Signin</h2>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Signin</button>
      </form>
    </div>
    
    );}
    