import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
  showAllCourses: false
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollInCourse: (state, action) => {
      const { studentId, courseId } = action.payload;
      state.enrollments.push({
        _id: new Date().getTime().toString(),
        user: studentId,
        course: courseId
      });
    },
    unenrollFromCourse: (state, action) => {
      const { studentId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        enrollment => !(enrollment.user === studentId && enrollment.course === courseId)
      );
    }
  }
});

export const { 
  toggleShowAllCourses, 
  enrollInCourse, 
  unenrollFromCourse 
} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
