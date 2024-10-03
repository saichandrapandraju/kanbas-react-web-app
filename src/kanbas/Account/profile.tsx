import { Link } from "react-router-dom";


export default function Profile() {
  return (
    <div className="profile-container">
  <h2>Profile</h2>
  <form>
    <input type="text" placeholder="Username" value="alice" />
    <input type="password" placeholder="Password" value="123" />
    <input type="text" placeholder="Full Name" value="Alice" />
    <input type="text" placeholder="Location" value="Wonderland" />
    <input type="email" placeholder="Email" value="alice@wonderland.com" />
    <button type="button">Signout</button>
  </form>
</div>

);}
