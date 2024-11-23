// src/Kanbas/Courses/Assignments/Editor.tsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment, setAssignment } from './reducer';
import "bootstrap/dist/css/bootstrap.min.css";
import * as assignmentsClient from './client';
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { assignment } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    if (currentUser?.role !== "FACULTY") {
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  }, [currentUser, cid, navigate]);
  const fetchAssignment = async () => {
    if (aid) {
      const response = await assignmentsClient.findAssignmentById(aid);
      dispatch(setAssignment(response));
    }
  };
  useEffect(() => {
    fetchAssignment();
  }, [aid]);
  const handleSave = () => {
    handleSaveAssignment();
  };
  const handleSaveAssignment = async () => {
    try {
      if (aid !== "new") {
        const status = await assignmentsClient.updateAssignment(aid as string, { ...assignment, course: cid });
        dispatch(updateAssignment(status));
      } else {
        console.log("Creating new assignment", assignment.title);
        const newAssignment = await assignmentsClient.createAssignment(cid as string, { ...assignment, course: cid });
        dispatch(addAssignment(newAssignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  // const handleSave = () => {
  //   if (aid === "new") {
  //     dispatch(addAssignment({ ...assignment, course: cid }));
  //   } else {
  //     dispatch(updateAssignment(assignment));
  //   }
  //   navigate(`/Kanbas/Courses/${cid}/Assignments`);
  // };

  return (
    <div className="container">
      <h3>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h3>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Assignment Name</label>
          <input
            type="text"
            className="form-control"
            value={assignment.title}
            onChange={(e) => dispatch(setAssignment({ 
              ...assignment, 
              title: e.target.value 
            }))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={5}
            value={assignment.description}
            onChange={(e) => dispatch(setAssignment({ 
              ...assignment, 
              description: e.target.value 
            }))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Points</label>
          <input
            type="number"
            className="form-control"
            value={assignment.points}
            onChange={(e) => dispatch(setAssignment({ 
              ...assignment, 
              points: parseInt(e.target.value) 
            }))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            value={assignment.dueDate}
            onChange={(e) => dispatch(setAssignment({ 
              ...assignment, 
              dueDate: e.target.value 
            }))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Available From</label>
          <input
            type="date"
            className="form-control"
            value={assignment.availableFromDate}
            onChange={(e) => dispatch(setAssignment({ 
              ...assignment, 
              availableFromDate: e.target.value 
            }))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Available Until</label>
          <input
            type="date"
            className="form-control"
            value={assignment.availableUntilDate}
            onChange={(e) => dispatch(setAssignment({ 
              ...assignment, 
              availableUntilDate: e.target.value 
            }))}
          />
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="btn btn-danger me-2"
            onClick={() => handleSave()}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}