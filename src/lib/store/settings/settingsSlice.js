import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  general: null,
  categories: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setGeneral: (state, action) => {
      state.general = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setGeneral, setCategories } = settingsSlice.actions;

export default settingsSlice.reducer;
