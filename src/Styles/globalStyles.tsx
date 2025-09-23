import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const GlobalStyles = createGlobalStyle`
body {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background-color: ${colors.background};
  position: relative;
  margin: 0;
  height: 100vh;
  color: ${colors.primary};
  overflow-x: hidden;
}
  main{
  width:100%;
  padding:12px;
  }

#root {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  > * {
    min-width: 0;
  }
}
`;

export default GlobalStyles;
