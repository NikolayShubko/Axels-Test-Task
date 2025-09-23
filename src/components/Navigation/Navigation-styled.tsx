import { Button, Drawer, type LinkProps } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../Styles/variables";
import type { NavLinkProps } from "react-router";

const StyledDrawer = styled(Drawer)`
box-sizing: border-box;
        & .MuiDrawer-paper {
        background-color: ${colors.background};
        padding-top:12px;
        max-width: 250px;
        position:${(props) =>
          props.variant === "persistent" ? "relative" : "fixed"};
        min-height:calc(100vh - 66px);
        z-index:${(props) =>
          props.variant === "persistent" ? "auto" : "1300"};
        box-sizing: border-box;
`;

const StyledLink = styled(Button)<LinkProps<"a", NavLinkProps>>`
  color: ${colors.primary};
  text-align: left;
  justify-content: flex-start;
  &:hover {
    color: ${colors.white};
    background-color: ${colors.active};
  }
  &.active {
    background-color: ${colors.active};
    color: ${colors.white};
  }
`;

export { StyledDrawer, StyledLink };
