import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import styled from "styled-components";

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
            <Dashboard />
          </StyledMain>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
