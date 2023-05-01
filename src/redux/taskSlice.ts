import { createSlice } from "@reduxjs/toolkit";
import { RTK } from "../ToDo/Interfaces";

const initialState: RTK = {
  toDoList: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.toDoList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewTask } = taskSlice.actions;
export const LIST = (state: any) => state.task;
export default taskSlice.reducer;
