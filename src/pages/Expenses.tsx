import { Grid } from "@mui/material";
import { ExpensesTable, ModalNew } from "../components";

const Expenses = () => {
  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <ModalNew />
        <ExpensesTable />
      </Grid>
    </Grid>
  );
};

export default Expenses;
