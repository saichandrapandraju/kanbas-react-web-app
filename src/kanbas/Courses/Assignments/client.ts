import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API_BASE = `${REMOTE_SERVER}/api`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${API_BASE}/courses/${courseId}/assignments`);
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(`${API_BASE}/assignments/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.post(
    `${API_BASE}/courses/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (aid: string, assignment: any) => {
  const response = await axios.put(
    `${API_BASE}/assignments/${aid}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (aid: string) => {
  const response = await axios.delete(`${API_BASE}/assignments/${aid}`);
  return response.data;
};