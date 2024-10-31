import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/counterSlice";
import addReducer from "../Lab4/ReduxExamples/addSlice";
import todosReducer from "../Lab4/ReduxExamples/todoSlice";

const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer
    }
});

export default store;