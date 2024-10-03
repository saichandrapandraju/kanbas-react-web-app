import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="signup-container">
  <h2>Signup</h2>
  <form>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button type="submit">Signup</button>
  </form>
</div>
);}
