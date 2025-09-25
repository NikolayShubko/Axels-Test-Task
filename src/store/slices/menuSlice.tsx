import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    handleToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleToggle } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
