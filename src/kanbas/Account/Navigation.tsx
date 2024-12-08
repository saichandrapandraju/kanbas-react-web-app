import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
 const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
 const active = (path: string) => (pathname.includes(path) ? "active" : "");
 const { pathname } = useLocation();


  return (
    <div id="wd-account-navigation">
    <Link to="/Kanbas/Account/Signin">Signin</Link>
    <Link to="/Kanbas/Account/Signup">Signup</Link>
    <Link to="/Kanbas/Account/Profile">Profile</Link>
    {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}

  </div>
);}
