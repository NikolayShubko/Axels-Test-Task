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
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleToggle } from "../../store/slices/menuSlice";

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

const Navigation = () => {
  const mediaQuery = useMediaQuery(`(min-width:${breakpoints.L})`);
  const handleClick = () => {
    if (!mediaQuery) {
      dispatch(handleToggle());
    }
  };
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menuReducer.isOpen);
  return (
    <StyledDrawer
      anchor="left"
      open={mediaQuery ? true : isOpen}
      onClose={handleClick}
      variant={mediaQuery ? "persistent" : "temporary"}
    >
      {!mediaQuery && (
        <>
          <Toolbar>
            <Button onClick={handleClick} startIcon={<Close />} />
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
              onClick={handleClick}
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
