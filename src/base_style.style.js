import { createGlobalStyle } from "styled-components";
import { body_font } from "./theme/font.style";
export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before{
  margin: 0px;
  padding: 0px ;
  }

  html,body,#root{
    box-sizing: border-box;
    font-size:62.5%;
    height: 100%;
    min-height: 100%;
   touch-action: manipulation;
  }
html,
  button,
  input,
  select,
  textarea,
  a,
  p {
    font-family:${body_font};
  }

  button{
      outline: none;
      border:none;
      background:none;
  }

  a{
      text-decoration: none;
  }

  ul,li {
    list-style: none;
  }
 `;
