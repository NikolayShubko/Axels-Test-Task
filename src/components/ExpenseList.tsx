import { List, Skeleton } from "@mui/material";
import ExpenseCard from "./ExpenseCard";
import { useGetExpensesListSortedQuery } from "../expensesApi";

const ExpenseList = () => {
  const { data: expenses, isLoading } = useGetExpensesListSortedQuery();

  return (
    <List>
      {isLoading ? (
        <Skeleton
          variant="rounded"
          width={"100%"}
          height={72}
          animation="wave"
        />
      ) : (
        expenses?.slice(0, 4).map((expense) => {
          return (
            <ExpenseCard
              key={expense.id}
              id={expense.id}
              category={expense.category}
              amount={expense.amount}
              formattedDate={expense.formattedDate}
            />
          );
        })
      )}
    </List>
  );
};

export default ExpenseList;
