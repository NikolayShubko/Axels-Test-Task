import { AppBar, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { breakpoints, colors } from "../Styles/variables";
import styled from "styled-components";
import Logo from "./Logo";
import StyledContainer from "./StyledContainer";
import { useAppDispatch } from "../hooks";
import { handleToggle } from "../store/slices/menuSlice";

const AppBarStyled = styled(AppBar)`
  position: fixed;
  background-color: ${colors.background};
  box-sizing: border-box;
`;

const Header = () => {
  const mediaQuery = useMediaQuery(`(max-width:${breakpoints.L})`);
  const dispatch = useAppDispatch();
  return (
    <>
      <AppBarStyled>
        <StyledContainer>
          <Toolbar>
            {mediaQuery && (
              <IconButton onClick={() => dispatch(handleToggle())}>
                <Menu />
              </IconButton>
            )}
            <Logo />
          </Toolbar>
        </StyledContainer>
      </AppBarStyled>
    </>
  );
};

export default Header;
