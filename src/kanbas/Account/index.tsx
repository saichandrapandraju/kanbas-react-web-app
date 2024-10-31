import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AccountNavigation from './Navigation';
import Signin from './Signin';
import Profile from './profile';
import Signup from './signup';
import { useSelector } from "react-redux";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-screen" className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <AccountNavigation />
        </div>
        <div className="col-md-9">
          <Routes>
          <Route path="/" element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>}/>
          <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
