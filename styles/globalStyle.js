import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url("https://rsms.me/inter/inter.css");

html {
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
  background-color: #fff;
  overscroll-behavior: none;
  overflow-x: hidden;
}



`;
