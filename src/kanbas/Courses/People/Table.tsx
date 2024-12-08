import React from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import * as db from "../../Database";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  // const { cid } = useParams();
  // const { enrollments } = db;

  // Function to filter users based on enrollment
  // const getEnrolledUsers = (courseId: string) => {
  //   // Find all enrollments related to the given course ID
  //   const enrolledUserIds = enrollments
  //     .filter((enrollment) => enrollment.course === courseId)
  //     .map((enrollment) => enrollment.user);
  //   console.log(enrolledUserIds)
  //   // Return users whose ID matches the enrolled user IDs
  //   const k = users.filter((usr) => enrolledUserIds.includes(usr._id));
  //   console.log(k);
  //   return k;
  // };

  // const enrolledUsers = getEnrolledUsers(cid ?? "");

  return (
    <div id="wd-people-table">
      <PeopleDetails />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
              <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
