import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "login",
  initialState: { tokenValue: "" },
  reducers: {
    addTodo: (state, action) => {
      state.tokenValue = action.payload;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
