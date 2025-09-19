import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { expenses } from "../../mockData/expenses";

const Expenses = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => {
            return (
              <TableRow key={expense.id}>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>{expense.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Expenses;
