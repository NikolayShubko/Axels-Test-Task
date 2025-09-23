import { CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router";
import { Header, Navigation, StyledContainer } from "../components";
import GlobalStyles from "../Styles/globalStyles";
import { useState } from "react";

const Layout = () => {
  const [open, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!open);
  };
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <Header handleToggle={handleToggle} />
      <Toolbar />
      <StyledContainer>
        <Navigation open={open} handleToggle={handleToggle} />
        <main>
          <Outlet />
        </main>
      </StyledContainer>
    </>
  );
};

export default Layout;
