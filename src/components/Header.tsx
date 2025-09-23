import { AppBar, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { breakpoints, colors } from "../Styles/variables";
import styled from "styled-components";
import Logo from "./Logo";
import StyledContainer from "./StyledContainer";

const AppBarStyled = styled(AppBar)`
  position: fixed;
  background-color: ${colors.background};
  box-sizing: border-box;
`;

const Header = ({ handleToggle }) => {
  const mediaQuery = useMediaQuery(`(max-width:${breakpoints.L})`);

  return (
    <>
      <AppBarStyled>
        <StyledContainer>
          <Toolbar>
            {mediaQuery && (
              <IconButton onClick={handleToggle}>
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
