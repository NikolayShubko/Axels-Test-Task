import { Grid } from "@mui/material";
import { ExpensesTable } from "../components";

const Expenses = () => {
  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <ExpensesTable />
      </Grid>
    </Grid>
  );
};

export default Expenses;
