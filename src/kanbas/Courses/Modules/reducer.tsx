import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Array<{
    id: string;
    name: string;
    description: string;
    module: string;
  }>;
}

const initialState = {
  modules: [] as Module[],
  module: { _id: "", name: "New Module", description: "", course: "", lessons: [] } as Module
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        ...state.modules,
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
          lessons: []
        }
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module: any) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map(module =>
        module._id === action.payload._id ? action.payload : module
      );
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    },

  }
});

export const { addModule, deleteModule, updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;