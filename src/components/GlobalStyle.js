import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background: linear-gradient(270deg, #f69ec4, #f9dd94); */
    background: linear-gradient(270deg, #243b55, #141E30);
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;

    @media (max-width: 450px) {
      max-width: 100%;
      overflow-x: hidden;
    }
  }
`

export default GlobalStyle