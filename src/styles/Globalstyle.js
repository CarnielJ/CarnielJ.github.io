import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  html,
  body {
    background: #0a0a0a;
  }

  body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }

  #root {
    text-align: left;
  }
`;

export default GlobalStyle;