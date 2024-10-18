import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  // Function to filter users based on enrollment
  const getEnrolledUsers = (courseId: string) => {
    // Find all enrollments related to the given course ID
    const enrolledUserIds = enrollments
      .filter((enrollment) => enrollment.course === courseId)
      .map((enrollment) => enrollment.user);
    console.log(enrolledUserIds)
    // Return users whose ID matches the enrolled user IDs
    const k = users.filter((usr) => enrolledUserIds.includes(usr._id));
    console.log(k);
    return k;
  };

  const enrolledUsers = getEnrolledUsers(cid ?? "");

  return (
    <div id="wd-people-table">
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
          {enrolledUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
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
