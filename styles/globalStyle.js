import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  @import url("https://rsms.me/inter/inter.css");
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

::selection {
  background: #051574;
  color: white;
}

body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  overscroll-behavior: none;
  overflow-x: hidden;
  transition: all 200ms;
}



`;
