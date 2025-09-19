import { AppBar, Container, Toolbar } from "@mui/material";

import Logo from "../Logo/Logo";
import { AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#DDF4E7",
          borderBottom: "1px solid #124170",
          boxShadow: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Logo />
            <AccountCircle sx={{ fontSize: "48px" }} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
