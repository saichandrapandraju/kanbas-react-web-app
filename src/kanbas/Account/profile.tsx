import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState<any>({});
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  // Fetch profile data when component mounts
  useEffect(() => {
    // If no user is logged in, redirect to signin
    if (!currentUser) {
      return navigate("/Kanbas/Account/Signin");
    }
    // Initialize profile state with current user data
    setProfile(currentUser);
  }, [currentUser, navigate]);

  // Handle sign out
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };


  // Handle profile updates
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setCurrentUser({ ...currentUser, ...profile }));
  };

  return (
    <div className="profile-container">
      <h3>Profile</h3>
      {profile && (
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="wd-username"
              value={profile.username || ""}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="wd-password"
              value={profile.password || ""}
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="wd-firstname"
              value={profile.firstName || ""}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="wd-lastname"
              value={profile.lastName || ""}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="wd-email"
              value={profile.email || ""}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select 
              className="form-control"
              id="wd-role"
              value={profile.role || "STUDENT"}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            >
              <option value="STUDENT">Student</option>
              <option value="FACULTY">Faculty</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="wd-dob"
              value={profile.dob || ""}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            />
          </div>

          <div className="d-grid gap-2">
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={signout}
              id="wd-signout-btn"
            >
              Sign Out
            </button>
          </div>
        </form>
      )}
    </div>
  );
}