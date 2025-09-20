import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Outlet } from "react-router";

const StyledMain = styled("main")`
  width: 100%;
  padding: 12px;
`;
const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth={"xl"}>
        <Toolbar />
        <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          <Navigation />
          <StyledMain>
            <Outlet />
          </StyledMain>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
