import axios from "axios";

const API_BASE = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${API_BASE}/api/courses`;
const USERS_API = `${API_BASE}/api/users`;



export const findCourseById = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const findEnrollmentsByStudent = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}/enrollments`);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(
    `${USERS_API}/${userId}/courses/${courseId}/enroll`
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(
    `${USERS_API}/${userId}/courses/${courseId}/enroll`
  );
  return response.data;
};