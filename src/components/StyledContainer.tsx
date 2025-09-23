import { Container } from "@mui/material";

import styled from "styled-components";
import { breakpoints } from "../Styles/variables";
import type { FC } from "react";
const StyledMUIContainer = styled(Container)`
  max-width: ${breakpoints.XL};
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

interface ContainerProps {
  children: React.ReactNode;
}

const StyledContainer: FC<ContainerProps> = ({ children }) => {
  return <StyledMUIContainer>{children}</StyledMUIContainer>;
};

export default StyledContainer;
