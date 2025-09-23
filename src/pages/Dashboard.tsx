import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Chart from "../components/Chart";
import { expenses } from "../mockData/expenses";
import { Link as RouterLink } from "react-router";
import { breakpoints } from "../Styles/variables";
import { ExpenseList } from "../components";

const Dashboard = () => {
  const mediaQuery = useMediaQuery(`(max-width:${breakpoints.XL})`);
  return (
    <>
      <Typography component={"h1"}>Welcome Back!</Typography>
      <Grid container spacing={1}>
        <Grid size={mediaQuery ? 12 : 5}>
          <Box>
            <Typography component={"span"}>Latest expenses</Typography>
            <Button component={RouterLink} to={"/expenses"}>
              See All
            </Button>
          </Box>
          <ExpenseList />
        </Grid>
        <Grid size={mediaQuery ? 12 : 6}>
          <Chart expenses={expenses} />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
