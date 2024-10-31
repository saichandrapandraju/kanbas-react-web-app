// src/Kanbas/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../kanbas/Courses/Modules/reducer";
import accountReducer from "../kanbas/Account/reducer";
import assignmentsReducer from "../kanbas/Courses/Assignments/reducer";
import enrollmentsReducer from "../kanbas/Enrollments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer
  }
});

export default store;