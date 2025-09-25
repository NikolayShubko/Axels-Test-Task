import { LineChart } from "@mui/x-charts";
import { breakpoints, colors } from "../Styles/variables";
import styled from "styled-components";
import { useGetExpensesListSortedQuery } from "../expensesApi";

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

const Chart = () => {
  const { data: expenses, isLoading } = useGetExpensesListSortedQuery();
  const dataset: ChartData[] = Object.values(
    (expenses ? [...expenses] : [])
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .reduce((acc, item) => {
        const date = new Date(item.date);
        const monthKey = `${date.getMonth() + 1}-${date.getFullYear()}`;
        if (!acc[monthKey]) {
          acc[monthKey] = {
            month: monthKey,
            total: 0,
          };
        }
        acc[monthKey].total += item.amount;
        return acc;
      }, {} as Record<string, { month: string; total: number }>)
  );
  return (
    <>
      <StyledLineChart
        loading={isLoading}
        colors={[colors.active]}
        dataset={dataset}
        xAxis={[{ dataKey: "month", scaleType: "band" }]}
        series={[{ dataKey: "total", label: "Total Expenses" }]}
      />
    </>
  );
};

export default Chart;
