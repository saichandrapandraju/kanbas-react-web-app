import React, { useState, useEffect } from "react";
import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [module, setModule] = useState({
        id: "MD101",
        name: "Introduction to Web Development",
        description: "Learn the basics of web development",
        course: "CS5610"
    });

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const fetchData = async () => {
        try {
            const [moduleResponse, assignmentResponse] = await Promise.all([
                axios.get(`${REMOTE_SERVER}/lab5/module`),
                axios.get(`${REMOTE_SERVER}/lab5/assignment`)
            ]);
            
            setModule(moduleResponse.data);
            setAssignment(assignmentResponse.data);
        } catch (error) {
            console.error("Error fetching initial data:", error);
        } finally {
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    // Functions to update module
    const updateModuleName = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                `${REMOTE_SERVER}/lab5/module/name/${module.name}`
            );
            alert("updayed")
            setModule(response.data);
        } catch (error) {
            console.error("Error updating module name:", error);
        }
    };

    const updateModuleDescription = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                `${REMOTE_SERVER}/lab5/module/description/${module.description}`
            );
            setModule(response.data);
        } catch (error) {
            console.error("Error updating module description:", error);
        }
    };

    // Functions to update assignment
    const updateAssignmentScore = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                `${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`
            );
            setAssignment(response.data);
        } catch (error) {
            console.error("Error updating assignment score:", error);
        }
    };

    const updateAssignmentCompleted = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                `${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`
            );
            setAssignment(response.data);
        } catch (error) {
            console.error("Error updating assignment completion:", error);
        }
    };

    // Functions to get data
    const getModule = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${REMOTE_SERVER}/lab5/module`);
            setModule(response.data);
        } catch (error) {
            console.error("Error fetching module:", error);
        }
    };

    const getModuleName = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${REMOTE_SERVER}/lab5/module/name`);
            setModule({ ...module, name: response.data });
        } catch (error) {
            console.error("Error fetching module name:", error);
        }
    };

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            
            {/* Module Section */}
            <h4>Module</h4>
            <div className="list-group">
                <a
                    id="wd-get-module"
                    className="list-group-item"
                    href={`${REMOTE_SERVER}/lab5/module`}
                    onClick={getModule}
                >
                    Get Module
                </a>
                <a
                    id="wd-get-module-name"
                    className="list-group-item"
                    href={`${REMOTE_SERVER}/lab5/module/name`}
                    onClick={getModuleName}
                >
                    Get Module Name
                </a>
            </div>

            <h4>Edit Module</h4>
            <input
                type="text"
                className="form-control mb-2"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a
                className="btn btn-primary mb-2"
                href="#"
                onClick={updateModuleName}
            >
                Update Module Name
            </a>

            <textarea
                className="form-control mb-2"
                value={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <a
                className="btn btn-primary mb-2"
                href="#"
                onClick={updateModuleDescription}
            >
                Update Module Description
            </a>

            {/* Assignment Section */}
            <h4>Edit Assignment</h4>
            <input
                type="number"
                className="form-control mb-2"
                value={assignment.score}
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
            />
            <a
                className="btn btn-success mb-2"
                href="#"
                onClick={updateAssignmentScore}
            >
                Update Score
            </a>

            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({
                        ...assignment,
                        completed: e.target.checked
                    })}
                />
                <label className="form-check-label">
                    Completed
                </label>
            </div>
            <a
                className="btn btn-warning"
                href="#"
                onClick={updateAssignmentCompleted}
            >
                Update Completed Status
            </a>

            {/* Display current state */}
            <h4 className="mt-4">Current State</h4>
            <pre>
                Module: {JSON.stringify(module, null, 2)}
            </pre>
            <pre>
                Assignment: {JSON.stringify(assignment, null, 2)}
            </pre>
        </div>
    );
}