import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const Chart = ({ expenses }) => {
  const dataset = Object.values(
    expenses.reduce((acc, item) => {
      acc[item.month] = acc[item.month] || { month: item.month, total: 0 };
      acc[item.month].total += item.amount;
      return acc;
    }, {} as Record<string, { month: string; total: number }>)
  );
  return (
    <Box maxWidth={"1000px"}>
      <LineChart
        width={800}
        height={300}
        dataset={dataset}
        xAxis={[{ dataKey: "month", scaleType: "band" }]}
        series={[{ dataKey: "total", label: "Total Expenses" }]}
      />
    </Box>
  );
};

export default Chart;
