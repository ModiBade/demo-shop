import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: "chetori",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.addresses = action.payload;
    },
  },
});

export const { setAddress } = accountSlice.actions;

export default accountSlice.reducer;
