import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AssignmentEditor() {
    return (
        <div className="container mt-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
                    <input type="text" className="form-control" id="assignment-name" defaultValue="A1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="assignment-description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="assignment-description" 
                        rows={6}
                        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the Lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
                    ></textarea>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="points" className="form-label">Points</label>
                        <input type="number" className="form-control" id="points" defaultValue="100" />
                    </div>
                    <div className="col">
                        <label htmlFor="assignment-group" className="form-label">Assignment Group</label>
                        <select className="form-select" id="assignment-group">
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="quizzes">QUIZZES</option>
                            <option value="project">PROJECT</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="display-grade-as" className="form-label">Display Grade as</label>
                    <select className="form-select" id="display-grade-as">
                        <option value="percentage">Percentage</option>
                        <option value="points">Points</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="submission-type" className="form-label">Submission Type</label>
                    <select className="form-select" id="submission-type">
                        <option value="online">Online</option>
                        <option value="inperson">In-person</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Online Entry Options</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="text-entry" />
                        <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="website-url" defaultChecked />
                        <label className="form-check-label" htmlFor="website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="media-recordings" />
                        <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="student-annotation" />
                        <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="file-uploads" />
                        <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="assign-to" className="form-label">Assign to</label>
                    <select className="form-select" id="assign-to">
                        <option value="everyone">Everyone</option>
                        <option value="none">None</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="due-date" className="form-label">Due</label>
                    <input type="datetime-local" className="form-control" id="due-date" defaultValue="2024-05-13T23:59" />
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="available-from" className="form-label">Available from</label>
                        <input type="datetime-local" className="form-control" id="available-from" defaultValue="2024-05-06T00:00" />
                    </div>
                    <div className="col">
                        <label htmlFor="available-until" className="form-label">Until</label>
                        <input type="datetime-local" className="form-control" id="available-until" defaultValue="2024-05-20T23:59" />
                    </div>
                </div>

                <div className="text-end mt-4">
                    <button type="button" className="btn btn-outline-secondary me-2">Cancel</button>
                    <button type="submit" className="btn btn-danger">Save</button>
                </div>
            </form>
        </div>
    );
}