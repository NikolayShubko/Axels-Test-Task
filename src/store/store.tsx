import { configureStore } from "@reduxjs/toolkit";
import { expensesApi } from "../expensesApi";
import { menuReducer } from "./slices/menuSlice";
import { filterReducer } from "./slices/filterSlice";
import { modalReducer } from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    menuReducer,
    filterReducer,
    modalReducer,
    [expensesApi.reducerPath]: expensesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expensesApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
