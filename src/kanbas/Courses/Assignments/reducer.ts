import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments,
  assignment: {
    _id: "",
    title: "New Assignment",
    course: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: ""
  }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [
        ...state.assignments,
        {
          ...action.payload,
          _id: new Date().getTime().toString()
        }
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map(assignment =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    }
  }
});

export const { 
  addAssignment, 
  deleteAssignment, 
  updateAssignment, 
  setAssignment,
  setAssignments
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
