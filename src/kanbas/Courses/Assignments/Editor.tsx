import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from '../../Database';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const [assignment, setAssignment] = useState({_id: "1", title: "", course: "", dueDate: "", points: 1, description: "", group : ""});

    useEffect(() => {
        // Retrieve assignment from the database's assignments object
        const foundAssignment = db.assignments.find(a => a._id === aid);
        if (foundAssignment) {
            setAssignment(foundAssignment);
        } else {
            
        }
    }, [aid]);

    if (!assignment || Object.keys(assignment).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            {assignment._id}
            <h2>{assignment.title}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
                    <input type="text" className="form-control" id="assignment-name" defaultValue={assignment.title ??"sm"} />
                </div>

                <div className="mb-3">
                    <label htmlFor="assignment-description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="assignment-description" 
                        rows={6}
                        defaultValue={assignment.description}
                    ></textarea>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="points" className="form-label">Points</label>
                        <input type="number" className="form-control" id="points" defaultValue={assignment.points} />
                    </div>
                    <div className="col">
                        <label htmlFor="assignment-group" className="form-label">Assignment Group</label>
                        <select className="form-select" id="assignment-group" defaultValue={assignment.group}>
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="quizzes">QUIZZES</option>
                            <option value="project">PROJECT</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="due-date" className="form-label">Due</label>
                    <input type="datetime-local" className="form-control" id="due-date" defaultValue={assignment.dueDate} />
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="available-from" className="form-label">Available from</label>
                        <input type="datetime-local" className="form-control" id="available-from" defaultValue={assignment.dueDate} />
                    </div>
                    <div className="col">
                        <label htmlFor="available-until" className="form-label">Until</label>
                        <input type="datetime-local" className="form-control" id="available-until" defaultValue={assignment.dueDate} />
                    </div>
                </div>

                <div className="text-end mt-4">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-outline-secondary me-2">Cancel</Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
                </div>
            </form>
        </div>
    );
}
