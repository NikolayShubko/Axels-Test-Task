import { ListItem, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import type { FC } from "react";
import { colors } from "../Styles/variables";

const StyledPaper = styled(Paper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

interface ExpenseCardProps {
  category: string;
  id: number;
  amount: number;
  formattedDate: string;
}

const ExpenseCard: FC<ExpenseCardProps> = ({
  id,
  category,
  amount,
  formattedDate,
}) => {
  return (
    <ListItem key={id}>
      <StyledPaper variant="elevation" elevation={5}>
        <div>
          <Typography component={"h2"}>{category}</Typography>
          <Typography component={"span"}>{formattedDate}</Typography>
        </div>
        <Typography component={"span"} color={colors.error}>
          {amount}$
        </Typography>
      </StyledPaper>
    </ListItem>
  );
};

export default ExpenseCard;
