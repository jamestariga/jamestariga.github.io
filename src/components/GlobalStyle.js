import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;500&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(270deg, #f69ec4, #f9dd94);
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;

    @media (max-width: 450px) {
      max-width: 100%;
      overflow-x: hidden;
    }
  }
`

export default GlobalStyle