import { createSlice } from "@reduxjs/toolkit";

// Add this interface at the top of the file
interface Enrollment {
  user: string;
  course: string;
  _id: string;
}

const initialState = {
  enrollments: [] as Enrollment[],
  showAllCourses: false
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollInCourse: (state, action) => {
      state.enrollments.push({
        user: action.payload.studentId,
        course: action.payload.courseId,
        _id: new Date().getTime().toString()
      });
    },
    unenrollFromCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => 
          !(enrollment.user === action.payload.studentId && 
            enrollment.course === action.payload.courseId)
      );
    }
  }
});

export const { 
  setEnrollments, 
  toggleShowAllCourses, 
  enrollInCourse, 
  unenrollFromCourse 
} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;