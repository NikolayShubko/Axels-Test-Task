import {
  Box,
  Button,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  resetFilters,
  setCategory,
  setDate,
} from "../store/slices/filterSlice";
import { Add, Close } from "@mui/icons-material";
import type { FC } from "react";
import { breakpoints, colors } from "../Styles/variables";
import styled from "styled-components";
import { toggleModalIsOpen } from "../store/slices/modalSlice";

type FilterProps = {
  categories: string[];
};

const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  @media (max-width: ${breakpoints.M}) {
    flex-direction: column;
    align-items: stretch;
  }
`;
const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props.variant === "outlined" ? colors.error : colors.active};
  color: ${colors.white};
`;

const Filters: FC<FilterProps> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.filterReducer.category);
  const dateFilter = useAppSelector((state) => state.filterReducer.date);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <>
      <StyledBox>
        <InputLabel id="category" htmlFor="category">
          Category
        </InputLabel>
        <Select
          labelId="category"
          id="category"
          value={category}
          label="Category"
          onChange={handleChange}
          name="filter-categories"
          sx={{ minWidth: "140px", maxHeight: "40px" }}
        >
          {categories.map((category) => (
            <MenuItem value={category}>{category.toUpperCase()}</MenuItem>
          ))}
        </Select>
        <InputLabel htmlFor="month">Month</InputLabel>
        <InputBase
          type="month"
          id="month"
          value={dateFilter}
          onChange={(e) => dispatch(setDate(e.target.value))}
          name="filter-month"
        />
        {(category || dateFilter) && (
          <StyledButton
            startIcon={<Close />}
            onClick={() => dispatch(resetFilters())}
            variant="outlined"
          >
            Reset Filters
          </StyledButton>
        )}
        <StyledButton
          startIcon={<Add />}
          onClick={() => dispatch(toggleModalIsOpen())}
          variant="contained"
        >
          Add new expense
        </StyledButton>
      </StyledBox>
    </>
  );
};

export default Filters;
