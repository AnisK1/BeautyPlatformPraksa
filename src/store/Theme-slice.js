import { createSlice } from "@reduxjs/toolkit";
const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    themeValue: true,
  },
  reducers: {
    dark: (state, action) => {
      state.themeValue = action.payload;
    },
  },
});

export const { dark } = ThemeSlice.actions;

export default ThemeSlice.reducer;
