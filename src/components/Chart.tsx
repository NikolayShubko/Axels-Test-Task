import { LineChart } from "@mui/x-charts";
import { breakpoints, colors } from "../Styles/variables";
import styled from "styled-components";

interface ChartData {
  month: string;
  total: number;
  [key: string]: string | number;
}

const StyledLineChart = styled(LineChart)`
  width: 600px;
  height: 300px;
  @media (max-width: ${breakpoints.M}) {
    width: 100%;
  }
`;

const Chart = ({ expenses }) => {
  const dataset: ChartData[] = Object.values(
    expenses.reduce((acc, item) => {
      acc[item.month] = acc[item.month] || { month: item.month, total: 0 };
      acc[item.month].total += item.amount;
      return acc;
    }, {} as Record<string, { month: string; total: number }>)
  );
  return (
    <>
      <StyledLineChart
        colors={[colors.active]}
        dataset={dataset}
        xAxis={[{ dataKey: "month", scaleType: "band" }]}
        series={[{ dataKey: "total", label: "Total Expenses" }]}
      />
    </>
  );
};

export default Chart;
