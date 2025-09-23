import { List } from "@mui/material";
import { expenses } from "../mockData/expenses";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = () => {
  const sorted = [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <List>
      {sorted.slice(0, 4).map((expense) => {
        return (
          <ExpenseCard
            key={expense.id}
            id={expense.id}
            category={expense.category}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </List>
  );
};

export default ExpenseList;
