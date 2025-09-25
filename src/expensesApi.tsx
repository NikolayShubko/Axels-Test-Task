import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Expense } from "./types/expenses";

export const expensesApi = createApi({
  reducerPath: "expensesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://68d3ac20214be68f8c66bcfe.mockapi.io/expenses/",
  }),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({
    getExpensesList: builder.query<Expense[], void>({
      query: () => "expenseList",
      transformResponse(response: Expense[]) {
        const transformedData = response.map((expense) => ({
          ...expense,
          formattedDate: new Date(expense.date).toLocaleDateString(),
        }));
        return transformedData;
      },
      providesTags: [{ type: "Expenses", id: "List" }],
    }),
    getExpensesListSorted: builder.query<Expense[], void>({
      query: () => "expenseList",
      transformResponse: (response: Expense[]) => {
        return [...response]
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((expense) => ({
            ...expense,
            formattedDate: new Date(expense.date).toLocaleDateString(),
          }));
      },
      providesTags: [{ type: "Expenses", id: "List" }],
    }),
  }),
});

export const { useGetExpensesListQuery, useGetExpensesListSortedQuery } =
  expensesApi;
