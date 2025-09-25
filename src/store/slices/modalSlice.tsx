import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    toggleModalIsOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModalIsOpen } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
