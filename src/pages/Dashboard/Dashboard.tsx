import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Chart from "../../components/Chart/Chart";
import { expenses } from "../../mockData/expenses";

const Dashboard = () => {
  const sorted = [...expenses].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <>
      <Typography component={"h1"}>Welcome Back!</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography component={"span"}>Latest expenses</Typography>
            <Button>See All</Button>
          </Box>
          <List
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {sorted.slice(0, 4).map((expense) => {
              return (
                <ListItem
                  key={expense.id}
                  sx={{
                    bgcolor: "white",
                    borderRadius: "4px",
                    margin: 0,
                    minWidth: "240px",
                    border: "1px solid #124170",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div>
                      <Typography component={"h2"}>
                        {expense.category}
                      </Typography>
                      <Typography component={"span"}>{expense.date}</Typography>
                    </div>
                    <Typography component={"span"} color="error">
                      {expense.amount}$
                    </Typography>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Chart expenses={expenses} />
      </Box>
    </>
  );
};

export default Dashboard;
