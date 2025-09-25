import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  date: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    resetFilters: (state) => {
      state.category = "";
      state.date = "";
    },
  },
});
export const { setCategory, setDate, resetFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
