import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaPlus, FaEllipsisV, FaTrash, FaPencilAlt } from 'react-icons/fa';
import { deleteAssignment, setAssignment, setAssignments } from './reducer';
import GreenCheckmark from '../Modules/GreenCheckmark';
import './Assignments.css';
import * as assignmentsClient from './client';
export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get assignments from Redux store
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    try {
      await assignmentsClient.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    } catch (error) {
      console.error("Failed to delete assignment:", error);
    }
  };
  // Filter assignments for current course
 

  const handleDelete = (e: React.MouseEvent, assignmentId: string) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      handleDeleteAssignment(assignmentId);
    }
  };

  const handleEdit = (e: React.MouseEvent, assignment: any) => {
    e.preventDefault();
    dispatch(setAssignment(assignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`);
  };

  const handleAddAssignment = () => {
    dispatch(setAssignment({
      _id: "",
      title: "New Assignment",
      course: cid,
      description: "",
      points: 100,
      dueDate: "",
      availableFromDate: "",
      availableUntilDate: ""
    }));
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  const isFaculty = currentUser?.role === "FACULTY";
  useEffect(() => {
    fetchAssignments();
  }, [cid]);
  return (
    <div id="wd-assignments" className="container">
      <div className="search-group-wrapper d-flex align-items-center mb-3">
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            id="wd-search-assignment"
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {isFaculty && (
          <>
            <button id="wd-add-assignment-group" className="btn btn-outline-secondary ms-2">
              <FaPlus /> Group
            </button>
            <button 
              id="wd-add-assignment" 
              className="btn btn-danger ms-2"
              onClick={handleAddAssignment}
            >
              <FaPlus /> Assignment
            </button>
          </>
        )}
      </div>

      <div id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">
          ASSIGNMENTS <span className="percentage">40% of Total</span>
        </h3>
        {/* {isFaculty && (
          <button className="btn btn-outline-secondary btn-sm">
            <FaPlus /> Add
          </button>
        )} */}
      </div>

      <ul id="wd-assignment-list" className="list-group mt-3">
        {assignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex justify-content-between w-100">
              <div>
                <a
                  className="wd-assignment-link fw-bold text-decoration-none"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </a>
                <p className="mb-1">
                  Multiple Modules | Due {assignment.dueDate} | {assignment.points} pts
                </p>
                {assignment.availableFromDate && (
                  <small className="text-muted">
                    Available from {assignment.availableFromDate} until {assignment.availableUntilDate}
                  </small>
                )}
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                {isFaculty && (
                  <div className="ms-3">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={(e) => handleEdit(e, assignment)}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={(e) => handleDelete(e, assignment._id)}
                    >
                      <FaTrash />
                    </button>
                    <FaEllipsisV className="text-secondary" />
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}