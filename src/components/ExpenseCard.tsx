import { ListItem, Paper, Typography } from "@mui/material";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

const ExpenseCard = ({ id, category, amount, date }) => {
  const dateLocale = new Date(date).toLocaleDateString();
  return (
    <ListItem key={id}>
      <StyledPaper variant="elevation" elevation={5}>
        <div>
          <Typography component={"h2"}>{category}</Typography>
          <Typography component={"span"}>{dateLocale}</Typography>
        </div>
        <Typography component={"span"} color="error">
          {amount}$
        </Typography>
      </StyledPaper>
    </ListItem>
  );
};

export default ExpenseCard;
