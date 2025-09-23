import {
  AccountCircle,
  Close,
  Dashboard,
  ReceiptLong,
} from "@mui/icons-material";
import {
  Button,
  Divider,
  ListItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

import { NavLink } from "react-router";
import { breakpoints } from "../../Styles/variables";
import { StyledDrawer, StyledLink } from "./Navigation-styled";

const links = [
  {
    icon: <Dashboard />,
    route: "Dashboard",
    path: "/",
  },
  {
    icon: <ReceiptLong />,
    route: "Expenses",
    path: "/expenses",
  },
  { icon: <AccountCircle />, route: "Account", path: "/settings" },
];

const Navigation = ({ open, handleToggle }) => {
  const mediaQuery = useMediaQuery(`(min-width:${breakpoints.L})`);
  const handleLinkClick = () => {
    if (!mediaQuery) {
      handleToggle();
    }
  };
  return (
    <StyledDrawer
      anchor="left"
      open={mediaQuery ? true : open}
      onClose={handleToggle}
      variant={mediaQuery ? "persistent" : "temporary"}
    >
      {!mediaQuery && (
        <>
          <Toolbar>
            <Button onClick={handleToggle} startIcon={<Close />} />
          </Toolbar>
          <Divider />
        </>
      )}
      {links.map((link) => {
        return (
          <ListItem key={link.route}>
            <StyledLink
              to={`${link.path.toLowerCase()}`}
              component={NavLink}
              onClick={handleLinkClick}
              startIcon={link.icon}
              fullWidth
            >
              {link.route}
            </StyledLink>
          </ListItem>
        );
      })}
    </StyledDrawer>
  );
};

export default Navigation;
