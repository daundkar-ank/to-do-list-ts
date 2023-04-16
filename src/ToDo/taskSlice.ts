import { createSlice } from "@reduxjs/toolkit";
import { RTK } from "./Interfaces";

const initialState: RTK = {
  toDoList: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, { payload }) => {
      state.toDoList = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewTask } = taskSlice.actions;
export const LIST = (state: any) => state.toDoList;
export default taskSlice.reducer;
