import { Box, Grid, MenuItem, Modal, Stack, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleModalIsOpen } from "../store/slices/modalSlice";
import styled from "styled-components";
import { colors } from "../Styles/variables";

const StyledBox = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  background-color: ${colors.background};
  border-radius: 8px;
  box-shadow: 24px;
  padding: 24px;
`;

const ModalNew = () => {
  const isOpen = useAppSelector((state) => state.modalReducer.isModalOpen);
  const dispatch = useAppDispatch();
  const categories = [
    "Transport",
    "Rent",
    "Groceries",
    "Entertainment",
    "Utilities",
    "Goods",
  ];
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        dispatch(toggleModalIsOpen());
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Grid container>
          <Grid size={12}>
            <Stack spacing={2}>
              <TextField
                select
                id="new-category"
                label="Category"
                helperText="Select expense Category"
                name="new-category"
              >
                {categories.map((category) => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </TextField>
              <TextField
                label="Amount $"
                id="new-amount"
                name="new-amount"
                helperText="Spent on this expense"
              />
              <TextField
                id="new-date"
                label="Date"
                helperText="Date"
                name="new-date"
              />
            </Stack>
          </Grid>
        </Grid>
      </StyledBox>
    </Modal>
  );
};

export default ModalNew;
