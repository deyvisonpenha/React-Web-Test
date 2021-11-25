import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
    background-image: url('question_background.png');
  }
`;

export default GlobalStyle;