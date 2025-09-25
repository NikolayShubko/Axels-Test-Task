import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import { useGetExpensesListQuery } from "../expensesApi";
import { useAppSelector } from "../hooks";
import { filterExpenses } from "../utils/filtering";
import Filters from "./Filters";
import { colors } from "../Styles/variables";

const StyledTableContainer = styled(TableContainer)`
  min-height: 50%;
`;

const StyledTableCell = styled(TableCell)`
  color: ${colors.error};
`;
const ExpensesTable = () => {
  const { data: expenses, isLoading } = useGetExpensesListQuery();

  const category = useAppSelector((state) => state.filterReducer.category);
  const dateFilter = useAppSelector((state) => state.filterReducer.date);
  const categories = [...new Set(expenses?.map((item) => item.category))];
  const filtered = expenses && filterExpenses(expenses, category, dateFilter);
  const totalAmount =
    filtered?.reduce((sum, expense) => sum + expense.amount, 0) ?? 0;
  return (
    <>
      <Filters categories={categories} />

      <StyledTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              Array.from(new Array(3)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {(filtered || expenses)?.map(
                  ({ id, category, amount, formattedDate }) => {
                    return (
                      <TableRow key={id}>
                        <TableCell>{category}</TableCell>

                        <TableCell>{formattedDate}</TableCell>
                        <StyledTableCell>{amount}$</StyledTableCell>
                      </TableRow>
                    );
                  }
                )}
                {filtered && filtered.length > 0 && (
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell />
                    <StyledTableCell>{totalAmount}$</StyledTableCell>
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};

export default ExpensesTable;
