import type { Expense } from "../types/expenses";

export const filterExpenses = (
  expenses: Expense[],
  category: string,
  month: string
): Expense[] => {
  return expenses?.filter((expense) => {
    const matchesCategory = !category || expense.category === category;
    let matchesMonth = true;
    if (month) {
      const expenseMonth = new Date(expense.date).toISOString().slice(0, 7);
      matchesMonth = expenseMonth === month;
    }
    return matchesCategory && matchesMonth;
  });
};
